"use client";

import { ReactNode, useEffect } from "react";
import Lenis, { LenisOptions } from "lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const options: LenisOptions = {
      duration: 1.2,
      smoothWheel: true, // correct property
    };

    const lenis = new Lenis(options);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // optional cleanup if you want to stop Lenis
      // lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}