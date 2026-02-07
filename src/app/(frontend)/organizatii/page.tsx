import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OrganizatiiPage() {
    return (
        <section className="py-12 space-y-10">
            <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Organizații partenere
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Împreună cu organizații din România, construim o mișcare anti-drog puternică.
                    Descoperă partenerii noștri și cum contribuie fiecare.
                </p>
            </div>

            {/* Placeholder - will be populated from Payload CMS */}
            <div className="glow-wrap glow-blue glow-peach glass surface-rounded p-8 md:p-12">
                <div className="text-center space-y-6">
                    <div className="text-5xl">🏢</div>
                    <h2 className="text-xl font-semibold">
                        Organizațiile partenere vor apărea aici în curând
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        Conectez baza de date. În curând vei putea vedea toate organizațiile care susțin misiunea noastră.
                    </p>
                    <Button asChild>
                        <Link href="/despre-noi">Află mai multe despre susținătorii noștri</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
