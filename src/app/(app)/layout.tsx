import type { Metadata } from "next";
import Link from "next/link";
import ParallaxBackground from "./ParallaxBackground";
import MobileMenu from "./MobileMenu";
import AuthButtons from "./AuthButtons";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
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
      { url: `${prefix}/asociatie.svg`, type: "image/svg+xml" },
    ],
    shortcut: `${prefix}/asociatie.svg`,
    apple: `${prefix}/asociatie.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ParallaxBackground />
          <header className="sticky top-0 z-50 bg-transparent">
            <div className="mx-auto max-w-7xl px-4 py-5 md:py-6">
              <div className="surface-rounded flex items-center justify-center px-5 py-4 md:px-6 md:py-5">
                <nav className="hidden md:flex items-center gap-6 text-sm">
                  <Link href="/povesti" className="hover:underline">Povești</Link>
                  <Link href="/resurse" className="hover:underline">Resurse</Link>
                  <Link href="/" className="hover:underline font-semibold">Acasă</Link>
                  <Link href="/organizatii" className="hover:underline">Organizații</Link>
                  <Link href="/despre-noi" className="hover:underline">Despre noi</Link>
                  <Link href="/contact" className="hover:underline">Contact</Link>
                  <AuthButtons />
                </nav>
                <MobileMenu />
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-7xl px-4">{children}</main>
          <footer className="mt-20 border-t">
            <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-foreground">
              © 2025 Asociația „Drogurile ucid visurile copiilor"
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
