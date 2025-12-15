'use client';

import { useState, FormEvent } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus('error');
            setMessage('Veuillez entrer une adresse email valide');
            return;
        }

        setStatus('loading');

        // Simulate API call (replace with actual newsletter subscription logic)
        setTimeout(() => {
            setStatus('success');
            setMessage('Merci pour votre inscription !');
            setEmail('');

            // Reset after 3 seconds
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 3000);
        }, 1000);
    };

    return (
        <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-20 blur-sm" />
                    <div className="relative flex items-center">
                        <div className="relative flex-1">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="votre@email.com"
                                disabled={status === 'loading' || status === 'success'}
                                className="w-full px-4 py-3 pl-11 bg-input border-2 border-transparent focus:border-primary rounded-lg text-foreground placeholder:text-muted-foreground transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{
                                    background: 'linear-gradient(#1e293b, #1e293b) padding-box, linear-gradient(135deg, #7c3aed, #06b6d4) border-box',
                                    border: '2px solid transparent',
                                }}
                            />
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className="ml-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span className="hidden sm:inline">Envoi...</span>
                                </>
                            ) : status === 'success' ? (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="hidden sm:inline">Inscrit</span>
                                </>
                            ) : (
                                <span>S'inscrire</span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Status Messages */}
                {message && (
                    <div
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg animate-fade-in ${status === 'success'
                                ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                                : 'bg-red-500/10 border border-red-500/30 text-red-400'
                            }`}
                    >
                        {status === 'success' ? (
                            <CheckCircle className="w-4 h-4" />
                        ) : (
                            <AlertCircle className="w-4 h-4" />
                        )}
                        <span className="text-sm">{message}</span>
                    </div>
                )}
            </form>

            <p className="mt-3 text-xs text-muted-foreground">
                Recevez les dernières réflexions directement dans votre boîte mail.
            </p>
        </div>
    );
}
