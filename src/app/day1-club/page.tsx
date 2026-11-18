// src/app/day1-club/page.tsx
import Link from 'next/link';
import { Bullets, Eyebrow, Lead, Title } from './ui';

export default function Day1ClubPage() {
    return (
        <article>
            <Eyebrow>Coming soon to the App Store</Eyebrow>
            <Title>
                Every streak starts with{' '}
                <span
                    style={{
                        background: 'linear-gradient(135deg,#7CF29C,#3DD9C1)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    Day 1.
                </span>
            </Title>
            <Lead>
                Take a break from cannabis, alcohol, vaping or smoking. Watch the days, and the
                money, stack up. Private, on your phone, no account needed.
            </Lead>

            <div className="mt-8">
                <Bullets
                    items={[
                        'A live counter, down to the second',
                        'Money saved, and what it could buy instead',
                        'Goals like a 30-day T-break or a dry month',
                        'Milestones and ranks from Day One to Three-Peat',
                        'A daily tap-in to keep you showing up',
                        'Honest, judgement-free break logging that never wipes your progress',
                    ]}
                />
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm">
                <Link
                    href="/day1-club/support"
                    className="rounded-full px-5 py-2.5 font-semibold text-[#0B0B10]"
                    style={{ background: 'linear-gradient(135deg,#7CF29C,#3DD9C1)' }}
                >
                    Support
                </Link>
                <Link
                    href="/day1-club/privacy"
                    className="rounded-full border border-white/15 px-5 py-2.5 font-medium text-white/80 hover:text-white"
                >
                    Privacy Policy
                </Link>
            </div>
        </article>
    );
}
