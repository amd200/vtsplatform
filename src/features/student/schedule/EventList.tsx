interface Event {
  id: number;
  title: string;
  start: string;
  end: string;
  date: string;
  background: string;
  color: string;
}

interface EventListProps {
  currentDate: Date;
  selectedDay: number;
  events: Event[];
  monthsArabic: string[];
}

export default function EventList({ currentDate, selectedDay, events, monthsArabic }: EventListProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        اليوم المحدد: {selectedDay} {monthsArabic[currentDate.getMonth()]} {currentDate.getFullYear()}
      </h3>
      <div className="text-gray-600">
        {events.length > 0 ? (
          <div className="space-y-2">
            <p className="font-medium">المواعيد المجدولة:</p>
            {events.map((event) => (
              <div key={event.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 rounded-full" style={{ background: event.color }}></div>
                <span className="font-medium">{event.title}</span>
                <span className="text-sm text-gray-500">
                  ({event.start} - {event.end})
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p>لا توجد مواعيد مجدولة لهذا اليوم</p>
        )}
      </div>
    </div>
  );
}
