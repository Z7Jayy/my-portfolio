// src/app/day1-club/support/page.tsx
import type { Metadata } from 'next';
import { Card, Eyebrow, Lead, Section, Title } from '../ui';

export const metadata: Metadata = {
    title: 'Support',
    description: 'Help with Day 1 Club, plus free support lines.',
};

type Line = { name: string; detail: string; phone?: string; url?: string };

// Same lines as the app (lib/domain/support_lines.dart). Checked November 2026.
const helplines: { country: string; emergency: string; lines: Line[] }[] = [
    {
        country: 'United Kingdom',
        emergency: '999',
        lines: [
            { name: 'FRANK', detail: 'Drugs advice · open 24/7', phone: '0300 123 6600' },
            {
                name: 'Drinkline',
                detail: 'Alcohol advice (England) · weekdays 9am–8pm, weekends 11am–4pm',
                phone: '0300 123 1110',
            },
        ],
    },
    {
        country: 'United States',
        emergency: '911',
        lines: [
            {
                name: 'SAMHSA National Helpline',
                detail: 'Free, confidential treatment referral · open 24/7',
                phone: '1-800-662-4357',
            },
            {
                name: '988 Lifeline',
                detail: 'Call or text 988 · alcohol and drug concerns too · open 24/7',
                phone: '988',
            },
        ],
    },
    {
        country: 'Canada',
        emergency: '911',
        lines: [
            {
                name: 'Health Canada',
                detail: 'Helplines and services across Canada',
                url: 'https://www.canada.ca/en/health-canada/services/substance-use/get-help/get-help-problematic-substance-use.html',
            },
            {
                name: '9-8-8 Suicide Crisis Helpline',
                detail: 'Call or text 9-8-8 if you’re in crisis · open 24/7',
                phone: '988',
            },
        ],
    },
    {
        country: 'Australia',
        emergency: '000',
        lines: [
            {
                name: 'National Alcohol and Other Drug Hotline',
                detail: 'Free, confidential · open 24/7',
                phone: '1800 250 015',
            },
        ],
    },
    {
        country: 'New Zealand',
        emergency: '111',
        lines: [
            {
                name: 'Alcohol Drug Helpline',
                detail: 'Free, confidential · open 24/7',
                phone: '0800 787 797',
            },
        ],
    },
];

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
                <p>
                    These services are free and confidential. The app shows the ones for your
                    country in Settings → Support.
                </p>
                <div className="space-y-6">
                    {helplines.map(({ country, emergency, lines }) => (
                        <div key={country}>
                            <p className="mb-2 text-sm font-semibold text-white">
                                {country}{' '}
                                <span className="font-normal text-white/50">
                                    · emergency {emergency}
                                </span>
                            </p>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {lines.map(({ name, detail, phone, url }) => (
                                    <div
                                        key={name}
                                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                                    >
                                        <p className="font-medium text-white">{name}</p>
                                        <p className="text-sm text-white/50">{detail}</p>
                                        {phone ? (
                                            <a
                                                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                                                className="mt-2 block font-semibold text-[#7CF29C]"
                                            >
                                                {phone}
                                            </a>
                                        ) : (
                                            <a
                                                href={url}
                                                className="mt-2 block font-semibold text-[#7CF29C] hover:underline"
                                            >
                                                Visit website
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <p>
                    Somewhere else?{' '}
                    <a
                        href="https://findahelpline.com/topics/substance-use"
                        className="text-[#7CF29C] hover:underline"
                    >
                        Find a Helpline
                    </a>{' '}
                    lists free drug and alcohol support in every country. In an emergency, call
                    your local emergency number.
                </p>
            </Section>

            <Card>
                <strong className="font-semibold text-white">Stopping drinking safely:</strong> if
                you drink heavily most days, stopping suddenly can be dangerous. Speak to a doctor
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
