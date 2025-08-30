import { Camera, Mail, Music2, Phone, ThumbsUp } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-[65vh] flex items-center justify-center py-12">
      <div className="glow-wrap glow-blue glow-peach w-full px-4">
        <div className="surface-rounded mx-auto w-full max-w-3xl border p-6 sm:p-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
            <p className="mt-2 text-muted-foreground">Suntem aici să te ajutăm.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:drogurileucidvisurilecopiilor@gmail.com"
              className="group flex items-center gap-4 rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:bg-primary/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-sm text-muted-foreground">E-mail</span>
                <span className="font-medium group-hover:underline break-all">drogurileucidvisurilecopiilor@gmail.com</span>
              </div>
            </a>

            <a
              href="tel:+40750633148"
              className="group flex items-center gap-4 rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:bg-primary/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-sm text-muted-foreground">Telefon</span>
                <span className="font-medium group-hover:underline">+40 750 633 148</span>
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@drogurile.ucid.vi?_t=ZN-8z2CfZQzUCU&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:bg-primary/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Music2 className="h-5 w-5" />
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-sm text-muted-foreground">TikTok</span>
                <span className="font-medium group-hover:underline break-all">tiktok.com/@drogurile.ucid.vi</span>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Camera className="h-5 w-5" />
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-sm text-muted-foreground">Instagram</span>
                <span className="font-medium break-words">Asociația „drogurile ucid visurile copiilor”</span>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ThumbsUp className="h-5 w-5" />
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-sm text-muted-foreground">Facebook</span>
                <span className="font-medium break-words">Asociația „drogurile ucid visurile copiilor”</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


