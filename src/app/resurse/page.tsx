"use client";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog"
import Image from "next/image"

type Article = { id: string; title: string; content: React.ReactNode };

export default function ResursePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const prefix = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  const articles: Article[] = [
    {
      id: "a_story",
      title: "Povestea lui Eroul Alex și Monstrul Drog 🦸‍♀️",
      content: (
        <div className="space-y-5">
          <div className="w-full rounded-xl overflow-hidden border mb-6">
            <Image 
              src={`${prefix}/poveste.jpeg`} 
              alt="Povestea lui Eroul Alex și Monstrul Drog" 
              width={800} 
              height={600} 
              className="w-full h-auto object-contain" 
            />
          </div>
          
          <p>Demult, într-un oraș liniștit, trăia un băiat curajos pe nume Alex. El visa să devină supererou adevărat, care să salveze oamenii și să aducă bucurie.</p>

          <p>Dar într-o zi, din umbra străzilor a apărut un monstru periculos numit Drog.
          Avea ochi strălucitori și șoptea:<br/>
          – &ldquo;Vino cu mine, Alex! Îți voi da puteri magice și distracție fără sfârșit&hellip;&rdquo;</p>

          <p>Monstrul părea prietenos, dar în spatele lui se ascundeau lanțuri negre și o pelerină întunecată care înfășura pe oricine cădea în capcana lui.</p>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-lg mb-3">⚠️ Alex a văzut ce făcea Monstrul Drog oamenilor:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Le fura sănătatea, făcându-le inimile și mințile slabe ❤️🧠</li>
              <li>Le răpea memoria și bucuria 📉</li>
              <li>Îi lega cu lanțuri grele de dependență 🔗</li>
              <li>Le distrugea visurile și îi îndepărta de familie 👨‍👩‍👧‍👦</li>
              <li>Îi trimitea pe un drum fără viitor 🚫🎓</li>
            </ul>
            <p className="mt-3 font-medium">&ldquo;Nu, nu asta vreau eu!&rdquo; și-a spus Alex.</p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-lg mb-3">✅ Atunci, băiatul și-a scos scutul curajului și a strigat:</h4>
            <p>– &ldquo;NU, Monstru Drog! Puterea mea este mai mare decât minciunile tale!&rdquo;</p>
            <p>Cu un pas hotărât, Alex a fugit din locul întunecat și a ales să meargă la prietenii lui. Acolo, cu mingea, muzica și cărțile, și-a găsit adevărata bucurie 🏀🎶📚.</p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-lg mb-3">🆘 Dar Alex a înțeles și ceva important:</h4>
            <p>Dacă un prieten cădea în ghearele Monstrului Drog, nu trebuia să lupte singur.
            El știa că poate cere ajutor de la înțelepții adulți: părinți, profesori sau doctori. Aceștia aveau arme speciale – înțelepciunea și grija – cu care puteau slăbi puterea monstrului.</p>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">🔑 Morala basmului:</h4>
            <p>Monstrul Drog promite magie, dar aduce doar boală și lanțuri.
            Adevărații eroi aleg sănătatea, prietenia și visele lor luminoase. 🌟</p>
            <p className="mt-2 font-medium">👧👦 Fii eroul poveștii tale! Spune NU Monstrului Drog și păstrează-ți libertatea!</p>
            <p className="text-sm text-muted-foreground mt-2">📌 Asociația &ldquo;Drogurile Ucid Visurile Copiilor&rdquo;</p>
          </div>
        </div>
      ),
    },
    {
      id: "a_pdf_ghid",
      title: "Ghid PDF: Prevenție și sprijin pentru părinți și elevi",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Document PDF</p>
            <p className="font-semibold">Deschide și consultă ghidul complet în format PDF. Poți și descărca documentul.</p>
          </div>

          <div className="w-full rounded-xl overflow-hidden border">
            <iframe
              src={`${prefix}/Ghid_%20familii_ANPCDDA_2025.pdf`}
              title="Ghid PDF — Prevenție și sprijin"
              className="w-full h-[70vh]"
            />
          </div>

          <p className="text-sm">
            Dacă vizualizarea nu pornește, poți
            {' '}<a href={`${prefix}/Ghid_%20familii_ANPCDDA_2025.pdf`} target="_blank" rel="noreferrer" className="text-primary underline">descarcă PDF-ul</a>.
          </p>
        </div>
      ),
    },
    {
      id: "a_recognition",
      title: "Cum îți dai seama că un prieten sau chiar tu ai putea să ai probleme cu drogurile",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Semne de recunoaștere</p>
            <p className="font-semibold">La adolescență este normal să treci prin schimbări de dispoziție, dar uneori unele semne pot arăta că cineva începe să aibă probleme cu drogurile. Este important să le recunoști și să ceri ajutor la timp.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Semne fizice</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Ochii roșii sau foarte strălucitori, pupile prea mici sau prea mari</li>
              <li>Slăbire sau îngrășare bruscă</li>
              <li>Somn foarte puțin sau prea mult</li>
              <li>Lipsa de chef să ai grijă de igiena ta (duș, haine curate)</li>
              <li>Haine sau cameră cu mirosuri ciudate</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Semne de comportament</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Nu mai ai chef de hobby-uri sau activități care îți plăceau</li>
              <li>Îți schimbi prietenii brusc, fără să spui prea multe despre ei</li>
              <li>Spui minciuni mai des, ascunzi lucruri</li>
              <li>Începi să lipsești de la școală și notele scad</li>
              <li>Devii foarte nervos, agresiv sau dimpotrivă, retras și trist</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Semne emoționale</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Schimbări bruște de dispoziție (de la fericire la furie sau tristețe)</li>
              <li>Te enervezi repede sau devii foarte anxios</li>
              <li>Ai stări de confuzie sau teamă fără motiv clar</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-lg mb-3">Cum să vorbești despre asta</h4>
            <p>Dacă cineva te întreabă sau dacă tu vrei să recunoști că ai o problemă, e bine să știi câteva lucruri:</p>
            <ol className="list-decimal list-inside space-y-2 text-sm mt-3">
              <li><span className="font-medium">Alege un moment liniștit</span> – nu când e ceartă sau tensiune.</li>
              <li><span className="font-medium">Vorbește deschis</span> – de exemplu: &ldquo;Nu mă simt bine în ultima vreme și am nevoie de ajutor.&rdquo;</li>
              <li><span className="font-medium">Ascultă și fii sincer</span> – nu te grăbi să negi sau să te aperi.</li>
              <li><span className="font-medium">Recunoaște ce simți</span> – uneori drogurile sunt folosite ca să ascundă stresul, tristețea sau presiunea.</li>
              <li><span className="font-medium">Gândește-te că nu ești singur</span> – familia și prietenii apropiați pot fi alături de tine.</li>
            </ol>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-lg mb-3">De ce e importantă terapia</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Un terapeut nu e un polițist și nici un judecător. Este o persoană care te poate ajuta să înțelegi ce se întâmplă cu tine și să găsești soluții.</li>
              <li>Poți merge împreună cu cineva apropiat (părinte, frate/soră, prieten).</li>
              <li>Terapia nu e o pedeapsă, ci o cale de a te simți mai bine și de a recăpăta controlul.</li>
              <li>Este normal să îți fie teamă sau rușine, dar asta nu înseamnă că ești &ldquo;defect&rdquo;.</li>
            </ul>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Nu rămâne singur!</h4>
            <p className="text-sm">Dacă simți că ai început să consumi droguri sau ai un prieten care trece prin asta, vorbește cu un adult de încredere: un părinte, un profesor, un medic sau un consilier școlar. Cu cât ceri mai repede ajutor, cu atât îți va fi mai ușor să-ți revii și să-ți construiești un viitor sănătos.</p>
          </div>

          <div className="border-t pt-4 mt-6">
            <p className="text-sm text-muted-foreground italic">
              Articol scris de psiholog Mihaela Sava. Ai nevoie de ajutor? Contactează-mă:<br/>
              <a href="https://www.mihaelasava.com" className="text-primary hover:underline" target="_blank" rel="noreferrer">www.mihaelasava.com</a><br/>
              Telefon: <a href="tel:+40745595057" className="text-primary hover:underline">004 0745 595 057</a>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "a_mind_matters",
      title: "📘 Despre seria \"Mind Matters\"",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Ghid pentru profesori</p>
            <p className="font-semibold">Seria Mind Matters a fost realizată de National Institute on Drug Abuse (NIDA) pentru a-i ajuta pe elevi 👩‍🎓👨‍🎓 să înțeleagă cum drogurile afectează 🧠 creierul și 🫀 corpul.</p>
          </div>

          <div>
            <p>🎯 Obiectivul principal este ca profesorii să aibă resurse clare și adaptate pentru a discuta cu elevii despre aceste subiecte sensibile, într-un mod științific, dar accesibil.</p>
            <p className="mt-2">Seria conține:</p>
            <ul className="list-none space-y-1 text-sm mt-2">
              <li>✅ broșuri pentru elevi (explicații simple + ilustrații atractive),</li>
              <li>✅ ghidul profesorului (cu idei de discuții și activități interactive),</li>
              <li>✅ resurse suplimentare pentru aprofundare.</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-lg mb-3">🧑‍🏫 Cum să folosești acest ghid</h4>
            <p>Ghidul este gândit ca un instrument flexibil, care poate fi folosit la mai multe tipuri de ore:</p>
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li>📚 educație pentru sănătate,</li>
              <li>🔬 biologie,</li>
              <li>🌍 științe sociale,</li>
              <li>🗣 ore de dirigenție sau activități extracurriculare.</li>
            </ul>
            <p className="text-sm mt-2">Nu trebuie parcurs în ordine 📖. Profesorii pot alege exact capitolele și activitățile care se potrivesc nevoilor și vârstei elevilor lor.</p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-lg mb-3">📌 Ce vei găsi în acest ghid</h4>
            <ul className="list-none space-y-1 text-sm">
              <li>👉 Explicații clare: cum afectează fiecare drog creierul și corpul.</li>
              <li>👉 Întrebări pentru discuții: concepute să-i ajute pe elevi să gândească critic 🧩.</li>
              <li>👉 Activități practice: exerciții simple pentru a înțelege mecanismele și riscurile.</li>
              <li>👉 Resurse suplimentare: linkuri și materiale pentru aprofundare.</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-lg mb-3">🌟 De ce e util pentru profesori</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Îți oferă un limbaj simplu și ușor de transmis elevilor.</li>
              <li>Te ajută să abordezi un subiect sensibil într-un mod sigur și documentat.</li>
              <li>Îți dă exemple de lecții interactive care atrag atenția elevilor.</li>
              <li>Contribuie la construirea unui climat de încredere și prevenție în școală.</li>
            </ul>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <p>✨ Cu alte cuvinte, acest ghid este ca o trusă de prim-ajutor educațional pentru profesori: îți pune în mână unelte practice și informații de încredere, ca să poți sprijini elevii și să previi riscurile încă de la vârste fragede.</p>
          </div>

          <div className="space-y-4 mt-6">
            <h4 className="font-semibold text-lg">🌿 Marijuana (Cannabis)</h4>
            <div className="text-sm space-y-2">
              <p><span className="font-medium">📖 Ce este?</span></p>
              <ul className="list-disc list-inside space-y-1 text-xs ml-4">
                <li>Marijuana provine din planta cannabis.</li>
                <li>Conține peste 100 de substanțe chimice, dar cea mai cunoscută este THC (tetrahidrocanabinolul) — responsabil pentru efectele &ldquo;euforice&rdquo; sau de &ldquo;a te simți high&rdquo;.</li>
                <li>Altă substanță importantă este CBD (canabidiolul), care NU provoacă &ldquo;high&rdquo;, dar este folosită uneori în scopuri medicale.</li>
              </ul>
              <p className="text-xs">👉 Marijuana poate fi fumată 🚬, vaporizată 💨, consumată în produse alimentare 🍪 sau băuturi 🥤.</p>
            </div>

            <div className="text-sm space-y-2">
              <p><span className="font-medium">🧠 Cum afectează creierul?</span></p>
              <ul className="list-disc list-inside space-y-1 text-xs ml-4">
                <li>THC-ul se leagă de receptori speciali din creier care controlează: memoria, învățarea, coordonarea, plăcerea.</li>
                <li>Adolescenții 👩‍🎓👨‍🎓 sunt mult mai vulnerabili pentru că creierul lor este încă în dezvoltare (până la 25 de ani).</li>
                <li>Consumul regulat poate duce la: 📉 scăderea capacității de concentrare și memorare, 💤 lipsă de motivație, 😟 anxietate sau paranoia, 🚨 risc crescut de dependență.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">🚬 Nicotină și Tutun</h4>
            <div className="text-sm space-y-2">
              <p><span className="font-medium">📖 Ce este?</span></p>
              <ul className="list-disc list-inside space-y-1 text-xs ml-4">
                <li>Nicotina este o substanță chimică foarte adictivă găsită în plantele de tutun.</li>
                <li>Produsele din tutun includ: țigări clasice 🚬, trabucuri, pipă, tutun de mestecat, dar și dispozitive moderne: e-cigarette 💨 și vape-uri.</li>
                <li>Adolescenții sunt deseori atrași de vape-uri cu arome 🍓🍉 pentru că par &ldquo;cool&rdquo; și &ldquo;inofensive&rdquo;.</li>
              </ul>
              <p className="text-xs">👉 Realitatea: chiar și aceste produse conțin nicotină și alte substanțe toxice care afectează grav sănătatea.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">🍺 Alcool</h4>
            <div className="text-sm space-y-2">
              <p><span className="font-medium">📖 Ce este?</span></p>
              <ul className="list-disc list-inside space-y-1 text-xs ml-4">
                <li>Alcoolul este o substanță psihotropă prezentă în băuturile alcoolice: bere 🍺, vin 🍷, tării 🥃, cocktail-uri 🍹.</li>
                <li>Este legal pentru adulți, dar ilegal și periculos pentru minori 👩‍🎓👨‍🎓.</li>
                <li>Adolescenții pot fi tentați să bea din: curiozitate, presiunea grupului 🧑‍🤝‍🧑, dorința de a se relaxa sau &ldquo;distracție&rdquo;.</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">🤝 Sprijin din partea asociației</h4>
            <p className="text-sm">Asociația &ldquo;Drogurile ucid visurile copiilor&rdquo; este alături de profesori, părinți și elevi în lupta împotriva dependențelor.</p>
            <p className="text-sm mt-2">👉 Dacă întâmpinați o problemă legată de consum sau dependență, ne puteți contacta:</p>
            <ul className="list-disc list-inside text-sm mt-2 ml-4">
              <li>📞 Telefon oficial: 0750633148</li>
              <li>🌐 Site: https://drogurileucid.ro</li>
            </ul>
            <p className="text-sm mt-2">Împreună cu echipa noastră oferim consultanță, resurse și sprijin pentru a găsi cele mai bune soluții.
            Nu sunteți singuri – suntem aici să ajutăm, pas cu pas, pentru un viitor mai sănătos și mai sigur pentru copii ❤.</p>
          </div>
        </div>
      ),
    },
    {
      id: "a4",
      title: "Asociația \"Drogurile ucid visurile copiilor\" lansează o campanie națională pe 1 septembrie",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Anunț important</p>
            <p className="font-semibold">Asociația Drogurile ucid visurile copiilor anunță lansarea unei campanii naționale de conștientizare, care va începe pe <span className="font-bold">1 septembrie 2025, la ora 12:00</span>.</p>
          </div>
          
          <p>Scopul campaniei este de a atrage atenția asupra pericolelor tuturor tipurilor de dependențe – fie că vorbim despre <em>substanțe interzise, alcool, fumat, jocuri de noroc sau chiar dependențe digitale</em> – și de a proteja viitorul copiilor și tinerilor din România.</p>

          <p>Asociația își propune să devină o voce puternică în lupta pentru prevenirea și reducerea dependențelor, oferind atât informații corecte și accesibile, cât și exemple reale ale celor care au trecut prin astfel de experiențe. Prin proiectele sale, asociația dorește să aducă mai multă educație, sprijin și solidaritate în comunitățile din întreaga țară.</p>

          <div className="bg-muted/30 p-4 rounded-lg border">
            <p>
              <span className="font-semibold">Mesajul central:</span> 
              <span className="italic"> „Dependențele ucid visurile copiilor, dar împreună putem să le protejăm.&quot;</span>
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Susținători ai campaniei</h4>
            <p className="text-sm leading-relaxed mb-3">Asociația este onorată să aibă alături personalități și instituții importante care susțin această cauză:</p>
            <div className="text-sm leading-relaxed">
              <span className="font-medium">Ilie Năstase, Irina Margareta Nistor, Toma Cuzin, Johnny Romano, Călin Donca, Liviu Vârciu, Marian Drăgulescu (alături de Academia lui de gimnastică), Academia de Fotbal Alma-Sibiu, Clinica Aria din Sibiu</span> și mulți alți influenceri și oameni de valoare din România.
            </div>
          </div>

          <p>Prin această campanie, ne dorim să creăm o mișcare națională în care fiecare județ, fiecare comunitate și fiecare familie să se implice activ pentru binele copiilor și tinerilor. Nu există un punct final – există doar misiunea continuă de a salva visurile și de a reda speranța.</p>

          <div className="border border-muted bg-muted/20 p-4 rounded-lg">
            <p className="font-medium mb-2">Contact pentru colaborări</p>
            <a href="tel:0730173727" className="text-primary font-bold text-lg hover:underline">0730 173 727</a>
          </div>

          <p className="text-center font-medium italic border-t pt-4">Împreună, putem construi o Românie în care copiii cresc liberi și cu visurile intacte, departe de orice formă de dependență.</p>
        </div>
      ),
    },
    {
      id: "a_semne_consum",
      title: "Semne care indică faptul că un copil ar putea consuma droguri",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Plan alimentar</p>
            <p className="font-semibold">3 mese principale + 2 gustări pe zi.</p>
            <p className="text-sm text-muted-foreground">Mese simple, multe la cuptor, pe care le pot face și adolescenții singuri.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">📅 Luni</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>🥣 Mic dejun: Overnight oats + banană + unt de arahide</li>
              <li>🍎 Gustare: Iaurt cu fructe</li>
              <li>🍗 Prânz: Bol cu orez, pui la cuptor și legume coapte</li>
              <li>🥜 Gustare: Nuci + fruct uscat</li>
              <li>🌮 Cină: Tacos cu fasole neagră și mozzarella</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">📅 Marți</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>🥤 Mic dejun: Smoothie (lapte, fructe, ovăz, unt migdale)</li>
              <li>🍏 Gustare: Măr cu unt de arahide</li>
              <li>🌯 Prânz: Wrap cu pui, legume și sos de iaurt</li>
              <li>🍿 Gustare: Popcorn simplu</li>
              <li>🥗 Cină: Cartofi dulci la cuptor + somon + salată verde</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">📅 Miercuri</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>🍞 Mic dejun: Toast cu avocado + ouă fierte</li>
              <li>🍫 Gustare: Baton proteic</li>
              <li>🍲 Prânz: Stir-fry rapid cu pui/curcan și legume</li>
              <li>🍯 Gustare: Iaurt grecesc + miere</li>
              <li>🍝 Cină: Paste la cuptor cu ton și legume</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">📅 Joi</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>🥣 Mic dejun: Parfait cu iaurt, granola și fructe</li>
              <li>🥕 Gustare: Morcovi + hummus</li>
              <li>🍚 Prânz: Bol cu orez, legume coapte și ou prăjit</li>
              <li>🥤 Gustare: Smoothie mic</li>
              <li>🍕 Cină: Pizza rapidă făcută acasă (blat gata + legume + brânză)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">📅 Vineri</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>🥞 Mic dejun: Clătite integrale cu fructe</li>
              <li>🌰 Gustare: Semințe și nuci</li>
              <li>🥔 Prânz: Cartofi copți + piept de curcan + salată</li>
              <li>🍇 Gustare: Fructe proaspete</li>
              <li>🌶️ Cină: Chilli con carne (gătit într-o singură oală)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "a_sprijin_adolescent",
      title: "🧭 Cum poți sprijini un adolescent care consumă sau e dependent 🚸💔",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Plan de antrenament</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>📌 Încălzire: 5–7 min alergare ușoară + mobilitate articulații</li>
              <li>📌 Structură: fiecare exercițiu = 4 serii (1 încălzire + 3 lucru)</li>
              <li>📌 Pauză între serii: 60–90 secunde</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">📅 Luni – Zi de picioare 🦵</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Genuflexiuni – 4×12</li>
              <li>Fandări – 4×10/picior</li>
              <li>Împins sania (sled push) – 4×20–30 m</li>
              <li>Ridicări pe vârfuri (gambe) – 4×15</li>
              <li>Abdomene – 4×15</li>
              <li>Stretching picioare</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">📅 Marți – Activitate ușoară 🌿</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Mers pe bandă 30 min sau plimbare rapidă în parc</li>
              <li>Mobilitate și stretching</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">📅 Miercuri – Partea superioară 💪</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Flotări – 4×10</li>
              <li>Împins la piept cu gantere – 4×10</li>
              <li>Tracțiuni asistate / scripete – 4×8</li>
              <li>Ridicări laterale pentru umeri – 4×12</li>
              <li>Plank – 4×30 sec</li>
              <li>Stretching brațe, spate, umeri</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">📅 Joi – Activitate ușoară 🌿</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Bicicletă staționară sau alergare ușoară 20–30 min</li>
              <li>Stretching pentru mobilitate</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">📅 Vineri – Full Body ⚡</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Genuflexiuni – 4×10</li>
              <li>Flotări – 4×10</li>
              <li>Fandări – 4×10/picior</li>
              <li>Împins sania (sled push) – 4×20–30 m</li>
              <li>Tracțiuni asistate / ramat cu gantere – 4×8</li>
              <li>Plank + plank lateral – 4×30 sec fiecare</li>
              <li>Stretching general</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "a13",
      title: "Tu, părinte, ești soluția!",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Mesaj pentru părinți</p>
            <p className="font-semibold">Părinții pot fi ancora care schimbă destinul unui adolescent.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-lg">O lume diferită</h4>
            <p>
              Trăim într-o lume diferită de cea în care ați crescut voi, părinții. Dacă adolescența voastră era despre joacă afară,
              prietenii din cartier și câteva tentații ascunse, adolescența copiilor de azi înseamnă acces instant la orice printr-un telefon.
              Drogurile, alcoolul, presiunea socială și izolarea emoțională sunt mult mai aproape de ei decât ne imaginăm.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Când afli că adolescentul consumă</h4>
            <p>
              Când descoperi că adolescentul tău a consumat sau este dependent, nu este doar un semnal de alarmă pentru el, ci și pentru tine, ca părinte.
              Și aici e mesajul esențial: <span className="font-medium">tu ești soluția</span>. Copilul tău are nevoie de tine, nu de pedeapsă, nu de amenințări, nu de fraze precum „nu mai ești copilul meu”
              sau „te dau afară din casă”. Astfel de reacții nu fac decât să adâncească prăpastia dintre voi și să împingă copilul mai departe spre consum.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-lg">De ce au nevoie adolescenții</h4>
            <p>
              Adolescenții nu au nevoie de perfecțiune, ci de înțelegere, siguranță și un spațiu în care să fie ascultați fără judecată.
              Au nevoie să știe că, indiferent de greșeli, există un adult stabil pe care se pot sprijini. Ei caută sens, apartenență și un loc în care să fie văzuți și acceptați.
              Dacă nu găsesc asta acasă, vor căuta în altă parte — uneori în substanțe sau anturaje periculoase.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Schimbarea de perspectivă</h4>
            <p>
              Schimbarea de perspectivă începe cu tine: fii curios, nu critic. Pune întrebări deschise, ascultă răspunsurile, arată interes pentru lumea lui,
              chiar dacă nu o înțelegi pe deplin. Sprijină-l să descopere alte modalități de a face față durerii, anxietății sau presiunii sociale.
              Nu e un drum ușor, dar este un drum care se poate parcurge cu răbdare, iubire și ajutor specializat. Noi suntem aici să te ajutăm,
              așadar ne poți suna sau scrie dacă ești părintele unui copil consumator.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Mesajul final</h4>
            <p>
              Părinții au puterea de a fi ancora care salvează. Și, uneori, simplul fapt că adolescentul știe că „mama și tata nu renunță la mine”
              poate face diferența dintre o prăbușire și o renaștere.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "a14",
      title: "Înțelegerea emoțiilor – info de bază și practici utile",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Info de bază</p>
            <p className="font-semibold">Toate emoțiile au un rol. Acceptarea lor e esențială pentru sănătatea psihică.</p>
          </div>

          <p className="text-xs text-muted-foreground">Autor: Diana Todeanca</p>

          <p>
            Mai departe, ai o scurtă descriere a câtorva dintre ele. Dacă vrei să înveți mai multe despre emoții, te ajută să lucrezi cu un psihoterapeut sau să cauți
            mai multe informații pe cont propriu, ca să înțelegi cum se simte la tine fiecare emoție și cum să o gestionezi într-un mod sănătos.
          </p>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Iată ce ar trebui să știi</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Toate emoțiile au un rol și un rost în viața noastră</li>
              <li>Au nevoie de atenția noastră – ne transmit mesaje importante</li>
              <li>Ajută să le denumim și să vorbim despre ele</li>
              <li>Nu evita și nu respinge emoțiile neplăcute – și ele sunt importante</li>
              <li>Învățăm să le observăm la noi și la ceilalți</li>
              <li>„Negative” nu înseamnă „rele” – sunt doar mai neplăcute</li>
              <li>Emoțiile sunt o formă de inteligență emoțională</li>
              <li>Acceptarea tuturor emoțiilor este esențială pentru sănătatea psihică</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Tristețea – ce este și ce poți face</h4>
            <p className="text-sm">
              O reacție la pierdere, respingere sau dezamăgire. Trimite un „strigăt de ajutor”, arată că ai nevoie de timp să te refaci și te încurajează să te îndepărtezi de ce te rănește.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Cere ajutor și vorbește cu cineva</li>
              <li>Dă-ți voie să plângi și să treci prin emoție</li>
              <li>Odihnește-te, notează-ți gândurile, fă mișcare</li>
              <li>Dacă intensă și prelungită (&gt;2 luni), mergi la psihiatru</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Furia – ce este și ce poți face</h4>
            <p className="text-sm">
              Reacție la nedreptate sau încălcarea limitelor. Are rol de protecție și apărare. Emoția e utilă; comportamentul trebuie gestionat.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Spune ce ai nevoie cu voce tare, pune limite ferme și blânde</li>
              <li>Eliberează energia prin activități: sport, sac de box, dans</li>
              <li>Respectă 3 reguli: nu te răni pe tine, nu îi răni pe ceilalți, nu distruge</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Frica și anxietatea – ce este și ce poți face</h4>
            <p className="text-sm">
              Frica e reacție la pericol real; anxietatea e „frica fără obiect”. La nivel optim, te poate ajuta; pe termen lung, devine copleșitoare.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Evaluează realist pericolul și alege siguranța</li>
              <li>Observă gândurile automate și caută alternative mai realiste</li>
              <li>Respirație controlată, relaxare, meditație, mișcare</li>
              <li>Învață diferența dintre posibilitate și probabilitate</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Fericirea și dezgustul</h4>
            <p className="text-sm">Fericirea te orientează spre ce îți face bine. Dezgustul te protejează de ceea ce e toxic sau nepotrivit.</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Fă o listă cu lucruri care îți aduc bucurie; practică recunoștința</li>
              <li>Analizează convingerile care declanșează dezgustul; discută-le cu alții</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Vinovăția și rușinea</h4>
            <p className="text-sm">Vinovăția te ajută să corectezi. Rușinea este socială și se dizolvă vorbind despre ea.</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Repară când poți, cere-ți scuze, schimbă comportamentul</li>
              <li>Fă diferența: „am greșit” (vinovăție) vs „sunt rău/rea” (rușine)</li>
              <li>Vorbește deschis – cuvintele reduc rușinea</li>
            </ul>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4 space-y-2">
            <h4 className="font-semibold">Dă-ți voie să simți</h4>
            <p className="text-sm">
              Tendința de a bloca emoțiile le intensifică și afectează relațiile și bucuria. Emoțiile vin, stau puțin și trec – sunt cheia pentru sănătate și relații bune.
            </p>
            <p className="text-sm">Decizia ta poate începe acum:</p>
            <blockquote className="text-sm italic leading-relaxed">
              Eu, ________________________________, îmi dau voie să simt emoțiile mele, chiar dacă uneori sunt inconfortabile. Decid să nu le mai ascund și să nu mai fug de ele. În acest moment închei războiul cu emoțiile. Sunt ale mele și învăț să le cunosc și să le primesc.
            </blockquote>
          </div>
        </div>
      ),
    },
    {
      id: "a15",
      title: "💥 Pericolele steroizilor anabolizanți la adolescenți",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Sănătate și prevenție</p>
            <p className="font-semibold">Steroizii anabolizanți pot lăsa efecte grave și ireversibile asupra adolescenților.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">🧬 Ce sunt și de ce sunt periculoși?</h4>
            <p>
              Steroizii anabolizanți sunt substanțe sintetice, „copii” ale testosteronului. În medicină se folosesc în doze controlate pentru
              anumite boli, dar utilizarea lor fără supraveghere medicală (pentru masă musculară sau performanță) este periculoasă.
              Dereglează hormonii naturali ai corpului, cu efecte adesea ireversibile.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">👶 De ce adolescenții sunt mai vulnerabili</h4>
            <p>
              În adolescență, corpul trece prin transformări majore (creștere, maturizare osoasă și hormonală). Intervenția cu steroizi
              poate opri creșterea în înălțime, crea tulburări hormonale permanente și afecta sănătatea emoțională (agresivitate, anxietate,
              depresie).
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">🦴 Efecte asupra creșterii și oaselor</h4>
            <p>
              Pot închide prematur cartilajele de creștere, ceea ce duce la oprirea definitivă a creșterii. Practic, „furi” centimetri din viitor.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">❤️ Inima și vasele de sânge</h4>
            <p>
              Cresc tensiunea arterială și colesterolul LDL, favorizând plăci aterosclerotice. Riscul de infarct sau AVC poate crește chiar la 17–18 ani.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">🩸 Ficatul și rinichii</h4>
            <p>
              Ficatul suferă primul, mai ales cu forme orale: steatoză, icter, colestază, creșteri ale enzimelor hepatice, chisturi sau tumori. Rinichii pot dezvolta hipertensiune,
              proteinurie, glomeruloscleroză și insuficiență renală cronică.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">🧠 Creierul, emoțiile și comportamentul</h4>
            <p>
              Pot induce agresivitate, iritabilitate, crize de furie, anxietate, depresie și chiar psihoze la doze mari. Multe efecte pot persista și după oprirea consumului.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-lg">🔥 Efecte hormonale și asupra fertilității</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium">La băieți:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Oprirea producției naturale de testosteron</li>
                  <li>Atrofie testiculară</li>
                  <li>Scăderea numărului și calității spermatozoizilor (infertilitate)</li>
                  <li>Ginecomastie (dezvoltarea sânilor)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">La fete:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Dereglări sau oprirea ciclului menstrual</li>
                  <li>Îngroșarea ireversibilă a vocii</li>
                  <li>Pilozitate în exces și mărirea clitorisului</li>
                  <li>Infertilitate</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">📊 Cât de răspândit este</h4>
            <p>
              Studii internaționale estimează 1–4% dintre adolescenți cu consum cel puțin o dată. Presiunea socială, rețelele și accesul online cresc riscul.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">🛑 Cum spui „NU” presiunii</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Pregătește un răspuns simplu: „Nu, cresc natural.”</li>
              <li>Caută un prieten pe aceeași lungime de undă și sprijiniți-vă.</li>
              <li>Prioritizează sănătatea; dacă presiunea e mare, părăsește contextul.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">🤝 Cum ceri ajutor</h4>
            <p>
              Vorbește cu un adult de încredere (părinte, profesor, antrenor) sau cu medicul de familie/nutriționist. Cu cât mai devreme, cu atât mai bine.
              Asociația noastră te poate ghida către soluții sigure.
            </p>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-1">💚 Concluzie</h4>
            <p>
              Steroizii anabolizanți pun în pericol inima, ficatul, creierul, fertilitatea și echilibrul emoțional. Alege răbdarea și creșterea naturală –
              decizia de azi îți poate salva viitorul. 💪✨
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "a_despre_tine",
      title: "Nu e despre droguri. E despre tine, cel care ai ales să dai atenție acestui mesaj!",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="font-semibold text-lg">O conversație sinceră despre tentație, durere și alegeri</p>
          </div>

          <p>Nu știu cine ești, nu știu ce porți în suflet, ce te frământă, te face să zâmbești sau să plângi. Dar știu că dacă citești asta, înseamnă că ești în fața unei alegeri. Poate ai fost întrebat, poate ai văzut, poate ai fost tentat, poate ai spus &ldquo;nu&rdquo; o dată, dar nu știi dacă vei mai putea.</p>
          
          <p>Așa că hai să vorbim, nu despre droguri ci despre tine, despre ce te poate duce acolo si despre ce te poate ține departe.</p>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">De ce ai ajunge să încerci?</h4>
            <p>Nimeni nu se trezește într-o dimineață și spune: &ldquo;Azi vreau să-mi distrug viața!&rdquo; Nu ! Totul începe subtil, cu o nevoie, cu o lipsă, cu o durere.</p>
            <p>Iti las cateva posibile motive pentru care ai putea sa ajungi sa consumi :</p>
            
            <div className="space-y-3">
              <div>
                <p className="font-medium">1. Presiunea grupului !</p>
                <p className="text-sm">Prietenii tăi sunt totul, vrei să aparții si să nu fii &ldquo;ciudatul&rdquo; care refuză. Să nu fii exclus ! Dar uneori, acceptarea vine cu un preț. Un joint, o pastilă. o promisiune că &ldquo;nu e mare lucru&rdquo;. Dar adevărul e că grupul care te împinge spre autodistrugere nu e un grup care te acceptă, e un grup care te folosește iar tu meriți mai mult.</p>
              </div>
              
              <div>
                <p className="font-medium">2. Curiozitatea !</p>
                <p className="text-sm">Adolescența e despre explorare, despre &ldquo;ce-ar fi dacă&rdquo;, despre limite iar drogurile par o experiență, un experiment, o aventură. Dar nu toate aventurile sunt inoffensive, unele lasă urme adanci in corp, in minte sim ai ales in suflet.</p>
              </div>
              
              <div>
                <p className="font-medium">3. Durerea emoțională !</p>
                <p className="text-sm">Anxietate, depresie, singurătate, trauma. Poate nu le-ai spus nimănui, poate le porți în tăcere si drogurile par o soluție, o evadare, o pauză de la durere. Dar nu vindecă, doar amână si când revin, revin mai puternice.</p>
              </div>
              
              <div>
                <p className="font-medium">4. Problemele din familie!</p>
                <p className="text-sm">Conflicte, lipsă de comunicare, absenta parintilor, critici. Poate acasă nu e un loc sigur, poate nu te simți iubit si cauți alinare în altă parte. Dar drogurile nu sunt alinare, sunt o iluzie. Și iluzia doare mai tare decât realitatea.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Ce se întâmplă cu tine când consumi?</h4>
            <p>Hai să vorbim despre ce nu se vede în filme, despre ce nu-ți spun prietenii, despre ce nu apare pe TikTok sau alte platforme de social media.</p>
            <p>Iti spun cateva din efectele care pot aparea in tine dar si in afara ta, ambele variante implicand defapt situatii care te vor afecta pe termen lung sau iremediabil.</p>
            
            <div className="space-y-3">
              <div>
                <p className="font-medium">1. În creier</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Drogurile modifică chimia creierului. Îți afectează memoria, atenția, capacitatea de decizie.</li>
                  <li>Creează dependență. Nu pentru că ești slab, ci pentru că sunt făcute să te prindă.</li>
                  <li>Pot declanșa tulburări psihice: depresie, anxietate, psihoză.</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">2. În corp</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Slăbiciune, insomnie, dureri, tremurături.</li>
                  <li>Probleme cardiace, hepatice, renale.</li>
                  <li>Supradoze. Uneori, o singură dată e suficient.</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">3. În viață</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Note scăzute, exmatriculare, abandon școlar.</li>
                  <li>Conflicte cu părinții, prietenii, iubita/iubitul.</li>
                  <li>Cazier, dosar penal, pierderea oportunităților.</li>
                </ul>
              </div>
            </div>
            <p className="font-medium">Și toate astea pot începe cu &ldquo;doar o dată&rdquo;.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Ce pierzi când alegi drogurile?</h4>
            <p>Nu pierzi doar sănătatea, pierzi mult mai mult.</p>
            
            <div className="space-y-2">
              <p className="text-sm"><span className="font-medium">1. Încrederea în tine !</span> La început, pare că te eliberează, dar în timp, te fac să te urăști, să te simți slab, vinovat si rușinat.</p>
              <p className="text-sm"><span className="font-medium">2. Relațiile!</span> Minți, te ascunzi, te izolezi si oamenii care te iubesc nu mai știu cum să te ajute sau aleg sa plece.</p>
              <p className="text-sm"><span className="font-medium">3. Viitorul!</span> Poate visai să devii medic sau artist sau antreprenor. Dar drogurile nu au visuri, au doar lanțuri si limitari iar tu meriți un viitor nu o regresie.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Ce poți face în schimb?</h4>
            <p>Nu-ți spun să devii perfect, iți spun să devii sincer cu tine si cu cei din jurul tau. Iti las cateva alternative pe care ai putea sa le folosesti pentru a te ajuta:</p>
            
            <div className="space-y-2">
              <p className="text-sm"><span className="font-medium">1. Vorbește</span> cu un adult in care ai incredere, cu un consilier scolar sau psiholog, cu un prieten care nu te judecă si este matur. Spune ce simți, ce te doare, ce te sperie.</p>
              
              <div>
                <p className="font-medium">2. Caută alternative</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Sport. Te eliberează.</li>
                  <li>Artă. Te exprimă.</li>
                  <li>Voluntariat. Te conectează.</li>
                  <li>Terapie. Te vindecă.</li>
                </ul>
              </div>
              
              <p className="text-sm"><span className="font-medium">3. Fii atent la semne,</span> dacă simți că ești atras de droguri, întreabă-te: &ldquo;Ce-mi lipsește?&rdquo; si caută răspunsul în locuri sănătoase.</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-lg mb-3">Decizia finala iti apartine</h4>
            <p>Nu e ușor ! Nimeni nu spune că e. Dar e posibil să alegi altceva, să te alegi pe tine!</p>
            <p>Și dacă ai consumat deja, nu ești pierdut! Ești în proces, ești în luptă, ești în viață si viața ta contează!</p>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4 space-y-2">
            <p className="font-medium">Așa că, te rog, înainte să spui &ldquo;da&rdquo; unei astfel de experiente, întreabă-te:</p>
            <ul className="list-none space-y-1 text-sm">
              <li>&ldquo;Ce vreau cu adevărat?&rdquo;</li>
              <li>&ldquo;Ce merit cu adevărat?&rdquo;</li>
              <li>&ldquo;Ce pot construi cu adevărat?&rdquo;</li>
            </ul>
            <p className="font-medium">Intelege ca răspunsul e în tine, nu în substanțe, nu în evadare, ci în curajul de a fi tu!</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Ce se întâmplă în mintea ta – psihologia consumului</h4>
            <p>Dacă ai ajuns până aici, înseamnă că vrei să înțelegi ,nu doar ce sunt drogurile, ci ce fac cu tine, cu gândurile tale, cu emoțiile tale si cu felul în care te vezi și te simți.</p>
            <p>Consumul de droguri nu e doar o experiență fizică, e o invazie psihologică, o reconfigurare a felului în care funcționezi si uneori, nici nu-ți dai seama cât de adânc te afectează.</p>
            <p>Iti las cateva din efectele consumului de droguri, in plan fizio-psihologic:</p>
            
            <div className="space-y-3">
              <div>
                <p className="font-medium">1. Dopamina – plăcerea care te prinde</p>
                <p className="text-sm">Majoritatea drogurilor stimulează eliberarea de dopamină, neurotransmițătorul responsabil pentru senzația de plăcere. La început, pare magic: euforie, relaxare, energie. Dar creierul tău începe să se obișnuiască si cere mai mult si mai mult. Rezultatul? Plăcerile naturale – muzica, prietenii, sportul – nu mai provoacă aceeași bucurie, totul pare fad si singura sursă de &ldquo;bine&rdquo; devine substanța iar asta e începutul dependenței psihologice.</p>
              </div>
              
              <div>
                <p className="font-medium">2. Tulburări cognitive</p>
                <p className="text-sm">Consumul repetat afectează:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Capacitatea de concentrare</li>
                  <li>Memoria de scurtă durată</li>
                  <li>Gândirea logică</li>
                  <li>Luarea deciziilor</li>
                </ul>
                <p className="text-sm">Adolescenții care consumă droguri au dificultăți în învățare, în gestionarea timpului și în rezolvarea problemelor si asta nu e doar temporar, unele efecte pot dura ani sau deveni permanente.</p>
              </div>
              
              <div>
                <p className="font-medium">3. Tulburări afective</p>
                <p className="text-sm">Drogurile nu doar că nu vindecă depresia sau anxietatea – ele le pot agrava, după euforia inițială, urmează:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Episoade de depresie profundă</li>
                  <li>Atacuri de panică</li>
                  <li>Sentimente de gol și inutilitate</li>
                  <li>Irascibilitate și furie</li>
                </ul>
                <p className="text-sm">Unele substanțe pot induce psihoze – episoade în care realitatea e distorsionată, apar halucinații sau paranoia.</p>
              </div>
              
              <div>
                <p className="font-medium">4. Identitate și imagine de sine</p>
                <p className="text-sm">Adolescența e perioada în care îți construiești identitatea, drogurile o pot fragmenta. Te pot face să te simți fals, confuz, rupt de cine erai. Mulți adolescenți spun că nu se mai recunosc, că nu mai știu cine sunt fără substanță. Imaginea de sine se degradează, apare rușinea, auto-critica, sentimentul că &ldquo;nu mai contez&rdquo; si asta poate duce la izolare, auto-sabotaj, chiar gânduri suicidare.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Cum se instalează dependența psihologică?</h4>
            <p>Dependența nu înseamnă doar nevoia fizică, inseamnă că mintea ta începe să creadă că nu poate funcționa fără drog.</p>
            
            <div>
              <p className="font-medium mb-2">Etapele:</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Curiozitate – &ldquo;Hai să încerc.&rdquo;</li>
                <li>Repetiție – &ldquo;A fost ok, mai vreau.&rdquo;</li>
                <li>Asociere – &ldquo;Mă simt bine doar când consum.&rdquo;</li>
                <li>Negare – &ldquo;Nu e o problemă, pot controla.&rdquo;</li>
                <li>Dependență – &ldquo;Nu pot fără.&rdquo;</li>
              </ol>
              <p className="text-sm mt-2">Și în tot acest timp, creierul tău învață să se bazeze pe substanță pentru orice: relaxare, distracție, somn, încredere iar tu începi să te pierzi.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Ce poți face pentru a te proteja psihologic?</h4>
            <p>Nu e suficient să spui &ldquo;nu&rdquo;, trebuie să înțelegi de ce spui &ldquo;nu&rdquo; si să construiești în tine o rezistență reală.</p>
            
            <div className="space-y-2">
              <p className="text-sm"><span className="font-medium">1. Cunoaște-te !</span> Fă-ți timp să înțelegi ce simți, ce te doare, ce te sperie, ce te face vulnerabil. Cu cât te cunoști mai bine, cu atât ești mai greu de manipulat.</p>
              <p className="text-sm"><span className="font-medium">2. Vorbește !</span> Terapia nu e pentru &ldquo;nebuni&rdquo;, e pentru oameni curajoși care vor să se înțeleagă, să se vindece si să se reconstruiască.</p>
              <p className="text-sm"><span className="font-medium">3. Găsește sens !</span> Fă lucruri care te stimuleaza, care te provoacă, care te conectează. Sensul e antidotul dependenței.</p>
              <p className="text-sm"><span className="font-medium">4. Înconjoară-te de oameni care te respect !</span> Nu de cei care te împing spre distrugere, ci de cei care te văd, te ascultă si te susțin.</p>
            </div>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <p className="text-sm">Daca vrei, haide sa ne cunostem mai mult decat in spatele cuvintelor de pana acum, te invit sa intri pe site-ul meu, <a href="https://www.doctoralisivascu.ro" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.doctoralisivascu.ro</a> in sectiunea &ldquo;primul pas&rdquo; si sa faci o prima programare gratuita.</p>
            <p className="font-medium mt-3">Te imbratisez! Doctor Alis Ivascu, psiholog clinician si expert in adictii.</p>
          </div>
        </div>
      ),
    },
    {
      id: "a_hipnoza_regresiva",
      title: "Hipnoza regresivă – sprijin profund în procesul de vindecare a dependențelor",
      content: (
        <div className="space-y-5">
          <div className="w-full rounded-xl overflow-hidden border mb-6">
            <Image 
              src={`${prefix}/imaginearticol222.jpeg`} 
              alt="Hipnoza regresivă – sprijin profund în procesul de vindecare a dependențelor" 
              width={800} 
              height={600} 
              className="w-full h-auto object-contain" 
            />
          </div>

          <p>Dependențele de droguri și alte substanțe reprezintă adesea o manifestare a unei suferințe emoționale profunde.</p>

          <p>Dincolo de comportamentele vizibile, ele pot avea rădăcini în traume nerezolvate, răni emoționale vechi sau chiar în tipare transgeneraționale moștenite inconștient.</p>

          <p>Hipnoza regresivă oferă o abordare terapeutică blândă și eficientă, care sprijină procesul de vindecare din interior, accesând direct nivelurile profunde ale subconștientului.</p>

          <p>Într-o stare de relaxare și siguranță, persoana este ghidată să exploreze originea emoțională a dependenței, pentru a înțelege, elibera și transforma acele experiențe care au creat vulnerabilitatea inițială.</p>

          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Prin acest proces, hipnoza regresivă poate contribui la:</h4>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>conștientizarea și vindecarea traumelor emoționale din copilărie sau din alte perioade semnificative ale vieții;</li>
              <li>înțelegerea legăturilor transgeneraționale și a tiparelor moștenite care influențează comportamentele adictive;</li>
              <li>restabilirea conexiunii cu sinele autentic și cu resursele interioare de echilibru, încredere și autocontrol;</li>
              <li>reprogramarea subconștientului pentru a susține alegeri sănătoase, claritate și stabilitate emoțională.</li>
            </ul>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <p className="text-sm">Hipnoza regresivă nu înlocuiește tratamentele medicale, dar le poate completa în mod benefic, oferind o înțelegere mai profundă a cauzelor interioare și facilitând procesul de recuperare.</p>
            <p className="text-sm mt-2">Prin accesarea și vindecarea sursei emoționale a dependenței, persoana poate recăpăta sentimentul de libertate, echilibru și sens în propria viață.</p>
          </div>

          <p className="text-sm text-muted-foreground mt-4">Articol scris de terapeutul Mihaela Sava.</p>
        </div>
      ),
    },
    {
      id: "a_semne_adolescent",
      title: "5 semne că se întâmplă ceva cu adolescentul tău (și nu e de bine)",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Ghid pentru părinți</p>
            <p className="font-semibold">Adolescența nu este doar o etapă de descoperiri și entuziasm. Este și o perioadă plină de încercări, în care echilibrul emoțional și alegerile corecte pot face diferența între un drum sănătos și unul periculos.</p>
          </div>
          
          <p>Pentru părinți, provocarea cea mai mare este să recunoască la timp semnele că fiul sau fiica lor trece printr-o situație dificilă. Câteva semne care pot ridica semnale de alarmă:</p>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">1. Devine foarte secretos</h4>
            <p className="text-sm">
              Telefonul devine un teritoriu interzis, dispar conversațiile de la cină și evită privirea ochi în ochi. Intimitatea este firească la această vârstă, dar atunci când secretomania devine excesivă, părinții trebuie să fie atenți: poate ascunde comportamente riscante sau influențe nocive.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">2. Își schimbă brusc prietenii</h4>
            <p className="text-sm">
              La 16–17 ani, prieteniile cântăresc enorm. Dar schimbarea bruscă a anturajului și tăcerea în privința celor noi pot fi semne că adolescentul caută altceva: validare, apartenență, sau, mai grav, expunere la tentații.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">3. Probleme cu banii</h4>
            <p className="text-sm">
              Cere mai mulți bani decât de obicei, dispar sume din casă, iar explicațiile lipsesc. De multe ori, banii sunt primul indicator că adolescentul este presat de cineva sau începe să experimenteze comportamente riscante.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">4. Schimbări de comportament și dispoziție</h4>
            <p className="text-sm">
              De la irascibilitate și retragere până la nopți pierdute și somn excesiv, schimbările bruște de comportament nu trebuie ignorate. Ele apar frecvent în cazul consumului de substanțe sau al tulburărilor emoționale.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">5. Pierde interesul pentru școală și activități</h4>
            <p className="text-sm">
              Scad notele, dispare motivația, hobby-urile rămân uitate într-un colț. Când adolescentul nu mai găsește bucurie în lucrurile care îi plăceau, trebuie să ne întrebăm ce anume i-a ocupat locul.
            </p>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Drogurile ucid visele copiilor</h4>
            <p className="text-sm mb-2">Drogurile nu fură doar sănătatea, ci și viitorul. Ele schimbă chimia creierului și răpesc plăcerile simple ale vieții:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong>Dopamina</strong>, motorul motivației, este supraîncărcată și apoi slăbită. Nimic nu mai aduce bucurie.</li>
              <li><strong>Serotonina</strong>, responsabilă de echilibru emoțional, se dezechilibrează, aducând anxietate și depresie.</li>
              <li><strong>Noradrenalina</strong>, care ține atenția trează, este distorsionată, alternând hiperactivitatea cu epuizarea.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Context românesc – cifre care dor</h4>
            <p className="text-sm mb-2">Datele recente sunt îngrijorătoare și arată cât de aproape este pericolul:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>3 din 10 adolescenți spun că știu pe cineva care consumă droguri sau substanțe psihoactive.</li>
              <li>Aproape 3% dintre elevi recunosc consumul direct, dar procentul real ar putea fi mai mare.</li>
              <li>8,7% dintre adolescenții sub 16 ani au încercat canabis cel puțin o dată, potrivit Agenției Naționale Antidrog.</li>
              <li>În București, aproape 7% dintre liceeni de 15–16 ani declară că au consumat canabis, iar 68% recunosc consumul de alcool.</li>
              <li>Vârsta de debut a scăzut alarmant, ajungând la 13–14 ani.</li>
              <li>Numărul dosarelor pentru trafic și consum a crescut de peste trei ori în ultimul deceniu, iar minorii apar din ce în ce mai des printre cei implicați.</li>
            </ul>
            <p className="text-sm mt-2">Aceasta este realitatea: tentația există, iar riscurile sunt tot mai devreme și tot mai aproape.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Cum poate sportul să refacă echilibrul?</h4>
            <p className="text-sm mb-2">Există însă o veste bună: sportul este un aliat puternic. Activitatea fizică reface în mod natural echilibrul neurotransmițătorilor:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong>Dopamina</strong> – fiecare antrenament aduce satisfacție și motivație reală.</li>
              <li><strong>Serotonina</strong> – exercițiile regulate îmbunătățesc starea de spirit și reduc anxietatea.</li>
              <li><strong>Endorfinele</strong> – oferă un „high&quot; natural și sănătos, o stare de bine după efort.</li>
            </ul>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Sportul – centura de siguranță a adolescentului</h4>
            <p className="text-sm mb-2">În mijlocul tentațiilor, sportul devine o centură de siguranță: sala, antrenorul și colegii oferă stabilitate, valori și apartenență. Copiii care cresc în sport nu mai au nevoie să caute validare în anturaje riscante.</p>
            <p className="text-sm">Sportul le dă obiective clare, disciplină și încredere. Și, dacă au noroc, echipa lor are și un psiholog sportiv care îi ajută să își înțeleagă emoțiile și să facă față presiunilor.</p>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm font-medium italic">Dragi părinți, întrebați-vă: Ce fel de centură de siguranță are adolescentul vostru?</p>
            <p className="text-sm mt-2">Nina Buru, Psiholog Sportiv<br/>27 septembrie 2025</p>
          </div>
        </div>
      ),
    },
    {
      id: "a6",
      title: "Plan Strategic - Asociația Drogurile ucid visurile copiilor",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Planul nostru strategic</p>
            <p className="font-semibold">Asociația „Drogurile ucid visurile copiilor” este o inițiativă națională dedicată prevenirii consumului de substanțe și sprijinirii copiilor și tinerilor afectați direct sau indirect de această problemă.</p>
          </div>
          
          <p>Credem cu tărie că fiecare copil merită o șansă reală la o viață sănătoasă, echilibrată și plină de speranță. Copiii sunt viitorul nostru, iar rolul nostru este să îi protejăm, să îi educăm și să îi sprijinim.</p>

          <div className="bg-muted/30 p-4 rounded-lg border">
            <h4 className="font-semibold mb-2">Misiunea noastră</h4>
            <p className="italic">Ne propunem să fim o voce puternică în lupta împotriva consumului de substanțe, să schimbăm percepția socială despre consumatori și să oferim sprijin real copiilor și familiilor lor.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Obiectivele principale</h4>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Schimbarea percepției sociale despre consumatori</li>
              <li>Acceptarea socială a consumatorului</li>
              <li>Dezvoltarea și promovarea unor unelte de identificare a consumatorului</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Cea mai mare campanie antidrog din România</h4>
            <p className="mb-3">Pe <span className="font-medium">1 septembrie</span> vom lansa oficial cea mai mare campanie națională antidrog din România. Scopul acestei campanii este de a aduce la un loc influenceri, sportivi, foști consumatori, psihologi, televiziuni, școli și organizații.</p>
            
            <div className="text-sm space-y-1">
              <p className="font-medium mb-2">Participări confirmate:</p>
              <div className="grid grid-cols-1 gap-2 text-xs">
                <div>• <span className="font-medium">2 influenceri</span></div>
                <div>• <span className="font-medium">2 cluburi de fotbal</span> pentru copii</div>
                <div>• <span className="font-medium">2 televiziuni</span></div>
                <div>• <span className="font-medium">4 foști consumatori</span> (pe diferite tipuri de substanțe)</div>
                <div>• <span className="font-medium">2 facultăți</span></div>
                <div>• <span className="font-medium">Rotarii și Erasmus</span></div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Centrul nostru - Fermă-Școală</h4>
            <p className="mb-3">Unul dintre cele mai importante proiecte este construirea unui centru tip fermă-școală la Sibiu, destinat copiilor și tinerilor consumatori sau dependenți.</p>
            
            <div className="text-sm space-y-1">
              <p className="font-medium mb-2">Centrul va include:</p>
              <div className="grid grid-cols-1 gap-1 text-xs">
                <div>• Psihologi specializați</div>
                <div>• Nutriționiști și instructori sportivi</div>
                <div>• Mentori (foști consumatori)</div>
                <div>• Activități practice: grădinărit, îngrijirea animalelor</div>
                <div>• Colaborare cu clinici și specialiști</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Reintegrarea în societate</h4>
            <p>După finalizarea procesului de recuperare, copiii și tinerii vor fi sprijiniți să își găsească un loc de muncă prin dezvoltarea unei <span className="font-medium">firme de recrutare dedicate beneficiarilor</span>.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Prezența online</h4>
            <p className="text-sm">Suntem activi pe toate platformele majore: <span className="font-medium">TikTok, Instagram, Facebook</span> și prin site-ul oficial, unde publicăm informații educative, povești reale și resurse utile.</p>
          </div>

          <div className="border border-muted bg-muted/20 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Contact</h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium">Email:</span> 
                <a href="mailto:drogurileucidvisurilecopiilor@gmail.com" className="text-primary hover:underline ml-1">
                  drogurileucidvisurilecopiilor@gmail.com
                </a>
              </div>
              <div>
                <span className="font-medium">Telefon:</span> 
                <a href="tel:0757254316" className="text-primary hover:underline ml-1">
                  (0757) 254 316
                </a>
              </div>
              <div className="text-xs text-muted-foreground">
                Social Media: TikTok, Instagram, Facebook - „Asociația Drogurile ucid visurile copiilor”
              </div>
            </div>
          </div>

          <p className="text-center font-medium italic border-t pt-4">Împreună suntem mai puternici și putem construi o lume mai bună pentru copiii noștri.</p>
        </div>
      ),
    },
    {
      id: "a7",
      title: "Anxietatea, trauma și puterea vindecătoare a iubirii de sine",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Despre sănătatea mentală</p>
            <p className="font-semibold">Anxietatea este o emoție normală, apărută ca să ne protejeze, chiar dacă uneori exagerează pericolele.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Înțelegerea anxietății</h4>
            <p>Ea „vrea” să ajute, dar o face zgomotos și apăsător. Dacă te lupți cu ea, devine mai puternică, însă dacă o accepți și o lași să existe, împrietenindu-te cu ea, ea va pierde din intensitate. <span className="font-medium">Privită ca un semnal, nu ca un dușman, anxietatea devine mai ușor de purtat.</span></p>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg border">
            <h4 className="font-semibold mb-2">Gândurile anxioase</h4>
            <p className="text-sm">Un aspect important este că gândurile pe care le aduce anxietatea nu sunt mereu adevărate. Ele pot fi interpretări distorsionate, prea dure sau catastrofice. În loc să le iei de bune, poți să le scrii și să le reformulezi în variante mai blânde și mai aproape de realitate.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Traumele - mari și mici</h4>
            <p className="mb-3">Traumele nu înseamnă doar accidente grave, abuzuri sau pierderi majore. Gabor Maté vorbește despre <span className="font-medium">traumele cu „T” mare</span> – cele evidente, șocante, care lasă urme vizibile – și <span className="font-medium">traumele cu „t” mic</span>, mai subtile, dar la fel de importante.</p>
            
            <p>Acestea din urmă apar atunci când ceva esențial lipsește, cum ar fi afecțiunea, validarea sau sentimentul de siguranță în copilărie. Deși nu sunt la fel de spectaculoase, ele pot influența profund felul în care ne raportăm la noi și la ceilalți.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Procesarea traumelor</h4>
            <p>Indiferent de mărimea lor, traumele tulbură echilibrul interior și, dacă rămân neprocesate, ajung să ne conducă din umbră. Încercarea de a le ignora sau de a le îngropa nu face decât să le mențină vii. <span className="font-medium">Calea sănătoasă este să avem curajul să ne uităm la ele, să le înțelegem și să le procesăm, de preferat cu sprijinul unui specialist.</span></p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Puterea vindecătoare a iubirii</h4>
            <p className="mb-3">Iubirea este una dintre cele mai puternice forțe de vindecare – fie că vorbim despre iubirea pe care o primim de la ceilalți, fie că vorbim despre iubirea pe care ne-o oferim nouă înșine.</p>
            
            <p>Relațiile sănătoase, bazate pe grijă și acceptare, ne dau siguranță și ne ajută să ne regăsim echilibrul interior. Dar la fel de importantă este <span className="font-medium">iubirea de sine</span>: capacitatea de a ne trata cu blândețe, de a ne ierta greșelile și de a ne respecta propriile nevoi.</p>
          </div>

          <div className="border border-muted bg-muted/20 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Antrenamentul iubirii de sine</h4>
            <p className="text-sm">Cu pași mici – prin gesturi de grijă, prin acceptarea imperfecțiunilor și prin cultivarea compasiunii pentru noi înșine – putem rescrie felul în care ne raportăm la viață. Și, paradoxal, cu cât ne iubim mai mult pe noi, cu atât devenim mai capabili să iubim autentic și pe ceilalți.</p>
          </div>

          <p className="text-center font-medium italic border-t pt-4">Vindecarea începe cu acceptarea și compasiunea pentru noi înșine.</p>
        </div>
      ),
    },
    {
      id: "a8",
      title: "6 Întrebări Esențiale Despre Dependență",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Bazat pe ideile lui Dr. Gabor Maté</p>
            <p className="font-semibold">Tradus și adaptat pentru publicul larg</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">1. Ce este dependența?</h4>
            <p>
              Dependența nu înseamnă doar consum de droguri sau alcool. Poate fi orice comportament repetitiv – cu sau fără
              substanțe – care oferă alinare sau plăcere temporară, dar are consecințe negative pe termen lung. Elementele cheie sunt:
              nevoia compulsivă de a repeta comportamentul, plăcerea sau ușurarea temporară, lipsa controlului, continuarea
              comportamentului în ciuda problemelor și pofta intensă atunci când persoana nu are acces la comportament sau substanță.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">2. Cum influențează mediul dependența?</h4>
            <p>
              Creierul se dezvoltă în funcție de mediul în care trăim. Copiii au nevoie de siguranță emoțională și conectare pentru
              ca sistemele lor de motivație și autoreglare să funcționeze sănătos. Lipsa unui mediu sigur, conflictele, stresul sau
              lipsa afecțiunii pot afecta circuitele dopaminei și pot crește vulnerabilitatea la dependență.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">3. Ce ne arată experiența copilăriei timpurii?</h4>
            <p>
              Primele luni și ani de viață sunt decisive pentru dezvoltarea creierului. Lipsa contactului fizic sau separările
              repetate pot afecta permanent circuitele responsabile de motivație și plăcere. Chiar și gesturi simple precum îmbrățișările
              sau mângâierile sprijină dezvoltarea sănătoasă a creierului.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">4. Care este rolul atașamentului parental?</h4>
            <p>
              Atașamentul sigur cu părinții ajută copilul să își regleze emoțiile și stresul. Fără un atașament stabil, copilul poate
              dezvolta anxietate, probleme de relaționare și o predispoziție mai mare spre comportamente de dependență.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">5. Cum contribuie trauma la dependență?</h4>
            <p>
              Majoritatea persoanelor dependente au trecut prin traume în copilărie: abuz fizic, emoțional, sexual, divorțul părinților
              sau pierderea unei persoane dragi. Fiecare experiență traumatică crește riscul de consum precoce de substanțe de 2–4 ori,
              iar mai multe traume cumulate cresc riscul de până la 10 ori.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">6. Care este rolul stresului?</h4>
            <p>
              Stresul cronic afectează întreg organismul, inclusiv creierul. Copiii expuși la stres devin adulți mai sensibili la
              anxietate și mai predispuși să caute alinare rapidă în comportamente adictive. Astfel se creează un cerc vicios:
              stres → consum → și mai mult stres.
            </p>
          </div>

          <div className="border border-muted bg-muted/20 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Concluzie</h4>
            <p>
              Dependența nu este un defect de caracter, ci o încercare de a face față durerii și stresului. Creierul se poate vindeca
              prin relații sigure, sprijin și terapie. Cu înțelegere și compasiune, putem sprijini persoanele dependente să își
              reconstruiască viața.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "a9",
      title: "Ghid complet despre droguri pentru Părinți: Droguri, Simptome și Semne de Alarmă",
      content: (
        <div className="space-y-6">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Ghid pentru părinți</p>
            <p className="font-semibold">Scris într-un limbaj prietenos, ca să știi la ce să fii atent(ă).</p>
          </div>

          <p>
            Acest ghid este realizat pentru a-i ajuta pe părinți să înțeleagă ce tipuri de substanțe pot consuma adolescenții, cum sunt denumite în argou,
            ce emojiuri folosesc online, ce efecte au aceste droguri și care sunt simptomele sau schimbările de comportament ce pot indica un risc de consum.
            Informațiile sunt scrise într-un limbaj prietenos și ușor de înțeles.
          </p>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Cannabis (marijuana, hașiș)</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> iarbă, verde, marij, ganja, joint, blunt, vutra</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 🍁, 🌿, 💨, 🔥, 🥦, 🚬</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 30–70 lei/gram</p>
            <p>Cel mai folosit drog la adolescenți. Produce euforie și relaxare.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> scade motivația, memoria și concentrarea; apatie, retragere socială.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> ochi roșii, miros specific de fum, apetit crescut, râs excesiv, somnolență.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">MDMA / Ecstasy</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> E, Molly, pastile, bombonele</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 💊, 🍬, ❌⭕, 🍭, ⛔</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 40–60 lei/pastilă</p>
            <p>Stimulant sintetic popular la petreceri. Crește energia și empatia.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> deshidratare, epuizare, pupile dilatate, insomnie.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> transpirație excesivă, scrâșnit din dinți, agitație, sete intensă.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Amfetamine / Metamfetamine</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> speed, crystal, meth, gheață, albă, praf</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> ⚡, 💎, ❄️, 🧂</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 50–100 lei/gram</p>
            <p>Stimulente puternice care cresc vigilența. Extrem de adictive.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> iritabilitate, agresivitate, scădere în greutate, paranoia.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> pupile dilatate, lipsă somn, ticuri nervoase, neliniște.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Mephedrone / Cathinone / Etno</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> miau-miau, magic, sare, bubble, Spice</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 🧂, 🐱, ✨, 💥</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 10–30 lei/doză</p>
            <p>Stimulente sintetice ce imită amfetaminele. Dau euforie scurtă.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> impulsivitate, halucinații, violență, paranoia.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> agitație, pupile mari, transpirație, lipsă apetit, comportament agresiv.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Cocaină</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> albă, praf, zăpadă, coke, snow, blow</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> ❄️, ⛄, 🤧, 🧂</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 350–500 lei/gram</p>
            <p>Stimulant puternic ce oferă euforie intensă, dar de scurtă durată.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> după consum apare depresie și iritabilitate; dependență rapidă.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> pupile dilatate, secreții nazale, energie excesivă urmată de cădere emoțională.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Heroină</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> H, junk, maro, dope, horse</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 💉, 🐎, 😌</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 20–50 lei/doză</p>
            <p>Opioid extrem de adictiv, produce relaxare profundă.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> dependență foarte rapidă, pierd interesul pentru școală.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> urme de înțepături, somnolență extremă, pupile foarte mici, vorbire lentă.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Benzodiazepine (Xanax, Klonopin)</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> benzos, bars, K-pin</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 💊, 🛏️, 😴</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 10–50 lei/pastilă</p>
            <p>Medicamente pentru anxietate, abuzate pentru efectul de sedare.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> somnolență, lipsă de interes, risc de supradoză cu alcool.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> vorbire neclară, mers dezechilibrat, somn prelungit, uitare.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Codeină / Lean / Sizzurp</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> lean, purple drank, sizzurp</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 🍇, 🥤, 💧</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 50–100 lei/sticlă</p>
            <p>Sirop de tuse cu codeină amestecat cu băuturi carbogazoase. Produce euforie blândă.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> letargie, adormit des, risc de supradoză.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> somnolență, vorbire lentă, stare visătoare, încetinire mentală.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Calvin Klein (CK) & CK Blend</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> CK, Calvin Klein</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 💊 + ❄️ + ⚡ + 🖤</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 100–200 lei/combo</p>
            <p>Combinație de cocaină și ketamină. Extrem de periculoasă.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> halucinații, pierderi de cunoștință, risc de stop cardiac.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> comportament haotic, confuzie, pierdere echilibru.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Candyflipping</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> LSD + MDMA</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 🍭 + 🌈 + 💊 + 🔮</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 150–250 lei/set</p>
            <p>Combinație de halucinogen și stimulent, foarte riscantă pentru creierul adolescentului.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> halucinații intense, atacuri de panică, episoade psihotice.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> privire pierdută, transpirație, confuzie, schimbări bruște de emoții.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Chemsex</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> sex + droguri (meth, GHB, Viagra)</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 🍑, 💋, 💉, 🍸, 🍌</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 100–300 lei/seară</p>
            <p>Practică periculoasă ce combină droguri și activitate sexuală.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> risc de infecții, exploatare sexuală, dependență psihologică.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> dezinhibare extremă, comportament sexual compulsiv, epuizare fizică.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Ketamină</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> Special K, kit kat, vitamina K</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 💉, 👽, 🖤</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 80–150 lei/doză</p>
            <p>Anestezic folosit ilegal pentru efecte halucinogene.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> pierderi de memorie, dezechilibru, episoade de disociere.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> mers nesigur, privire goală, vorbire încetinită, confuzie.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">GHB / Rohypnol</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> G, GBL, liquid ecstasy, roofies</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 💧, 🛏️, 🍸</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 60–100 lei/doză</p>
            <p>Depresor al sistemului nervos, cunoscut ca „drogul violului”.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> sedare profundă, amnezie, pierderea cunoștinței.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> slăbiciune musculară, mers instabil, pierderi de memorie.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Speedball</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> cocaină + heroină</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> ❄️ + 💉 + ⚡ + 💀</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> &gt;500 lei/doză</p>
            <p>Mix extrem de periculos: combinație de stimulant și opioid.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> risc ridicat de stop cardiac chiar după prima utilizare.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> transpirație, confuzie, pierderea cunoștinței; risc letal foarte mare.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Protoxid de azot</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> balon, funny gas, hippie crack</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 🎈, 😆, 💨, 🧁, 💉</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 5–10 lei/capsulă</p>
            <p>Gaz ilariant inhalat din baloane. Produce euforie de câteva secunde.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> leșin, scăderea tensiunii, pierderea cunoștinței.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> amețeli, râs necontrolat, mers instabil, amorțeală la mâini/picioare.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Inhalanți (aracet, benzină, diluant)</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> aracet, lipici, vapori</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> 🍼, 🛢️, 🧴, 🎯</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> 5–15 lei</p>
            <p>Substanțe inhalate pentru efect psihoactiv. Foarte toxice.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> leziuni cerebrale, afectare coordonare și memorie.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> miros puternic pe haine, amețeli, ochi injectați, greață.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Fentanil</h4>
            <p className="text-sm"><span className="font-medium">Argou:</span> fenta</p>
            <p className="text-sm"><span className="font-medium">Emojiuri:</span> ⚠️, 💀</p>
            <p className="text-sm"><span className="font-medium">Preț aproximativ:</span> foarte ieftin, extrem de periculos</p>
            <p>Opioid sintetic de 50–100 ori mai puternic decât morfina. Cauzează moarte rapidă prin supradoză.</p>
            <p className="text-sm"><span className="font-medium">Efecte:</span> cea mai mare amenințare actuală pentru tineri; doze minime pot fi fatale.</p>
            <p className="text-sm"><span className="font-medium">Simptome vizibile:</span> respirație foarte lentă, pupile contractate, inconștiență, risc imediat de deces.</p>
          </div>
        </div>
      ),
    },
    {
      id: "a_spune_nu",
      title: "🚫 SPUNE NU DROGURILOR! 🚫",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Ghid de prevenție</p>
            <p className="font-semibold">Substanțe care îți schimbă corpul și mintea. Promit distracție, dar aduc doar probleme.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">❓ Ce sunt drogurile?</h4>
            <p>Substanțe care îți schimbă corpul și mintea. Promit distracție, dar aduc doar probleme.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">⚠️ De ce să NU consumi?</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Îți distrug sănătatea 🫁❤️🧠</li>
              <li>Îți scad memoria și concentrarea 📉</li>
              <li>Creează dependență 🔗</li>
              <li>Îți pun viitorul în pericol 🚫🎓</li>
              <li>Îți îndepărtează familia și prietenii 👨‍👩‍👧‍👦</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">❌ Riscuri majore:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Boli grave și accidente 🚑</li>
              <li>Anxietate și depresie 😟</li>
              <li>Probleme cu legea ⚖️</li>
              <li>Izolare socială 🕳️</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">✅ Cum să spui &ldquo;NU&rdquo;?</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Fii ferm: &ldquo;Nu, nu vreau!&rdquo;</li>
              <li>Pleacă din situațiile riscante 🚶‍♂️</li>
              <li>Alege alternative sănătoase 🏀🎶📚</li>
              <li>Înconjoară-te de prieteni adevărați 🤝</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">🆘 Dacă cineva consumă deja&hellip;</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Vorbește cu un adult de încredere 👩‍🏫👨‍👩‍👧</li>
              <li>Cere ajutor specializat 👨‍⚕️</li>
              <li>Nu te învinovăți, caută soluții! 💪</li>
            </ul>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">🔑 Concluzie</h4>
            <p>Drogurile nu aduc libertate. Aduc boală, dependență și tristețe.</p>
            <p className="mt-2 font-medium">Alege să fii sănătos, fericit și liber! 🌟</p>
            <p className="text-sm text-muted-foreground mt-2">Asociația &ldquo;Drogurile Ucid Visurile Copiilor&rdquo;</p>
          </div>
        </div>
      ),
    },
    {
      id: "a_semne_consum",
      title: "Semne care indică faptul că un copil ar putea consuma droguri",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Ghid pentru părinți</p>
            <p className="font-semibold">Este normal ca adolescenții să treacă prin schimbări de dispoziție, dar este important să fii atent la semnele care depășesc comportamentul tipic.</p>
          </div>

          <p>Detectarea timpurie a consumului de droguri poate fi crucială. Iată câteva semne la care ar trebui să fii atent:</p>

          <div>
            <h4 className="font-semibold text-lg mb-3">Schimbări fizice</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Ochii roșii, pupile dilatate sau contractate</li>
              <li>Pierdere sau creștere în greutate</li>
              <li>Probleme cu somnul</li>
              <li>Lipsa igienei personale</li>
              <li>Mirosuri neobișnuite pe haine sau în cameră</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Schimbări comportamentale</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Lipsa de interes pentru hobby-uri sau activități care îi plăceau înainte</li>
              <li>Prieteni noi și misterioși</li>
              <li>Minciuni frecvente</li>
              <li>Furtul de bani sau obiecte din casă</li>
              <li>Absențe nemotivate de la școală, note în scădere</li>
              <li>Comportament agresiv sau depresiv</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Schimbări emoționale și psihice</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Schimbări bruște de dispoziție</li>
              <li>Iritabilitate crescută</li>
              <li>Anxietate, paranoia sau episoade de confuzie</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-lg mb-3">Cum să abordezi discuția cu copilul</h4>
            <p className="mb-3">A aborda un copil suspectat de consum de droguri este un moment plin de tensiune. Este esențial să te pregătești și să ai o atitudine calmă și deschisă.</p>
            
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li><span className="font-medium">Alege momentul potrivit.</span> Nu începe discuția când ești furios sau când copilul este sub influența substanțelor.</li>
              <li><span className="font-medium">Fii calm și empatic.</span> Începe conversația cu o atitudine blândă, nu acuzatoare.</li>
              <li><span className="font-medium">Ascultă, nu judeca.</span> Lasă-l pe copil să vorbească și ascultă-l cu atenție.</li>
              <li><span className="font-medium">Recunoaște-i suferința.</span> Consumul de droguri este adesea o modalitate de a face față unei dureri emoționale.</li>
              <li><span className="font-medium">Fii un partener, nu un &ldquo;detectiv&rdquo;.</span> Spune-i că sunteți o echipă și că împreună veți găsi o soluție.</li>
            </ol>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-lg mb-3">Cum să-l convingi să meargă la terapie</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><span className="font-medium">Propune-i să mergeți împreună.</span> Spune-i că nu este singur în această luptă.</li>
              <li><span className="font-medium">Prezintă terapia ca pe o soluție, nu ca pe o pedeapsă.</span> Subliniază că un terapeut este un aliat.</li>
              <li><span className="font-medium">Fii deschis și transparent.</span> Îi poți spune că este normal să simtă frică sau rușine.</li>
            </ul>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Important</h4>
            <p className="text-sm">Nu încerca să gestionezi singur problema. Contactează un specialist în dependențe sau un psihoterapeut cu experiență în lucrul cu adolescenți. Sprijinul profesional este esențial pentru a-i oferi copilului cele mai bune șanse de a se recupera și de a-și construi un viitor sănătos.</p>
          </div>
        </div>
      ),
    },
    {
      id: "a_atasament",
      title: "🌱 Atașamentul și îngrijirea în copilărie",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Dezvoltarea creierului copilului</p>
            <p className="font-semibold">Dragostea, contactul și grija de zi cu zi construiesc literalmente creierul copilului.</p>
          </div>

          <div>
            <p>👶 Atunci când un bebeluș primește dragoste, zâmbete și atingeri blânde de la părinți, creierul lui eliberează &ldquo;substanțe ale fericirii&rdquo; (endorfine). Acestea îl ajută să se simtă în siguranță și îi dezvoltă circuitele din creier care mai târziu vor regla plăcerea, motivația și capacitatea de a se conecta cu ceilalți.</p>
          </div>

          <div>
            <p>😔 În schimb, atunci când copilul trece prin lipsă de atenție, absența părinților sau situații stresante, creierul său dezvoltă mai puțini receptori pentru aceste &ldquo;substanțe ale bucuriei&rdquo;. Asta îl face mai vulnerabil la anxietate și, mai târziu, la tentația de a apela la substanțe care îi dau artificial o senzație de bine.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">📉 Studiile pe animale au arătat lucruri uimitoare:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>puii de maimuță separați de mamă doar câteva zile aveau modificări serioase în creier</li>
              <li>șobolanii ținuți în izolare de mici erau mai predispuși ca adulți să consume cocaină</li>
              <li>dimpotrivă, șobolanii care au primit multă îngrijire și &ldquo;afecțiune de mamă&rdquo; au dezvoltat creiere mai rezistente la stres și anxietate</li>
            </ul>
          </div>

          <div>
            <p>👩‍👧‍👦 Pentru copii, prezența și afecțiunea părinților sunt la fel de vitale ca mâncarea și apa. Bebelușii prematuri, de exemplu, cresc mai repede și mai sănătos atunci când sunt atinși și mângâiați câteva minute pe zi.</p>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">💞 Concluzie</h4>
            <p className="text-sm">Cu alte cuvinte: dragostea, contactul și grija de zi cu zi construiesc literalmente creierul copilului. Fără ele, copilul poate rămâne cu un gol emoțional pe care, mai târziu, ar putea încerca să îl umple cu substanțe.</p>
          </div>
        </div>
      ),
    },
    {
      id: "a_trauma_copilarie",
      title: "🌪️ Trauma din copilărie și riscul de dependență",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Cercetare științifică</p>
            <p className="font-semibold">Majoritatea celor care ajung dependenți au trecut prin forme de traumă în copilărie.</p>
          </div>

          <div>
            <p>🔎 Studiile arată clar: majoritatea celor care ajung dependenți au trecut prin forme de traumă în copilărie — abuz fizic, emoțional, sexual sau neglijare. Cercetarea celebră ACE (Adverse Childhood Experiences) a descoperit că fiecare experiență grea din copilărie (violență, divorț, moartea unui părinte, alcoolism în familie etc.) crește de 2–4 ori șansele de a începe devreme consumul de substanțe. Dacă un copil trece prin 5 sau mai multe astfel de traume, riscul ajunge să fie și de 10 ori mai mare 🚨.</p>
          </div>

          <div>
            <p>💉 Studiile spun că aproape două treimi din cazurile de consum de droguri injectabile își au rădăcina în traumele din copilărie. Și nu e vorba doar de copii din medii &ldquo;defavorizate&rdquo;: mulți dintre cei afectați au studii universitare. Trauma nu alege clase sociale.</p>
          </div>

          <div>
            <p>🍷 În cazul alcoolului, povestea e similară: adolescenții care au fost abuzați sexual au de 3 ori mai multe șanse să înceapă să bea devreme. Pentru fiecare traumă emoțională trăită în copilărie, șansele de abuz de alcool cresc de 2–3 ori. Mulți folosesc băutura sau drogurile ca &ldquo;medicament&rdquo; pentru a-și calma durerea interioară.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">🧠 Trauma lasă urme și în creier:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Copiii abuzați au creierul cu 7–8% mai mic decât normal, în special în zonele care reglează emoțiile și impulsurile</li>
              <li>Hipocampul (centrul memoriei și emoțiilor) poate fi mai mic cu 15% la cei abuzați în copilărie</li>
              <li>&ldquo;Corpus callosum&rdquo; – puntea dintre emisferele cerebrale – e afectată, ceea ce duce la probleme în procesarea emoțiilor</li>
            </ul>
          </div>

          <div>
            <p>⚖️ Asta explică de ce unii adulți oscilează între a idealiza și a disprețui aceeași persoană, între a se simți foarte buni sau complet lipsiți de valoare. Creierul lor nu reușește să integreze ambele fețe ale realității.</p>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">👉 Concluzia</h4>
            <p className="text-sm">Trauma din copilărie nu este doar un &ldquo;episod trecut&rdquo;, ci modelează modul în care creierul și emoțiile funcționează toată viața, crescând masiv riscul de dependență.</p>
            <p className="text-xs text-muted-foreground mt-2">Text adaptat și simplificat din articolul &ldquo;Addiction: Childhood Trauma, Stress and the Biology of Addiction&rdquo;, scris de dr. Gabor Maté, publicat în Journal of Restorative Medicine (2012).</p>
          </div>
        </div>
      ),
    },
    {
      id: "a_stres_dependenta",
      title: "😰 Stresul și dependența",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Înțelegerea stresului</p>
            <p className="font-semibold">Dependența este, în mare parte, o încercare de a face față stresului.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">👉 Ce este stresul?</h4>
            <p>Stresul e felul în care corpul și mintea reacționează atunci când simt că nu mai pot face față. Se eliberează hormoni ca adrenalina ⚡ și cortizolul 🔥, care afectează inima, plămânii, mușchii și mai ales creierul.</p>
            <p className="mt-2">💔 Cel mai mare stres pentru oameni nu e lipsa banilor sau a resurselor, ci frica de a pierde dragostea și siguranța emoțională.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">👉 Cum influențează stresul din copilărie?</h4>
            <p>👶 Dacă un copil trece prin mult stres sau traumă devreme (abuz, neglijare, depresia mamei, abandon), creierul lui se &ldquo;setează&rdquo; pe modul alert permanent. Asta înseamnă că, și ca adult, se va stresa mult mai repede și mai intens decât cineva care a avut o copilărie stabilă.</p>
            
            <div className="bg-muted/10 p-3 rounded-lg mt-3">
              <p className="text-sm">Dr. Bruce Perry dă un exemplu simplu: O persoană calmă și una stresată beau alcool 🍷. Amândoi simt efectele, dar cel deja stresat are un plus de plăcere — pentru că alcoolul îi ușurează tensiunea. Exact ca atunci când bei apă rece 🥤 când îți este foarte sete: senzația e mult mai intensă.</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">👉 De ce apare dependența?</h4>
            <p>Un creier obișnuit să fie mereu tensionat caută soluții rapide pentru alinare. Drogurile, alcoolul sau alte comportamente (sex, agresivitate, chiar mâncare în exces 🍔) oferă această alinare pe moment. Problema e că pe termen lung distrug și mai mult echilibrul.</p>
            
            <div className="mt-3">
              <p className="text-sm font-medium">⚠️ Persoanele care au trecut prin stres sever în copilărie sunt mai vulnerabile:</p>
              <ul className="list-disc list-inside space-y-1 text-sm mt-2 ml-4">
                <li>Se declanșează foarte ușor în fața stresului</li>
                <li>Hormonii stresului se &ldquo;leagă&rdquo; de pofta pentru droguri</li>
                <li>Stresul duce adesea la recăderi după perioade de abstinență</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">👉 Ce factori ne stresează cel mai mult?</h4>
            <p className="mb-2">📌 Cercetările arată trei lucruri universale:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
              <li>Incertitudinea ❓</li>
              <li>Lipsa de informații 🕳️</li>
              <li>Pierderea controlului 🫲</li>
            </ol>
            <p className="mt-2 text-sm">La acestea se adaugă conflictele nerezolvate și singurătatea 🥀. Studiile pe animale au arătat că izolarea crește dorința de droguri, în timp ce viața într-un grup stabil oferă protecție.</p>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">💡 Pe scurt</h4>
            <p className="text-sm">Dependența este, în mare parte, o încercare de a face față stresului. Deși soluția aleasă (drogurile/alcoolul) dă alinare rapidă, pe termen lung aduce și mai multă durere.</p>
            <p className="text-xs text-muted-foreground mt-2">Text adaptat și simplificat din articolul &ldquo;Addiction: Childhood Trauma, Stress and the Biology of Addiction&rdquo;, scris de dr. Gabor Maté, publicat în Journal of Restorative Medicine (2012).</p>
          </div>
        </div>
      ),
    },
    {
      id: "a_sprijin_adolescent",
      title: "🧭 Cum poți sprijini un adolescent care consumă sau e dependent 🚸💔",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Ghid pentru părinți</p>
            <p className="font-semibold">A descoperi că propriul copil consumă substanțe este o experiență dureroasă și copleșitoare. Totuși, există pași concreți pe care îi poți face.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">1. Înțelege situația înainte să acționezi 🔍</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Consumul nu apare din senin — de multe ori este o strategie de supraviețuire pentru dureri emoționale, traume sau presiuni sociale</li>
              <li>Primul pas nu este pedeapsa, ci înțelegerea contextului: când a început, ce substanțe folosește, în ce medii, cu cine</li>
              <li>Ține un mic jurnal 📓 al observațiilor tale — asta poate fi foarte util la o discuție cu un specialist</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">2. Creează un plan în familie 👨‍👩‍👧</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Toți membrii familiei trebuie implicați: nu e doar &ldquo;problema copilului&rdquo;</li>
              <li>E bine să stabiliți împreună reguli clare (de ex. fără substanțe în casă 🚫), dar și spații sigure de comunicare</li>
              <li>Caută sprijin și pentru tine ca părinte (grupuri de suport, consiliere parentală). Un părinte copleșit nu poate sprijini eficient</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">3. Consultă profesioniști cât mai repede 🧑‍⚕️</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Caută un psiholog/psihiatru specializat în adicții la adolescenți</li>
              <li>Intervențiile cele mai eficiente sunt terapiile cognitiv-comportamentale (CBT) și terapia motivațională</li>
              <li>Dacă dependența e severă, se pot recomanda și tratamente medicale 💊 (dar numai prescrise de medic)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">4. Colaborarea cu școala 🎓</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Nu ascunde problema — vorbește cu dirigintele și consilierul școlar</li>
              <li>Unele programe școlare pot oferi sesiuni de suport sau grupuri educaționale</li>
              <li>Profesorii pot fi aliați importanți în monitorizarea comportamentului și în oferirea de alternative sănătoase</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">5. Ajută-l să găsească alternative sănătoase 🌱</h4>
            <p className="text-sm mb-2">Adolescenții au nevoie de dopamină (senzații de plăcere, satisfacție). Dacă drogurile le oferă asta rapid, tu trebuie să îl ajuți să descopere surse sănătoase:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Sportul 🏀 – reduce stresul și crește încrederea în sine</li>
              <li>Muzica sau arta 🎶🎨 – canale excelente pentru exprimarea emoțiilor</li>
              <li>Voluntariatul ❤️ – îi dă sentimentul că are un scop și e valoros pentru comunitate</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">6. Creează un mediu fără judecată, dar cu responsabilitate ⚖️</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Nu ajută să spui &ldquo;Ești un drogat / o rușine&rdquo;. Asta doar adâncește rana și împinge copilul și mai mult spre consum</li>
              <li>În schimb, setează limite clare și consecințe logice</li>
              <li>Echilibrul între empatie 🤗 și fermitate 🚦 este cheia</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">7. Învață să recunoști semnele recăderii 🔄</h4>
            <p className="text-sm mb-2">Recăderile fac parte din proces. Semnele care arată că adolescentul e în pericol să reia consumul:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>schimbări bruște de dispoziție 😡😭</li>
              <li>lipsă de interes pentru activități</li>
              <li>anturaj nou suspect</li>
              <li>secrete, minciuni, dispariția banilor sau a obiectelor de valoare</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">8. Ai grijă și de tine 🧘‍♀️</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Ca părinte, e ușor să cazi în vinovăție sau epuizare</li>
              <li>Caută sprijin pentru tine: terapie, grupuri de părinți, spiritualitate, sport</li>
              <li>Copilul are nevoie de un părinte puternic, nu de unul care se prăbușește</li>
            </ul>
          </div>

          <div className="bg-muted/20 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">📌 Mesaj final</h4>
            <p className="text-sm mb-2">Dependența nu este o rușine și nici un &ldquo;sfârșit de drum&rdquo;. Este un semnal de alarmă, un strigăt de ajutor al copilului tău 🚨. În spatele consumului se ascund adesea durere, neputință, presiuni sociale sau traume pe care adolescentul nu știe cum să le exprime altfel.</p>
            <p className="text-sm">De aceea, cheia nu este pedeapsa sau critica, ci sprijinul constant, iubirea fermă și accesul la ajutor specializat. Adolescenții au o capacitate extraordinară de a se transforma atunci când simt că cineva crede în ei 💡.</p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">📞 Sprijin direct din partea noastră</h4>
            <p className="text-sm mb-2">Asociația &ldquo;Drogurile ucid visurile copiilor&rdquo; este aici să te sprijine. Avem o echipă de specialiști pregătiți să îți ofere informații, să te direcționeze către centre de ajutor și să te susțină pe tine și pe copilul tău în acest proces dificil.</p>
            <p className="text-sm">📲 Ne poți suna la <a href="tel:0750633148" className="text-primary hover:underline">0750 633 148</a> sau ne poți contacta pe site: <a href="https://drogurileucid.ro" className="text-primary hover:underline" target="_blank" rel="noreferrer">www.drogurileucid.ro</a>.</p>
            <p className="text-sm font-medium mt-2">Nu ești singur. Împreună putem găsi soluția cea mai bună pentru copilul tău și pentru familia ta. 💜</p>
          </div>
        </div>
      ),
    },
  ]

  // Ensure unique articles and correct display order
  const displayOrder = [
    "a_spune_nu",
    "a_story",
    "a_recognition",
    "a_semne_adolescent",
    "a_pdf_ghid",
    "a_semne_consum",
    "a_sprijin_adolescent",
    "a15",
    "a_mind_matters",
    "a8",
    "a_atasament",
    "a_trauma_copilarie",
    "a_stres_dependenta",
    "a7",
    "a14",
    "a_hipnoza_regresiva",
    "a9",
    "a6",
    "a4",
  ] as const;

  const idToArticle = new Map<string, Article>();
  for (let i = articles.length - 1; i >= 0; i--) {
    const article = articles[i];
    if (!idToArticle.has(article.id)) idToArticle.set(article.id, article);
  }
  const uniqueArticles: Article[] = Array.from(idToArticle.values()).reverse();
  const filteredArticles: Article[] = uniqueArticles.filter((a) => a.id !== "a_despre_tine");

  const orderIndex = (id: Article["id"]) => {
    const idx = displayOrder.indexOf(id as typeof displayOrder[number]);
    return idx === -1 ? Number.MAX_SAFE_INTEGER : idx;
  };
  const sortedArticles: Article[] = filteredArticles
    .slice()
    .sort((a, b) => orderIndex(a.id) - orderIndex(b.id));

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="glow-wrap glow-blue glow-peach">
            <div className="surface-rounded rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Resurse și Informații
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Descoperă articole detaliate despre prevenție, sprijin și recuperare. Informații esențiale pentru părinți, tineri și specialiști.
              </p>
              <div className="mt-8">
            <Dialog>
              <DialogTrigger asChild>
                    <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                      📞 Contact rapid pentru asistență
                    </Button>
              </DialogTrigger>
                  <DialogContent className="max-w-md">
                <DialogHeader>
                      <DialogTitle className="text-center">Contact rapid</DialogTitle>
                      <DialogDescription className="text-center">
                    Pentru asistență imediată, sună la numărul de mai jos.
                  </DialogDescription>
                </DialogHeader>

                    <div className="text-center py-6">
                  <a
                    href="tel:+40750633148"
                        className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    +40 750 633 148
                  </a>
                </div>

                    <DialogFooter className="justify-center">
                      <Button asChild size="lg" className="w-full">
                    <a href="tel:+40750633148">Sună acum</a>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
              </div>
          </div>
        </div>
      </section>

        {/* Articles Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Articole și Ghiduri</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Informații detaliate și actualizate despre dependențe, recuperare și sprijin
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2 auto-rows-[1fr] items-stretch max-w-6xl mx-auto">
            {sortedArticles.map((article, index) => (
              <div key={article.id} className="group h-full">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                      className="surface-rounded rounded-2xl w-full h-full text-left p-6 sm:p-8 border transition-colors hover:bg-muted/50 flex flex-col"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-foreground/70">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base sm:text-lg leading-tight mb-2">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Citește articolul complet pentru informații detaliate și ghiduri practice
                          </p>
                          <div className="mt-4" />
                        </div>
                      </div>
                      <div className="mt-auto pt-3 inline-flex items-center text-sm font-medium text-primary gap-1">Deschide articolul →</div>
                  </button>
                </DialogTrigger>
                <DialogContent className="w-[95vw] sm:max-w-2xl max-w-3xl max-h-[90vh] p-4 sm:p-6 rounded-2xl surface-rounded">
                  <DialogHeader className="pb-4">
                    <DialogTitle className="text-base sm:text-lg leading-tight pr-8">{article.title}</DialogTitle>
                    <DialogDescription className="text-sm">
                      Articol din biblioteca noastră de resurse
                    </DialogDescription>
                  </DialogHeader>
                  <div className="overflow-y-auto max-h-[calc(90vh-120px)] px-1 sm:px-2 [scrollbar-width:none] [-ms-overflow-style:none]">
                    <div className="prose prose-neutral prose-sm sm:prose-base max-w-none leading-relaxed [&::-webkit-scrollbar]:hidden">
                      {typeof article.content === 'string' ? (
                        <p className="whitespace-pre-line">{article.content}</p>
                      ) : (
                        article.content
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              </div>
          ))}
          </div>
      </section>
      </div>
    </div>
  );
}
