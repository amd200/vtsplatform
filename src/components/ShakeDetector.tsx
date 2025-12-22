"use client";
import { useEffect } from "react";

export default function ShakeDetector() {
  useEffect(() => {
    const start = async () => {
      if (
        typeof DeviceMotionEvent !== "undefined" &&
        // @ts-ignore
        typeof DeviceMotionEvent.requestPermission === "function"
      ) {
        // @ts-ignore
        const res = await DeviceMotionEvent.requestPermission();
        console.log("Permission:", res);
      }

      window.addEventListener("devicemotion", (e) => {
        console.log("SHAKE", e.accelerationIncludingGravity);
      });
    };

    document.body.addEventListener("click", start, { once: true });

    return () => {
      document.body.removeEventListener("click", start);
    };
  }, []);

  return <div className="hidden">Shake detector</div>;
}
