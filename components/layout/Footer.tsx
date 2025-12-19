import Link from 'next/link';
import { Mail, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-32 border-t border-primary/20 bg-gradient-to-b from-background via-muted/30 to-background">
            <div className="container mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-3xl font-serif font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">#221 Blog</h3>
                        <p className="text-muted-foreground leading-relaxed italic text-sm">
                            "La vie c'est comme un piano, il faut jouer sur les touches blanches comme sur les touches noires pour former une belle harmonie."
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground/90 mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative inline-block group"
                                >
                                    Articles
                                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative inline-block group"
                                >
                                    À Propos
                                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/categories"
                                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative inline-block group"
                                >
                                    Catégories
                                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground/90 mb-4">Réseaux Sociaux</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/TraffyLaw.97"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full glass-effect hover:glow-gold transition-all duration-400 group"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href="https://twitter.com/traffy_c"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full glass-effect hover:glow-gold transition-all duration-400 group"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href="https://www.instagram.com/traffy_c/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full glass-effect hover:glow-gold transition-all duration-400 group"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href="mailto:contact@221blog.com"
                                className="p-2.5 rounded-full glass-effect hover:glow-gold transition-all duration-400 group"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-muted-foreground">
                        Conçu et développé avec ❤️ par Papa Daouda Ndiaye
                    </p>
                    <div className="flex space-x-6 text-sm text-muted-foreground">
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Confidentialité
                        </Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                            Mentions Légales
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        </footer>
    );
}
