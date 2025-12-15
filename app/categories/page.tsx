import Link from 'next/link';
import { Tag, BookOpen, Sparkles, Folder } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { getAllCategories, getAllPosts } from '@/lib/mdx';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
    title: 'Catégories | #221 Blog',
    description: 'Explorez les articles par catégorie - réflexions, société, philosophie et plus',
};

export default async function CategoriesPage() {
    const categories = await getAllCategories();
    const allPosts = await getAllPosts();

    // Get sample posts for each category
    const getCategoryPosts = (categoryName: string) => {
        return allPosts
            .filter(post => post.category === categoryName)
            .slice(0, 3);
    };

    // Emoji mapping for categories
    const getCategoryEmoji = (categoryName: string) => {
        const emojiMap: Record<string, string> = {
            'Réflexions': '💭',
            'Société': '🌍',
            'Philosophie': '🧠',
            'Humanité': '❤️',
            'Culture': '🎨',
            'Jeunesse': '🚀',
        };
        return emojiMap[categoryName] || '📚';
    };

    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background */}
                <div className="fixed inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5 -z-10" />
                <ParticleBackground colors={['#fbbf24', '#7c3aed', '#f472b6']} density={65} speed={0.35} />

                {/* Floating Emojis */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <span className="absolute top-32 left-[10%] text-4xl animate-float" style={{ animationDuration: '4s' }}>📂</span>
                    <span className="absolute top-48 right-[15%] text-3xl animate-float-gentle" style={{ animationDuration: '5s' }}>🏷️</span>
                    <span className="absolute top-[60%] left-[20%] text-3xl animate-float" style={{ animationDuration: '4.5s' }}>✨</span>
                    <span className="absolute top-[40%] right-[20%] text-2xl animate-float-gentle" style={{ animationDuration: '5.5s' }}>🎯</span>
                </div>

                <div className="container mx-auto max-w-6xl relative">
                    {/* Page Header */}
                    <div className="mb-16 text-center animate-fade-in">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <Folder className="w-12 h-12 text-primary animate-float-gentle" />
                            <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                Catégories
                            </h1>
                            <Tag className="w-12 h-12 text-accent animate-float-gentle" style={{ animationDelay: '0.3s' }} />
                        </div>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                            Explorez les articles par thématique et découvrez mes réflexions sur différents sujets
                        </p>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {categories.map((category, index) => {
                            const categoryPosts = getCategoryPosts(category.name);
                            const emoji = getCategoryEmoji(category.name);

                            return (
                                <Link
                                    key={category.name}
                                    href={`/blog?category=${category.name.toLowerCase()}`}
                                    className="group animate-fade-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <Card className="glass-effect border border-primary/10 hover-lift transition-luxury h-full p-6 hover:border-primary/30 hover:glow-gold relative overflow-hidden">
                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer-gold" />
                                        </div>

                                        <div className="relative z-10">
                                            {/* Category Header */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-4xl">{emoji}</span>
                                                    <div>
                                                        <h2 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all">
                                                            {category.name}
                                                        </h2>
                                                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                                                            <BookOpen className="w-3.5 h-3.5" />
                                                            <span>
                                                                {category.count} {category.count > 1 ? 'articles' : 'article'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30 font-bold"
                                                >
                                                    {category.count}
                                                </Badge>
                                            </div>

                                            {/* Sample Articles */}
                                            {categoryPosts.length > 0 && (
                                                <div className="space-y-2 pt-4 border-t border-primary/10">
                                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                                        <Sparkles className="w-3 h-3" />
                                                        Articles récents
                                                    </p>
                                                    {categoryPosts.map((post) => (
                                                        <div key={post.slug} className="text-sm">
                                                            <p className="text-foreground/70 line-clamp-1 group-hover:text-primary/90 transition-colors flex items-start gap-2">
                                                                <span className="text-primary mt-1">•</span>
                                                                <span className="flex-1">{post.title}</span>
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* View All Link */}
                                            <div className="mt-6 pt-4 border-t border-primary/10">
                                                <span className="text-sm bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                                    Voir tous les articles
                                                    <span className="text-primary">→</span>
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>

                    {/* All Articles Link - Premium */}
                    <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-3 px-10 py-4 glass-effect border border-primary/20 rounded-xl hover:border-primary/40 hover:glow-gold transition-all group"
                        >
                            <BookOpen className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Voir tous les articles</span>
                            <Sparkles className="w-4 h-4 text-accent animate-float-gentle" />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
