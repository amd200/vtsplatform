"use client";

import { useEffect, useRef } from "react";

export default function ShakeDetector() {
  const last = useRef({ x: 0, y: 0, z: 0 });
  const shakeCount = useRef(0);
  const lastShakeTime = useRef(0);

  const threshold = 18; // قوة الهزة
  const requiredShakes = 3; // عدد الهزات
  const shakeWindow = 500; // لازم يكونوا قريبين
  const cooldown = 2500; // منع التكرار

  const lastTrigger = useRef(0);

  useEffect(() => {
    const onMotion = (e: DeviceMotionEvent) => {
      const acc = e.accelerationIncludingGravity;
      if (!acc) return;

      const dx = Math.abs(acc.x! - last.current.x);
      const dy = Math.abs(acc.y! - last.current.y);
      const dz = Math.abs(acc.z! - last.current.z);

      const intensity = dx + dy + dz;
      const now = Date.now();

      if (intensity > threshold) {
        if (now - lastShakeTime.current < shakeWindow) {
          shakeCount.current++;
        } else {
          shakeCount.current = 1;
        }

        lastShakeTime.current = now;

        if (shakeCount.current >= requiredShakes && now - lastTrigger.current > cooldown) {
          lastTrigger.current = now;
          shakeCount.current = 0;

          alert("اي مشكلتك بقى");
        }
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
