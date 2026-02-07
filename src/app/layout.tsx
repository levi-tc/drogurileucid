import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Asociația Antidrog – Drogurile ucid visurile copiilor",
  description:
    "Primește sprijin gratuit și confidențial pentru prevenirea consumului de droguri. Suntem aici să te ajutăm să iei decizii sănătoase pentru viitorul tău.",
  icons: {
    icon: [{ url: "/favico.svg", type: "image/svg+xml" }],
    shortcut: "/favico.svg",
    apple: "/favico.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ro">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
