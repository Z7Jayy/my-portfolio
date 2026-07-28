// src/components/Experience.tsx
export default function Experience() {
    return (
        <section id="experience" className="py-12">
            <div className="max-w-4xl mx-auto space-y-10">

                {/* Education Section */}
                <div className="border-l-4 border-blue-500 pl-6">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">De Montfort University</h3>
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">BSc (Hons) Software Engineering</p>
                        <p className="text-gray-600 dark:text-gray-300">Sept 2021 - July 2025</p>
                        <p className="mt-2 text-green-700 dark:text-green-400 font-bold">
                            First Class Honours (Degree Mark: 80/100)
                        </p>

                        {/* Award Section */}
                        <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-600 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">🏆</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-amber-800 dark:text-amber-300">
                                        Best Final Year Project Prize
                                    </h4>
                                    <p className="text-amber-700 dark:text-amber-400 text-sm">
                                        Awarded for outstanding achievement in Software Engineering
                                    </p>
                                    <p className="text-amber-600 dark:text-amber-500 text-xs mt-1">
                                        Faculty of Computing, Engineering and Media • July 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Projects Section */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Key Technical Projects</h3>

                <div className="space-y-6">

                    {/* Full-Stack Physiotherapy Website (holistechwellness.com) */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold">Full-Stack Physiotherapy Website (Launched)</h4>
                        <p className="text-sm text-blue-500 dark:text-blue-400 font-mono mt-1">Tech: React, Firebase, Stripe, Resend API, Node.js</p>
                        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Engineered a production-ready booking platform serving UK and Anguilla markets with real-time scheduling.</li>
                            <li>Integrated **Stripe payments** with automated cancellation policies and refund processing.</li>
                            <li>Built a comprehensive **admin dashboard** for service management and customer communications.</li>
                            <li>Deployed scalable Firebase infrastructure handling concurrent bookings and automated email systems.</li>
                        </ul>
                    </div>

                    {/* Smart Finance Manager App */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold">Smart Finance Manager App (AI-Integrated)</h4>
                        <p className="text-sm text-blue-500 dark:text-blue-400 font-mono mt-1">Tech: Flutter, Dart, Firebase, TensorFlow Lite, Plaid API</p>
                        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Developed a cross-platform financial management app with real-time expense tracking and budget analysis.</li>
                            <li>Implemented **on-device AI** using TensorFlow Lite to predict monthly spending and generate personalized budget insights.</li>
                            <li>Integrated the **Plaid Sandbox API** for secure bank account linking and automatic transaction import.</li>
                        </ul>
                    </div>

                    {/* The 411 */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold">The 411 App (University Contract)</h4>
                        <p className="text-sm text-blue-500 dark:text-blue-400 font-mono mt-1">Tech: Flutter, Dart, Firebase</p>
                        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Contracted by the university to develop a mobile application focused on drug awareness and education.</li>
                            <li>Implemented comprehensive sobriety tracking features to support end-users.</li>
                            <li>Built a responsive, cross-platform UI using Flutter and Dart, with Firebase for secure data management.</li>
                        </ul>
                    </div>

                    {/* Bundle Madness E-Commerce */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold">Bundle Madness E-Commerce</h4>
                        <p className="text-sm text-blue-500 dark:text-blue-400 font-mono mt-1">Tech: React, Stripe, Node.js</p>
                        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Developed a full-stack e-commerce storefront for hair bundles at bundlemadnesshair.com.</li>
                            <li>Integrated Stripe configuration for secure, seamless checkout and payment processing.</li>
                            <li>Built a dynamic and responsive React frontend for optimal product browsing and user experience.</li>
                        </ul>
                    </div>

                    {/* Multiplayer Digital Dominoes */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold">Multiplayer Digital Dominoes</h4>
                        <p className="text-sm text-blue-500 dark:text-blue-400 font-mono mt-1">Tech: React, Colyseus, Node.js</p>
                        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Engineered a web-based digital dominoes gaming platform utilizing React state hooks.</li>
                            <li>Integrated Colyseus servers to synchronize multiplayer game rooms and manage real-time player states.</li>
                            <li>Developed custom gameplay animations for an immersive user experience.</li>
                        </ul>
                    </div>

                    {/* Smart IoT Intrusion Detection and Alert */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold">Smart IoT Intrusion Detection and Alert</h4>
                        <p className="text-sm text-blue-500 dark:text-blue-400 font-mono mt-1">Tech: ESP8266, Arduino IDE, C++, Blynk IoT Platform</p>
                        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Built a **real-time IoT home security system** using motion and IR sensors, buzzers, and LCD displays.</li>
                            <li>Integrated mobile app notifications and remote control via Blynk for real-time monitoring.</li>
                            <li>Enabled power-efficient operation through sleep modes and implemented sensor fusion for accurate threat detection.</li>
                        </ul>
                    </div>

                </div>

                <p className="mt-8 text-center text-gray-600 dark:text-gray-300 italic">
                    Additional projects (FinTech System Design) and detailed information are available upon request.
                </p>

            </div>
        </section>
    );
}