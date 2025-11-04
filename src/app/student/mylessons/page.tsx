"use client";
import MyExamResults from "@/features/student/components/MyExamResults";
import MyLessons from "@/features/student/components/MyLessons";
import { useGetStudentLessonsQuery } from "@/features/student/services/studentApi";
import React, { useEffect } from "react";

function Page() {
  const { data } = useGetStudentLessonsQuery();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return <MyLessons lessons={data?.Data || []} showAll={false} />;
}

export default Page;
