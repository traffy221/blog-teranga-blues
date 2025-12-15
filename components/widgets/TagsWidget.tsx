import Link from 'next/link';
import { Hash, Tag } from 'lucide-react';
import { getAllPosts } from '@/lib/mdx';

export default async function TagsWidget() {
    const allPosts = await getAllPosts();

    // Extract and count all tags
    const tagCounts: Record<string, number> = {};

    allPosts.forEach(post => {
        // Check for explicit tags only
        if (post.tags && Array.isArray(post.tags) && post.tags.length > 0) {
            post.tags.forEach((tag: string) => {
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        }
    });

    // Convert to array and sort by count
    const tags = Object.entries(tagCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 15); // Limit to top 15 tags

    // Don't show widget if no tags
    if (tags.length === 0) {
        return null;
    }

    // Determine size based on count
    const getSize = (count: number, maxCount: number) => {
        const ratio = count / maxCount;
        if (ratio > 0.7) return 'text-base';
        if (ratio > 0.4) return 'text-sm';
        return 'text-xs';
    };

    // Get gradient class based on index for variety
    const getGradient = (index: number) => {
        const gradients = [
            'from-primary/30 to-accent/30 hover:from-primary/40 hover:to-accent/40',
            'from-secondary/30 to-primary/30 hover:from-secondary/40 hover:to-primary/40',
            'from-accent/30 to-secondary/30 hover:from-accent/40 hover:to-secondary/40',
        ];
        return gradients[index % gradients.length];
    };

    const maxCount = Math.max(...tags.map(t => t.count), 1);

    return (
        <div className="glass-effect rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all p-6 hover:glow-purple">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Tag className="w-5 h-5 text-secondary animate-float-gentle" />
                <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                    Tags Populaires
                </span>
            </h3>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <Link
                        key={tag.name}
                        href={`/blog?tag=${encodeURIComponent(tag.name.toLowerCase())}`}
                        className="group inline-flex items-center space-x-1 px-3 py-1.5 rounded-full glass-effect border border-primary/20 hover:border-primary/50 transition-all hover:glow-gold"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <Hash className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className={`${getSize(tag.count, maxCount)} font-medium text-foreground/80 group-hover:text-primary transition-colors`}>
                            {tag.name}
                        </span>
                        <span className="text-xs text-primary/60">({tag.count})</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
