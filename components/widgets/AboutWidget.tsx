import { User, Facebook, Twitter, Instagram } from 'lucide-react';

export default function AboutWidget() {
    return (
        <div className="p-6 bg-card rounded-xl border-2 border-border hover:border-secondary/50 transition-all">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <User className="w-5 h-5 text-secondary" />
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    À Propos
                </span>
            </h3>

            <div className="flex flex-col items-center text-center space-y-4">
                {/* Profile Icon */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center glow-effect">
                    <span className="text-3xl font-serif font-bold text-background">#221</span>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Réflexions personnelles sur la vie, la société, et les questions qui nous touchent profondément.
                </p>

                {/* Social Links */}
                <div className="flex space-x-3 pt-2">
                    <a
                        href="https://www.facebook.com/TraffyLaw.97"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                    >
                        <Facebook className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                    <a
                        href="https://twitter.com/traffy_c"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                    >
                        <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                    <a
                        href="https://www.instagram.com/traffy_c/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                    >
                        <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                </div>
            </div>
        </div>
    );
}
