import lunr from 'lunr';
import { getAllPosts, type PostMetadata } from './mdx';

let searchIndex: lunr.Index | null = null;
let posts: PostMetadata[] = [];

// Build search index
export async function buildSearchIndex() {
    if (searchIndex) return { index: searchIndex, posts };

    posts = await getAllPosts();

    searchIndex = lunr(function () {
        this.ref('slug');
        this.field('title', { boost: 10 });
        this.field('excerpt', { boost: 5 });
        this.field('category', { boost: 3 });
        this.field('tags', { boost: 2 });
        this.field('author');

        posts.forEach((post) => {
            this.add({
                slug: post.slug,
                title: post.title,
                excerpt: post.excerpt,
                category: post.category,
                tags: post.tags.join(' '),
                author: post.author,
            });
        });
    });

    return { index: searchIndex, posts };
}

// Search posts
export async function searchPosts(query: string): Promise<PostMetadata[]> {
    if (!searchIndex) {
        await buildSearchIndex();
    }

    if (!searchIndex || !query.trim()) {
        return [];
    }

    try {
        const results = searchIndex.search(query);
        return results.map((result) => {
            const post = posts.find((p) => p.slug === result.ref);
            return post!;
        }).filter(Boolean);
    } catch (error) {
        // Fallback to simple text search if lunr query fails
        const lowerQuery = query.toLowerCase();
        return posts.filter(
            (post) =>
                post.title.toLowerCase().includes(lowerQuery) ||
                post.excerpt.toLowerCase().includes(lowerQuery) ||
                post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
        );
    }
}
