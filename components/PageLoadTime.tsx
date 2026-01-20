"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

export default function PageLoadTime() {
  const [loadTime, setLoadTime] = useState<number | null>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [visible, setVisible] = useState(true);
  const [borderProgress, setBorderProgress] = useState(0);

  useEffect(() => {
    const [entry] = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];

    if (!entry) return;

    // ✅ Perceived readiness time (with safe fallback)
    const time = Math.round(
      entry.domContentLoadedEventEnd || entry.loadEventEnd,
    );

    // Hide if very slow
    if (time > 3000) return;

    setLoadTime(time);

    // Count-up animation
    animate(0, time, {
      duration: 0.9,
      ease: "easeOut",
      onUpdate(v) {
        setDisplayValue(Math.round(v));
      },
    });

    // Border animation
    animate(0, 360, {
      duration: Math.min(time / 1000, 1.5),
      ease: "easeOut",
      onUpdate(v) {
        setBorderProgress(v);
      },
    });

    // Auto-dismiss
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!loadTime || !visible) return null;

  const showSeconds = loadTime > 500;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        boxShadow: [
          "0 0 0px rgba(59,130,246,0.0)",
          "0 0 18px rgba(59,130,246,0.35)",
          "0 0 6px rgba(59,130,246,0.15)",
        ],
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 rounded-2xl"
    >
      {/* Inner card */}
      <div className=" rounded-xl bg-background/90 backdrop-blur-md px-4 py-3">
        <p className="text-sm text-muted-foreground">
          ⚡ Loaded in{" "}
          <span 
          title="Time until the page structure became usable"
          className="font-semibold text-foreground">
            {showSeconds
              ? (displayValue / 1000).toFixed(2) + " s"
              : displayValue + " ms"}
          </span>
        </p>
      </div>
    </motion.div>
  );
}
