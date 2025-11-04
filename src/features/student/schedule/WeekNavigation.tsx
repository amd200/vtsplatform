import { ChevronLeft, ChevronRight } from "lucide-react";
import { daysInMonth } from "@/utils/daysInMonth";

interface WeekNavigationProps {
  currentDate: Date;
  selectedDay: number;
  onSelectDay: (day: number) => void;
  onPreviousWeek: () => void;
  onNextWeek: () => void;
}

export default function WeekNavigation({ currentDate, selectedDay, onSelectDay, onPreviousWeek, onNextWeek }: WeekNavigationProps) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const generateWeekDays = () => {
    const weekDays = [];
    const totalDays = daysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
    const startDay = Math.max(1, selectedDay - 3);
    const endDay = Math.min(totalDays, selectedDay + 3);

    for (let i = startDay; i <= endDay; i++) {
      weekDays.push({
        day: i,
        dayOfWeek: daysOfWeek[new Date(currentDate.getFullYear(), currentDate.getMonth(), i).getDay()],
      });
    }

    return weekDays;
  };

  const weekDays = generateWeekDays();

  return (
    <div className="flex items-center justify-center gap-x-5 mb-2">
      <button onClick={onPreviousWeek}>
        <ChevronRight className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
      </button>

      <div className="flex gap-4">
        {weekDays.map(({ day, dayOfWeek }) => (
          <div key={day} className="text-center">
            <div className="text-xs text-gray-500 mb-1">{dayOfWeek}</div>
            <button onClick={() => onSelectDay(day)} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer transition-all ${day === selectedDay ? "bg-primary text-white shadow-lg transform scale-110" : "text-gray-700 hover:bg-gray-100 hover:scale-105"}`}>
              {day}
            </button>
          </div>
        ))}
      </div>

      <button onClick={onNextWeek}>
        <ChevronLeft className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
      </button>
    </div>
  );
}
