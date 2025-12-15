import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, Sparkles } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { getAllPosts, getAllCategories } from '@/lib/mdx';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export const metadata = {
    title: 'Articles | #221 Blog',
    description: 'Découvrez mes réflexions sur la vie, la société, et les questions qui nous touchent',
};

export default async function BlogPage() {
    const posts = await getAllPosts();
    const categories = await getAllCategories();

    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background */}
                <div className="fixed inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5 -z-10" />
                <ParticleBackground colors={['#fbbf24', '#7c3aed', '#f472b6']} density={70} speed={0.35} />

                {/* Floating Emojis */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <span className="absolute top-32 left-[8%] text-4xl animate-float" style={{ animationDuration: '4s' }}>📚</span>
                    <span className="absolute top-48 right-[12%] text-3xl animate-float-gentle" style={{ animationDuration: '5s' }}>✍️</span>
                    <span className="absolute top-[60%] left-[15%] text-3xl animate-float" style={{ animationDuration: '4.5s' }}>💡</span>
                    <span className="absolute top-[40%] right-[18%] text-2xl animate-float-gentle" style={{ animationDuration: '5.5s' }}>🚀</span>
                </div>

                <div className="container mx-auto max-w-5xl relative">
                    {/* Page Header */}
                    <div className="mb-16 text-center animate-fade-in">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <span className="text-4xl animate-float-gentle">📖</span>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                Articles
                            </h1>
                            <span className="text-4xl animate-float-gentle" style={{ animationDelay: '0.3s' }}>✨</span>
                        </div>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                            Réflexions, pensées et analyses sur la vie et la société
                        </p>
                    </div>

                    {/* Categories - Premium Pills */}
                    <div className="mb-16 flex flex-wrap gap-3 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <Badge
                            variant="default"
                            className="glass-effect border border-primary/30 px-6 py-2.5 cursor-pointer hover:border-primary/50 hover:glow-gold transition-all font-medium text-primary bg-gradient-to-r from-primary/20 to-accent/20"
                        >
                            <BookOpen className="w-4 h-4 mr-2 inline" />
                            Tous les articles ({posts.length})
                        </Badge>
                        {categories.map((category, index) => (
                            <Link key={category.name} href={`/blog?category=${category.name.toLowerCase()}`}>
                                <Badge
                                    variant="secondary"
                                    className="glass-effect border border-secondary/20 px-6 py-2.5 cursor-pointer hover:border-secondary/40 hover:glow-purple transition-all font-medium text-foreground/80 hover:text-primary"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {category.name} ({category.count})
                                </Badge>
                            </Link>
                        ))}
                    </div>

                    {/* Posts List */}
                    <div className="space-y-8">
                        {posts.map((post, index) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group block animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <Card className="glass-effect border border-primary/10 hover-lift transition-luxury p-8 hover:border-primary/30 relative overflow-hidden group-hover:glow-gold">
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer-gold" />
                                    </div>

                                    <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                        {/* Content */}
                                        <div className="flex-1">
                                            {/* Category & Meta */}
                                            <div className="flex items-center gap-4 mb-4">
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-gradient-to-r from-accent/30 to-secondary/30 border border-accent/30 font-medium"
                                                >
                                                    {post.category}
                                                </Badge>
                                                <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4" />
                                                    {post.readingTime}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.slice(0, 4).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs text-primary/70 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 hover:border-primary/40 transition-colors"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Date */}
                                        <div className="md:text-right">
                                            <time className="text-sm text-muted-foreground">
                                                {new Date(post.date).toLocaleDateString('fr-FR', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </time>
                                        </div>
                                    </div>

                                    {/* Read More - Enhanced */}
                                    <div className="relative z-10 flex items-center gap-2 text-primary mt-6 opacity-0 group-hover:opacity-100 transition-all">
                                        <Sparkles className="w-4 h-4 animate-float-gentle" />
                                        <span className="text-sm font-semibold">Lire l'article</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
