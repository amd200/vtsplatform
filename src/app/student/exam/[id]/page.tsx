"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import QuestionBody from "@/features/student/components/exam/QuestionBody";
import QuestionHeader from "@/features/student/components/exam/QuestionHeader";
import QuestionNavigator from "@/features/student/components/exam/QuestionNavigator";
import TestInfo from "@/features/student/components/exam/TestInfo";
import Timer from "@/features/student/components/exam/Timer";
import confetti from "canvas-confetti";

export default function Page() {
  useEffect(() => {
    // مدة التأثير (3 ثواني)
    const end = Date.now() + 3 * 1000;
    // ألوان الجزيئات 🎨
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      // لما تعدي 3 ثواني يوقف التأثير
      if (Date.now() > end) return;

      // المدفع الشمال
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors,
      });

      // المدفع اليمين
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors,
      });

      // تكرار الرسمة لعمل حركة مستمرة
      requestAnimationFrame(frame);
    };

    frame();
  }, []);

  return (
    <div className="container py-2 flex flex-wrap justify-center gap-6 relative overflow-hidden">
      {/* Sidebar */}
      <div className="lg:w-[260px] w-full bg-white rounded-xl shadow p-4 flex flex-col gap-6">
        <TestInfo title="اختبار شامل" />
        <Timer minutes={30} />
        <QuestionNavigator total={30} current={30} />
        {/* <TestInfo title="Test Selanjutnya" subtitle="Test Potensi Akademik" /> */}
      </div>

      {/* Main content */}
      <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col gap-6">
        <QuestionHeader number={30} />
        <QuestionBody
          question="السؤال هنا..."
          options={["أ", "ب", "ج", "د"]}
          correctIndex={0} // فهرس الإجابة الصحيحة
          reveal={true} // لو عايز تعرض النتائج فوراً
          autoRevealOnSelect={false} // لو true ستظهر بعد كل اختيار
          onSelect={(i) => console.log("اختار:", i)}
        />

        <div>
          <Button>تسليم الامتحان</Button>
        </div>
      </div>
    </div>
  );
}
