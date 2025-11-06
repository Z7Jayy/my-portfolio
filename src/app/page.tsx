'use client';

import ClientLayout from '@/components/ClientLayout';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import StarTrailBackground from '@/components/StarTrailBackground';

// Section Imports
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

// ✅ Home Page Component
export default function Home() {
    return (
        <ClientLayout>
            {/* Global UI Layers */}
            <ScrollProgressBar />
            <StarTrailBackground />

            {/* Main Sections */}
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
        </ClientLayout>
    );
}
