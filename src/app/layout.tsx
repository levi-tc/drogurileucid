import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBackground from "./ParallaxBackground";
import MobileMenu from "./MobileMenu";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const prefix = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;

export const metadata: Metadata = {
  title: "Asociația Antidrog – Drogurile ucid visurile copiilor",
  description:
    "Primește sprijin gratuit și confidențial pentru prevenirea consumului de droguri. Suntem aici să te ajutăm să iei decizii sănătoase pentru viitorul tău.",
  icons: {
    icon: [
      { url: `${prefix}/favico.svg`, type: "image/svg+xml" },
    ],
    shortcut: `${prefix}/favico.svg`,
    apple: `${prefix}/favico.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ParallaxBackground />
        <header className="sticky top-0 z-50 bg-transparent">
          <div className="mx-auto max-w-7xl px-4 py-5 md:py-6">
            <div className="surface-rounded flex items-center justify-between px-5 py-4 md:px-6 md:py-5">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/logo_black.png"
                  alt="Asociația Drogurile Ucid Visurile Copiilor"
                  width={260}
                  height={56}
                  priority
                  className="h-8 w-auto md:h-9"
                  loader={({ src }) => `${prefix}${src}`}
                />
                <span className="sr-only">Asociația „Drogurile ucid visurile copiilor”</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <Link href="/resurse" className="hover:underline">Resurse</Link>
                <Link href="/galerie" className="hover:underline">Galerie</Link>
                <Link href="/despre-noi" className="hover:underline">Despre noi</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </nav>
              <MobileMenu />
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4">{children}</main>
        <footer className="mt-20 border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-foreground">
            © 2025 Asociația „Drogurile ucid visurile copiilor”
          </div>
        </footer>
      </body>
    </html>
  );
}
