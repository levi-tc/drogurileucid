"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function SupporterCard({ name, index, description }: { name: string; index: number; description?: string }) {
  const [open, setOpen] = React.useState(false);
  const palette = [
    "radial-gradient(60% 60% at 50% 50%, rgba(214,239,255,.8), rgba(255,255,255,.9))",
    "radial-gradient(60% 60% at 50% 50%, rgba(254,209,140,.7), rgba(255,255,255,.9))",
    "radial-gradient(60% 60% at 50% 50%, rgba(254,101,79,.35), rgba(255,255,255,.95))",
  ];
  const bg = palette[index % palette.length];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="glass-soft surface-rounded p-4 w-full text-left flex items-center justify-between gap-3 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      >
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full ring-1 shadow-sm" style={{ background: bg }} />
          <span className="text-sm font-medium">{name}</span>
        </div>
        <ChevronRight className="size-4 text-muted-foreground" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="glass surface-rounded w-full max-w-lg p-6 space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full ring-1" style={{ background: bg }} />
                <h3 className="text-lg font-semibold">{name}</h3>
              </div>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {description || "Descriere disponibilă în curând."}
              </p>
              <div className="pt-2">
                <button
                  className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Închide
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


