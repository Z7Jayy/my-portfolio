// src/components/ClientLayout.tsx
'use client';
import { motion } from 'framer-motion';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Analytics from '../app/analytics';

export default function ClientLayout({
                                         children,
                                     }: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen"
            >
                {children}
            </motion.main>
            <Footer />
            <Analytics />
        </>
    );
}