interface Props {
  total: number;
  current: number;
}

export default function QuestionNavigator({ total, current }: Props) {
  const numbers = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div>
      <h4 className="text-gray-700 font-semibold mb-3">الأسئلة</h4>
      <div className="grid grid-cols-5 gap-2">
        {numbers.map((num) => (
          <button key={num} className={`w-10 h-10 rounded-md font-semibold ${num === current ? "bg-primary text-white" : "bg-primary/20 text-white hover:bg-primary/50"}`}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
