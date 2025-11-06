'use client';
import { motion } from 'framer-motion';
import Experience from '../Experience';

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 px-4"
            >
                Education & Experience
            </motion.h2>
            <Experience />
        </section>
    );
}
