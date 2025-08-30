"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as React from "react";

export default function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 200, damping: 20 });
  const tz = useSpring(12, { stiffness: 200, damping: 20 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx);
    y.set(dy);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1000 }}
      className="[perspective:1000px]"
    >
      <motion.div style={{ rotateX: rx, rotateY: ry, translateZ: tz as unknown as number }}>
        {children}
      </motion.div>
    </motion.div>
  );
}


