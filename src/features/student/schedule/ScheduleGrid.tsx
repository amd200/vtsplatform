import { Clock } from "lucide-react";

interface Event {
  id: number;
  title: string;
  start: string;
  end: string;
  date: string;
  background: string;
  color: string;
}

interface ScheduleGridProps {
  currentDate: Date;
  selectedDay: number;
  events: Event[];
}

export default function ScheduleGrid({ currentDate, selectedDay, events }: ScheduleGridProps) {
  const HOUR_HEIGHT = 60;
  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const suffix = i >= 12 ? "PM" : "AM";
    const hour = i % 12 === 0 ? 12 : i % 12;
    return `${hour}:00 ${suffix}`;
  });

  const timeToMinutes = (time: string) => {
    const [timePart, suffix] = time.split(" ");
    const [hours, minutes] = timePart.split(":").map(Number);
    let h = hours % 12;
    if (suffix === "PM") h += 12;
    return h * 60 + minutes;
  };

  return (
    <div className="bg-white/80 h-[500px] overflow-y-auto backdrop-blur-sm p-6 grid grid-cols-12 relative border rounded-lg">
      <div className="col-span-1">
        {timeSlots.map((h) => (
          <div key={h} className="h-[60px] text-xs flex items-start justify-end pr-2 text-gray-500">
            {h}
          </div>
        ))}
      </div>

      <div className="col-span-11 relative top-2.5">
        {timeSlots.slice(0, -1).map((h) => (
          <div key={h} className="h-[60px] border-b border-gray-200"></div>
        ))}

        {events.map((event) => {
          const startMinutes = timeToMinutes(event.start);
          const endMinutes = timeToMinutes(event.end);
          const top = (startMinutes / 60) * HOUR_HEIGHT;
          const height = ((endMinutes - startMinutes) / 60) * HOUR_HEIGHT;

          return (
            <div
              key={event.id}
              className={`absolute left-4 flex justify-center flex-col right-4 ${event.background} rounded p-3 cursor-pointer border-s-4 transition-all`}
              style={{
                top: `${top}px`,
                color: event.color,
                borderColor: event.color,
                height: `${height}px`,
              }}
            >
              <div className="font-medium text-sm">{event.title}</div>
              <div className="text-xs opacity-90 flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3" />
                {event.start} - {event.end}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
