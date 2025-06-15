// Update ContactForm.tsx
'use client';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-md mx-auto bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 shadow-xl"
        >
            <form onSubmit={handleSubmit(() => {})} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input
                        {...register('name', { required: true })}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-400">Name is required</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-400">Valid email is required</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea
                        rows={5}
                        {...register('message', { required: true })}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-400">Message is required</p>}
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg"
                >
                    Send Message
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-gray-400">Or contact me directly:</p>
                <div className="flex justify-center gap-4 mt-3">
                    <a href="mailto:Johnathon2Rich@gmail.com" className="text-blue-400 hover:text-blue-300">
                        Email
                    </a>
                    <a href="tel:+44789767896" className="text-blue-400 hover:text-blue-300">
                        Phone
                    </a>
                </div>
            </div>
        </motion.div>
    );
}