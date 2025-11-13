"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  question: string;
  options: string[];
  correctIndex?: number; // فهرس الإجابة الصحيحة (0-based)
  reveal?: boolean; // لو true ستُعرض النتائج (صح/غلط)
  autoRevealOnSelect?: boolean; // لو true ستُعرض النتيجة مباشرة بعد الاختيار
  onSelect?: (index: number) => void;
}

export default function QuestionBody({
  question,
  options,
  correctIndex = -1,
  reveal = false,
  autoRevealOnSelect = false,
  onSelect,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(reveal);

  useEffect(() => {
    // اذا الـ prop اتغير، نزامن حالة العرض
    setShowResult(reveal);
  }, [reveal]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    if (onSelect) onSelect(index);
    if (autoRevealOnSelect) setShowResult(true);
  };

  // اختياري: طريقة عرض ستايل لكل خيار بناءً على حالة النتيجة
  const getOptionClasses = (i: number) => {
    const base =
      "flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition";
    if (!showResult) return `${base} border-gray-200 hover:bg-gray-50`;

    // لما نعرض النتيجة
    if (i === correctIndex) {
      return `${base} border-emerald-400 bg-emerald-50`; // الإجابة الصحيحة
    }
    if (selectedIndex === i && selectedIndex !== correctIndex) {
      return `${base} border-rose-400 bg-rose-50 opacity-95`; // الإجابة المختارة وكانت غلط
    }
    return `${base} border-gray-200 bg-white/60`; // باقي الخيارات
  };

  const renderStatusIcon = (i: number) => {
    if (!showResult) return null;

    if (i === correctIndex) {
      return (
        <span className="ml-auto flex items-center gap-2 text-emerald-600 font-semibold">
          {/* Check icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">صحيح</span>
        </span>
      );
    }

    if (selectedIndex === i && selectedIndex !== correctIndex) {
      return (
        <span className="ml-auto flex items-center gap-2 text-rose-600 font-semibold">
          {/* Cross icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">خطأ</span>
        </span>
      );
    }

    return null;
  };

  return (
    <div>
      <p className="text-gray-700 leading-relaxed mb-6">{question}</p>

      <RadioGroup>
        {options.map((option, i) => (
          <div
            key={i}
            onClick={() => handleSelect(i)}
            className={getOptionClasses(i)}
            role="button"
            aria-pressed={selectedIndex === i}
            dir="rtl"
          >
            <RadioGroupItem
              value={`question${i}`}
              id={`question${i}`}
              checked={selectedIndex === i}
              onChange={() => handleSelect(i)}
            />

            <Label htmlFor={`question${i}`} className="cursor-pointer text-gray-700 flex-1">
              <span className="block">{option}</span>
              {/* لو عايز تعرض نص توضيحي تحت كل إجابة تقدر تضيفه هنا */}
            </Label>

            {/* أيقونة الحالة (صح/غلط) تظهر بس بعد reveal */}
            {renderStatusIcon(i)}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
