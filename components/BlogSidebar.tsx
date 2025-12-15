import SearchWidget from './widgets/SearchWidget';
import CategoriesWidget from './widgets/CategoriesWidget';
import PopularPostsWidget from './widgets/PopularPostsWidget';
import TagsWidget from './widgets/TagsWidget';
import NewsletterForm from './NewsletterForm';

export default function BlogSidebar() {
    return (
        <aside className="space-y-6">
            {/* Search */}
            <SearchWidget />

            {/* Popular Posts */}
            <PopularPostsWidget />

            {/* Categories */}
            <CategoriesWidget />

            {/* Tags */}
            <TagsWidget />

            {/* Newsletter */}
            <div className="p-6 bg-card rounded-xl border-2 border-border hover:border-accent/50 transition-all">
                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Newsletter
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                    Recevez les dernières réflexions directement dans votre boîte mail.
                </p>
                <NewsletterForm />
            </div>
        </aside>
    );
}
