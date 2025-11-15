// components/ContactForm.tsx (Minimal Version with Logos)
'use client';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const contactMethods = [
        {
            name: 'Email',
            handle: 'jaecodedd@gmail.com',
            href: 'mailto:jaecodedd@gmail.com',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            ),
            color: 'blue'
        },
        {
            name: 'Instagram',
            handle: '@jaecodedd',
            href: 'https://www.instagram.com/jaecodedd',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            ),
            color: 'pink'
        },
        {
            name: 'LinkedIn',
            handle: 'Johnathon Richardson',
            href: 'https://www.linkedin.com/in/johnathon-richardson-65619a26a/',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            color: 'blue'
        },

    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-4xl mx-auto"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                    <motion.a
                        key={method.name}
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className={`
              group relative p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300
              hover:shadow-2xl hover:shadow-current/20
              ${method.color === 'blue' ? 'bg-blue-600/10 border-blue-500/30 text-blue-400 hover:bg-blue-600/20 hover:border-blue-400/50' : ''}
              ${method.color === 'pink' ? 'bg-pink-600/10 border-pink-500/30 text-pink-400 hover:bg-pink-600/20 hover:border-pink-400/50' : ''}
              ${method.color === 'green' ? 'bg-green-600/10 border-green-500/30 text-green-400 hover:bg-green-600/20 hover:border-green-400/50' : ''}
              ${method.color === 'gray' ? 'bg-gray-600/10 border-gray-500/30 text-gray-400 hover:bg-gray-600/20 hover:border-gray-400/50' : ''}
            `}
                    >
                        {/* Animated background effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-current/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                        {/* Icon */}
                        <div className="relative z-10 flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-current/20 to-current/10 border border-current/20">
                            {method.icon}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center">
                            <h3 className="font-bold text-lg text-white mb-1 group-hover:text-current transition-colors">
                                {method.name}
                            </h3>
                            <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                                {method.handle}
                            </p>
                        </div>

                        {/* Hover arrow indicator */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Additional Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 text-center p-6 bg-gradient-to-r from-gray-700/30 to-gray-800/30 rounded-2xl border border-gray-600/30 backdrop-blur-sm"
            >
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-green-400 font-semibold">Available for new projects</p>
                </div>
                <p className="text-gray-300 text-lg">
                    Feel free to reach out through any of these methods.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                    Preferred contact: Email or Instagram
                </p>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
                <motion.a
                    href="mailto:jaecodedd@gmail.com?subject=Portfolio%20Inquiry%20-%20Potential%20Project&body=Hi%20Johnathon,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20am%20interested%20in%20discussing%20a%20project.%0D%0A%0D%0ABest%20regards,"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full font-semibold text-white hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-blue-500/25 text-center"
                >
                    Quick Email
                </motion.a>

                <motion.a
                    href="https://www.instagram.com/jaecodedd"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-semibold text-white hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-pink-500/25 text-center flex items-center justify-center gap-2"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    DM on Instagram
                </motion.a>
            </motion.div>
        </motion.div>
    );
}