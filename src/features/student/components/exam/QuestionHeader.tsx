import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  number: number;
}

export default function QuestionHeader({ number }: Props) {
  return (
    <div className="flex justify-between items-center">
      <button className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-primary">
        <ArrowRight size={18} />
        <span>السابق</span>
      </button>

      <h2 className="text-xl font-semibold text-center">السؤال رقم {number}</h2>

      <button className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-primary">
        <span>التالي</span>
        <ArrowLeft size={18} />
      </button>
    </div>
  );
}
