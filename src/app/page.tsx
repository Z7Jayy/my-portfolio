// src/app/page.tsx
'use client';
import ClientLayout from '../components/ClientLayout';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import Experience from '../components/Experience';
import ImageWrapper from '../components/ImageWrapper';
import { motion } from 'framer-motion';

export default function Home() {
    const projects = [
        {
            title: "Smart Finance Manager App",
            description: "Cross-platform financial management application featuring real-time expense tracking, AI-powered budget analysis, and interactive financial trivia games.",
            technologies: ["Flutter", "Dart", "Firebase", "TensorFlow Lite", "Plaid API"],
            githubLink: "#",
            liveLink: "#",
            imageUrl: "/finance-app.jpg"
        },
        {
            title: "Cafe Ordering Mobile Application",
            description: "Mobile app for cafes allowing users to browse menus, place orders, and give feedback with real-time data syncing.",
            technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
            githubLink: "#",
            liveLink: "#",
            imageUrl: "/cafe-app.jpg"
        },
        {
            title: "Smart IoT Intrusion Detection",
            description: "Real-time IoT home security system with motion sensors, alerts, and mobile notifications.",
            technologies: ["ESP8266", "C++", "Blynk IoT"],
            githubLink: "#",
            liveLink: "#",
            imageUrl: "/iot-system.jpg"
        },
        {
            title: "The CryptoShow Web App",
            description: "Full-stack event management site for showcasing cryptographic devices.",
            technologies: ["HTML", "CSS", "PHP"],
            githubLink: "#",
            liveLink: "#",
            imageUrl: "/cryptoshow.jpg"
        }
    ];

    const skills = [
        { name: "JavaScript", level: 80 },
        { name: "Flutter/Dart", level: 85 },
        { name: "Kotlin", level: 75 },
        { name: "C++", level: 70 },
        { name: "Python", level: 65 },
        { name: "Java", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "TensorFlow Lite", level: 70 },
        { name: "Git", level: 85 }
    ];

    const softSkills = [
        "Problem-Solving",
        "Collaboration & Teamwork",
        "Effective Communication",
        "Time Management",
        "Adaptability"
    ];

    return (
        <ClientLayout>
            <div className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <section className="relative py-32 text-center overflow-hidden">
                    {/* Animated stars background */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full bg-white animate-pulse"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    width: `${Math.random() * 3 + 1}px`,
                                    height: `${Math.random() * 3 + 1}px`,
                                    opacity: Math.random() * 0.5 + 0.1,
                                    animationDuration: `${Math.random() * 5 + 3}s`
                                }}
                            />
                        ))}
                    </div>

                    <div className="relative max-w-3xl mx-auto px-4">
                        <motion.h1 initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                  Johnathon Richardson
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl mb-8 text-gray-300"
                        >
                            Software Engineer <span className="text-blue-300">|</span> Mobile & Web Developer
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex justify-center gap-4"
                        >
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
                            >
                                Contact Me
                            </a>
                            <a
                                href="https://www.linkedin.com/in/johnathon-richardson-65619a26a/"
                                target="_blank"
                                className="px-6 py-3 border border-gray-600 rounded-lg font-medium hover:bg-gray-800/50 transition-colors"
                            >
                                LinkedIn
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-12">
                    <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                // Update your Skills section in page.tsx
                <section id="skills" className="py-16 relative">
                    <div className="absolute -top-16 left-1/2 w-64 h-64 bg-purple-900/20 rounded-full filter blur-3xl -translate-x-1/2" />

                    <div className="relative container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-12 text-center">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Technical Skills
      </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {skills.map((skill, index) => (
                                <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-200">{skill.name}</span>
                                        <span className="text-blue-300">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold mt-16 mb-8 text-center text-gray-200">
                            Soft Skills
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                            {softSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -3 }}
                                    className="px-5 py-2 bg-gray-800 rounded-full border border-gray-700 shadow-md"
                                >
                                    <span className="text-blue-300">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <Experience />

                {/* Contact Section */}
                <section id="contact" className="py-12">
                    <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
                    <ContactForm />
                </section>
            </div>
        </ClientLayout>
    );
}