"use client";

import { useEffect } from "react";
import { registerGsap, ScrollTrigger } from "@/lib/motion";

registerGsap();

/** Refresh ScrollTrigger after fonts/images settle. */
export function MotionRoot({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 600);
    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
    };
  }, []);

  return <>{children}</>;
}
