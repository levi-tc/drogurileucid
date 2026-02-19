"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type ConsentState = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "cookie_consent";

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function storeConsent(consent: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      // Small delay so it doesn't flash immediately on page load
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  // Listen for custom event to re-open the banner (from footer "Setări cookies")
  useEffect(() => {
    function handleOpen() {
      const stored = getStoredConsent();
      if (stored) setConsent(stored);
      setVisible(true);
    }
    window.addEventListener("open-cookie-settings", handleOpen);
    return () => window.removeEventListener("open-cookie-settings", handleOpen);
  }, []);

  const accept = useCallback(() => {
    const all: ConsentState = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    storeConsent(all);
    setVisible(false);
  }, []);

  const reject = useCallback(() => {
    const minimal: ConsentState = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    storeConsent(minimal);
    setVisible(false);
  }, []);

  const saveCustom = useCallback(() => {
    storeConsent(consent);
    setVisible(false);
    setShowCustomize(false);
  }, [consent]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-3xl surface-rounded border p-5 md:p-6 shadow-xl">
            {!showCustomize ? (
              <>
                <p className="text-sm leading-relaxed text-foreground">
                  Folosim cookie-uri strict necesare pentru funcționarea site-ului și,
                  cu acordul tău, cookie-uri pentru statistică și conținut din rețele
                  sociale. Poți accepta, respinge sau personaliza. Detalii în{" "}
                  <Link
                    href="/politica-cookies"
                    className="underline font-medium"
                    style={{ color: "var(--brand-orange-500)" }}
                  >
                    Politica de cookie-uri
                  </Link>
                  .
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={accept}
                    className="btn-primary text-sm font-medium px-5 py-2.5 rounded-lg"
                  >
                    Accept toate
                  </button>
                  <button
                    onClick={reject}
                    className="btn-soft text-sm font-medium px-5 py-2.5 rounded-lg"
                  >
                    Respinge
                  </button>
                  <button
                    onClick={() => setShowCustomize(true)}
                    className="text-sm font-medium px-5 py-2.5 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    Personalizează
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-bold text-base mb-4">Setări cookie-uri</h3>

                <div className="space-y-3">
                  <label className="flex items-center justify-between gap-3 text-sm">
                    <span>
                      <strong>Strict necesare</strong>
                      <span className="block text-xs text-muted-foreground">
                        Securitate, sesiune — întotdeauna active
                      </span>
                    </span>
                    <input type="checkbox" checked disabled className="accent-primary h-4 w-4" />
                  </label>

                  <label className="flex items-center justify-between gap-3 text-sm cursor-pointer">
                    <span>
                      <strong>Funcționale</strong>
                      <span className="block text-xs text-muted-foreground">
                        Preferințe de limbă, setări de afișare
                      </span>
                    </span>
                    <input
                      type="checkbox"
                      checked={consent.functional}
                      onChange={(e) => setConsent((c) => ({ ...c, functional: e.target.checked }))}
                      className="accent-primary h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between gap-3 text-sm cursor-pointer">
                    <span>
                      <strong>Statistice / Analytics</strong>
                      <span className="block text-xs text-muted-foreground">
                        Analiza traficului pe site
                      </span>
                    </span>
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={(e) => setConsent((c) => ({ ...c, analytics: e.target.checked }))}
                      className="accent-primary h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between gap-3 text-sm cursor-pointer">
                    <span>
                      <strong>Marketing / Social media</strong>
                      <span className="block text-xs text-muted-foreground">
                        Conținut din rețele sociale, publicitate
                      </span>
                    </span>
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={(e) => setConsent((c) => ({ ...c, marketing: e.target.checked }))}
                      className="accent-primary h-4 w-4"
                    />
                  </label>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={saveCustom}
                    className="btn-primary text-sm font-medium px-5 py-2.5 rounded-lg"
                  >
                    Salvează preferințele
                  </button>
                  <button
                    onClick={() => setShowCustomize(false)}
                    className="text-sm font-medium px-5 py-2.5 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    Înapoi
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
