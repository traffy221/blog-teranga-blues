'use client';

import Giscus from '@giscus/react';
import { MessageSquare } from 'lucide-react';

interface CommentsProps {
    slug: string;
}

export default function Comments({ slug }: CommentsProps) {
    return (
        <div className="glass-effect border border-primary/10 p-8 rounded-2xl mt-12">
            <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary animate-float-gentle" />
                <h2 className="text-3xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Quantum Comment Threads
                </h2>
            </div>
            <p className="text-muted-foreground mb-6">
                Participez à la discussion et partagez vos réflexions ! 💬✨
            </p>
            <Giscus
                id="comments"
                repo="traffy221/-Complete-luxury-Gen-Z-redesign-with-purple-gold-theme"
                repoId="R_kgDONjg5Kg" // Automatiquement récupéré de GitHub
                category="General"
                categoryId="DIC_kwDONjg5Ks4ClUBM" // ID automatique de GitHub Discussions
                mapping="pathname"
                term={slug}
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="transparent_dark"
                lang="fr"
                loading="lazy"
            />
        </div>
    );
}
