// src/app/day1-club/support/page.tsx
import type { Metadata } from 'next';
import { Card, Eyebrow, Lead, Section, Title } from '../ui';

export const metadata: Metadata = {
    title: 'Support',
    description: 'Help with Day 1 Club, plus free support lines.',
};

const faqs: { q: string; a: React.ReactNode }[] = [
    {
        q: 'Is my data private?',
        a: 'Yes. There’s no account, and everything you track stays on your phone. We never see it.',
    },
    {
        q: 'How do I log a break?',
        a: 'Open the streak and tap “Log a break” under the tap-in button, or use the ••• menu. Your counter goes back to Day 1.',
    },
    {
        q: 'Does a break wipe my progress?',
        a: 'No. Your old streak is saved to your history, and your best streak and all-time totals (days clean and money saved) are kept.',
    },
    {
        q: 'What’s the daily tap-in?',
        a: 'A quick daily check-in: hold the button to log that you’re still going. The app counts how many days in a row you’ve checked in, which keeps you in the habit of showing up. It’s separate from your streak, which is your days clean.',
    },
    {
        q: 'How do goals work?',
        a: 'Pick a finish line, like a 30-day T-break or a dry month, when you add a streak, or later from the ••• menu. When you hit it, you can keep going, set a new goal or mark it done.',
    },
    {
        q: 'Why did the app change colour?',
        a: 'The app takes on the colours of your main streak. With more than one, it uses your longest-running streak, or the one you choose with “Make main streak” in the ••• menu.',
    },
    {
        q: 'How do I delete my data?',
        a: 'Go to Settings → Erase all data, or delete the app. Nothing is stored anywhere else.',
    },
    {
        q: 'I changed phones and my streaks are gone',
        a: 'Day 1 Club stores everything on your device. Restoring your new phone from an iCloud or Google backup of your old one should bring your data with it.',
    },
];

export default function SupportPage() {
    return (
        <article>
            <Eyebrow>Day 1 Club</Eyebrow>
            <Title>Support</Title>
            <Lead>
                Questions, bugs or ideas? Email{' '}
                <a href="mailto:jrcodedd@gmail.com" className="text-[#7CF29C] hover:underline">
                    jrcodedd@gmail.com
                </a>{' '}
                and we’ll get back to you, usually within a few days.
            </Lead>

            <Section title="Common questions">
                <div className="space-y-3">
                    {faqs.map(({ q, a }) => (
                        <details
                            key={q}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white">
                                {q}
                                <span className="text-white/40 transition-transform group-open:rotate-45">
                                    +
                                </span>
                            </summary>
                            <p className="mt-3 text-[15px] font-light leading-relaxed text-white/70">
                                {a}
                            </p>
                        </details>
                    ))}
                </div>
            </Section>

            <Section title="Need to talk to someone?">
                <p>These services are free and confidential:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="font-medium text-white">FRANK</p>
                        <p className="text-sm text-white/50">Drugs advice · open 24/7</p>
                        <a href="tel:03001236600" className="mt-2 block font-semibold text-[#7CF29C]">
                            0300 123 6600
                        </a>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="font-medium text-white">Drinkline</p>
                        <p className="text-sm text-white/50">
                            Alcohol advice (England) · weekdays 9am–8pm, weekends 11am–4pm
                        </p>
                        <a href="tel:03001231110" className="mt-2 block font-semibold text-[#7CF29C]">
                            0300 123 1110
                        </a>
                    </div>
                </div>
                <p>In an emergency, call 999 or your local emergency number.</p>
            </Section>

            <Card>
                <strong className="font-semibold text-white">Stopping drinking safely:</strong> if
                you drink heavily most days, stopping suddenly can be dangerous. Speak to your GP
                or a local alcohol service before you stop.
            </Card>

            <Section title="Medical disclaimer">
                <p>
                    Day 1 Club is a personal tracking and motivation tool. It isn’t medical advice,
                    diagnosis or treatment, and it isn’t a substitute for help from a doctor or
                    other health professional.
                </p>
            </Section>
        </article>
    );
}
