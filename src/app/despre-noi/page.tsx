// Removed unused imports
import { SupporterCard } from "./SupporterCard";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";

export default function DespreNoiPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const prefix = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
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
  ];

  const echipa = [
    { nume: "Doru G.", rol: "Fondator" },
    { nume: "Teodora C.", rol: "Fondator", image: `${prefix}/TeodoraG.jpeg` },
    { nume: "Gabriel B.", rol: "Fondator" },
    {
      nume: "Diana Todeancă",
      rol: "Psiholog",
      image: `${prefix}/psiholog1.jpeg`,
      description:
        "Diana Todeancă este psihoterapeut cu o pregătire academică solidă și o experiență bogată de lucru cu oameni în contexte variate. Deține două doctorate – unul în Reprezentări Sociale și Comunicare și unul în Psihologie – și este certificată atât în psihoterapie ericksoniană & hipnoză clinică, cât și în terapia sistemică de cuplu și familie. Este, de asemenea, coach transformațional.\n\nCu peste 10 ani de practică în cabinet și mai mult de 6000 de ședințe de terapie individuală susținute, Diana a sprijinit numeroase persoane să își depășească blocajele și să își regăsească echilibrul. Dincolo de cabinet, are o experiență de peste 12 ani în training de soft-skills și consultanță de business, cu etape petrecute în mediul corporativ. A activat în cadrul secției de psihiatrie a Spitalului de Urgență și a lucrat în proiecte punctuale, într-o închisoare de maximă siguranță – experiențe care i-au oferit o perspectivă profundă asupra rezilienței și fragilității umane.\n\nPrin implicarea sa în Asociația Drogurile ucid visurile copiilor, Diana își continuă misiunea de a sprijini prevenția și conștientizarea riscurilor consumului de substanțe, pentru ca visurile copiilor și tinerilor să rămână vii și posibile.",
    },
    {
      nume: "Iulian Brănișteanu",
      rol: "Fost Consumator",
      image: `/iulian.jpeg`,
      description:
        "Mă numesc Iulian Brănișteanu, am 33 ani, sunt din Tulcea, dar locuiesc în București de mai bine de 3 ani.\n\nSunt antreprenor in domeniul Horeca și Ecommerce, coach și facilitator sistemic. M’am confruntat cu dependența de jocuri de noroc timp de 15 ani de zile, iar cu cea de droguri 10 ani de zile până am ajuns în punctul în care am zis că trebuie să fac o schimbare majoră în viața mea.\n\nPe parcursul acestui drum de schimbare și recuperare am făcut foarte multe cursuri de dezvoltare personală, programe de terapie și terapie alternativă, activități ce au condus către recuperarea mea, iar în prezent sunt abstinent de mai bine de 3 ani.\n\nÎn acest drum am avut alături familia, iubita și câțiva prieteni care m’au susținut necondiționat și fără de care această recuperare nu ar fi fost posibilă.",
    },
    {
      nume: "Diana Gropineanu",
      rol: "Fost Consumator, Psiholoaga",
      image: `/diana.jpeg`,
      description:
        "Mă numesc Diana Gropineanu, am 33 de ani și locuiesc în București. Am avut parte de o familie care mi-a oferit educație și sprijin, iar pentru asta le sunt recunoscătoare. Totuși, ani la rând m-am confruntat cu dependența de substanțe. De 5 ani sunt abstinentă, iar acest drum de recuperare mi-a schimbat complet direcția vieții.\nLa 28 de ani am ales să urmez psihologia, din dorința de a înțelege mai bine prin ce am trecut și de a fi alături de cei care se confruntă cu aceleași provocări.\nAstăzi sunt psiholog clinician și instructor de yoga și îmbin aceste două instrumente, care au fost și pentru mine ancore de vindecare.\nLucrez cu persoane aflate în recuperare și susțin grupuri de suport, pentru că știu cât de mult contează să nu fii singur pe acest drum. Cred că dependența nu definește un om, ci poate fi chiar începutul unei transformări profunde.",
    },
    {
      nume: "Clinica Independent",
      rol: "Partener",
      image: `${prefix}/clinicindependent.JPEG`,
      description:
        "Clinica Independent este un centru dedicat recuperării, situat în inima naturii, în județul Prahova. Oferă programe terapeutice personalizate, psihoterapie individuală și de grup, ateliere de dezvoltare personală și activități de recreere.\n\nContact: 0744 533 833 • clinica.independent@gmail.com",
    },
    {
      nume: "Clinica Social MED",
      rol: "Partener",
      image: `${prefix}/socialmed-logo-symbol.png`,
      description:
        "Social MED este un centru dedicat sprijinirii persoanelor care se confruntă cu dependențe de substanțe psihoactive, alcool sau alte forme de adicție. Cu o echipă multidisciplinară formată din medici psihiatri, terapeuți și consilieri specializați, oferim programe personalizate de detoxifiere asistată medical și recuperare psihologică, adaptate nevoilor fiecărui pacient.",
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
          {echipa.map((m: { nume: string; rol: string; image?: string; description?: string }, i) => (
            <Dialog key={m.nume}>
              <DialogTrigger asChild>
                <button className="glass-soft surface-rounded p-6 text-center w-full">
                  <div
                    className="mx-auto mb-4 size-16 rounded-full ring-1 shadow-sm overflow-hidden relative"
                    style={
                      m.image
                        ? undefined
                        : {
                            background:
                              i % 2 === 0
                                ? "radial-gradient(60% 60% at 50% 50%, rgba(214,239,255,.9), rgba(255,255,255,.8))"
                                : "radial-gradient(60% 60% at 50% 50%, rgba(254,209,140,.7), rgba(255,255,255,.85))",
                          }
                    }
                  >
                    {m.image ? (
                      <Image
                        src={m.image.startsWith("/") ? `${prefix}${m.image}` : m.image}
                        alt={m.nume}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="font-semibold">{m.nume}</div>
                  <div className="text-sm text-muted-foreground">{m.rol}</div>
                </button>
              </DialogTrigger>
              <DialogContent className="w-[95vw] sm:max-w-2xl max-w-3xl p-4 sm:p-6 rounded-2xl surface-rounded">
                <DialogHeader className="pb-4">
                  <DialogTitle className="text-base sm:text-lg leading-tight pr-8">{m.nume}</DialogTitle>
                  <DialogDescription className="text-sm">{m.rol}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  {m.image ? (
                    <div className="relative mx-auto size-28 sm:size-32 rounded-full overflow-hidden ring-1 shadow-sm">
                      <Image
                        src={m.image.startsWith("/") ? `${prefix}${m.image}` : m.image}
                        alt={m.nume}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  {m.description ? (
                    <p className="text-sm leading-relaxed whitespace-pre-line">{m.description}</p>
                  ) : null}
                </div>
              </DialogContent>
            </Dialog>
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


