"use client";
import React, { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Chapter, ContentType, Lesson } from "@/types/common.types";
import { useGetCourseDetailsQuery } from "../services/studentApi";
import getContentUrl from "../utils/getContentUrl";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Video } from "lucide-react";
function ChaptersContent({ executionId, lessonId, onLessonsLoaded }: { executionId: string; lessonId: string; onLessonsLoaded?: (lessons: Lesson[]) => void }) {
  const { data: courseDetails } = useGetCourseDetailsQuery(executionId);

  useEffect(() => {
    if (courseDetails?.Data?.Chapters) {
      const allLessons: Lesson[] = [];

      courseDetails.Data.Chapters.forEach((chapter: Chapter) => {
        chapter.Lessons?.forEach((lesson: Lesson) => {
          allLessons.push(lesson);
        });
      });

      onLessonsLoaded?.(allLessons);
    }
  }, [courseDetails]);

  return (
    <div className="lg:col-span-4 col-span-12 ">
      <div className="shadow-sm p-4 rounded h-full max-h-[500px] overflow-y-auto">
        <h3 className="text-lg">تفاصيل الكورس</h3>
        <div>
          <Accordion type="single" collapsible>
            {courseDetails &&
              courseDetails.Data?.Chapters &&
              courseDetails.Data.Chapters.map((chapter: Chapter) => (
                <AccordionItem key={chapter.Id} value={`item-${chapter.Id}`}>
                  <AccordionTrigger className="relative">
                    {chapter.Title}
                    <div className="absolute end-8 flex items-center gap-x-3">
                      <div className="flex items-end px-1 py-1 pb-2 rounded text-gray-500 gap-x-1">
                        <Video className="size-3 text-primary/80" />
                        <span className="text-xs">{chapter.Lessons?.length} درس</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="relative">
                      <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                      <div className="space-y-2">
                        {chapter.Lessons?.map((lesson: Lesson) => {
                          const url = getContentUrl(String(executionId), lesson.Id, lesson.ContentType);
                          const contentTypeName = ContentType[lesson.ContentType];
                          const isActive = lesson.Id === lessonId;

                          return (
                            <div key={lesson.Id} className="relative flex flex-col group">
                              <div className="absolute start-2 top-1/2 -translate-y-1/2 bg-white py-1">
                                <Checkbox />
                              </div>
                              <div className="mr-5 flex-1 cursor-pointer p-4">
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <h3 className="text-sm text-gray-800">{lesson.Title}</h3>
                                    <div className="flex items-center gap-x-2 mt-1 text-sm text-gray-600">
                                      <span className="size-2 rounded-full bg-primary"></span>
                                      <span className="text-xs">20 دقيقة | {contentTypeName}</span>
                                    </div>
                                  </div>
                                  <Button size={"sm"} className="px-3 text-sm" asChild>
                                    {isActive ? <span className="">أنت هنا</span> : <Link href={url}>ابدأ</Link>}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ChaptersContent;
