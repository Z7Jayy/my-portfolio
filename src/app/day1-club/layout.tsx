// src/app/day1-club/layout.tsx
// Shared shell for the Day 1 Club pages (landing, privacy, support).
import type { Metadata } from 'next';
import Link from 'next/link';
import { Playfair_Display, Poppins } from 'next/font/google';

const display = Playfair_Display({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-d1-display',
});

const body = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-d1-body',
});

export const metadata: Metadata = {
    title: {
        default: 'Day 1 Club',
        template: '%s · Day 1 Club',
    },
    description:
        'Take a break from cannabis, alcohol, vaping or smoking. Track your days, your savings and your milestones. Private, on your phone.',
};

export default function Day1ClubLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={`${display.variable} ${body.variable} relative min-h-screen overflow-hidden bg-[#09090D] text-[#F5F5F7]`}
            style={{ fontFamily: 'var(--font-d1-body)' }}
        >
            {/* Soft glow, same feel as the app */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-48 -right-40 h-[520px] w-[520px] rounded-full"
                style={{
                    background:
                        'radial-gradient(circle, rgba(124,242,156,0.18) 0%, rgba(124,242,156,0) 70%)',
                }}
            />

            <header className="relative mx-auto flex max-w-2xl items-center justify-between px-5 pt-8">
                <Link href="/day1-club" className="flex items-center gap-3">
                    <span
                        className="grid h-10 w-10 place-items-center rounded-xl text-lg font-bold text-[#0B0B10]"
                        style={{ background: 'linear-gradient(135deg,#7CF29C,#3DD9C1)' }}
                    >
                        1
                    </span>
                    <span
                        className="text-xl font-bold"
                        style={{ fontFamily: 'var(--font-d1-display)' }}
                    >
                        Day 1 Club
                    </span>
                </Link>
                <nav className="flex gap-5 text-sm text-white/60">
                    <Link href="/day1-club/support" className="hover:text-white">
                        Support
                    </Link>
                    <Link href="/day1-club/privacy" className="hover:text-white">
                        Privacy
                    </Link>
                </nav>
            </header>

            <main className="relative mx-auto max-w-2xl px-5 pb-20 pt-12">{children}</main>

            <footer className="relative mx-auto max-w-2xl border-t border-white/10 px-5 py-8 text-xs text-white/40">
                <p>
                    Day 1 Club is made by Johnathon Richardson (JRCODEDD), an independent
                    developer in the UK.{' '}
                    <a href="mailto:jrcodedd@gmail.com" className="text-white/60 hover:text-white">
                        jrcodedd@gmail.com
                    </a>
                </p>
                <p className="mt-2">
                    Day 1 Club is a personal tracking tool, not a medical service.
                </p>
            </footer>
        </div>
    );
}
