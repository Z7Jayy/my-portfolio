// src/components/Navbar.tsx
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800/80 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                    >
                        Johnathon Richardson
                    </motion.span>
                </Link>

                <div className="flex items-center gap-6">
                    {['Projects', 'Skills', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="group relative px-2 py-1"
                        >
              <span className="text-gray-300 group-hover:text-white transition-colors">
                {item}
              </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}

                    <motion.a
                        href="/Johnathon-Richardson-Resume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md text-sm font-medium shadow-lg hover:shadow-blue-500/20 transition-all"
                    >
                        Download CV
                    </motion.a>
                </div>
            </div>
        </nav>
    );
}