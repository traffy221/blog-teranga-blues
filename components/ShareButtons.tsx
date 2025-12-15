'use client';

import { Facebook, Twitter, Linkedin, Link, Mail } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
    title: string;
    url: string;
    excerpt?: string;
}

export default function ShareButtons({ title, url, excerpt }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    const fullUrl = typeof window !== 'undefined' ? window.location.href : url;
    const shareText = excerpt || title;

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
        email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareText + '\n\n' + fullUrl)}`,
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(fullUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleShare = (platform: keyof typeof shareLinks) => {
        if (platform === 'email') {
            window.location.href = shareLinks[platform];
        } else {
            window.open(shareLinks[platform], '_blank', 'width=600,height=400');
        }
    };

    return (
        <div className="flex items-center gap-3 flex-wrap">
            {/* Facebook */}
            <button
                onClick={() => handleShare('facebook')}
                className="p-3 rounded-full glass-effect border border-primary/20 hover:border-primary/50 hover:glow-gold transition-all group"
                aria-label="Partager sur Facebook"
            >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            {/* Twitter/X */}
            <button
                onClick={() => handleShare('twitter')}
                className="p-3 rounded-full glass-effect border border-primary/20 hover:border-primary/50 hover:glow-gold transition-all group"
                aria-label="Partager sur Twitter"
            >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            {/* LinkedIn */}
            <button
                onClick={() => handleShare('linkedin')}
                className="p-3 rounded-full glass-effect border border-primary/20 hover:border-primary/50 hover:glow-gold transition-all group"
                aria-label="Partager sur LinkedIn"
            >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            {/* Email */}
            <button
                onClick={() => handleShare('email')}
                className="p-3 rounded-full glass-effect border border-primary/20 hover:border-primary/50 hover:glow-gold transition-all group"
                aria-label="Partager par email"
            >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            {/* Copy Link */}
            <button
                onClick={copyToClipboard}
                className="p-3 rounded-full glass-effect border border-primary/20 hover:border-primary/50 hover:glow-gold transition-all group relative"
                aria-label="Copier le lien"
            >
                <Link className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                {copied && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-medium whitespace-nowrap">
                        Copié ! ✓
                    </span>
                )}
            </button>
        </div>
    );
}
