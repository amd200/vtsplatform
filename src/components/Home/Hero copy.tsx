import Image from "next/image";
import { SparklesText } from "@/components/ui/sparkles-text";
// يمكنك استخدام أيقونات Lucide أو غيرها هنا
// import { GitBranch, Star, Cpu } from "lucide-react";

function Hero() {
  const teachers = [
    {
      id: 1,
      image: "",
      bg: "bg-primary/80", // تركيز على الشفافية
      lineColor: "bg-primary",
      offset: "mt-0 md:mt-24", // تعديل الـ offset ليكون 0 في الأجهزة الصغيرة
    },
    {
      id: 2,
      image: "",
      bg: "bg-secondary/80",
      lineColor: "bg-secondary",
      offset: "mt-0",
    },
    {
      id: 3,
      image: "",
      bg: "bg-[#2f2f2f]/80",
      lineColor: "bg-[#2f2f2f]",
      offset: "mt-0 md:mt-24", // تعديل الـ offset ليكون 0 في الأجهزة الصغيرة
    },
  ];

  // دالة لرسم خطوط الربط بين المدرسين - يتم إخفاؤها على الشاشات الصغيرة (<lg)
  const drawConnections = () => {
    // هذه مجرد أمثلة CSS، يمكنك استخدام SVG لرسم خطوط منحنية أكثر دقة
    const connectionStyles = "hidden lg:block absolute border-t-2 border-dashed border-gray-400/50";

    return (
      <>
        {/* ربط المدرس الأول بالثاني */}
        <span className={`${connectionStyles} top-[250px] left-[15%] w-[40%] transform -rotate-12`}></span>
        {/* ربط المدرس الثاني بالثالث */}
        <span className={`${connectionStyles} top-[250px] right-[15%] w-[40%] transform rotate-12`}></span>
        {/* ربط المدرس الأول بالثالث (بشكل أطول وأكثر انحناءً) - يتم محاكاة الانحناء بواسطة Tailwind */}
        <span className="hidden lg:block absolute top-[100px] left-[20%] w-[60%] h-[150px] border-b-2 border-l-2 border-dashed border-primary/30 rounded-bl-[100px]"></span>
      </>
    );
  };

  return (
    // تقليل الارتفاع على الشاشات الصغيرة واستخدام ارتفاع مرن
    <section className="min-h-[100vh] lg:h-[75vh] py-8">
      <div className="container bg-white h-full rounded grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-12 items-center overflow-hidden p-6">
        
        {/* قسم النص - يتم وضعه أولاً بشكل افتراضي (لأنه في الكود قبل قسم الصور) */}
        <div className="text-center font-ar-medium max-w-lg text-primary mx-auto order-1"> {/* order-1 يضمن وضعه أولاً */}
          <h1 className="text-2xl mb-3 font-bold relative w-fit mx-auto z-50">
            عائلة دكتور إسلام يحيى
            <span className="w-[82px] h-[36px] bg-[#fadbd7] -z-20 absolute bottom-[-15px] left-[-20px] rounded"></span>
          </h1>
          <p className="max-w-xs sm:max-w-80 -300 mx-auto text-xl relative z-50 mt-4"> {/* زيادة الهامش العلوي */}
            اهلًا دفعة 2026 في منصة د/ إسلام يحيى - لدراسة كل ما يتعلق بمنهج الفيزيــــاء للثانوية العامة والأزهرية .
            <span className="w-[82px] h-[36px] bg-[#f3f3e0] -z-20 absolute bottom-[-20px] left-[0px] rounded"></span>
            <span className="w-[36px] h-[82px] bg-[#dfe8f3] -z-20 absolute top-0 right-0 rounded"></span>
          </p>

          {/* إضافة رمز يمثل المعالجة/التعلم العميق */}
          <div className="mt-8 relative w-full h-10">
            <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 border-4 border-double border-secondary/70 rounded-lg transform rotate-45"></div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full top-6 animate-ping"></div>
          </div>
        </div>

        {/* قسم صور المدرسين والشبكة */}
        <div className="flex justify-center items-end md:items-center gap-4 lg:gap-x-12 relative p-4 order-2"> {/* order-2 يضمن وضعه ثانياً */}
          
          {/* خلفية الشبكة/النقاط (مصفوفة) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {/* يمكنك تكرار نقاط صغيرة أو استخدام صورة خلفية شبكية */}
            <div className="grid grid-cols-5 gap-8 h-full w-full">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  <span className={`w-1 h-1 rounded-full bg-gray-600/50 ${i % 5 === 0 ? "animate-pulse" : ""}`}></span>
                </div>
              ))}
            </div>
          </div>

          {/* خطوط الربط بين العناصر - يتم إخفاؤها على الشاشات الصغيرة */}
          {drawConnections()}

          {teachers.map((teacher) => (
            // تقليل حجم الكارد والهوامش على الشاشات الصغيرة
            <div key={teacher.id} className={`relative flex flex-col items-center ${teacher.offset} mx-1`}>
              {/* نقطة ربط/ Node علوية - يتم إخفاؤها على الشاشات الصغيرة لتبسيط العرض */}
              <div className={`hidden md:flex absolute -top-2 w-6 h-6 rounded-full ${teacher.lineColor} border-4 border-white z-10 shadow-lg items-center justify-center`}>
                <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span>
              </div>

              {/* الخطوط العلوية - يتم إخفاؤها على الشاشات الصغيرة */}
              <span className={`hidden md:block absolute -top-16 w-[2px] h-14 ${teacher.lineColor} opacity-50`} />

              {/* Card - التركيز على الإطار اللامع */}
              <div className={`relative w-[100px] h-[180px] sm:w-[150px] sm:h-[250px] lg:w-[190px] lg:h-[300px] rounded-2xl overflow-hidden ${teacher.bg} shadow-2xl shadow-gray-700/50 transition-all duration-300 hover:shadow-primary`}>
                {teacher?.image && <Image src={teacher.image} alt="" fill className="object-contain p-4" />}

                {/* إضافة تأثير بيانات (Data overlay) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent p-2 text-xs text-white/70">
                  {/* مثال على بيانات علمية */}
                  <p className="hidden sm:block">E=mc²</p> {/* إخفاء على شاشات الهواتف الصغيرة جداً */}
                  <p className="hidden sm:block">$\lambda$</p>
                </div>
              </div>

              {/* نقطة ربط/ Node سفلية - يتم إخفاؤها على الشاشات الصغيرة لتبسيط العرض */}
              <div className={`hidden md:flex absolute -bottom-2 w-6 h-6 rounded-full ${teacher.lineColor} border-4 border-white z-10 shadow-lg items-center justify-center`}>
                <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span>
              </div>

              {/* الخطوط السفلية - يتم إخفاؤها على الشاشات الصغيرة */}
              <span className={`hidden md:block absolute -bottom-16 w-[2px] h-14 ${teacher.lineColor} opacity-50`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;