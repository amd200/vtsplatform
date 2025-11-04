"use client";
import React from "react";
import TitleSection from "../../../components/shared/TitleSection";
import CourseCard from "../../../components/shared/CourseCard";
import { useGetStudentChaptersQuery } from "../services/studentApi";
import ChapterCard from "@/components/shared/ChapterCard";

function MyChapters() {
  const { data } = useGetStudentChaptersQuery();
  const chapters = data?.Data;
  console.log("first");
  return (
    <section className="">
      <div className="container">
        <div className="flex items-center justify-between">
          <TitleSection title="فصولي" />
        </div>
        <div className="content bg-[#f9f9f9] grid lg:grid-cols-3 gap-x-9 gap-y-5 py-7 px-3 rounded">
          {chapters?.map((chapter, index) => (
            <ChapterCard key={index} chapter={chapter} isPurchased={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyChapters;
