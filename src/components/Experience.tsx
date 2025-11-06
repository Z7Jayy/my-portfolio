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

                    {/* Cafe Ordering Mobile Application */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold">Cafe Ordering Mobile Application</h4>
                        <p className="text-sm text-blue-500 dark:text-blue-400 font-mono mt-1">Tech: Kotlin, Jetpack Compose, Firebase Realtime Database</p>
                        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Developed a mobile app for local cafes enabling users to browse menus, place orders, and submit feedback.</li>
                            <li>Designed intuitive UIs with real-time menu and order data syncing via Firebase.</li>
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