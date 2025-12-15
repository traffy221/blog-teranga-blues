import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Heart, Users, Clock, Sparkles, Zap, Star, Flame } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogSidebar from '@/components/BlogSidebar';
import ParticleBackground from '@/components/ParticleBackground';
import { getAllPosts } from '@/lib/mdx';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default async function HomePage() {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 6);

  return (
    <>
      <Header />
      <main className="min-h-screen relative overflow-hidden">
        {/* Background Gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5 -z-10" />

        {/* Hero Section - Luxury Premium */}
        <section className="relative pt-40 pb-24 px-6">
          {/* Animated Background Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl animate-glow-pulse -z-10" />

          <div className="container mx-auto max-w-4xl text-center relative">
            {/* Logo - 3D MASSIVE with Hover Tilt */}
            <div className="perspective-1000 mb-8">
              <h1 className="text-8xl md:text-9xl lg:text-[14rem] font-serif font-bold relative inline-block group cursor-default select-none transform transition-transform duration-300 hover:scale-105">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-shift inline-block transform transition-all duration-500 hover:rotate-2">
                  #221
                </span>
                <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary/40 via-accent/40 to-secondary/40 animate-glow-pulse -z-10" />

                {/* Fun Icons Around Logo */}
                <Zap className="absolute -top-8 -right-8 md:-right-12 w-12 h-12 md:w-16 md:h-16 text-primary animate-float-gentle opacity-80" style={{ animationDuration: '3s' }} />
                <Star className="absolute -bottom-4 -left-8 md:-left-12 w-10 h-10 md:w-14 md:h-14 text-accent animate-float opacity-80" style={{ animationDuration: '3.5s' }} />
                <Flame className="absolute top-1/2 -right-4 md:-right-8 w-10 h-10 md:w-12 md:h-12 text-secondary animate-float-gentle opacity-80" style={{ animationDuration: '4s' }} />
              </h1>
            </div>

            {/* Piano Quote - Popping Glassmorphic */}
            <div className="glass-effect rounded-2xl p-8 mb-10 max-w-3xl mx-auto border border-primary/20 transform transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:glow-gold animate-fade-in relative">
              <blockquote className="text-xl md:text-2xl font-serif italic text-foreground/90 leading-relaxed">
                "La vie c'est comme un piano, il faut jouer sur les touches blanches comme sur les touches noires pour former une belle harmonie."
              </blockquote>
              <div className="absolute -top-4 -right-4 text-3xl animate-float-gentle opacity-70">🎹</div>
              <div className="absolute -bottom-3 -left-3 text-2xl animate-float opacity-70" style={{ animationDelay: '0.5s' }}>🎶</div>
            </div>

            {/* Subtitle avec emojis séparateurs */}
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto flex items-center justify-center gap-3 flex-wrap animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span>Réflexions personnelles sur la vie</span>
              <span className="text-primary animate-float-gentle">•</span>
              <span>la société</span>
              <span className="text-accent animate-float-gentle" style={{ animationDelay: '0.3s' }}>•</span>
              <span>et les questions qui nous touchent</span>
            </p>

            {/* CTA - ULTRA Premium avec Shimmer */}
            <div className="relative inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary blur-xl opacity-50 animate-glow-pulse" />

              <Link
                href="/blog"
                className="relative inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-primary via-accent to-primary rounded-xl hover-lift transition-luxury font-semibold text-background shadow-lg hover:glow-gold animate-gradient-shift group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-gold" />

                <Sparkles className="w-6 h-6 animate-float-gentle relative z-10" />
                <span className="relative z-10">Explorer les Articles</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />

                <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.2s' }} />
              </Link>
            </div>

            {/* Fun Stats Row - Gen Z Style */}
            <div className="mt-16 flex items-center justify-center gap-8 flex-wrap text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-primary/20 hover:border-primary/40 transition-all hover:scale-110 cursor-default">
                <span className="text-2xl">🔥</span>
                <span className="text-foreground/80">Fresh Content</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-accent/20 hover:border-accent/40 transition-all hover:scale-110 cursor-default">
                <span className="text-2xl">💭</span>
                <span className="text-foreground/80">Deep Thoughts</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-secondary/20 hover:border-secondary/40 transition-all hover:scale-110 cursor-default">
                <span className="text-2xl">✨</span>
                <span className="text-foreground/80">Real Talk</span>
              </div>
            </div>
          </div>

          {/* Decorative Line - Animated */}
          <div className="container mx-auto max-w-2xl mt-20">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer-gold" />
          </div>
        </section>

        {/* Featured Articles with Sidebar - 2 Column Layout */}
        <section className="py-20 px-6 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-3xl animate-float-gentle">🎯</span>
                <h2 className="text-4xl md:text-5xl font-serif font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Articles Récents
                </h2>
                <span className="text-3xl animate-float-gentle" style={{ animationDelay: '0.3s' }}>🚀</span>
              </div>
              <p className="text-muted-foreground text-lg">
                Mes dernières réflexions et pensées
              </p>
            </div>

            {/* 2-Column Layout: Articles + Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - Articles */}
              <div className="lg:col-span-2">
                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map((post, index) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Card className="glass-effect border border-primary/10 hover-lift transition-luxury h-full p-6 hover:border-primary/30 relative overflow-hidden">
                        {/* Shimmer Effect on Hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer-gold" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Category Badge */}
                          <div className="mb-4">
                            <Badge
                              variant="secondary"
                              className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30 hover:border-primary/50 transition-colors"
                            >
                              {post.category}
                            </Badge>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-serif font-semibold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed text-sm">
                            {post.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-primary/10">
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readingTime}</span>
                            </span>
                            <span>
                              {new Date(post.date).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* View All */}
                <div className="text-center mt-10">
                  <Link
                    href="/blog"
                    className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors font-medium group"
                  >
                    <span>Voir tous les articles</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Sidebar - Widgets */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24">
                  <BlogSidebar />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Premium Icons */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent -z-10" />

          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Réflexions */}
              <div className="text-center space-y-6 group">
                <div className="relative mx-auto w-20 h-20">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative w-20 h-20 rounded-full glass-effect flex items-center justify-center group-hover:glow-gold transition-all">
                    <BookOpen className="w-9 h-9 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  Réflexions
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Des pensées personnelles sur la vie, l'amour, et les défis de notre époque
                </p>
              </div>

              {/* Société */}
              <div className="text-center space-y-6 group">
                <div className="relative mx-auto w-20 h-20">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative w-20 h-20 rounded-full glass-effect flex items-center justify-center group-hover:glow-purple transition-all">
                    <Users className="w-9 h-9 text-secondary" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  Société
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analyses des questions sociales, de la jeunesse aux valeurs morales
                </p>
              </div>

              {/* Humanité */}
              <div className="text-center space-y-6 group">
                <div className="relative mx-auto w-20 h-20">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-secondary/30 blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative w-20 h-20 rounded-full glass-effect flex items-center justify-center hover:glow-gold transition-all">
                    <Heart className="w-9 h-9 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  Humanité
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  L'exploration de ce qui nous rend humains, vulnérables et résilients
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
