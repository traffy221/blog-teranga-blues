'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, Send, Loader2, User, Mail } from 'lucide-react';

interface Comment {
    id: string;
    author: string;
    comment: string;
    date: string;
}

interface CommentSectionProps {
    slug: string;
}

export default function CommentSection({ slug }: CommentSectionProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        author: '',
        email: '',
        comment: '',
        honeypot: '', // Anti-spam
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);

    // Load comments
    useEffect(() => {
        fetchComments();
    }, [slug]);

    const fetchComments = async () => {
        try {
            const res = await fetch(`/api/comments/${slug}`);
            const data = await res.json();
            setComments(data.comments || []);
        } catch (error) {
            console.error('Error loading comments:', error);
        } finally {
            setLoading(false);
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (formData.author.trim().length < 2) {
            newErrors.author = 'Le nom doit contenir au moins 2 caractères';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email invalide';
        }
        if (formData.comment.trim().length < 10) {
            newErrors.comment = 'Le commentaire doit contenir au moins 10 caractères';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setSubmitting(true);
        setSuccess(false);

        try {
            const res = await fetch('/api/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    slug,
                    ...formData,
                }),
            });

            if (!res.ok) throw new Error('Failed to submit');

            const data = await res.json();

            // Add new comment to list
            setComments([data.comment, ...comments]);

            // Reset form
            setFormData({ author: '', email: '', comment: '', honeypot: '' });
            setSuccess(true);

            // Hide success message after 3s
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            setErrors({ submit: 'Erreur lors de l\'envoi. Réessayez.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="glass-effect border border-primary/10 p-8 rounded-2xl mt-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary animate-float-gentle" />
                <h2 className="text-3xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Quantum Comment Threads
                </h2>
            </div>
            <p className="text-muted-foreground mb-8">
                Participez à la discussion et partagez vos réflexions ! 💬✨
            </p>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">
                            <User className="w-4 h-4 inline mr-2" />
                            Pseudo *
                        </label>
                        <input
                            type="text"
                            value={formData.author}
                            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            className="w-full px-4 py-3 glass-effect border border-primary/20 rounded-lg focus:border-primary/50 focus:outline-none focus:glow-gold transition-all text-foreground"
                            placeholder="Votre nom"
                            required
                        />
                        {errors.author && (
                            <p className="text-red-400 text-xs mt-1">{errors.author}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email * <span className="text-xs text-muted-foreground">(privé)</span>
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 glass-effect border border-primary/20 rounded-lg focus:border-primary/50 focus:outline-none focus:glow-gold transition-all text-foreground"
                            placeholder="votre@email.com"
                            required
                        />
                        {errors.email && (
                            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>
                </div>

                {/* Honeypot (hidden) */}
                <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />

                {/* Comment */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-foreground/80">
                        Commentaire *
                    </label>
                    <textarea
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 glass-effect border border-primary/20 rounded-lg focus:border-primary/50 focus:outline-none focus:glow-gold transition-all text-foreground resize-none"
                        placeholder="Partagez vos réflexions..."
                        required
                    />
                    {errors.comment && (
                        <p className="text-red-400 text-xs mt-1">{errors.comment}</p>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:scale-105 hover:glow-gold transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {submitting ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Envoi...
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            Publier le commentaire
                        </>
                    )}
                </button>

                {/* Success/Error Messages */}
                {success && (
                    <p className="text-green-400 text-sm mt-3 flex items-center gap-2">
                        ✓ Commentaire publié avec succès !
                    </p>
                )}
                {errors.submit && (
                    <p className="text-red-400 text-sm mt-3">{errors.submit}</p>
                )}
            </form>

            {/* Comments List */}
            <div className="border-t border-primary/10 pt-8">
                <h3 className="text-xl font-serif font-bold mb-6 text-foreground">
                    {comments.length} {comments.length === 1 ? 'Commentaire' : 'Commentaires'}
                </h3>

                {loading ? (
                    <div className="flex items-center justify-center py-8">
                        <Loader2 className="w-6 h-6 animate-spin text-primary" />
                    </div>
                ) : comments.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">
                        Soyez le premier à commenter ! 💭
                    </p>
                ) : (
                    <div className="space-y-6">
                        {comments.map((comment) => (
                            <div
                                key={comment.id}
                                className="glass-effect border border-primary/5 rounded-xl p-6 hover:border-primary/20 transition-all"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                                            {comment.author[0].toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">
                                                {comment.author}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {new Date(comment.date).toLocaleDateString('fr-FR', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                                    {comment.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
