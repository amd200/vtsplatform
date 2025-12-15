import Image from "next/image";
import { SparklesText } from "@/components/ui/sparkles-text"; 
import { ArrowLeft, Zap, Star, User } from "lucide-react"; 

function Hero() {
  // بيانات المدرسين (تم تبسيطها للعرض المكدس)
  const teachers = [
    // الدكتور يحيى (الواجهة)
    {
      id: 0,
      name: "دكتور إسلام يحيى",
      role: "مؤسس ومنسق المنهج",
      image: "",
      bgClass: "bg-primary/95", 
      textClass: "text-white",
      icon: <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />,
      offset: "mt-0",
      zIndex: "z-30",
      width: "w-52 md:w-64",
    },
    // المساعدين/الفريق
    {
      id: 1,
      name: "فريق الإدارة",
      role: "الدعم الفني والمالي",
      image: "",
      bgClass: "bg-gray-800/90",
      textClass: "text-gray-200",
      icon: <User className="w-5 h-5 text-white/70" />,
      offset: "mt-4 md:mt-8",
      zIndex: "z-20",
      width: "w-48 md:w-60",
    },
    {
      id: 2,
      name: "المساعدين الأوائل",
      role: "مراجعة وحل المسائل",
      image: "",
      bgClass: "bg-secondary/80",
      textClass: "text-gray-100",
      icon: <Zap className="w-5 h-5 text-white/70" />,
      offset: "mt-8 md:mt-16",
      zIndex: "z-10",
      width: "w-44 md:w-56",
    },
  ];

  return (
    // الخلفية: استخدام خلفية داكنة مع خطوط مائلة كـ Pattern
    <section className="min-h-[90vh] lg:h-[80vh] py-16 bg-gray-900 overflow-hidden relative">
      
      {/* خلفية هندسية مائلة */}
      <div className="absolute inset-0 bg-repeat opacity-10" style={{ backgroundImage: "linear-gradient(45deg, #1f2937 25%, transparent 25%, transparent 75%, #1f2937 75%, #1f2937), linear-gradient(45deg, #1f2937 25%, transparent 25%, transparent 75%, #1f2937 75%, #1f2937)", backgroundSize: "60px 60px", backgroundPosition: "0 0, 30px 30px" }}></div>
      
      <div className="container h-full grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center relative z-10">
        
        {/* 1. قسم النص (على اليمين) */}
        <div className="text-center lg:text-right font-ar-medium text-gray-100 order-2 lg:order-1 p-4 lg:p-0">
          
          <div className="w-fit mx-auto lg:mx-0 mb-4 px-4 py-1 border border-primary/50 rounded-full text-xs font-semibold uppercase tracking-widest text-primary shadow-lg shadow-primary/30">
            أقوى منصة فيزياء لدفعة 2026
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-primary block relative">
                انطلق نحو التفوق
                <span className="absolute bottom-[-10px] right-0 w-24 h-1 bg-secondary rounded-full"></span>
            </span>
            <span className="text-white mt-4 block">مع د/ إسلام يحيى</span>
          </h1>
          
          <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-400 mb-8 mt-8 border-r-4 border-secondary/50 pr-4">
            نقدم منهج الفيزياء كاملاً لطلاب الثانوية العامة والأزهرية بأسلوب متكامل يضمن أعلى الدرجات والفهم العميق للمفاهيم الفيزيائية.
          </p>

          {/* زر الدعوة لاتخاذ إجراء */}
          <div className="flex justify-center lg:justify-start space-x-4 space-x-reverse mt-10">
            <button className="relative flex items-center space-x-2 space-x-reverse px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-xl shadow-primary/50 transition duration-300 transform hover:scale-[1.03] hover:shadow-primary/70">
                <span>اكتشف خطة الدراسة</span>
                <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          
        </div>
        
        {/* 2. قسم الصور (تصميم البطاقات المكدسة) - على اليسار */}
        <div className="flex flex-col items-center justify-center relative w-full h-[450px] lg:h-full order-1 lg:order-2">
            
            {/* إطار وهمي لتحديد حدود العرض */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* تأثير ضوء خفيف خلف البطاقات */}
                <div className="w-[80%] h-[80%] bg-primary/10 rounded-xl blur-3xl opacity-50 absolute"></div>
            </div>

            {/* عرض البطاقات المكدسة */}
            <div className="relative flex flex-col items-center">
                {teachers.map((teacher) => (
                    <div 
                        key={teacher.id} 
                        className={`absolute flex flex-row-reverse items-center justify-start p-4 rounded-xl shadow-2xl transition-all duration-500 transform hover:translate-y-[-5px] hover:shadow-primary/50 
                            ${teacher.bgClass} ${teacher.textClass} ${teacher.offset} ${teacher.zIndex} ${teacher.width}`}
                        style={{
                            // محاكاة تأثير التكدس بتحريك البطاقات للخلف قليلاً
                            transform: `translateY(${teacher.id * 20}px) scale(${1 - teacher.id * 0.05})`,
                        }}
                    >
                        {/* أيقونة/صورة المدرس */}
                        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/20 ml-4">
                            {teacher.icon}
                        </div>
                        
                        {/* تفاصيل المدرس */}
                        <div className="text-right flex-grow">
                            <h3 className="text-base font-bold truncate">{teacher.name}</h3>
                            <p className="text-xs opacity-75 mt-1">{teacher.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* إضافة مسافة في الأسفل لضمان ظهور البطاقات المكدسة بشكل جيد */}
            <div className="h-40"></div> 

        </div>

      </div>
    </section>
  );
}

export default Hero;