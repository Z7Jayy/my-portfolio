'use client';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function ContactSection() {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 px-4"
                >
                    Reach Out
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 mb-12 text-center px-4"
                >
                    Is there a project your thinking of starting? Reach out!!
                </motion.p>

                <ContactForm />
            </div>
        </section>
    );
}
