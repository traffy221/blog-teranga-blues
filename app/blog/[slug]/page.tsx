import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ShareButtons from '@/components/ShareButtons';
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from '@/lib/mdx';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Comments from '@/components/Comments';

// MDX Plugins
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

// Generate static params for all posts
export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.title} | #221 Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = await getRelatedPosts(slug);

    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 px-6">
                <article className="container mx-auto max-w-3xl">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm">Retour aux articles</span>
                    </Link>

                    {/* Article Header */}
                    <header className="mb-12">
                        {/* Category */}
                        <div className="mb-6">
                            <Badge variant="secondary" className="bg-accent/50 text-foreground border-0 font-normal px-4 py-1.5">
                                {post.category}
                            </Badge>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-8 text-foreground leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border/50">
                            <div className="flex items-center space-x-2">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <time>
                                    {new Date(post.date).toLocaleDateString('fr-FR', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </time>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readingTime}</span>
                            </div>
                        </div>

                        {/* Tags */}
                        {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-6">
                                <Tag className="w-4 h-4 text-muted-foreground" />
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs text-primary/70 bg-primary/5 px-3 py-1 rounded-full"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </header>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none mb-16">
                        <MDXRemote
                            source={post.content}
                            options={{
                                mdxOptions: {
                                    remarkPlugins: [remarkGfm],
                                    rehypePlugins: [
                                        rehypeHighlight,
                                        rehypeSlug,
                                        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                                    ],
                                },
                            }}
                        />
                    </div>

                    {/* Share Section - Premium */}
                    <Card className="glass-effect border border-primary/10 rounded-2xl p-8 mb-16">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    Cet article vous a plu ? 💫
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Partagez-le avec votre réseau et participez au dialogue !
                                </p>
                            </div>
                            <ShareButtons title={post.title} url={`/blog/${slug}`} excerpt={post.excerpt} />
                        </div>
                    </Card>

                    {/* Comments Section */}
                    <Comments slug={slug} />

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <section className="mt-20">
                            <h2 className="text-3xl font-serif font-semibold mb-10 text-foreground">
                                Articles Similaires
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.slug}
                                        href={`/blog/${relatedPost.slug}`}
                                        className="group"
                                    >
                                        <Card className="bg-card border border-border hover-lift transition-smooth p-6 h-full">
                                            <Badge variant="secondary" className="bg-accent/50 border-0 font-normal mb-3">
                                                {relatedPost.category}
                                            </Badge>
                                            <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {relatedPost.excerpt}
                                            </p>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </article>
            </main>
            <Footer />
        </>
    );
}
