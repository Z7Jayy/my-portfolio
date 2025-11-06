'use client';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import { projects } from '@/data/projects';
import { h2 } from 'framer-motion/client';

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 px-4">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
