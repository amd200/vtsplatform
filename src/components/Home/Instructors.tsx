"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TitleSection from "../shared/TitleSection";
import { Facebook, MessageCircle, Send } from "lucide-react";

// import './HoverSlider.scss';

const Instructors = () => {
  // const images = [
  //   "https://picsum.photos/600?1",
  //   "https://picsum.photos/600?2",
  //   "https://picsum.photos/600?3",
  //   "https://picsum.photos/600?4",
  //   "https://picsum.photos/600?5",
  //   "https://picsum.photos/600?6",
  //   "https://picsum.photos/600?7",
  //   "https://picsum.photos/600?8",
  //   "https://picsum.photos/600?9",
  //   "https://picsum.photos/600?10",
  //   "https://picsum.photos/600?11",
  // ];
  const images = ["https://alpha-dz.com/static/media/teacher1.baf8965a49e41133c6c6.webp", "https://alpha-dz.com/static/media/teacher5.6725f410641fc16cf0c8.webp", "https://alpha-dz.com/static/media/teacher4.81dfe8053b60886fdc88.webp", "https://alpha-dz.com/static/media/teacher5.6725f410641fc16cf0c8.webp", "https://alpha-dz.com/static/media/teacher5.6725f410641fc16cf0c8.webp", "https://alpha-dz.com/static/media/teacher5.6725f410641fc16cf0c8.webp", "https://alpha-dz.com/static/media/teacher5.6725f410641fc16cf0c8.webp", "https://alpha-dz.com/static/media/teacher5.6725f410641fc16cf0c8.webp"];

  return (
    <section className="pt-28 py-20">
      <div className="container">
        <TitleSection title="المحاضرين" />
        <Swiper slidesPerView="auto" spaceBetween={12} className="hover-swiper">
          {images.map((src, i) => (
            <SwiperSlide key={i} className="hover-slide relative overflow-hidden">
              <img className="transition-all duration-300 w-full h-full object-cover slide-img" src={src} alt={`slide-${i}`} />

              {/* الكلام */}
            <div className="slide-text absolute left-0 top-0 bottom-0 p-8 text-right text-white opacity-0 translate-x-10 transition-all duration-300">
  <div className="w-56 md:max-w-sm flex flex-col h-full justify-start md:justify-between">
    <h3 className="text-xl md:text-3xl font-extrabold mb-2">الأستاذ/ محمد</h3>
    <div>
      <p className="mb-3">أستاذ الرياضيات</p>
      <p className="leading-relaxed">شرح سهل مع تدريبات عملية لتنمية مهارات الحل.</p>
    </div>

    {/* أيقونات التواصل */}
   <div className="social-icons flex gap-3 mt-6 opacity-100 transition-all duration-300 ">
  <a href="#" className="p-2 bg-white/20 rounded-full backdrop-blur hover:bg-white/40 transition">
    <Facebook size={20} className="text-white" />
  </a>

  <a href="#" className="p-2 bg-white/20 rounded-full backdrop-blur hover:bg-white/40 transition">
    <MessageCircle size={20} className="text-white" />
  </a>

  <a href="#" className="p-2 bg-white/20 rounded-full backdrop-blur hover:bg-white/40 transition">
    <Send  size={20} className="text-white" />
  </a>
</div>

  </div>
</div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Instructors;
