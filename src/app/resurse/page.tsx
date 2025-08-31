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

export default function ResursePage() {
  const articles = [
    {
      id: "a4",
      title: "Asociația „Drogurile ucid visurile copiilor” lansează o campanie națională pe 1 septembrie",
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
              <span className="italic"> „Dependențele ucid visurile copiilor, dar împreună putem să le protejăm.”</span>
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
      id: "a5",
      title: "Social MED – Redescoperă viața, pas cu pas",
      content: (
        <div className="space-y-5">
          <div className="border-l-4 border-primary/30 pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Despre Social MED</p>
            <p className="font-semibold">Social MED este un centru dedicat sprijinirii persoanelor care se confruntă cu dependențe de substanțe psihoactive, alcool sau alte forme de adicție.</p>
          </div>
          
          <p>Cu o echipă multidisciplinară formată din <em>medici psihiatri, terapeuți și consilieri specializați</em>, oferim programe personalizate de detoxifiere asistată medical și recuperare psihologică, adaptate nevoilor fiecărui pacient.</p>

          <p>La Social MED, considerăm că fiecare persoană merită o nouă șansă la o viață fără dependențe, într-un mediu sigur, confidențial și susținut de compasiune. Fiecare pas al procesului de recuperare este însoțit de profesionalism și empatie, asigurând o vindecare completă, nu doar fizică, ci și emoțională.</p>

          <div className="bg-muted/30 p-4 rounded-lg border">
            <p>
              <span className="font-semibold">Misiunea noastră:</span> 
              <span className="italic"> Social MED este mai mult decât un simplu centru de reabilitare – este locul unde speranța renaște și viețile se transformă.</span>
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">O premieră în România</h4>
            <p className="text-sm leading-relaxed mb-3">Suntem <span className="font-medium">primul centru acreditat în România de tip comunitate terapeutică</span>, dedicat persoanelor afectate de consumul de droguri. Aici, am creat o comunitate a reabilitării, sprijinului și reconstrucției personale.</p>
          </div>

          <p>Într-o societate care adesea stigmatizează, alegem să întindem o mână. Vedem omul dincolo de dependență și credem cu tărie în puterea schimbării. Fiecare persoană care își recăpătă viața este o victorie tăcută, dar imensă.</p>

          <p>La Social MED, nu luptăm doar împotriva dependenței, ci pentru dreptul fiecărei persoane la o viață cu sens. <span className="font-medium">O viață nouă!</span></p>

          <div>
            <h4 className="font-semibold text-lg mb-3">Rezultate concrete</h4>
            <p>Prin programele noastre inovative și prin dedicarea echipei, am reușit să ajutăm <span className="font-medium">sute de oameni</span> să își regăsească calea.</p>
          </div>

          <div className="border border-muted bg-muted/20 p-4 rounded-lg">
            <p className="font-medium mb-2">Mesaj de speranță</p>
            <p>Dacă tu sau cineva drag ție se confruntă cu o astfel de problemă, află că <span className="font-medium">acum se poate și în România</span>.</p>
          </div>

          <p className="text-center font-medium italic border-t pt-4">Împreună, putem face primul pas spre schimbare!</p>
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
  ]

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
            {articles.map((article, index) => (
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
