'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800/50 z-50">
            <motion.div
                className="h-full bg-gradient-to-r from-gray-300 via-white to-gray-400 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                style={{ width: `${scrollProgress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${scrollProgress}%` }}
                transition={{ duration: 0.1 }}
            />
        </div>
    );
}
