'use client';

import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    opacity: number;
}

interface ParticleBackgroundProps {
    density?: number;
    colors?: string[];
    speed?: number;
    maxDistance?: number;
    className?: string;
}

export default function ParticleBackground({
    density = 100,
    colors = ['#7c3aed', '#06b6d4', '#6366f1'],
    speed = 0.3,
    maxDistance = 150,
    className = '',
}: ParticleBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        // Initialize particles
        const initParticles = () => {
            const particles: Particle[] = [];
            const isMobile = window.innerWidth < 768;
            const particleCount = isMobile ? Math.floor(density / 2) : density;

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * speed,
                    vy: (Math.random() - 0.5) * speed,
                    radius: Math.random() * 2 + 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    opacity: Math.random() * 0.5 + 0.3,
                });
            }

            particlesRef.current = particles;
        };

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const particles = particlesRef.current;

            // Update and draw particles
            particles.forEach((particle) => {
                // Move particle
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `${particle.color}`;
                ctx.globalAlpha = particle.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            // Draw connections
            particles.forEach((particleA, indexA) => {
                particles.slice(indexA + 1).forEach((particleB) => {
                    const dx = particleA.x - particleB.x;
                    const dy = particleA.y - particleB.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particleA.x, particleA.y);
                        ctx.lineTo(particleB.x, particleB.y);
                        const opacity = (1 - distance / maxDistance) * 0.3;
                        ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Initialize
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Start animation
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [density, colors, speed, maxDistance]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none ${className}`}
            style={{ zIndex: 0 }}
        />
    );
}
