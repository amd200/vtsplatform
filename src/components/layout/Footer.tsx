"use client";
import { footerBg, logo, snow } from "@/assets/images";
import { ChevronsLeft, MapPin, Phone, Facebook, Youtube, Send, MessageCircle, ChevronLeft, Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      {/* Footer Container: تم تقليل الـ Padding والحجم الكلي */}{" "}
      <footer
        style={{
          backgroundImage: `url(${footerBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative py-6 mt-10 bg-white shadow-2xl lg:max-w-7xl w-[95%] mx-auto font-ar-medium rounded-xl overflow-hidden text-gray-800 border border-primary/10"
      >
        {/* طبقة تظليل خفيفة فوق الصورة الخلفية لتحسين وضوح النص */} <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div> {/* المحتوى الرئيسي (شبكة الأعمدة) - تقليل التباعد الرأسي */}{" "}
        <div className="container relative z-10 grid lg:grid-cols-4 gap-y-5 gap-x-4 px-4 sm:px-6">
          {/* العمود الأول: الشعار والتفاصيل الأساسية */}{" "}
          <div className="flex flex-col gap-2">
            {" "}
            <Link href="/" className="w-20">
              {" "}
              {/* حجم أصغر للشعار */}
              <Image src={logo} alt="Mr. Mohamed Farouk Logo" width={80} height={40} className="object-contain" />{" "}
            </Link>
            <p className="text-xs text-gray-600 leading-relaxed"> منصة المنهج التعليمية لتقديم أفضل محتوى أكاديمي. </p>{" "}
          </div>
          {/* العمود الثاني: روابط سريعة */}{" "}
          <div className="lg:pl-4">
            <h3 className="text-base font-bold mb-2 border-b-2 border-primary/50 border-dashed inline-block pb-0.5">روابط سريعة</h3> {/* حجم أصغر للعناوين والـ mb أقل */}{" "}
            <ul className="space-y-2 text-sm">
              {" "}
              {/* تباعد أصغر */}{" "}
              <li>
                <Link className="flex items-center gap-x-1 text-xs text-gray-600 hover:text-primary transition-colors" href="#">
                  <ChevronLeft className="size-3 text-primary" /> الرئيسية
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-x-1 text-xs text-gray-600 hover:text-primary transition-colors" href="#">
                  <ChevronLeft className="size-3 text-primary" /> الكورسات المتاحة
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-x-1 text-xs text-gray-600 hover:text-primary transition-colors" href="#">
                  <ChevronLeft className="size-3 text-primary" /> تسجيل الدخول
                </Link>
              </li>{" "}
            </ul>{" "}
          </div>
          {/* العمود الثالث: تواصل معنا */}{" "}
          <div className="">
            <h3 className="text-base font-bold mb-2 border-b-2 border-primary/50 border-dashed inline-block pb-0.5">تواصل معنا</h3> {/* حجم أصغر للعناوين والـ mb أقل */}{" "}
            <ul className="space-y-2 text-sm">
              {" "}
              {/* تباعد أصغر */}{" "}
              <li className="flex items-start gap-x-2">
                <MapPin className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-xs">المسلة - ش جمال عبدالناصر، بجوار...</span>{" "}
              </li>
              <li className="flex items-center gap-x-2">
                <Phone className="size-4 text-secondary flex-shrink-0" />
                <Link className="text-xs text-gray-600 hover:text-primary transition-colors" href="tel:01115003800">
                  01115003800
                </Link>
              </li>{" "}
            </ul>{" "}
          </div>
          {/* العمود الرابع: وسائل التواصل الاجتماعي - تم تصغير الأيقونات */}{" "}
          <div className="">
            <h3 className="text-base font-bold mb-2 border-b-2 border-primary/50 border-dashed inline-block pb-0.5">تابعنا</h3> {/* حجم أصغر للعناوين والـ mb أقل */}{" "}
            <ul className="flex space-x-2 rtl:space-x-reverse justify-start">
              {" "}
              {/* تباعد أصغر */}{" "}
              <li className="p-1.5 bg-gray-100 rounded-full hover:bg-primary transition-colors group">
                {" "}
                {/* padding أصغر */}
                <a href="#" aria-label="فيسبوك">
                  <Facebook className="size-4 text-gray-600 group-hover:text-white transition-colors" /> {/* أيقونة أصغر */}
                </a>
              </li>
              <li className="p-1.5 bg-gray-100 rounded-full hover:bg-red-600 transition-colors group">
                <a href="#" aria-label="يوتيوب">
                  <Youtube className="size-4 text-gray-600 group-hover:text-white transition-colors" />
                </a>
              </li>
              <li className="p-1.5 bg-gray-100 rounded-full hover:bg-blue-500 transition-colors group">
                <a href="#" aria-label="تليجرام">
                  <Send className="size-4 text-gray-600 group-hover:text-white transition-colors" />
                </a>
              </li>
              <li className="p-1.5 bg-gray-100 rounded-full hover:bg-green-500 transition-colors group">
                <a href="#" aria-label="واتساب">
                  <MessageCircle className="size-4 text-gray-600 group-hover:text-white transition-colors" />
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>
        {/* شريط حقوق النشر (Copyright Bar) - تقليل المسافات */}{" "}
        <div className="relative z-10 text-center border-t border-gray-200 mt-6 pt-3">
          {" "}
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1 flex-wrap">
            <Copyright className="w-3 h-3" /> جميع الحقوق محفوظة {new Date().getFullYear()} منصة المنهج.{" "}
            <span className="block mt-0.5">
              تصميم وتطوير بواسطة{" "}
              <Link className="underline" href={"https://www.facebook.com/ahmed.elhosseni.71"}>
                Ahmed Mohamed
              </Link>
              .
            </span>{" "}
          </p>{" "}
        </div>{" "}
      </footer>{" "}
    </>
  );
}

export default Footer;
