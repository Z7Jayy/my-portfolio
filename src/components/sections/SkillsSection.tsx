'use client';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 relative">
            <div className="absolute -top-16 left-1/2 w-96 h-96 bg-white/5 rounded-full filter blur-3xl -translate-x-1/2" />

            <div className="relative max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 px-4">
                    Technical Expertise
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        { title: "Languages", icon: "", data: skills.languages },
                        { title: "Frameworks", icon: "", data: skills.frameworks },
                        { title: "Tools & Platforms", icon: "", data: skills.tools },
                    ].map((group, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-gray-900/70 to-black/70 rounded-2xl p-6 sm:p-8 border border-gray-700/50 backdrop-blur-sm"
                        >
                            <div className="text-4xl mb-4">{group.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-200">{group.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.data.map((item, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gray-800/60 border border-gray-700/50 rounded-lg text-sm text-gray-300">
                    {item}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
