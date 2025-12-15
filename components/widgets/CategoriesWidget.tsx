import Link from 'next/link';
import { Folder, ChevronRight } from 'lucide-react';
import { getAllPosts } from '@/lib/mdx';

export default async function CategoriesWidget() {
    const allPosts = await getAllPosts();

    // Count posts by category
    const categoryCounts: Record<string, number> = {};
    allPosts.forEach(post => {
        const category = post.category || 'Non classé';
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });

    // Convert to array and sort by count
    const categories = Object.entries(categoryCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);

    // Gradient colors for categories - luxury themed
    const gradientColors = [
        'from-primary via-accent to-primary',
        'from-secondary via-primary to-secondary',
        'from-accent via-secondary to-accent',
        'from-primary via-secondary to-accent',
        'from-secondary via-accent to-primary',
    ];

    return (
        <div className="glass-effect rounded-xl border border-accent/20 hover:border-accent/40 transition-all p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Folder className="w-5 h-5 text-accent animate-float-gentle" />
                <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                    Catégories
                </span>
            </h3>

            <div className="space-y-2">
                {categories.map((category, index) => (
                    <Link
                        key={category.name}
                        href={`/categories#${category.name.toLowerCase()}`}
                        className="group flex items-center justify-between p-3 rounded-lg glass-effect border border-primary/10 hover:border-primary/40 hover:glow-gold transition-all"
                    >
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                                {category.name}
                            </span>
                            <ChevronRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <span className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${gradientColors[index % gradientColors.length]} text-xs font-semibold text-background shadow-lg`}>
                            {category.count}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
