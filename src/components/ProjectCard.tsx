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
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glow-card group relative rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex flex-col h-full"
        >
            {/* Image Container with Fixed Aspect Ratio */}
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 rounded text-xs bg-gray-700 text-blue-300"
                        >
              {tech}
            </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-auto">
                    <a
                        href={project.githubLink}
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm"
                        target="_blank"
                    >
                        <span className="mr-1">GitHub</span>
                        <span>↗</span>
                    </a>
                    <a
                        href={project.liveLink}
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm"
                        target="_blank"
                    >
                        <span className="mr-1">Live Demo</span>
                        <span>↗</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}