"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Video as VV } from "lucide-react";
import Video from "next-video";
import myVideo from "@/../videos/spider.mp4";
import { Button } from "@/components/ui/button";
import { useGetCourseDetailsQuery, useShowVideoQuery } from "@/features/student/services/studentApi";
import { Chapter, Lesson } from "@/types/common.types";
import Link from "next/link";
import getContentUrl from "@/features/student/utils/getContentUrl";

function Page({ params }: { params: Promise<{ executionId: string; id: string }> }) {
  const { executionId, id } = use(params);
  const videoRef = useRef(null);
  const [videoStats, setVideoStats] = useState({
    currentTime: 0,
    duration: 0,
    played: false,
    paused: false,
    ended: false,
    volume: 1,
    playCount: 0,
  });
  const { data } = useShowVideoQuery({ Id: executionId, LessonId: id });
  const { data: courseDetails } = useGetCourseDetailsQuery(executionId);
  useEffect(() => {
    console.log(courseDetails);
  }, [courseDetails]);

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    const duration = video.duration;
    setVideoStats((prev) => ({ ...prev, duration }));
    console.log("📊 Video loaded:", { duration });
  };

  const handlePlay = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setVideoStats((prev) => ({
      ...prev,
      played: true,
      paused: false,
      playCount: prev.playCount + 1,
    }));
    console.log("▶️ Video started playing - Count:", videoStats.playCount + 1);
  };

  const handlePause = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setVideoStats((prev) => ({ ...prev, paused: true }));
    // console.log("⏸️ Video paused at:", e.target.currentTime);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    const currentTime = video.currentTime;
    setVideoStats((prev) => ({ ...prev, currentTime }));

    const progress = (currentTime / videoStats.duration) * 100;
    if (Math.floor(progress) === 25 || Math.floor(progress) === 50 || Math.floor(progress) === 75) {
      console.log(`📈 Progress milestone: ${Math.floor(progress)}%`);
    }
  };

  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setVideoStats((prev) => ({ ...prev, ended: true, paused: false }));
    console.log("🏁 Video completed");
  };

  const handleVolumeChange = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    const volume = video.volume;
    setVideoStats((prev) => ({ ...prev, volume }));
    console.log("🔊 Volume changed to:", volume);
  };

  const handleSeeking = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    // console.log("⏩ User seeking to:", e.target.currentTime);
  };

  const handleSeeked = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    // console.log("✅ Seek completed at:", e.target.currentTime);
  };

  // Format time helper
  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getProgress = () => {
    if (!videoStats.duration) return 0;
    return (videoStats.currentTime / videoStats.duration) * 100;
  };

  return (
    <section className="py-8 font-ar-medium">
      <div className="container grid grid-cols-12 gap-x-12 gap-y-8">
        <div className="lg:col-span-8 col-span-12" dir="ltr">
          {/* Next Video with Analytics */}
          <div className="w-full ">
            <Video ref={videoRef} src={data?.Data?.Contents} height={500} controls style={{ width: "100%" }} data-mux-env-key="0uvdpbqrkk2ar5v0ngg9ufanv" data-mux-video-id="video-local-001" data-mux-video-title="My Local Video" data-mux-viewer-user-id="user-12345" onLoadedMetadata={handleLoadedMetadata} onPlay={handlePlay} onPause={handlePause} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} onVolumeChange={handleVolumeChange} onSeeking={handleSeeking} onSeeked={handleSeeked} />
          </div>
          <div className="flex items-center justify-between mt-4">
            <Button variant={"ghost"}>السابق</Button>
            <Button>التالي</Button>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{videoStats.playCount}</div>
              <div className="text-sm text-blue-500">مرات التشغيل</div>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">{formatTime(videoStats.currentTime)}</div>
              <div className="text-sm text-green-500">الوقت الحالي</div>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">{Math.round(getProgress())}%</div>
              <div className="text-sm text-purple-500">نسبة التقدم</div>
            </div>
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-600">{Math.round(videoStats.volume * 100)}%</div>
              <div className="text-sm text-orange-500">مستوى الصوت</div>
            </div>
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
