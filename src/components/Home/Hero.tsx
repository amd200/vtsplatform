import Image from "next/image";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Bookmark, Clock, Users, ArrowRight, Atom, ArrowLeft } from "lucide-react";

function Hero() {
  // بيانات الملخص السريع للدورة
  const courseSummary = [
    { icon: <Bookmark className="w-5 h-5 text-gray-500" />, label: "منهج كامل وشامل للمادة" },
    { icon: <Clock className="w-5 h-5 text-gray-500" />, label: "مكتبة فيديوهات ضخمة" },
    { icon: <Users className="w-5 h-5 text-gray-500" />, label: "لطلاب الثانوية العامة والأزهرية" },
  ];

  return (
    // الخلفية: بيضاء مع ظل خفيف لتبدو "مُرتفعة"
    <section className="min-h-[90vh] lg:h-[80vh] py-16 bg-white overflow-hidden relative shadow-inner shadow-gray-100/50">
      <div className="container h-full grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center relative z-10">
        {/* 1. قسم النص الرئيسي (على اليمين) */}
        <div className="text-center lg:text-right font-ar-medium text-gray-900 order-2 lg:order-1 p-4 lg:p-0">
          <p className="text-base font-bold uppercase tracking-widest text-primary mb-3">منصة المنهج التعليمية</p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-gray-900 block">إتقان</span>
            {/* تم تعميم الكلمة بدلاً من اسم مادة محدد */}
            <span className="text-primary block mt-2">المحتوى الأكاديمي</span>
            <span className="text-gray-600 block text-4xl lg:text-5xl mt-3">بجودة عالمية.</span>
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 mb-10 mt-6">نقدم لك المادة التعليمية بأسلوب متكامل، من الصفر حتى مستوى الامتياز، بالاعتماد على فريق من أفضل الخبراء في المجال.</p>

          {/* ملخص الدورة (Quick Summary) */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 mt-8">
            {courseSummary.map((item, index) => (
              <div key={index} className="flex items-center space-x-2  text-gray-700">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* زر الدعوة لاتخاذ إجراء */}
          <div className="flex justify-center lg:justify-start mt-10">
            <button className="px-10 py-4 bg-gray-900 text-white font-bold text-lg rounded-xl shadow-xl shadow-gray-300 transition duration-300 transform hover:bg-primary hover:shadow-primary/30 flex items-center space-x-2">
              <span>ابدأ التجربة المجانية</span>
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. قسم الصور / العناصر البصرية (تأثير اللوح الأكاديمي العام) */}
        <div className="flex items-center justify-center w-full h-full p-4 order-1 lg:order-2 relative">
          {/* بطاقة الدورة (اللوح المائل) */}
          <div className="relative w-72 h-96 md:w-80 md:h-[400px] bg-white rounded-2xl shadow-2xl border-2 border-primary/50 p-6 flex flex-col items-center justify-center transform -rotate-6 transition-transform duration-700 hover:rotate-0 hover:scale-[1.05] z-20">
            {/* رمز عام للمادة/المنصة (مثل ذرة أو كتاب) */}
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Atom className="w-12 h-12 text-primary" />
            </div>

            <h3 className="text-2xl font-extrabold text-gray-900 text-center">البرنامج التعليمي الأساسي</h3>
            {/* تم استبدال اسم المدرس بـ "فريق الخبراء" */}
            <p className="text-base text-gray-500 mt-2 text-center">مقدم من فريق الخبراء</p>

            <div className="mt-6 w-full text-center">
              <span className="inline-block px-4 py-2 bg-primary/90 text-white font-bold rounded-full text-sm">التسجيل متاح</span>
            </div>
          </div>

          {/* بطاقة خلفية (لإضافة العمق) */}
          <div className="absolute w-72 h-96 md:w-80 md:h-[400px] bg-gray-200/60 rounded-2xl shadow-md transform rotate-3 translate-x-4 translate-y-4 z-10 hidden md:block"></div>

          {/* عنصر زخرفي خفيف */}
          <div className="absolute top-10 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-bounce-slow opacity-50"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
