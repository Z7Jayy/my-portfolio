// src/components/ProjectCard.tsx
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
    imageUrl: string;
    videoUrl?: string; // Optional: for looping thumbnail or YouTube embed
    metrics?: {
        [key: string]: string;
    };
}

export default function ProjectCard({ project }: { project: Project }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: '0 0 50px rgba(255,255,255,0.15)' }}
                className="glow-card group relative rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex flex-col h-full"
            >
                {/* Media Container (Video loop or Image) */}
                <div
                    className="relative w-full h-48 overflow-hidden bg-black cursor-pointer"
                    onClick={() => project.videoUrl && setIsModalOpen(true)}
                >
                    {project.videoUrl && project.videoUrl.endsWith('.mp4') ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 hover:opacity-100"
                        >
                            <source src={project.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 pointer-events-none" />

                    {/* Play Button Overlay hint if video exists */}
                    {project.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                            <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                                Watch Walkthrough ▶
                            </span>
                        </div>
                    )}

                    {/* Live Project Metrics Overlay */}
                    {project.metrics && (
                        <div className="absolute bottom-2 left-2 right-2 flex gap-2 flex-wrap">
                            {Object.entries(project.metrics).map(([key, value]) => (
                                <motion.div
                                    key={key}
                                    whileHover={{ scale: 1.1 }}
                                    className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs font-semibold text-white border border-white/20"
                                >
                                    {value}
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gray-200 transition-colors">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 rounded text-xs bg-gray-700/60 text-blue-300 border border-gray-600/50"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-auto items-center">
                        {project.videoUrl && (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm font-medium mr-2"
                            >
                                <span className="mr-1">Watch Walkthrough</span>
                                <span>▶</span>
                            </button>
                        )}

                        {project.liveLink && project.liveLink !== "#" ? (
                            <motion.a
                                whileHover={{ scale: 1.05, textShadow: '0 0 10px rgba(59,130,246,0.8)' }}
                                href={project.liveLink}
                                className="text-gray-300 hover:text-white transition-colors flex items-center text-sm font-medium"
                                target="_blank"
                            >
                                <span className="mr-1">Live Demo</span>
                                <span>↗</span>
                            </motion.a>
                        ) : (
                            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                                In Development
                            </span>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Video Modal Overlay */}
            <AnimatePresence>
                {isModalOpen && project.videoUrl && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-2xl p-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-3 border-b border-gray-800">
                                <h3 className="text-lg font-bold text-white">{project.title} - Walkthrough</h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-400 hover:text-white text-xl font-bold px-2 py-1 rounded"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                                {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
                                    <iframe
                                        src={`${project.videoUrl}?autoplay=1`}
                                        title={project.title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <video
                                        controls
                                        autoPlay
                                        playsInline
                                        className="w-full h-full object-contain"
                                    >
                                        <source src={project.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}