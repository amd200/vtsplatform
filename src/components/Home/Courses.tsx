"use client";

import React from "react";
import CourseCard from "../shared/CourseCard";
import TitleSection from "../shared/TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { fetcher } from "@/lib/api/fetcher";
import { StudentCoursesResponse } from "@/features/student/types/student.types";

async function Courses() {
  const data = await fetcher<StudentCoursesResponse>(`/platform/AllCourses`);
  const courses = data?.Data;

  return (
    <section className="py-8">
      <div className="container">
        <TitleSection title="المقررات" />

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
          className="courses-swiper mt-6"
        >
          {courses?.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Courses;
