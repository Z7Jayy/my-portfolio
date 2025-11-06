// src/components/Navbar.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = ['Projects', 'Skills', 'Experience', 'Contact'];

    return (
        <nav className="bg-gray-900/60 backdrop-blur-md border-b border-gray-700/30 sticky top-0 z-50 shadow-lg shadow-black/20">
            {/* CHANGED: Reduced vertical padding from py-4 to py-3 to tighten the navbar height */}
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold z-50">
                        <motion.span
                            // Apply the hover animation to the container holding the logo image
                            whileHover={{ scale: 1.05 }}
                            className="inline-block" // Make it a block for proper scaling
                        >
                            <img
                                src="/Untitled design.png"
                                alt="JRCoded Logo"
                                // CHANGED: Switched to standard Tailwind sizing (h-12 = 48px) for a large logo
                                className="h-14 sm:h-16 w-auto transition-transform duration-200"
                            />
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="group relative px-2 py-1"
                            >
                                <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                                    {item}
                                </span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-300 to-white group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                            </Link>
                        ))}

                        <motion.a
                            href="/Resume - Johnathon Richardson.pdf"
                            download
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 30px rgba(255,255,255,0.3)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 bg-gradient-to-r from-gray-200 to-gray-400 rounded-full text-sm font-semibold text-gray-900 shadow-lg hover:shadow-white/30 transition-all"
                        >
                            Download CV
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-gray-300 transition-all"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-gray-300 transition-all"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-gray-300 transition-all"
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="py-6 flex flex-col gap-4">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={`#${item.toLowerCase()}`}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all"
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.a
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: menuItems.length * 0.1 }}
                                    href="/Resume - Johnathon Richardson.pdf"
                                    download
                                    onClick={() => setIsOpen(false)}
                                    className="mx-4 mt-2 px-5 py-3 bg-gradient-to-r from-gray-200 to-gray-400 rounded-full text-sm font-semibold text-gray-900 text-center shadow-lg"
                                >
                                    Download CV
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
