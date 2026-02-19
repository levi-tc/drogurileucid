"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-sm">
          {/* About */}
          <div className="space-y-2">
            <h4 className="font-bold text-foreground">Despre noi</h4>
            <p className="text-muted-foreground leading-relaxed">
              Asociația „Drogurile Ucid Visurile Copiilor" — platformă informativă și
              comunitară pentru prevenirea consumului de droguri.
            </p>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <h4 className="font-bold text-foreground">Legal</h4>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>
                <Link href="/confidentialitate" className="hover:underline hover:text-foreground transition-colors">
                  Politica de Confidențialitate (GDPR)
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="hover:underline hover:text-foreground transition-colors">
                  Politica de Cookie-uri
                </Link>
              </li>
              <li>
                <Link href="/termeni-si-conditii" className="hover:underline hover:text-foreground transition-colors">
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
                  className="hover:underline hover:text-foreground transition-colors cursor-pointer text-left"
                >
                  Setări cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="font-bold text-foreground">Contact</h4>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>
                <a href="mailto:drogurileucidvisurilecopiilor@gmail.com" className="hover:underline hover:text-foreground transition-colors break-all">
                  drogurileucidvisurilecopiilor@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+40730173727" className="hover:underline hover:text-foreground transition-colors">
                  +40 730 173 727
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Uniunea Națională Antidrog – „Alege Viața, nu Dependența"
        </div>
      </div>
    </footer>
  );
}
