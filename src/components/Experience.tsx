// src/components/Experience.tsx
export default function Experience() {
    return (
        <section id="experience" className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Education & Experience</h2>
            <div className="max-w-2xl mx-auto">
                <div className="border-l-2 border-blue-500 pl-6">
                    <div className="mb-8">
                        <h3 className="text-xl font-bold">DeMontfort University</h3>
                        <p className="text-gray-600 dark:text-gray-300">2022 - 2025</p>
                        <p className="text-gray-600 dark:text-gray-300">Software Engineering</p>
                        <div className="mt-4">
                            <h4 className="font-semibold">Notable Projects:</h4>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Module Selection Tool (Java, JavaFX)</li>
                                <li>Payment Processing System Prototype (Java)</li>
                            </ul>
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Projects portfolio and demo videos available upon request
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}