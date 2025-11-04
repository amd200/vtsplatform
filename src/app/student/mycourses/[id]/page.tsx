"use client";
import ChaptersAccordion from "@/features/student/components/ChaptersAccordion";
import CourseDetails from "@/features/student/components/CourseDetails";
import { useGetCourseDetailsQuery } from "@/features/student/services/studentApi";
import { Course } from "@/types/common.types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { use } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data, isLoading, error } = useGetCourseDetailsQuery(id);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="container">
      <CourseDetails course={data?.Data || ({} as Course)} />
      <ChaptersAccordion chapters={data?.Data?.Chapters || []} />
    </div>
  );
}
