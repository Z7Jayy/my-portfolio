// src/components/ProjectCard.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
    imageUrl: string;
    metrics?: {
        [key: string]: string;
    };
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: '0 0 50px rgba(255,255,255,0.15)' }}
            className="glow-card group relative rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex flex-col h-full"
        >
            {/* Image Container with Fixed Aspect Ratio */}
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />

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

                <div className="flex gap-4 mt-auto">

                    <motion.a
                        whileHover={{ scale: 1.05, textShadow: '0 0 10px rgba(59,130,246,0.8)' }}
                        href={project.liveLink}
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm font-medium"
                        target="_blank"
                    >
                        <span className="mr-1">Live Demo</span>
                        <span>↗</span>
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}