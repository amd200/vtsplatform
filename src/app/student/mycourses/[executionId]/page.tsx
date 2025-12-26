"use client";

import ChaptersAccordion from "@/features/student/components/ChaptersAccordion";
import CourseDetails from "@/features/student/components/CourseDetails";
import { useGetCourseDetailsQuery } from "@/features/student/services/studentApi";
import { use, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { DownloadDropdown } from "@/components/shared/DownloadDropdown";
import { useGetGeneralSettingsQuery } from "@/services/settings";
import { useToastMessage } from "@/hooks/useToastMessage";

export default function Page({ params }: { params: Promise<{ executionId: string }> }) {
  const { executionId } = use(params);
  const { data, isLoading, error } = useGetCourseDetailsQuery(executionId);
  const { data: settings } = useGetGeneralSettingsQuery();
  const { error: toasError } = useToastMessage();
  const course = data?.Data;
  const courseInfo = course
    ? {
        title: course.Title,
        startDate: course.StartDate,
        endDate: course.EndDate,
        chaptersCount: course.ChaptersCount,
        lessonsCount: course.LesssonsCount,
      }
    : null;
  const courseAccess = course ? { isBuy: course.Isbuy } : undefined;

  return (
    <div className="container">
      {/* ================= Course Details ================= */}
      {isLoading ? (
        <div className="bg-[#f8f8f8] rounded-2xl p-8 mb-6">
          <div className="flex justify-center mb-8">
            <Skeleton className="h-8 w-[260px] rounded-lg bg-gray-300/80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <Skeleton className="h-5 w-5 rounded-full bg-gray-300/80" />
                <Skeleton className="h-4 w-[110px] rounded-md bg-gray-300/80" />
              </div>
            ))}
          </div>
        </div>
      ) : courseInfo ? (
        <CourseDetails course={courseInfo} />
      ) : null}

      {/* ================= Chapters ================= */}
      {isLoading ? (
        <div className="bg-[#f8f8f8] p-4 space-y-3 rounded-lg">
          {[...Array(3)].map((_, chapterIndex) => (
            <div key={chapterIndex} className="bg-white rounded px-4 py-3 space-y-3">
              <Skeleton className="h-5 w-[60%] bg-gray-300/80" />

              <div className="pl-4 space-y-2">
                {[...Array(3)].map((_, lessonIndex) => (
                  <div key={lessonIndex} className="flex justify-between items-center px-3 py-2 rounded bg-gray-100 gap-x-2">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-7 w-7 rounded-full bg-gray-300/80" />
                      <Skeleton className="h-4 w-[140px] bg-gray-300/80" />
                    </div>

                    <Skeleton className="h-8 w-[90px] rounded-md bg-gray-300/80" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : course ? (
        <>
          {settings?.Data?.ActivateVideoProtection && <DownloadDropdown />}
          <ChaptersAccordion courseDetails={courseAccess} executionId={executionId} chapters={course.Chapters} />
        </>
      ) : null}
    </div>
  );
}
