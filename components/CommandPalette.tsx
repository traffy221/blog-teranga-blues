'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Search, FileText, Tag, Home, BookOpen } from 'lucide-react';

interface Post {
    slug: string;
    title: string;
    category: string;
    tags: string[];
}

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const router = useRouter();

    // Keyboard shortcut to open command palette
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    // Fetch posts for search
    useEffect(() => {
        if (open && posts.length === 0) {
            fetch('/api/posts')
                .then((res) => res.json())
                .then((data) => setPosts(data))
                .catch(() => {
                    // Fallback data
                    setPosts([
                        {
                            slug: 'future-of-web-development',
                            title: 'The Future of Web Development in 2035',
                            category: 'Technology',
                            tags: ['web-dev', 'future', 'ai'],
                        },
                        {
                            slug: 'quantum-neural-networks',
                            title: 'Building Neural Networks with Quantum Processors',
                            category: 'AI',
                            tags: ['ai', 'quantum', 'machine-learning'],
                        },
                        {
                            slug: 'glassmorphism-design-trend',
                            title: 'Glassmorphism: The Design Trend Taking Over 2024',
                            category: 'Web Development',
                            tags: ['design', 'css', 'ui-ux'],
                        },
                    ]);
                });
        }
    }, [open, posts.length]);

    const handleSelect = useCallback((callback: () => void) => {
        setOpen(false);
        callback();
    }, []);

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Search articles, categories, tags..." className="bg-white/10 backdrop-blur-lg border border-white/20" />
            <CommandList className="bg-white/15 backdrop-blur-xl border border-white/30">
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup heading="Quick Links">
                    <CommandItem onSelect={() => handleSelect(() => router.push('/'))}>
                        <Home className="mr-2 h-4 w-4" />
                        <span>Home</span>
                    </CommandItem>
                    <CommandItem onSelect={() => handleSelect(() => router.push('/blog'))}>
                        <BookOpen className="mr-2 h-4 w-4" />
                        <span>All Posts</span>
                    </CommandItem>
                </CommandGroup>

                {posts.length > 0 && (
                    <CommandGroup heading="Articles">
                        {posts.slice(0, 5).map((post) => (
                            <CommandItem
                                key={post.slug}
                                onSelect={() => handleSelect(() => router.push(`/blog/${post.slug}`))}
                            >
                                <FileText className="mr-2 h-4 w-4" />
                                <div className="flex flex-col">
                                    <span>{post.title}</span>
                                    <span className="text-xs text-muted-foreground">{post.category}</span>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                )}

                <CommandGroup heading="Categories">
                    <CommandItem onSelect={() => handleSelect(() => router.push('/blog?category=technology'))}>
                        <Tag className="mr-2 h-4 w-4" />
                        <span>Technology</span>
                    </CommandItem>
                    <CommandItem onSelect={() => handleSelect(() => router.push('/blog?category=ai'))}>
                        <Tag className="mr-2 h-4 w-4" />
                        <span>AI</span>
                    </CommandItem>
                    <CommandItem onSelect={() => handleSelect(() => router.push('/blog?category=web-dev'))}>
                        <Tag className="mr-2 h-4 w-4" />
                        <span>Web Development</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
