import Link from 'next/link';
import { TrendingUp, Clock } from 'lucide-react';
import { getAllPosts } from '@/lib/mdx';

export default async function PopularPostsWidget() {
    const allPosts = await getAllPosts();

    // Sort by date and take top 5 most recent as "popular"
    const popularPosts = allPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);

    return (
        <div className="p-6 bg-card rounded-xl border-2 border-border hover:border-primary/50 transition-all">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Articles Récents
                </span>
            </h3>

            <div className="space-y-4">
                {popularPosts.map((post, index) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block"
                    >
                        <div className="flex items-start space-x-3">
                            {/* Number Badge */}
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background font-bold text-sm glow-effect">
                                {index + 1}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                                    {post.title}
                                </h4>
                                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                                    <span className="flex items-center space-x-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{post.readingTime}</span>
                                    </span>
                                    <span>•</span>
                                    <span>{new Date(post.date).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric' })}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
