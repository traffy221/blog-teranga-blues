'use client';

import { Search, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function SearchWidget() {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            window.location.href = `/blog?search=${encodeURIComponent(query)}`;
        }
    };

    return (
        <div className="glass-effect rounded-xl border border-primary/20 hover:border-primary/40 transition-all p-6 hover:glow-gold">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-primary animate-float-gentle" />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Rechercher
                </span>
            </h3>
            <form onSubmit={handleSubmit}>
                <div className="relative">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Rechercher des articles..."
                        className={`w-full px-4 py-3 glass-effect border ${isFocused ? 'border-primary/50 glow-gold' : 'border-primary/20'} rounded-lg focus:outline-none text-foreground placeholder:text-muted-foreground transition-all`}
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-primary via-accent to-primary rounded-lg hover:glow-gold transition-all text-background"
                    >
                        <Search className="w-4 h-4" />
                    </button>
                </div>
            </form>
        </div>
    );
}
