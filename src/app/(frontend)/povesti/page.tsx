import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PovestiPage() {
    return (
        <section className="py-12 space-y-10">
            <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Povești reale
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Experiențe și mărturii de la oameni și organizații care luptă împotriva dependențelor.
                    Fiecare poveste contează și poate inspira pe cineva.
                </p>
            </div>

            {/* Placeholder - will be populated from Payload CMS */}
            <div className="glow-wrap glow-blue glow-peach glass surface-rounded p-8 md:p-12">
                <div className="text-center space-y-6">
                    <div className="text-5xl">📖</div>
                    <h2 className="text-xl font-semibold">
                        Poveștile tale vor apărea aici în curând
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        Conectez baza de date. În curând vei putea citi și împărtăși experiențe reale din comunitatea noastră.
                    </p>
                    <Button asChild>
                        <Link href="/contact">Vorbește cu noi</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
