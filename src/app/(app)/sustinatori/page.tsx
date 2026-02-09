"use client";

import { motion } from "framer-motion";

const echipeFotbal = [
    { name: "FCSB", emoji: "⚽" },
    { name: "Dinamo București", emoji: "⚽" },
    { name: "U Cluj", emoji: "⚽" },
    { name: "CFR Cluj", emoji: "⚽" },
    { name: "AFC Hermannstadt", emoji: "⚽" },
    { name: "FC Argeș", emoji: "⚽" },
    { name: "UTA Arad", emoji: "⚽" },
];

const inspectorate = [
    { name: "Inspectoratul Școlar Județean Ilfov", emoji: "🏫" },
    { name: "Inspectoratul Școlar Județean Sibiu", emoji: "🏫" },
    { name: "Inspectoratul Școlar Județean Călărași", emoji: "🏫" },
];

const organizatiiSportive = [
    { name: "Federația Română de Rugby", emoji: "🏉" },
    { name: "CS Dinamo Baschet", emoji: "🏀" },
    { name: "CS Dinamo Rugby", emoji: "🏉" },
    { name: "CS Dinamo Handbal", emoji: "🤾" },
];

const personalitati = [
    { name: "Liviu Vârciu", role: "Artist / Prezentator TV", emoji: "🌟" },
    { name: "Ilie Năstase", role: "Legendă a Tenisului Mondial", emoji: "🎾" },
    { name: "Marian Drăgulescu", role: "Campion Mondial la Gimnastică", emoji: "🤸" },
    { name: "Andreea Marin", role: "Prezentator TV / Ambasador Social", emoji: "🌟" },
    { name: "Johny Romano", role: "Personalitate Publică", emoji: "🌟" },
    { name: "Dan Alexa", role: "Antrenor / Fost Fotbalist", emoji: "⚽" },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

function SupporterCard({ name, emoji, role }: { name: string; emoji: string; role?: string }) {
    return (
        <motion.div
            variants={itemVariants}
            className="glass-soft surface-rounded p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
        >
            <div
                className="size-12 rounded-full flex items-center justify-center text-xl shrink-0"
                style={{
                    background:
                        "radial-gradient(60% 60% at 50% 50%, rgba(254,101,79,.15), rgba(255,255,255,.7))",
                }}
            >
                {emoji}
            </div>
            <div className="min-w-0">
                <div className="font-semibold text-sm truncate">{name}</div>
                {role && <div className="text-xs text-muted-foreground truncate">{role}</div>}
            </div>
        </motion.div>
    );
}

function SectionBlock({
    title,
    subtitle,
    items,
    glowClass,
}: {
    title: string;
    subtitle: string;
    items: { name: string; emoji: string; role?: string }[];
    glowClass?: string;
}) {
    return (
        <section className={`glass surface-rounded p-6 md:p-10 space-y-6 ${glowClass ?? ""}`}>
            <div className="space-y-1">
                <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
            <motion.div
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
            >
                {items.map((item) => (
                    <SupporterCard key={item.name} {...item} />
                ))}
            </motion.div>
        </section>
    );
}

export default function SustinatoriPage() {
    return (
        <div className="py-12 space-y-12 max-w-5xl mx-auto">
            {/* Hero */}
            <header className="text-center space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-3"
                >
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium"
                        style={{
                            borderColor: "var(--brand-orange-500)",
                            color: "var(--brand-orange-500)",
                            background: "rgba(254,101,79,0.06)",
                        }}
                    >
                        <span
                            className="size-2 rounded-full animate-pulse"
                            style={{ background: "var(--brand-orange-500)" }}
                        />
                        Mișcarea Națională AntiDrog
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                        Cei care ne{" "}
                        <span style={{ color: "var(--brand-orange-500)" }}>susțin</span>
                    </h1>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Echipe de fotbal, instituții, organizații sportive și personalități
                        publice care au ales să fie alături de mișcarea noastră pentru un
                        viitor fără dependențe.
                    </p>
                </motion.div>
            </header>

            {/* Echipe de fotbal */}
            <SectionBlock
                title="⚽ Echipe de Fotbal"
                subtitle="Cluburi din Liga I care susțin mișcarea antidrog"
                items={echipeFotbal}
                glowClass="glow-wrap glow-blue glow-peach"
            />

            {/* Inspectorate Școlare */}
            <SectionBlock
                title="🏫 Inspectorate Școlare"
                subtitle="Instituții de învățământ care promovează prevenția în școli"
                items={inspectorate}
            />

            {/* Organizații Sportive */}
            <SectionBlock
                title="🏆 Organizații Sportive"
                subtitle="Federații și cluburi sportive care se implică activ"
                items={organizatiiSportive}
                glowClass="glow-wrap glow-blue glow-peach"
            />

            {/* Personalități */}
            <SectionBlock
                title="🌟 Personalități Publice"
                subtitle="Oameni de marcă care dau voce mișcării"
                items={personalitati}
            />

            {/* CTA */}
            <section className="glow-wrap glow-blue glow-peach glass surface-rounded p-8 md:p-14 text-center space-y-5">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="space-y-3"
                >
                    <h2 className="text-2xl md:text-3xl font-extrabold">
                        Vrei să te alături{" "}
                        <span style={{ color: "var(--brand-orange-500)" }}>mișcării</span>?
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        Fie că ești o echipă sportivă, o instituție de învățământ sau o
                        personalitate publică — implicarea ta face diferența.
                    </p>
                </motion.div>
            </section>
        </div>
    );
}
