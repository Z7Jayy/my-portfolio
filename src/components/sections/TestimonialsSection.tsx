// components/TestimonialsSection.tsx - Grid Version (No Profile Pictures)
'use client';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Mitchell",
            role: "Product Manager at TechCorp",
            text: "Johnathon's ability to transform complex requirements into elegant solutions is outstanding. His work on our mobile app exceeded all expectations.",
            rating: 5,
            featured: true
        },
        {
            name: "Michael Chen",
            role: "CTO at StartupHub",
            text: "Working with Johnathon was a game-changer for our project. His technical expertise and dedication to quality are unmatched.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "Lead Designer at CreativeFlow",
            text: "Johnathon brings ideas to life with precision and creativity. He's not just a developer—he's a problem solver who truly understands user needs.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-20 relative">
            <div className="absolute -top-16 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl" />

            <div className="relative max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 px-4">
                    What People Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group"
                        >
                            {/* Testimonial Card */}
                            <div className={`
                                relative bg-gradient-to-br from-gray-900/70 to-black/70 rounded-2xl p-6 border backdrop-blur-sm
                                transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full
                                ${testimonial.featured
                                ? 'border-gray-600/50 shadow-2xl shadow-gray-400/30'
                                : 'border-gray-600/50 hover:border-blue-400/30'
                            }
                            `}>
                                {/* Featured Badge */}
                                {testimonial.featured && (
                                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        ⭐ Featured
                                    </div>
                                )}

                                {/* Header */}
                                <div className="mb-4">
                                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                    <p className="text-gray-400 text-sm mt-1">{testimonial.role}</p>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-lg">⭐</span>
                                    ))}
                                    <span className="text-gray-400 text-sm ml-2 font-semibold">
                                        {testimonial.rating}/5
                                    </span>
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-300 text-sm leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Hover Effect Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}