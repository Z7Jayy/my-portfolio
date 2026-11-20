// src/app/day1-club/privacy/page.tsx
import type { Metadata } from 'next';
import { Bullets, Card, Eyebrow, Section, Title, Updated } from '../ui';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'How Day 1 Club handles your data: it stays on your phone.',
};

export default function PrivacyPage() {
    return (
        <article>
            <Eyebrow>Day 1 Club</Eyebrow>
            <Title>Privacy Policy</Title>
            <Updated date="20 November 2026" />

            <Card>
                <strong className="font-semibold text-white">The short version:</strong> Day 1
                Club doesn’t collect your personal data. There’s no account, and everything you
                track is stored only on your phone. We never see it, and it’s never sold or
                shared. The only things that ever leave your phone are an anonymous crash report
                if the app breaks, and, if you buy Plus, an anonymous record of that purchase.
            </Card>

            <Section title="Who we are">
                <p>
                    Day 1 Club is an app made by Johnathon Richardson (trading as JRCODEDD), an
                    independent developer based in the United Kingdom. If you have any questions
                    about this policy, email{' '}
                    <a href="mailto:jrcodedd@gmail.com" className="text-[#7CF29C] hover:underline">
                        jrcodedd@gmail.com
                    </a>
                    .
                </p>
            </Section>

            <Section title="What the app stores, and where">
                <p>To work, the app saves the following on your device only:</p>
                <Bullets
                    items={[
                        'The habits you track and the names you give them',
                        'When each streak started, any goals you set, and your past streaks',
                        'Optional spending and usage estimates, used to work out money saved',
                        'Your daily tap-ins',
                        'Breaks you choose to log, including any “what was going on” option or note you add',
                    ]}
                />
                <p>
                    This information can be personal, including details about alcohol, drug or
                    tobacco use. That’s exactly why it never leaves your phone. It isn’t sent to
                    us or to anyone else.
                </p>
            </Section>

            <Section title="What we don’t do">
                <Bullets
                    items={[
                        'No accounts or sign-in',
                        'No analytics, advertising or tracking',
                        'No selling or sharing of data',
                        'Nothing you track or type is ever sent anywhere',
                    ]}
                />
            </Section>

            <Section title="Crash reports">
                <p>
                    If Day 1 Club crashes or hits an error, it sends a crash report to Sentry
                    (Functional Software, Inc.), the service we use to find and fix bugs. A report
                    contains technical details only: what went wrong and where in the app, the app
                    version, and your phone’s model and operating system version.
                </p>
                <p>
                    It never includes your streaks, their names, your notes or anything else you’ve
                    entered. It isn’t linked to you, and we’ve set it up not to store your IP
                    address. Reports are stored in the EU and deleted automatically after a limited
                    time.
                </p>
            </Section>

            <Section title="Notifications">
                <p>
                    If the app sends you reminders, they’re scheduled on your device. Nothing about
                    them is sent to us.
                </p>
            </Section>

            <Section title="Backups">
                <p>
                    If you back up your phone with iCloud or Google, your phone’s backup may include
                    Day 1 Club’s data. Those backups are handled by Apple or Google under their own
                    privacy policies, not by us.
                </p>
            </Section>

            <Section title="Purchases">
                <p>
                    Day 1 Club Plus is an optional subscription or one-off purchase. Payments are
                    handled by Apple (App Store) or Google (Google Play). We never see your card
                    or payment details.
                </p>
                <p>
                    To check what you’ve bought and unlock Plus, the app uses RevenueCat, a
                    purchase-management service. RevenueCat receives your purchase history (which
                    plan, when, and whether it’s active) with a random ID created by the app. It
                    isn’t linked to your name, email or Apple ID, and it never includes anything
                    you track in the app.
                </p>
            </Section>

            <Section title="Deleting your data">
                <p>
                    You’re always in control. Go to <strong className="text-white">Settings → Erase
                    all data</strong> in the app, or simply delete the app. Because we never hold a
                    copy, there’s nothing left on our side.
                </p>
            </Section>

            <Section title="Your rights">
                <p>
                    Under UK data protection law you have rights over your personal data. As we
                    don’t collect or hold any, there’s nothing for us to access, correct or delete,
                    but you’re welcome to contact us with any questions. You can also complain to
                    the Information Commissioner’s Office (ico.org.uk).
                </p>
            </Section>

            <Section title="Age">
                <p>Day 1 Club is intended for adults aged 18 and over.</p>
            </Section>

            <Section title="Changes to this policy">
                <p>
                    If this policy changes, we’ll update the date at the top of this page. If a
                    change affects how your data is handled, we’ll let you know in the app first.
                </p>
            </Section>
        </article>
    );
}
