"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const blueRef = useRef<HTMLDivElement | null>(null);
  const peachRef = useRef<HTMLDivElement | null>(null);
  const orangeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY || 0;
      const factor1 = y * -0.02; // slowest
      const factor2 = y * -0.04;
      const factor3 = y * -0.06; // fastest
      if (blueRef.current) blueRef.current.style.transform = `translate3d(0, ${factor1}px, 0)`;
      if (peachRef.current) peachRef.current.style.transform = `translate3d(0, ${factor2}px, 0)`;
      if (orangeRef.current) orangeRef.current.style.transform = `translate3d(0, ${factor3}px, 0)`;
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div className="parallax-root">
      <div ref={blueRef} className="parallax-layer parallax-blue" />
      <div ref={peachRef} className="parallax-layer parallax-peach" />
      <div ref={orangeRef} className="parallax-layer parallax-orange" />
    </div>
  );
}


