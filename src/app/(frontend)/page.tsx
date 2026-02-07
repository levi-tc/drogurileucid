"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-28 md:space-y-32 py-10">
      {/* Hero */}
      <section className="relative min-h-[80vh] md:min-h-[calc(100vh-140px)] flex items-center">
        <div className="w-full px-6 md:px-0">
          <div className="mx-auto max-w-6xl grid md:grid-cols-[1.15fr_1fr] gap-14 items-center md:-translate-y-6 lg:-translate-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Suntem alături de tine <span style={{ color: "var(--brand-orange-500)" }}>la fiecare pas</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                Primește sprijin gratuit și confidențial pentru prevenirea consumului de droguri. Suntem aici să te ajutăm să iei decizii sănătoase pentru viitorul tău.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">Vorbește cu noi</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-500 border-black hover:bg-white hover:text-primary transition-colors"
                >
                  <Link href="/despre-noi">Află mai mult</Link>
                </Button>
              </div>
            </div>
            <TiltCard>
              <div className="surface-rounded border-4 border-white overflow-hidden shadow-xl">
                <div className="relative aspect-[16/10] md:aspect-[4/3] w-full">
                  <Image
                    src="/kids_playing.jpg"
                    alt="Copii jucându-se în parc"
                    fill
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="space-y-8 glow-wrap glow-blue glow-peach glass surface-rounded p-8 md:p-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Cum te putem ajuta?</h2>
          <p className="text-muted-foreground">Alege opțiunea potrivită pentru situația ta</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {[
            {
              title: "Vorbește cu noi",
              desc: "Chat confidențial cu un membru al echipei",
              href: "/contact",
              cta: "Chat acum",
            },
            {
              title: "Povești reale",
              desc: "Citește și împărtășește experiențe",
              href: "/povesti",
              cta: "Vezi povești",
            },
            {
              title: "Sfaturi și informații",
              desc: "Bibliotecă de resurse și ghiduri",
              href: "/resurse",
              cta: "Vezi resurse",
            },
            {
              title: "Recomandă un caz",
              desc: "Trimite o recomandare pentru sprijin",
              href: "/contact",
              cta: "Trimite recomandare",
            },
          ].map((card, idx) => {
            const isOrange = idx % 2 === 0;
            const btnBg = isOrange ? "#FE654F" : "#FED18C";
            const btnText = isOrange ? "#ffffff" : "#1f2937";
            const emojis = ["💬", "📖", "📚", "📨"] as const;
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
                    <span className="text-lg">{emojis[idx]}</span>
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

      {/* About */}
      <section className="glow-wrap glow-blue glow-peach glass surface-rounded p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold">Despre noi</h2>
            <p>
              Asociația „Drogurile ucid visurile copiilor" este o organizație non-guvernamentală dedicată prevenirii consumului de droguri și sprijinirii tinerilor și familiilor afectate.
            </p>
            <p className="text-muted-foreground">
              Prin campanii educaționale, programe de consiliere și colaborare cu comunitatea, protejăm visurile copiilor și construim un viitor mai sănătos pentru toți.
            </p>
            <div className="pt-2">
              <Button asChild>
                <Link href="/despre-noi">Află mai multe despre misiunea noastră</Link>
              </Button>
            </div>
          </div>
          <div className="surface-rounded glass-soft overflow-hidden border shadow-xl">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/despre-noi.png"
                alt="Despre noi – Asociația Drogurile ucid visurile copiilor"
                fill
                sizes="(min-width: 768px) 560px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects + Expectations (combined) */}
      <section className="glow-wrap glow-blue glow-peach glass surface-rounded p-8 md:p-12 space-y-10">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold">Proiectele noastre</h2>
          <p className="text-muted-foreground">Inițiative de prevenire, informare și suport</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Ateliere educaționale",
              desc:
                "Organizăm sesiuni interactive în școli și licee unde specialiștii noștri le explică elevilor pericolele consumului de droguri.",
              emoji: "🎓",
            },
            {
              title: "Campanii de conștientizare",
              desc:
                "Derulăm campanii multimedia care transmit mesaje puternice despre efectele devastatoare ale drogurilor asupra vieții tinerilor.",
              emoji: "📢",
            },
            {
              title: "Consiliere și suport",
              desc:
                "Oferim sesiuni gratuite de consiliere pentru tineri și familiile lor, ajutându-i să găsească soluții pentru a rămâne pe drumul cel bun.",
              emoji: "🤝",
            },
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

      {/* Unified Resources + Gallery */}
      <section className="glow-wrap glow-blue glow-peach glass surface-rounded p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold">Resurse și galerie</h2>
            <p className="text-muted-foreground max-w-prose">
              Descoperă materiale utile și imagini din proiectele noastre. Am adunat ghiduri, recomandări și momente surprinse în teren pentru a te inspira și informa.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link href="/resurse">Vezi resurse</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/galerie">Vezi galerie</Link>
              </Button>
            </div>
          </div>
          <div
            className="group relative"
            onMouseMove={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              el.style.setProperty('--mx', `${x}px`);
              el.style.setProperty('--my', `${y}px`);
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  'radial-gradient(260px 260px at var(--mx) var(--my), rgba(254,101,79,.22), transparent 70%), radial-gradient(340px 240px at calc(var(--mx) + 120px) calc(var(--my) - 100px), rgba(214,239,255,.35), transparent 70%)',
                mixBlendMode: 'multiply',
              }}
            />
            <div className="grid grid-cols-2 gap-4">
              {["#d6efff", "#fed18c", "#fed99b", "#fe654f"].map((c, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        `radial-gradient(60% 60% at 50% 50%, ${c}, rgba(255,255,255,.8))`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
