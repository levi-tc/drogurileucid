"use client";

import Link from "next/link";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!panelRef.current) return;
      if (open && !panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <div className="md:hidden relative">
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
      >
        {open ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        <span className="ml-2">Meniu</span>
      </button>

      {open && (
        <div className="fixed inset-x-0 top-[72px] z-[60] px-4">
          <div
            ref={panelRef}
            role="menu"
            aria-label="Meniu principal"
            className="surface-rounded border mx-auto w-full max-w-sm px-8 py-8 text-center space-y-4 shadow-lg"
          >
            <Link href="/resurse" className="block text-lg font-medium hover:underline" onClick={() => setOpen(false)}>
              Resurse
            </Link>
            <Link href="/galerie" className="block text-lg font-medium hover:underline" onClick={() => setOpen(false)}>
              Galerie
            </Link>
            <Link href="/despre-noi" className="block text-lg font-medium hover:underline" onClick={() => setOpen(false)}>
              Despre noi
            </Link>
            <Link href="/contact" className="block text-lg font-medium hover:underline" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}


