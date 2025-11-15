"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Link from "next/link";

import ChaptersContent from "@/features/student/components/ChaptersContent";
import PdfViewer from "@/features/student/components/PdfViewer";
import RichTextViewer from "@/features/student/components/RichTextViewer";
import VideoViewer from "@/features/student/components/VideoViewer";
import AudioPlayer from "@/features/student/components/AudioPlayer";
import getContentUrl from "@/features/student/utils/getContentUrl";
import { Lesson } from "@/types/common.types";

function Page() {
  const params = useParams();
  const type = params.type;
  const [videoStats, setVideoStats] = useState({
    currentTime: 0,
    duration: 0,
    playCount: 0,
    volume: 1,
  });
  const executionId = Array.isArray(params.executionId) ? params.executionId[0] : params.executionId;

  const lessonId = Array.isArray(params.id) ? params.id[0] : params.id;

  const [lessonName, setLessonName] = useState("");
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const id = String(lessonId);
  const exe = String(executionId);

  // ترتيب الدروس
  const currentIndex = lessons.findIndex((l) => String(l.Id) === id);

  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex !== -1 && currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  const prevUrl = prevLesson ? getContentUrl(exe, prevLesson.Id, prevLesson.ContentType) : null;

  const nextUrl = nextLesson ? getContentUrl(exe, nextLesson.Id, nextLesson.ContentType) : null;

  const renderViewer = () => {
    switch (type) {
      case "video":
        return <VideoViewer executionId={exe} lessonId={id} setLessonName={setLessonName} onStatsUpdate={setVideoStats} />;
      case "pdf":
        return <PdfViewer executionId={exe} lessonId={id} />;
      case "sound":
        return <AudioPlayer executionId={exe} lessonId={id} />;
      default:
        return <RichTextViewer executionId={exe} lessonId={id} setLessonName={setLessonName} />;
    }
  };
  function formatTime(seconds: number) {
    if (!seconds || isNaN(seconds)) return "00:00";

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hrs > 0) {
      return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }

    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  return (
    <section className="py-8 font-ar-medium">
      <div className="container grid lg:grid-cols-12 grid-cols-1 lg:gap-x-12 gap-y-8">
        <div className="lg:col-span-8 col-span-12">
          <h1 className="text-2xl font-bold mb-4">{lessonName}</h1>

          {renderViewer()}

          <div className="flex items-center justify-between mt-4">
            {prevUrl ? (
              <Link href={prevUrl}>
                <Button variant="ghost">السابق</Button>
              </Link>
            ) : (
              <div></div>
            )}

            {nextUrl ? (
              <Link href={nextUrl}>
                <Button>التالي</Button>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
          {type === "video" && videoStats && (
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
                <div className="text-2xl font-bold text-purple-600">{Math.round((videoStats.currentTime / videoStats.duration) * 100)}%</div>
                <div className="text-sm text-purple-500">نسبة التقدم</div>
              </div>
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">{Math.round(videoStats.volume * 100)}%</div>
                <div className="text-sm text-orange-500">مستوى الصوت</div>
              </div>
            </div>
          )}
        </div>

        <ChaptersContent lessonId={id} executionId={exe} onLessonsLoaded={setLessons} />
      </div>
    </section>
  );
}

export default Page;
