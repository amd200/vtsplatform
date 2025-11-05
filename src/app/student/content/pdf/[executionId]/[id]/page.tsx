"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Video as VV } from "lucide-react";
import Video from "next-video";
import myVideo from "@/../videos/spider.mp4";
import { Button } from "@/components/ui/button";
import { useGetCourseDetailsQuery, useShowPdfQuery, useShowVideoQuery } from "@/features/student/services/studentApi";
import { Chapter, Lesson } from "@/types/common.types";
import Link from "next/link";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { useParams } from "next/navigation";
import getContentUrl from "@/features/student/utils/getContentUrl";
function Page() {
  const params = useParams();
  const executionId = Array.isArray(params.executionId) ? params.executionId[0] : params.executionId;
  const lessonId = Array.isArray(params.id) ? params.id[0] : params.id;
  const { data: pdfData } = useShowPdfQuery({ Id: executionId, LessonId: lessonId });
  const { data: courseDetails } = useGetCourseDetailsQuery(executionId!);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <section className="py-8 font-ar-medium">
      <div className="container grid grid-cols-12 gap-x-12 gap-y-8">
        <div className="lg:col-span-8 col-span-12" dir="ltr">
          {/* Next Video with Analytics */}
          <div className="w-full h-[500px]">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">{pdfData?.Data?.Contents && <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={pdfData?.Data?.Contents} />}</Worker>
          </div>

          <div className="flex items-center justify-between mt-4">
            <Button variant={"ghost"}>السابق</Button>
            <Button>التالي</Button>
          </div>
        </div>{" "}
        <div className="lg:col-span-4 col-span-12 ">
          <div className="shadow-sm p-4 rounded h-full max-h-[500px] overflow-y-auto">
            <h3 className="text-lg">تفاصيل الكورس</h3>
            <div>
              <Accordion type="single" collapsible>
                {courseDetails &&
                  courseDetails.Data?.Chapters &&
                  courseDetails?.Data?.Chapters?.map((chapter: Chapter) => (
                    <AccordionItem key={chapter?.Id} value="item-1">
                      <AccordionTrigger className="relative">
                        {chapter?.Title}
                        <div className="absolute end-8 flex items-center gap-x-3">
                          <div className="flex items-end px-1 py-1 pb-2 rounded text-gray-500 gap-x-1">
                            <VV className="size-3 text-primary/80" />
                            <span className="text-xs">{chapter?.Lessons?.length} درس</span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="relative">
                          <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                          <div className="space-y-2">
                            {chapter?.Lessons &&
                              chapter?.Lessons?.length > 0 &&
                              chapter?.Lessons.map((lesson: Lesson) => {
                                const url = getContentUrl(String(executionId), lesson.Id, lesson.ContentType);

                                return (
                                  <div key={lesson?.Id} className="relative flex flex-col group">
                                    {" "}
                                    <div className="absolute start-2 top-1/2 -translate-y-1/2 bg-white py-1">
                                      <Checkbox className=" " />
                                    </div>
                                    <div className="mr-5 flex-1 cursor-pointer p-4">
                                      <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                          <h3 className="text-sm text-gray-800">{lesson?.Title}</h3>
                                          <div className="flex items-center gap-x-2 mt-1 text-sm text-gray-600">
                                            <span className="size-2 rounded-full bg-primary"></span>
                                            <span className="text-xs">20 دقيقة | فيديو</span>
                                          </div>
                                        </div>
                                        <Button size={"sm"} className="px-3 text-sm" asChild>
                                          <Link href={url}>ابدأ</Link>
                                        </Button>{" "}
                                      </div>
                                    </div>
                                    {/* Nested Accordion */}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                        {/* <Accordion type="single" collapsible className="pl-4">
                      <AccordionItem value="nested-1">
                        <AccordionTrigger className="text-xs text-gray-500">تفاصيل الفيديو</AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-600">محتوى الدرس الفرعي أو وصف الفيديو</AccordionContent>
                      </AccordionItem>
                    </Accordion> */}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>

              {/* <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="relative">
                    الفصل الثاني{" "}
                    <div className="absolute end-8 flex items-center gap-x-3">
                      <div className="flex items-end  px-1 py-1 pb-2 rounded text-gray-500 gap-x-1">
                        <VV className="size-3 text-primary/80" />
                        <span className="text-xs">21 درس</span>
                      </div>
                      <div className="flex items-end  px-1 py-1 pb-2 rounded text-gray-500 gap-x-1">
                        <Clock className="size-3 text-primary/80" />
                        <span className="text-xs">21 درس</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="relative">
                    <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                    <div className="space-y-2">
                      <div className="relative flex items-center group">
                        <div className="absolute start-2 top-3/5 -translate-y-1/2 bg-white py-1">
                          <Checkbox className=" " />
                        </div>
                        <div className="mr-5 flex-1 p-4  cursor-pointer ">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-sm text-gray-800">HTML الأساسي</h3>
                              <div className="flex items-center gap-x-2 mt-1 text-sm text-gray-600">
                                <span className="size-2 rounded-full bg-primary"></span>
                                <span className="text-xs">20 دقيقة | فيديو</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex items-center group">
                        <div className="absolute start-2 top-3/5 -translate-y-1/2 bg-white py-1">
                          <Checkbox className=" " />
                        </div>
                        <div className="mr-5 flex-1 p-4  cursor-pointer ">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-sm text-gray-800">HTML الأساسي</h3>
                              <div className="flex items-center gap-x-2 mt-1 text-sm text-gray-600">
                                <span className="size-2 rounded-full bg-primary"></span>
                                <span className="text-xs">20 دقيقة | فيديو</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex items-center group">
                        <div className="absolute start-2 top-3/5 -translate-y-1/2 bg-white py-1">
                          <Checkbox className=" " />
                        </div>
                        <div className="mr-5 flex-1 p-4  cursor-pointer ">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-sm text-gray-800">HTML الأساسي</h3>
                              <div className="flex items-center gap-x-2 mt-1 text-sm text-gray-600">
                                <span className="size-2 rounded-full bg-primary"></span>
                                <span className="text-xs">20 دقيقة | فيديو</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex items-center group">
                        <div className="absolute start-2 top-3/5 -translate-y-1/2 bg-white py-1">
                          <Checkbox className=" " />
                        </div>
                        <div className="mr-5 flex-1 p-4  cursor-pointer ">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-sm text-gray-800">HTML الأساسي</h3>
                              <div className="flex items-center gap-x-2 mt-1 text-sm text-gray-600">
                                <span className="size-2 rounded-full bg-primary"></span>
                                <span className="text-xs">20 دقيقة | فيديو</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
