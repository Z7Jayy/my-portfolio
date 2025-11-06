// src/components/Footer.tsx
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-700/30 py-12 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
                            JRCoded
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Building exceptional digital experiences through code and creativity.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="text-gray-200 font-semibold mb-3">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            {['Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-400 hover:text-gray-200 transition-colors text-sm"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="text-center md:text-right">
                        <h4 className="text-gray-200 font-semibold mb-3">Connect</h4>
                        <div className="flex justify-center md:justify-end gap-4 mb-4">
                            {[
                                { name: 'GitHub', url: 'https://github.com/yourusername' },
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/johnathon-richardson-65619a26a/' },
                                { name: 'Email', url: 'mailto:your.email@example.com' }
                            ].map((platform) => (
                                <motion.div
                                    key={platform.name}
                                    whileHover={{
                                        y: -3,
                                        textShadow: '0 0 15px rgba(255,255,255,0.6)'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={platform.url}
                                        target="_blank"
                                        className="text-gray-400 hover:text-gray-200 transition-colors text-sm font-medium"
                                    >
                                        {platform.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800/50 text-center">
                    <p className="text-gray-500 text-sm">
                        © {year} Johnathon Richardson. Crafted with passion and precision.
                    </p>
                </div>
            </div>
        </footer>
    );
}