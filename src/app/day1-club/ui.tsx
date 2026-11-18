// src/app/day1-club/ui.tsx
// Small building blocks shared by the Day 1 Club pages.

export function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
            {children}
        </p>
    );
}

export function Title({ children }: { children: React.ReactNode }) {
    return (
        <h1
            className="mt-2 text-4xl font-bold leading-tight sm:text-5xl"
            style={{ fontFamily: 'var(--font-d1-display)' }}
        >
            {children}
        </h1>
    );
}

export function Lead({ children }: { children: React.ReactNode }) {
    return <p className="mt-4 text-base font-light leading-relaxed text-white/70">{children}</p>;
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mt-10">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="mt-3 space-y-3 text-[15px] font-light leading-relaxed text-white/75">
                {children}
            </div>
        </section>
    );
}

export function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="mt-6 rounded-3xl border border-[#7CF29C]/30 bg-[#7CF29C]/[0.07] p-5 text-[15px] leading-relaxed text-white/80">
            {children}
        </div>
    );
}

export function Bullets({ items }: { items: React.ReactNode[] }) {
    return (
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7CF29C]" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export function Updated({ date }: { date: string }) {
    return <p className="mt-3 text-sm text-white/40">Last updated {date}</p>;
}
