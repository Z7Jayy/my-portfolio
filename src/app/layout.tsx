// src/app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Johnathon Richardson | Software Engineer',
    description: 'Portfolio of Johnathon Richardson, Software Engineer specializing in mobile and web development',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}