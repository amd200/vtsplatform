interface MonthNavigationProps {
  months: string[];
  currentMonth: number;
  onSelectMonth: (monthIndex: number) => void;
}

export default function MonthNavigation({ months, currentMonth, onSelectMonth }: MonthNavigationProps) {
  return (
    <div className="flex justify-center gap-6 overflow-x-auto pb-2">
      {months.map((month, index) => (
        <button key={month} onClick={() => onSelectMonth(index)} className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-all ${index === currentMonth ? "text-primary bg-primary/10 border-b-2 border-primary" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"}`}>
          {month}
        </button>
      ))}
    </div>
  );
}
