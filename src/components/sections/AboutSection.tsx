'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section id="about" className="py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 px-4">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            First-Class BSc (Hons) Software Engineering graduate with hands-on experience building
                            full-stack Websites & Mobile Apps, IoT Systems, and AI-integrated systems.
                            Proven ability to develop secure, scalable, and user-friendly applications from concept to
                            deployment. Actively seeking a role where I can continue learning, grow technically, and contribute meaningfully to high-impact tech projects.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            My approach combines technical excellence with user-centered design, ensuring every project delivers both functionality and visually.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                            {["📱 Mobile Development", "🌐 Web Development", "🔧 IoT Solutions"].map((skill, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-4 py-2 bg-gray-800/60 border border-gray-600/50 rounded-full text-gray-300 text-sm font-medium"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-gray-200">Quick Stats</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Projects Completed</span>
                                <span className="text-2xl font-bold text-gray-200">10+</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Technologies Mastered</span>
                                <span className="text-2xl font-bold text-gray-200">15+</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Years of Experience</span>
                                <span className="text-2xl font-bold text-gray-200">3+</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
