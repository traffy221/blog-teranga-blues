'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Simuler l'envoi - À remplacer par votre API réelle
            // Par exemple: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulation

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom <span className="text-destructive">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Votre nom"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-destructive">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="votre@email.com"
                />
            </div>

            {/* Subject */}
            <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Sujet <span className="text-destructive">*</span>
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Sujet de votre message"
                />
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-destructive">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Votre message..."
                />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
                <div className="p-4 bg-primary/10 border border-primary rounded-lg text-sm">
                    ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
            )}

            {status === 'error' && (
                <div className="p-4 bg-destructive/10 border border-destructive rounded-lg text-sm">
                    ❌ Une erreur est survenue. Veuillez réessayer.
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover-lift transition-smooth font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'sending' ? (
                    <>
                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer le message</span>
                    </>
                )}
            </button>

            <p className="text-xs text-muted-foreground text-center">
                Vos données sont protégées et ne seront jamais partagées.
            </p>
        </form>
    );
}
