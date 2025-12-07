"use client";

import { useEffect, useState } from "react";
import TitleSection from "../shared/TitleSection";
import CategoryCard from "../shared/CategoryCard";
import { fetcher } from "@/lib/api/fetcher";
import { Category } from "@/types/common.types";
import { DashBoardResponse } from "@/types/dashboard.types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useGetDashboardDataQuery } from "@/services/dashboardApi";

export default function Categories() {
  const { data } = useGetDashboardDataQuery();
  const categories = data?.Data?.Categories;
  return (
    <section className="py-8">
      <div className="container">
        <TitleSection title="التصنيفات" />

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
          {categories && categories.map((cat) => (
            <SwiperSlide key={cat.Id}>
              <CategoryCard category={cat} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
