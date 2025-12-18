import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMetadata {
    slug: string;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    category: string;
    tags: string[];
    coverImage?: string;
    readingTime: string;
}

export interface Post extends PostMetadata {
    content: string;
}

// Get all post slugs
export function getAllPostSlugs(): string[] {
    try {
        const fileNames = fs.readdirSync(postsDirectory);
        return fileNames
            .filter((fileName) => fileName.endsWith('.mdx'))
            .map((fileName) => fileName.replace(/\.mdx$/, ''));
    } catch (error) {
        return [];
    }
}

// Get post data by slug
// Get post data by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        // Try exact match first
        let fullPath = path.join(postsDirectory, `${slug}.mdx`);

        // If file doesn't exist, try verifying if the slug is encoded or needs normalization
        if (!fs.existsSync(fullPath)) {
            // Decode URL if it was passed encoded
            const decodedSlug = decodeURIComponent(slug);
            fullPath = path.join(postsDirectory, `${decodedSlug}.mdx`);

            // If still doesn't exist, try the "safe" slugified version (handling accents)
            if (!fs.existsSync(fullPath)) {
                const { slugify } = await import('./utils');
                const safeSlug = slugify(decodedSlug);
                fullPath = path.join(postsDirectory, `${safeSlug}.mdx`);
            }
        }

        // If even the safe version doesn't exist, checking if it was double-encoded or similar edge case
        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const stats = readingTime(content);

        return {
            slug,
            title: data.title || 'Untitled',
            date: data.date || new Date().toISOString(),
            author: data.author || 'Traffy',
            excerpt: data.excerpt || content.substring(0, 160) + '...',
            category: data.category || 'Uncategorized',
            tags: data.tags || [],
            coverImage: data.coverImage || '',
            readingTime: stats.text,
            content,
        };
    } catch (error) {
        return null; // Return null if file not found
    }
}

// Get all posts sorted by date
export async function getAllPosts(): Promise<PostMetadata[]> {
    const slugs = getAllPostSlugs();
    const posts = await Promise.all(
        slugs.map(async (slug) => {
            const post = await getPostBySlug(slug);
            if (!post) return null;
            const { content, ...metadata } = post;
            return metadata;
        })
    );

    return posts
        .filter((post): post is PostMetadata => post !== null)
        .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

// Get posts by category
export async function getPostsByCategory(category: string): Promise<PostMetadata[]> {
    const allPosts = await getAllPosts();
    return allPosts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
    );
}

// Get all categories with post count
export async function getAllCategories(): Promise<{ name: string; count: number }[]> {
    const allPosts = await getAllPosts();
    const categoryMap = new Map<string, number>();

    allPosts.forEach((post) => {
        const count = categoryMap.get(post.category) || 0;
        categoryMap.set(post.category, count + 1);
    });

    return Array.from(categoryMap.entries())
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);
}

// Get related posts (same category, exclude current post)
export async function getRelatedPosts(slug: string, limit = 3): Promise<PostMetadata[]> {
    const currentPost = await getPostBySlug(slug);
    if (!currentPost) return [];

    const posts = await getPostsByCategory(currentPost.category);
    return posts.filter((post) => post.slug !== slug).slice(0, limit);
}
