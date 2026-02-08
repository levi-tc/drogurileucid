"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import LatestArticles from "./LatestArticles";

/* ── animated counter ─────────────────────────────────────── */
function Counter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold" style={{ color: "var(--brand-orange-500)" }}>
        {count.toLocaleString()}+
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

/* ── placeholder story cards (until Payload API is connected) ─ */
const placeholderStories = [
  {
    author: "Maria D.",
    role: "Părinte",
    excerpt: "Am reușit să-mi ajut fiul să treacă peste dependență. Nu am fost singură — echipa asociației ne-a ghidat pas cu pas.",
    category: "family",
  },
  {
    author: "Andrei T.",
    role: "Voluntar",
    excerpt: "Am văzut cum un simplu atelier într-o școală poate schimba perspectiva a zeci de adolescenți. Prevenția funcționează.",
    category: "professional",
  },
  {
    author: "Centrul ENLA",
    role: "Organizație parteneră",
    excerpt: "Împreună cu asociația, am reușit să oferim tratament și speranță pentru zeci de persoane afectate de dependențe.",
    category: "organization",
  },
];

const categoryLabels: Record<string, string> = {
  personal: "Personal",
  organization: "Organizație",
  family: "Familie",
  professional: "Profesional",
};

const categoryColors: Record<string, string> = {
  personal: "#d6efff",
  organization: "#fed18c",
  family: "#fed99b",
  professional: "#d6efff",
};

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const prefix = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;

  return (
    <div className="space-y-20 md:space-y-28 py-10">
      {/* ═══ Hero ═══ */}
      <section className="relative min-h-[80vh] md:min-h-[calc(100vh-140px)] flex items-center">
        <div className="w-full px-6 md:px-0">
          <div className="mx-auto max-w-6xl grid md:grid-cols-[1.15fr_1fr] gap-14 items-center md:-translate-y-6 lg:-translate-y-10">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium" style={{ borderColor: "var(--brand-orange-500)", color: "var(--brand-orange-500)", background: "rgba(254,101,79,0.06)" }}>
                <span className="size-2 rounded-full animate-pulse" style={{ background: "var(--brand-orange-500)" }} />
                Mișcarea anti-drog
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Împreună{" "}
                <span style={{ color: "var(--brand-orange-500)" }}>contra dependențelor</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                O mișcare națională pentru prevenirea consumului de droguri. Împărtășește-ți povestea, conectează-te cu comunitatea și protejăm împreună visurile copiilor.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link href="/povesti">Împărtășește povestea ta</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white text-foreground border-black/15 hover:bg-white hover:text-primary transition-colors"
                >
                  <Link href="/despre-noi">Descoperă mișcarea</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <Image
                src={`${prefix}/asociatie.svg`}
                alt="Logo Asociația Drogurile Ucid Visurile Copiilor"
                width={500}
                height={500}
                className="w-full max-w-[400px] md:max-w-[460px] h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Impact Stats ═══ */}
      <section className="glow-wrap glow-blue glow-peach glass surface-rounded p-8 md:p-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Counter target={500} label="Persoane ajutate" />
          <Counter target={30} label="Școli vizitate" />
          <Counter target={15} label="Organizații partenere" />
          <Counter target={50} label="Povești împărtășite" />
        </motion.div>
      </section>

      {/* ═══ Featured Stories ═══ */}
      <section className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Povești din comunitate</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Oameni reali care au ales să vorbească. Fiecare poveste contează.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {placeholderStories.map((story, idx) => (
            <motion.div
              key={story.author}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass-soft surface-rounded p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-3">
                <div
                  className="size-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: categoryColors[story.category] }}
                >
                  {story.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{story.author}</div>
                  <div className="text-xs text-muted-foreground">{story.role}</div>
                </div>
                <span
                  className="ml-auto text-[10px] px-2 py-0.5 rounded-full font-medium"
                  style={{ background: categoryColors[story.category], color: "#1f2937" }}
                >
                  {categoryLabels[story.category]}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">&ldquo;{story.excerpt}&rdquo;</p>
              <Link href="/povesti" className="text-xs font-medium hover:underline" style={{ color: "var(--brand-orange-500)" }}>
                Citește mai mult →
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center pt-2">
          <Button asChild variant="outline">
            <Link href="/povesti">Vezi toate poveștile</Link>
          </Button>
        </div>
      </section>

      {/* ═══ How We Help ═══ */}
      <section className="space-y-8 glow-wrap glow-blue glow-peach glass surface-rounded p-8 md:p-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Cum te putem ajuta?</h2>
          <p className="text-muted-foreground">Alege opțiunea potrivită pentru situația ta</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {[
            { title: "Vorbește cu noi", desc: "Chat confidențial cu un membru al echipei", href: "/contact", cta: "Chat acum", emoji: "💬" },
            { title: "Împărtășește-ți povestea", desc: "Ajută-i pe alții prin experiența ta", href: "/povesti", cta: "Scrie povestea", emoji: "✍️" },
            { title: "Sfaturi și informații", desc: "Bibliotecă de resurse și ghiduri", href: "/resurse", cta: "Vezi resurse", emoji: "📚" },
            { title: "Organizații partenere", desc: "Descoperă cine susține mișcarea", href: "/organizatii", cta: "Vezi parteneri", emoji: "🤝" },
          ].map((card, idx) => {
            const isOrange = idx % 2 === 0;
            const btnBg = isOrange ? "#FE654F" : "#FED18C";
            const btnText = isOrange ? "#ffffff" : "#1f2937";
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="glass-soft surface-rounded p-6 flex flex-col justify-between items-center text-center h-full"
              >
                <div className="flex-1 flex flex-col items-center">
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-full size-10 ring-1 shadow-sm"
                    style={{
                      background: isOrange
                        ? "radial-gradient(60% 60% at 50% 50%, rgba(254,101,79,.35), rgba(255,255,255,.7))"
                        : "radial-gradient(60% 60% at 50% 50%, rgba(214,239,255,.7), rgba(255,255,255,.75))",
                      borderColor: "rgba(255,255,255,.6)",
                    }}
                  >
                    <span className="text-lg">{card.emoji}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 max-w-[28ch]">{card.desc}</p>
                </div>
                <div className="mt-6 w-full">
                  <Button
                    asChild
                    className="mx-auto w-[200px] hover:brightness-95"
                    style={{ backgroundColor: btnBg, color: btnText }}
                  >
                    <Link href={card.href}>{card.cta}</Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══ Projects ═══ */}
      <section className="glow-wrap glow-blue glow-peach glass surface-rounded p-8 md:p-12 space-y-10">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold">Proiectele noastre</h2>
          <p className="text-muted-foreground">Inițiative de prevenire, informare și suport</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Ateliere educaționale", desc: "Organizăm sesiuni interactive în școli și licee unde specialiștii noștri le explică elevilor pericolele consumului de droguri.", emoji: "🎓" },
            { title: "Campanii de conștientizare", desc: "Derulăm campanii multimedia care transmit mesaje puternice despre efectele devastatoare ale drogurilor asupra vieții tinerilor.", emoji: "📢" },
            { title: "Consiliere și suport", desc: "Oferim sesiuni gratuite de consiliere pentru tineri și familiile lor, ajutându-i să găsească soluții pentru a rămâne pe drumul cel bun.", emoji: "🤝" },
          ].map((p) => (
            <div key={p.title} className="glass-soft surface-rounded p-6">
              <div className="text-2xl mb-3">{p.emoji}</div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-semibold">Ce să te aștepți</h3>
          <p className="text-muted-foreground">Suntem aici să te ascultăm și să te sprijinim, niciodată să te judecăm</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Serviciile noastre sunt gratuite", emoji: "💚" },
            { title: "Tot ce ne spui este confidențial", emoji: "🔒" },
            { title: "Un spațiu sigur și confortabil", emoji: "🏠" },
            { title: "Sprijin fără judecată", emoji: "❤️" },
          ].map((f) => (
            <div key={f.title} className="glass-soft surface-rounded p-6">
              <div className="text-2xl mb-3">{f.emoji}</div>
              <p className="font-medium">{f.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Latest Articles ═══ */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Resurse și articole</h2>
          <p className="text-muted-foreground">Ghiduri, informații și materiale utile</p>
        </div>
        <LatestArticles />
        <div className="text-center">
          <Button asChild variant="outline">
            <Link href="/resurse">Vezi toate resursele</Link>
          </Button>
        </div>
      </section>

      {/* ═══ Share Your Story CTA ═══ */}
      <section className="glow-wrap glow-blue glow-peach glass surface-rounded p-8 md:p-14 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Povestea ta poate salva <span style={{ color: "var(--brand-orange-500)" }}>o viață</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Fie că ești o persoană care a trecut printr-o experiență, un părinte, sau o organizație — vocea ta contează. Împărtășește-ți povestea și ajută-i pe alții.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button asChild size="lg">
              <Link href="/povesti">Scrie-ți povestea</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contactează-ne</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
