"use client";
import Courses from "@/features/student/components/Courses";
import MyCourses from "@/features/student/components/MyCourses";
import { useGetStudentCoursesQuery } from "@/features/student/services/studentApi";
import React from "react";

function Page() {
  const { data, isLoading } = useGetStudentCoursesQuery();

  return <Courses title="مقرراتي" courses={data?.Data || []} isLoading={isLoading} showAll={false} />;
}

export default Page;
