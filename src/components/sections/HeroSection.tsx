'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 -mt-20">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Main Logo */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-0 px-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img
                            src="/JRCODED.png"
                            alt="JRCoded Logo"
                            className="inline-block w-4/5 max-w-3xl h-auto mx-auto"
                        />
                    </motion.h1>

                    {/* Move “Available for Hire” Badge BELOW logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="floating mt-[-0.5rem] mb-2"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full backdrop-blur-sm">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-green-300 text-sm font-medium">Available for Hire</span>
                        </div>
                    </motion.div>


                    {/* Role */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl sm:text-2xl md:text-3xl mb-4 text-gray-300 font-semibold mt-[-0.25rem]"
                    >
                        Software Engineer
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-base sm:text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto px-4"
                    >
                        Creating professional mobile and web solutions with{' '}
                        <span className="text-gray-300 font-semibold">tailored designs</span>{' '}
                        and{' '}
                        <span className="text-gray-300 font-semibold">technical precision</span>.
                    </motion.p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12 px-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="shimmer-button px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-200 to-gray-400 rounded-full font-semibold shadow-lg text-gray-900 hover:shadow-white/40 transition-all text-center text-sm sm:text-base relative z-10"
                        >
                            Let's Connect
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="shimmer-button px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-400 rounded-full font-semibold hover:bg-white/5 transition-all text-gray-300 text-center text-sm sm:text-base relative overflow-hidden"
                        >
                            View My Work
                        </motion.a>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
                        <motion.a
                            whileHover={{ y: -3, scale: 1.1 }}
                            href="https://github.com/Z7Jayy"
                            target="_blank"
                            className="text-gray-400 hover:text-gray-200 transition-colors text-base sm:text-lg font-medium"
                        >
                            GitHub
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3, scale: 1.1 }}
                            href="https://www.linkedin.com/in/johnathon-richardson-65619a26a/"
                            target="_blank"
                            className="text-gray-400 hover:text-gray-200 transition-colors text-base sm:text-lg font-medium"
                        >
                            LinkedIn
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3, scale: 1.1 }}
                            href="mailto:jaecodedd@gmail.com"
                            className="text-gray-400 hover:text-gray-200 transition-colors text-base sm:text-lg font-medium"
                        >
                            Email
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
