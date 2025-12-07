"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CategoryCard from "../shared/CategoryCard";
import { Category } from "@/types/common.types";

export default function CategoriesSlider({ categories }: { categories: Category[] }) {
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
      className="categories-swiper mt-6"
    >
      {categories?.map((cat) => (
        <SwiperSlide key={cat.Id}>
          <CategoryCard category={cat} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
