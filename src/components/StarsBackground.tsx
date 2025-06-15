'use client';
import { useEffect, useState } from 'react';

export default function StarsBackground({ count = 50 }) {
    const [stars, setStars] = useState<Array<{id: number, style: React.CSSProperties}>>([]);

    useEffect(() => {
        setStars(Array.from({ length: count }, (_, i) => ({
            id: i,
            style: {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.5 + 0.1,
                animationDuration: `${Math.random() * 5 + 3}s`,
                animationDelay: `${Math.random() * 2}s`
            }
        })));
    }, [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white animate-pulse"
                    style={star.style}
                />
            ))}
        </div>
    );
}