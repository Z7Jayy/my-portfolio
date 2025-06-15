// src/components/Footer.tsx
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12 transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center gap-6 mb-4">
                    {['GitHub', 'LinkedIn', 'Twitter'].map((platform, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={`https://${platform.toLowerCase()}.com/yourusername`}
                                target="_blank"
                                className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                            >
                                {platform}
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                    © {year} Your Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
}