import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Mail, Twitter, Facebook, Instagram, Heart, Sparkles, Zap, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: 'À Propos | #221 Blog',
    description: 'Découvrez l\'histoire derrière #221 Blog - réflexions personnelles sur la vie et la société',
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background */}
                <div className="fixed inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5 -z-10" />
                <ParticleBackground colors={['#fbbf24', '#7c3aed', '#f472b6']} density={60} speed={0.3} />

                {/* Floating Emojis */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <span className="absolute top-32 left-[10%] text-4xl animate-float" style={{ animationDuration: '4s' }}>💭</span>
                    <span className="absolute top-48 right-[15%] text-3xl animate-float-gentle" style={{ animationDuration: '5s' }}>✨</span>
                    <span className="absolute top-[60%] left-[20%] text-3xl animate-float" style={{ animationDuration: '4.5s' }}>💜</span>
                    <span className="absolute top-[40%] right-[20%] text-2xl animate-float-gentle" style={{ animationDuration: '5.5s' }}>🌟</span>
                    <span className="absolute top-[70%] right-[30%] text-3xl animate-float" style={{ animationDuration: '4.2s' }}>🎵</span>
                </div>

                <div className="container mx-auto max-w-4xl relative">
                    {/* Page Header */}
                    <div className="mb-16 text-center animate-fade-in">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <span className="text-4xl animate-float-gentle">👋</span>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                À Propos
                            </h1>
                            <span className="text-4xl animate-float-gentle" style={{ animationDelay: '0.3s' }}>💫</span>
                        </div>
                        <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full animate-shimmer-gold"></div>
                    </div>

                    {/* Quote Section - Premium */}
                    <div className="glass-effect border border-primary/20 rounded-2xl p-8 md:p-12 mb-16 hover:border-primary/40 transition-all hover:glow-gold transform hover:scale-105 duration-300 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="absolute -top-6 -left-6 text-5xl opacity-30">🎹</div>
                        <div className="absolute -bottom-4 -right-4 text-4xl opacity-30">🎶</div>
                        <blockquote className="text-xl md:text-2xl font-serif italic text-foreground/90 text-center leading-relaxed">
                            "La vie c'est comme un piano, il faut jouer sur les touches blanches comme sur les touches noires pour former une belle harmonie."
                        </blockquote>
                    </div>

                    {/* About Content */}
                    <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <h2 className="text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-flex items-center gap-3">
                            <Sparkles className="w-8 h-8 text-primary animate-float-gentle" />
                            Bienvenue sur #221 Blog
                        </h2>

                        <p className="text-lg leading-relaxed mb-6 text-foreground/80">
                            Bienvenue dans mon espace de réflexion personnelle. Ce blog est né d'un besoin profond de partager mes pensées sur la vie, la société, et les questions qui nous touchent tous au quotidien.
                        </p>

                        <p className="text-lg leading-relaxed mb-6 text-foreground/80">
                            Ici, je m'exprime librement sur des sujets qui me tiennent à cœur : les relations humaines, les défis de la jeunesse, les valeurs morales de notre société, et les réflexions philosophiques sur notre existence.
                        </p>

                        <h3 className="text-3xl font-serif font-bold mb-8 mt-12 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent inline-flex items-center gap-3">
                            <Zap className="w-7 h-7 text-secondary animate-float-gentle" />
                            Ce que vous trouverez ici
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="glass-effect border border-primary/20 rounded-xl p-6 hover-lift transition-luxury hover:border-primary/40 hover:glow-gold group">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">💖</span>
                                    <h4 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Réflexions Personnelles</h4>
                                </div>
                                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                    Des pensées profondes sur l'amour, l'amitié, et les relations qui façonnent notre vie.
                                </p>
                            </div>

                            <div className="glass-effect border border-secondary/20 rounded-xl p-6 hover-lift transition-luxury hover:border-secondary/40 hover:glow-purple group">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">🌍</span>
                                    <h4 className="text-xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Questions de Société</h4>
                                </div>
                                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                    Analyses critiques sur les problèmes sociaux, la jeunesse, et les enjeux contemporains.
                                </p>
                            </div>

                            <div className="glass-effect border border-accent/20 rounded-xl p-6 hover-lift transition-luxury hover:border-accent/40 hover:glow-gold group">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">✨</span>
                                    <h4 className="text-xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Identité & Humanité</h4>
                                </div>
                                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                    Explorations de ce qui nous rend humains, vulnérables et résilients.
                                </p>
                            </div>

                            <div className="glass-effect border border-primary/20 rounded-xl p-6 hover-lift transition-luxury hover:border-primary/40 hover:glow-gold group">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">🎯</span>
                                    <h4 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Valeurs Morales</h4>
                                </div>
                                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                    Réflexions sur l'évolution des valeurs et l'impact sur notre société.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-3xl font-serif font-bold mb-6 mt-12 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent inline-flex items-center gap-3">
                            <Heart className="w-7 h-7 text-accent animate-float-gentle" />
                            Ma Philosophie
                        </h3>

                        <p className="text-lg leading-relaxed mb-6 text-foreground/80">
                            Comme le dit si bien la citation qui m'inspire : la vie est un mélange de moments lumineux et sombres. Mon approche est d'accueillir cette dualité, d'en parler ouvertement, et de chercher l'harmonie dans ce contraste.
                        </p>

                        <p className="text-lg leading-relaxed mb-6 text-foreground/80">
                            Je crois en la puissance de l'écriture pour comprendre, partager, et créer du lien. Chaque article est une invitation au dialogue, à la réflexion, et parfois à la remise en question.
                        </p>
                    </div>

                    {/* Social Links - Premium */}
                    <div className="glass-effect border border-secondary/20 rounded-2xl p-8 mb-16 text-center hover:border-secondary/40 transition-all animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <h3 className="text-3xl font-serif font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent inline-flex items-center gap-3 justify-center">
                            <MessageCircle className="w-7 h-7 text-secondary animate-float-gentle" />
                            Connectez-vous avec moi
                        </h3>
                        <div className="flex justify-center space-x-4 flex-wrap gap-4">
                            <a
                                href="https://www.facebook.com/TraffyLaw.97"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-full glass-effect border border-primary/20 hover:border-primary/50 hover:glow-gold transition-all group"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href="https://twitter.com/traffy_c"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-full glass-effect border border-primary/20 hover:border-primary/50 hover:glow-gold transition-all group"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href="https://www.instagram.com/traffy_c/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-full glass-effect border border-primary/20 hover:border-primary/50 hover:glow-gold transition-all group"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href="mailto:contact@221blog.com"
                                className="p-4 rounded-full glass-effect border border-primary/20 hover:border-primary/50 hover:glow-gold transition-all group"
                                aria-label="Email"
                            >
                                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form - Premium */}
                    <div className="glass-effect border border-primary/20 rounded-2xl p-8 md:p-12 hover:border-primary/40 transition-all animate-fade-in" style={{ animationDelay: '0.8s' }}>
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-serif font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent inline-flex items-center gap-3 justify-center flex-wrap">
                                <span className="text-4xl animate-float-gentle">💌</span>
                                Contactez-moi
                                <span className="text-4xl animate-float-gentle" style={{ animationDelay: '0.2s' }}>✉️</span>
                            </h2>
                            <p className="text-muted-foreground">
                                Une question, un commentaire, ou simplement envie d'échanger ? N'hésitez pas à me contacter.
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
