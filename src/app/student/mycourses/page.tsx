"use client";
import MyCourses from "@/features/student/components/MyCourses";
import { useGetStudentCoursesQuery } from "@/features/student/services/studentApi";
import React from "react";

function Page() {
  const { data, isLoading } = useGetStudentCoursesQuery();

  return <MyCourses courses={data?.Data || []} isLoading={isLoading} showAll={false} />;
}

export default Page;
