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
  const sustinatori: { name: string; description?: string; image?: string }[] = [
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
      name: "Centrul ENLA",
      description:
        "Pianu de Jos, Alba - România are acum un nou reper în lupta împotriva dependențelor: Centrul ENLA, fondat de Ensar Duman și Dr. Laura Cătană, oferă tratament premium pentru dependențe (alcool, droguri, jocuri de noroc, tehnologie) și programe de reabilitare psihică.\n\nCu terapie individuală și de grup, activități creative și facilități premium (camere private, piscină, saună, restaurant propriu), ENLA devine un loc sigur unde pacienții își pot regăsi echilibrul și speranța.\n\n\"Împreună putem rescrie povestea noastră!\" - Centrul ENLA",
      image: `${prefix}/ENLA_color.png`,
    },
    {
      name: "Federația Română de Rugby",
      description:
        "Federația Română de Rugby sprijină inițiativele educaționale și de prevenție dedicate copiilor și tinerilor, promovând prin sport valori precum disciplină, respect, curaj și spirit de echipă.",
    },
    {
      name: "Antolin",
      description:
        "Antolin este un lider global în furnizarea de componente pentru interior auto, cu soluții tehnologice avansate în domenii precum iluminat, panouri de bord, console centrale și finisaje de uși. Cu peste 25.000 de angajați și operațiuni în peste 20 de țări, Antolin își propune să transforme experiența la bord prin inovație, eficiență și sustenabilitate. În România, unitatea de la Sibiu produce elemente de iluminat interior pentru autovehicule, livrând către branduri de renume din industria auto.",
      image: `${prefix}/antolin.jpeg`,
    },
    {
      name: "FCSB",
      description:
        "Echipa FCSB - Una dintre cele mai iubite și titrate echipe de fotbal din România, FCSB sprijină cu mândrie inițiativele dedicate tinerilor și educației. Prin implicarea lor, transmit un mesaj puternic despre importanța sportului, a disciplinei și a alegerii unui drum sănătos în viață.",
      image: `${prefix}/FCSB_logo.svg`,
    },
    { name: "Inspectoratul Școlar Ilfov" },
    { name: "Inspectoratul Școlar Sibiu" },
    { name: "Inspectoratul Școlar Călărași" },
    {
      name: "Brothers Lăcătuș",
      description:
        "Brothers Lăcătuș - Foști campioni la box, acum antrenăm viitorii luptători. Pasiunea noastră? Să formăm caractere puternice, în ring și în viață.\n\nOferiți antrenamente de box pentru începători, antrenamente de performanță și sesiuni personalizate 1-la-1, adaptate fiecărui nivel și obiectiv.\n\nPentru mai multe informații, vizitați: https://www.brotherslacatus.ro/",
    },
    { name: "CFR Cluj" },
    { name: "U Cluj" },
    { name: "Dinamo" },
    { name: "FC Argeș" },
    { name: "AFC Hermannstadt" },
  ];

  const echipa = [
    { nume: "Liviu Andrei", rol: "Fondator", image: `${prefix}/liviuandrei.jpeg` },
    { nume: "Teodora Cosma", rol: "Fondator", image: `${prefix}/TeodoraG.jpeg` },
    { nume: "Gabriel Badea", rol: "Fondator", image: `${prefix}/gabibadea.jpeg` },
    {
      nume: "Lea Pelici",
      rol: "Profesoara de sport",
      image: `${prefix}/antrenorsportiv.jpeg`,
      description:
        "Sunt Lea Pelici, profesoară de sport și absolventă a Facultății de Educație Fizică și Sport, cu master în același domeniu.\n\nDe 5 ani activez ca antrenoare de fitness, unde îmi dedic energia și pasiunea pentru a-i ajuta pe oameni să-și atingă obiectivele.\n\nAm fost sportivă de performanță la volei, experiență care m-a format și m-a învățat disciplina și munca în echipă.\n\nAm participat la Survivor, unde am obținut locul 4 și am rămas ultima femeie în competiție.\n\nÎmi place să inspir prin exemplu și să transmit dorința de mișcare și un stil de viață activ.",
    },
    {
      nume: "Diana Todeancă",
      rol: "Psiholog",
      image: `${prefix}/psiholog1.jpeg`,
      description:
        "Diana Todeancă este psihoterapeut cu o pregătire academică solidă și o experiență bogată de lucru cu oameni în contexte variate. Deține două doctorate – unul în Reprezentări Sociale și Comunicare și unul în Psihologie – și este certificată atât în psihoterapie ericksoniană & hipnoză clinică, cât și în terapia sistemică de cuplu și familie. Este, de asemenea, coach transformațional.\n\nCu peste 10 ani de practică în cabinet și mai mult de 6000 de ședințe de terapie individuală susținute, Diana a sprijinit numeroase persoane să își depășească blocajele și să își regăsească echilibrul. Dincolo de cabinet, are o experiență de peste 12 ani în training de soft-skills și consultanță de business, cu etape petrecute în mediul corporativ. A activat în cadrul secției de psihiatrie a Spitalului de Urgență și a lucrat în proiecte punctuale, într-o închisoare de maximă siguranță – experiențe care i-au oferit o perspectivă profundă asupra rezilienței și fragilității umane.\n\nPrin implicarea sa în Asociația Drogurile ucid visurile copiilor, Diana își continuă misiunea de a sprijini prevenția și conștientizarea riscurilor consumului de substanțe, pentru ca visurile copiilor și tinerilor să rămână vii și posibile.",
    },
    
    {
      nume: "Larisa Herculea-Andronic",
      rol: "Psihoterapeut",
      image: `${prefix}/lasrisahercule.jpeg`,
      description:
        "Sunt Larisa Herculea-Andronic, psihoterapeut și hipnoterapeut autonom (cod atestat CPR 23690), cu peste 1.000 de ore de formare și practică în psihoterapie și hipnoterapie.\n\nSunt membră a Colegiului Psihologilor din România și a AHPCC, cu supraspecializare în psiho-oncologie și certificări internaționale în hipnoterapie (IPHM, PHPA). Am experiență ca profesor de psihologie, psihoterapeut voluntar și coordonator în proiecte educaționale și sociale.\n\nAriile mele de lucru:\n✨ tulburări emoționale, anxietate, depresie\n✨ renunțarea la dependențe\n✨ traume, doliu, pierderi\n✨ psihoterapie pentru persoane cu boli cronice\n✨ dezvoltare personală și optimizarea vieții\n✨ psihoterapie de cuplu și sexualitate\n\nÎn prezent îmi desfășor activitatea în cabinet individual de psihologie, unde ofer un cadru sigur, empatic și confidențial. Accentul este pe vindecare emoțională, resurse interioare și transformare personală.\n\nMisiunea mea: să te sprijin să rupi lanțurile trecutului și să îți construiești un prezent și un viitor plin de bucurie și autenticitate. 🌿",
    },
    {
      nume: "Mihaela Sava",
      rol: "Hipnoterapeut",
      image: `${prefix}/mihaelasava.jpeg`,
      description:
        "Sunt Mihaela Sava, hipnoterapeut, specialist in vindecarea traumelor din copilărie si a mostenirilor transgenerationale prin hipnoza regresiva.\n\nCălătoria mea a început încă din copilărie, cand tatal meu alcoolic venea acasa foarte nervos si pus pe scandal. Mereu mi-am pus întrebarea \"ce-i face pe oameni dependenti?\", \"de ce are nevoie o persoana sa consume substanțe ca sa se simta bine in timp ce se distrug pe ei si tot ce-i înconjoară?\"\n\nIn urma ședințelor cu persoane dependente de alcool si droguri, punctele comune des întâlnite au fost: lipsa atenției, lipsa afecțiunii si neacceptarea de sine (copiii criticați, neacceptati asa cum sunt in realitate).\n\nCa si cauza comuna a acestor lipsuri este sărăcia. Lipsurile părinților si focusul lor pe munca n-a lăsat energie si timp pentru \"hrănirea\" suflețelul de copil.\n\nDe aici mai departe moștenirea neamului, simplu de inteles prin citirea manualului de istorie. \n\nSaracie, lipsuri, războaie, confiscarea averilor- toate au efecte negative si se manifesta astazi in psihicul si energia vieții fiecăruia dintre noi. \n\nRegresia este tehnica cea mai rapida si cea mai eficienta prin care te poți elibera de poverile trecutului.\n\nVrei sa încerci? Contacteaza-ma!\n\nWww.mihaelasava.com",
    },
    {
      nume: "Clinica Independent",
      rol: "Partener",
      image: `${prefix}/clinicindependent.JPEG`,
      description:
        "Clinica Independent este un centru dedicat recuperării, situat în inima naturii, în județul Prahova. Oferă programe terapeutice personalizate, psihoterapie individuală și de grup, ateliere de dezvoltare personală și activități de recreere.\n\nContact: 0744 533 833 • clinica.independent@gmail.com",
    },
    {
      nume: "Emblematic România",
      rol: "Partener",
      image: `${prefix}/emblematicromania.png`,
      description:
        "Emblematic România este promotorul conceptului de branding de țară, o inițiativă care unește România printr-o imagine puternică și autentică. Punem în valoare identitatea, educația și inovația pentru a reda încrederea, mândria națională și sentimentul de siguranță, reafirmând România în sufletele românilor.\n\nAsociația Emblematic România are ca scop promovarea unitară a României în toate aspectele esențiale, tipice și identitare ale culturii sale istorice și actuale. Conceptul proiectului aduce în prim-plan repere: oameni, locuri, fapte, venind astfel în întâmpinarea nevoii de promovare reală a României și prin prisma privirii din exterior.\n\nEmblematic România, ca însemn, se poate constitui în recomandare și garant al personalităților, al calității produselor și al obiectivelor remarcabile.\n\nEmblematic România – identitate, educație și inovație pentru o țară puternică.\nEmblematic România – unitate și iubire pentru copiii noștri.",
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
            <SupporterCard key={s.name} name={s.name} description={s.description} image={s.image} index={i} />
          ))}
        </div>
      </section>

      
    </div>
  );
}


