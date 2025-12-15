'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, User, Layers, Search, Menu, X, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { useState } from 'react';

const navigation = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Articles', href: '/blog', icon: FileText },
    { name: 'À Propos', href: '/about', icon: User },
    { name: 'Catégories', href: '/categories', icon: Layers },
];

const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/TraffyLaw.97', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/traffy_c', icon: Twitter },
    { name: 'Instagram', href: 'https://www.instagram.com/traffy_c/', icon: Instagram },
    { name: 'Email', href: 'mailto:contact@221blog.com', icon: Mail },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col bg-card/95 backdrop-blur-sm border-r border-border z-50">
                {/* Logo */}
                <div className="p-6 border-b border-border/50">
                    <Link href="/" className="group flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect">
                            <span className="text-xl font-bold text-white">#</span>
                        </div>
                        <span className="text-2xl font-serif font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            221
                        </span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href ||
                            (item.href !== '/' && pathname.startsWith(item.href));
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  group flex items-center space-x-3 px-4 py-3 rounded-lg transition-all relative
                  ${isActive
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                    }
                `}
                            >
                                {/* Active indicator */}
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-r-full" />
                                )}
                                <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'group-hover:text-primary transition-colors'}`} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}

                    {/* Search Button */}
                    <button
                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all group mt-4"
                        aria-label="Rechercher"
                    >
                        <Search className="w-5 h-5 group-hover:text-secondary transition-colors" />
                        <span className="font-medium">Rechercher</span>
                        <kbd className="ml-auto px-2 py-1 text-xs bg-muted rounded border border-border">
                            ⌘K
                        </kbd>
                    </button>
                </nav>

                {/* Social Links */}
                <div className="p-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground mb-3 px-2">Réseaux Sociaux</p>
                    <div className="flex items-center justify-around">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg hover:bg-primary/10 transition-all group"
                                    aria-label={social.name}
                                >
                                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </aside>

            {/* Mobile Header */}
            <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <span className="text-lg font-bold text-white">#</span>
                        </div>
                        <span className="text-xl font-serif font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            221
                        </span>
                    </Link>

                    {/* Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                        aria-label="Menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-foreground" />
                        ) : (
                            <Menu className="w-6 h-6 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="border-t border-border/50 bg-card/98 backdrop-blur-md animate-fade-in">
                        <nav className="p-4 space-y-2">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href ||
                                    (item.href !== '/' && pathname.startsWith(item.href));
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`
                      flex items-center space-x-3 px-4 py-3 rounded-lg transition-all
                      ${isActive
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                            }
                    `}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                );
                            })}

                            {/* Search */}
                            <button
                                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                                aria-label="Rechercher"
                            >
                                <Search className="w-5 h-5" />
                                <span className="font-medium">Rechercher</span>
                            </button>
                        </nav>

                        {/* Social Links */}
                        <div className="px-4 pb-4 pt-2 border-t border-border/30">
                            <div className="flex items-center justify-around">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg hover:bg-primary/10 transition-all"
                                            aria-label={social.name}
                                        >
                                            <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Spacer for mobile */}
            <div className="md:hidden h-16" />
        </>
    );
}
