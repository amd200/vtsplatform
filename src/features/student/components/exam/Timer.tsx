"use client";

import { useEffect, useState } from "react";

interface Props {
  minutes: number; // عدد الدقايق اللي يبدأ منها
}

export default function Timer({ minutes }: Props) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60); // نحول الدقايق لثواني

  useEffect(() => {
    if (timeLeft <= 0) return; // لو خلص الوقت اخرج

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = () => {
    const hrs = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
    const mins = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
    const secs = String(timeLeft % 60).padStart(2, "0");
    return `${hrs} : ${mins} : ${secs}`;
  };

  return (
    <div>
      <h4 className="text-gray-700 font-semibold mb-2">الوقت المتبقى</h4>
      <div dir="ltr" className="text-center text-lg font-bold text-primary bg-primary/20 rounded-lg py-2">{formatTime()}</div>
    </div>
  );
}
