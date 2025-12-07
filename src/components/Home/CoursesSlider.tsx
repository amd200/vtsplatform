"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CourseCard from "../shared/CourseCard";
import { Course } from "@/types/common.types";

export default function CoursesSlider({ courses }: { courses: Course[] }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="!pt-4"
    >
      {courses &&
        courses?.map((course: Course, index) => (
          <SwiperSlide key={index}>
            <CourseCard course={course} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
