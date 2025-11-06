'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function StarTrailBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Add new trail point and limit the array length
            setTrail((prev) => {
                const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
                return newTrail.slice(-15); // keep last 15 points
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/background.jpg")',
                    filter: 'brightness(0.4)',
                }}
            />

            {/* Trail Particles */}
            {trail.map((point, index) => {
                const opacity = (index + 1) / trail.length;
                const size = 4 + (index / trail.length) * 8;
                const colors = [
                    'rgba(147, 197, 253, ', // blue-300
                    'rgba(196, 181, 253, ', // purple-300
                    'rgba(252, 165, 165, ', // red-300
                    'rgba(253, 224, 71, ',  // yellow-300
                    'rgba(134, 239, 172, ', // green-300
                ];
                const colorIndex = Math.floor((index / trail.length) * colors.length);
                const color = colors[colorIndex];

                return (
                    <motion.div
                        key={point.id}
                        initial={{ opacity, scale: 1 }}
                        animate={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            left: `${point.x}px`,
                            top: `${point.y}px`,
                            width: `${size}px`,
                            height: `${size}px`,
                            transform: 'translate(-50%, -50%)',
                            background: `radial-gradient(circle, ${color}${opacity}) 0%, ${color}0.3) 50%, transparent 100%)`,
                            boxShadow: `0 0 ${size * 2}px ${color}${opacity * 0.8})`,
                        }}
                    />
                );
            })}

            {/* Cursor Glow */}
            <div
                className="absolute w-16 h-16 rounded-full pointer-events-none transition-opacity duration-300"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                    background:
                        'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)',
                    filter: 'blur(8px)',
                    opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0 : 1,
                }}
            />

            {/* Overlay for text contrast */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Random twinkling stars for depth */}
            {[...Array(30)].map((_, i) => (
                <div
                    key={`star-${i}`}
                    className="absolute rounded-full bg-white animate-pulse"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 2 + 0.5}px`,
                        height: `${Math.random() * 2 + 0.5}px`,
                        opacity: Math.random() * 0.5 + 0.2,
                        animationDuration: `${Math.random() * 4 + 2}s`,
                        animationDelay: `${Math.random() * 3}s`,
                    }}
                />
            ))}
        </div>
    );
}
