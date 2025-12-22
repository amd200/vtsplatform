"use client";

import { useEffect, useRef } from "react";

export default function ShakeDetector() {
  const last = useRef({ x: 0, y: 0, z: 0 });
  const threshold = 8; // حساس مناسب للأندرويد

  useEffect(() => {
    const onMotion = (e: DeviceMotionEvent) => {
      const acc = e.accelerationIncludingGravity;
      if (!acc) return;

      const dx = Math.abs(acc.x! - last.current.x);
      const dy = Math.abs(acc.y! - last.current.y);
      const dz = Math.abs(acc.z! - last.current.z);

      if (dx + dy + dz > threshold) {
        alert("⚠️ ممنوع تصوير الشاشة");
      }

      last.current = {
        x: acc.x || 0,
        y: acc.y || 0,
        z: acc.z || 0,
      };
    };

    window.addEventListener("devicemotion", onMotion);
    return () => window.removeEventListener("devicemotion", onMotion);
  }, []);

  return null;
}
