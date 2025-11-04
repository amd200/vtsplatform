"use client";

import { Skeleton } from "@/components/ui/skeleton";

interface CourseCardSkeletonProps {
  showButtons?: boolean; // تتحكم إذا عايز تظهر Skeleton للزرار ولا لا
}

export default function CourseCardSkeleton({ showButtons = true }: CourseCardSkeletonProps) {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="shadow-none pt-0 gap-0 border-0 font-ar-medium hover:-translate-y-3 transition-transform bg-transparent animate-pulse">
          {/* Image */}
          <div className="relative h-48 w-full rounded bg-gray-200" />

          <div className="bg-[#f3f4f6] rounded-lg px-6 relative py-3 mt-[-30px] z-20 w-[97%] mx-auto">
            <div className=" mb-3 pb-3">
              {/* Price */}
              <div className="inline-flex w-fit mt-[-24px] gap-x-1 px-2 py-1 bg-primary/90 rounded">
                <Skeleton className="h-4 w-12 rounded bg-white" />
                <Skeleton className="h-4 w-6 rounded" />
              </div>

              {/* Title */}
              <Skeleton className="h-6 w-3/4 mt-3 rounded" />

              {/* Buttons */}
              {showButtons && (
                <div className="mt-3 grid grid-cols-3 gap-x-4">
                  <Skeleton className="h-7 w-full rounded bg-gray-200" />
                  <Skeleton className="h-7 w-full rounded bg-gray-200" />
                  <Skeleton className="h-7 w-full rounded bg-gray-200" />
                </div>
              )}
            </div>

            {/* Description */}
            <Skeleton className="h-4 w-full rounded mb-4 bg-gray-200" />

            {/* Content: Lessons and Chapters */}
            <div className="flex justify-around text-center  rounded-lg overflow-hidden mb-4">
              <div className="flex flex-col items-center justify-center gap-1 py-3">
                <Skeleton className="h-6 w-6 rounded-full bg-gray-200" />
                <Skeleton className="h-4 w-12 rounded bg-gray-200" />
              </div>
              <div className="flex flex-col items-center justify-center gap-1 py-3">
                <Skeleton className="h-6 w-6 rounded-full bg-gray-200" />
                <Skeleton className="h-4 w-12 rounded bg-gray-200" />
              </div>
            </div>

            {/* Footer: Dates */}
            <div className="flex justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Skeleton className="h-4 w-16 rounded bg-gray-200" />
              </div>
              <div className="flex items-center gap-1">
                <Skeleton className="h-4 w-16 rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
