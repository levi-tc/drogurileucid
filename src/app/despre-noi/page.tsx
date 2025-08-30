// Removed unused imports
import { SupporterCard } from "./SupporterCard";

export default function DespreNoiPage() {
  const sustinatori: { name: string; description?: string }[] = [
    { name: "Ilie Năstase" },
    { name: "Irina Margareta Nistor" },
    { name: "Miruna Lazea" },
    { name: "Simina Stanciu" },
    { name: "Amalia Roman" },
    { name: "Toma Cuzin" },
    { name: "Johnny Romano" },
    { name: "Tabita Ciriello" },
    { name: "Academia Marian Drăgulescu" },
    { name: "Club fotbal Alma Sibiu" },
    { name: "Dinu Popescu" },
    { name: "Călin Donca" },
    { name: "Liviu Varciu" },
    { name: "Costel Biju" },
    { name: "Anemona Mircea" },
    { name: "Georgiana Maria" },
    { name: "Alina Casoltan" },
    { name: "Lavinia Albu" },
    { name: "Catrinel Diana Țifrea" },
    {
      name: "Clinica Independent",
      description:
        "Clinica Independent este un centru dedicat recuperării, situat în inima naturii, în județul Prahova. Oferim un mediu sigur și empatic pentru cei care doresc să își regăsească echilibrul și să își reconstruiască viața.\n\nSuntem specializați în tratarea dependențelor de substanțe și comportamentale, oferind:\n• Programe terapeutice personalizate\n• Psihoterapie individuală și de grup\n• Ateliere de dezvoltare personală\n• Activități de recreere și de relaxare\n\n📞 Informații suplimentare la 0744533833 sau pe email la clinica.independent@gmail.com",
    },
  ];

  return (
    <div className="py-12 space-y-16">
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-center">Asociația „Drogurile ucid visurile copiilor”</h1>
        <div className="glass surface-rounded p-6 md:p-8 space-y-4">
          <p>
            Este o organizație non-guvernamentală dedicată protejării și sprijinirii copiilor și tinerilor afectați de consumul de droguri. Misiunea noastră este să prevenim dependența și să promovăm un stil de viață sănătos, astfel încât fiecare copil să-și poată urma visurile fără să fie împiedicat de droguri.
          </p>
          <p>
            Credem cu tărie că fiecare copil merită o copilărie fericită, plină de oportunități și speranță. Prin campanii educaționale, programe de consiliere și colaborare cu comunitatea, ne implicăm activ pentru a oferi suport, informații și alternative sănătoase, ajutând astfel familiile și școlile să lupte împotriva acestui fenomen.
          </p>
          <p>
            Împreună putem schimba destine și putem construi un viitor mai luminos pentru generațiile viitoare, unde visurile copiilor nu sunt distruse, ci cultivate și protejate.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Echipa noastră</h2>
        <p className="text-muted-foreground text-center">Oameni dedicați unui viitor fără dependențe</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { nume: "Doru G.", rol: "Fondator" },
            { nume: "Teodora C.", rol: "Fondator" },
            { nume: "Gabriel B.", rol: "Fondator" },
          ].map((m, i) => (
            <div key={m.nume} className="glass-soft surface-rounded p-6 text-center">
              <div className="mx-auto mb-4 size-16 rounded-full ring-1 shadow-sm"
                   style={{
                     background:
                       i % 2 === 0
                         ? "radial-gradient(60% 60% at 50% 50%, rgba(214,239,255,.9), rgba(255,255,255,.8))"
                         : "radial-gradient(60% 60% at 50% 50%, rgba(254,209,140,.7), rgba(255,255,255,.85))",
                   }}
              />
              <div className="font-semibold">{m.nume}</div>
              <div className="text-sm text-muted-foreground">{m.rol}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="glow-wrap glow-blue glow-peach glass surface-rounded p-6 md:p-10 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold">Susținut de</h2>
          <p className="text-muted-foreground">Organizații și oameni care sprijină misiunea noastră</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {sustinatori.map((s, i) => (
            <SupporterCard key={s.name} name={s.name} description={s.description} index={i} />
          ))}
        </div>
      </section>

      
    </div>
  );
}


