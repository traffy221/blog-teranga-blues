'use client';

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'glass-effect border-b border-border'
                : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    {/* Logo with Golden Gradient */}
                    <Link href="/" className="group flex items-center space-x-2">
                        <span className="text-3xl font-serif font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift relative">
                            #221
                            <span className="absolute inset-0 blur-xl bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 animate-glow-pulse -z-10" />
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        <Link
                            href="/blog"
                            className="text-foreground/80 hover:text-primary transition-all duration-400 text-sm font-medium relative group"
                        >
                            Articles
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                        </Link>
                        <Link
                            href="/about"
                            className="text-foreground/80 hover:text-primary transition-all duration-400 text-sm font-medium relative group"
                        >
                            À Propos
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                        </Link>
                        <Link
                            href="/categories"
                            className="text-foreground/80 hover:text-primary transition-all duration-400 text-sm font-medium relative group"
                        >
                            Catégories
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                        </Link>
                        <a
                            href="https://traffy-portfolio.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-all duration-400 text-sm font-medium relative group"
                        >
                            Mon Portfolio
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                        </a>
                    </div>

                    {/* Search Icon with Glow */}
                    <button
                        className="hidden md:block p-2.5 rounded-full hover:bg-primary/10 transition-all duration-300 hover:glow-gold group"
                        aria-label="Rechercher"
                    >
                        <Search className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-foreground" />
                        ) : (
                            <Menu className="w-6 h-6 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu with Glassmorphism */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-6 pb-6 space-y-4 animate-fade-in glass-effect rounded-xl p-4">
                        <Link
                            href="/blog"
                            className="block py-2 text-foreground/70 hover:text-primary transition-all duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Articles
                        </Link>
                        <Link
                            href="/about"
                            className="block py-2 text-foreground/70 hover:text-primary transition-all duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            À Propos
                        </Link>
                        <Link
                            href="/categories"
                            className="block py-2 text-foreground/70 hover:text-primary transition-all duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Catégories
                        </Link>
                        <a
                            href="https://traffy-portfolio.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 text-foreground/70 hover:text-primary transition-all duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Mon Portfolio
                        </a>
                    </div>
                )}
            </nav>

            {/* Gradient Divider */}
            {isScrolled && (
                <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            )}
        </header>
    );
}
