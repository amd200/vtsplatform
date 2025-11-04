"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { daysInMonth } from "@/utils/daysInMonth";
import MonthNavigation from "../schedule/MonthNavigation";
import WeekNavigation from "../schedule/WeekNavigation";
import ScheduleGrid from "../schedule/ScheduleGrid";
import EventList from "../schedule/EventList";
import TitleSection from "../../../components/shared/TitleSection";

export default function MySchedule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate());

  const monthsArabic = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

  const events = [
    {
      id: 1,
      title: "Figma Prototype Class",
      start: "11:00 AM",
      end: "01:00 PM",
      date: "2025-08-27",
      background: "bg-[#effaf4]",
      color: "#4cc590",
    },
  ];

  const selectedDateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;
  const filteredEvents = events.filter((event) => event.date === selectedDateString);

  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const resetToToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDay(today.getDate());
  };

  return (
    <div className="min-h-screen container">
      <div className="flex-1 space-y-6">
        <TitleSection title="جدولي" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {monthsArabic[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button onClick={goToPreviousMonth}>
              <ChevronRight className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
            </button>
            <button onClick={resetToToday}>
              <Calendar className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
            </button>
            <button onClick={goToNextMonth}>
              <ChevronLeft className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
            </button>
          </div>
        </div>

        <MonthNavigation
          months={monthsArabic}
          currentMonth={currentDate.getMonth()}
          onSelectMonth={(monthIndex) => {
            const newDate = new Date(currentDate);
            newDate.setMonth(monthIndex);
            setCurrentDate(newDate);
          }}
        />

        <WeekNavigation currentDate={currentDate} selectedDay={selectedDay} onSelectDay={setSelectedDay} onPreviousWeek={() => setSelectedDay((prev) => Math.max(1, prev - 7))} onNextWeek={() => setSelectedDay((prev) => Math.min(daysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1), prev + 7))} />

        <ScheduleGrid currentDate={currentDate} selectedDay={selectedDay} events={filteredEvents} />

        {/* <EventList currentDate={currentDate} selectedDay={selectedDay} events={filteredEvents} monthsArabic={monthsArabic} /> */}
      </div>
    </div>
  );
}
