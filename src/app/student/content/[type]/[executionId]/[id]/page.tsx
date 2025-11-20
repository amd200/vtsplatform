"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Link from "next/link";

import ChaptersContent from "@/features/student/components/ChaptersContent";
import PdfViewer from "@/features/student/components/PdfViewer";
import RichTextViewer from "@/features/student/components/RichTextViewer";
import VideoViewer from "@/features/student/components/VideoViewer";
import AudioPlayer from "@/features/student/components/AudioPlayer";
import getContentUrl from "@/features/student/utils/getContentUrl";
import { BaseResponse, Lesson } from "@/types/common.types";
import { toast } from "sonner";
import { Share2 } from "lucide-react";
import { CommentsSection } from "@/features/student/components/Comments";

import { useLazyShowAudioQuery, useLazyShowPdfQuery, useLazyShowRichTextQuery, useLazyShowVideoQuery } from "@/features/student/services/lessonContentApi";
import { ShowContent } from "@/features/student/types/student.types";
import { useToastMessage } from "@/hooks/useToastMessage";

function Page() {
  const params = useParams();
  const type = params.type;

  const executionId = (Array.isArray(params.executionId) ? params.executionId[0] : params.executionId) as string;

  const lessonId = (Array.isArray(params.id) ? params.id[0] : params.id) as string;

  const [contentData, setContentData] = useState<ShowContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { error: toasError } = useToastMessage();

  const [showVideo] = useLazyShowVideoQuery();
  const [showPdf] = useLazyShowPdfQuery();
  const [showRichText] = useLazyShowRichTextQuery();
  const [showAudio] = useLazyShowAudioQuery();

  useEffect(() => {
    async function load() {
      setIsLoading(true);

      try {
        let res;

        if (type === "video") {
          res = await showVideo({ Id: executionId, LessonId: lessonId }).unwrap();
        } else if (type === "pdf") {
          res = await showPdf({ Id: executionId, LessonId: lessonId }).unwrap();
        } else if (type === "sound") {
          res = await showAudio({ Id: executionId, LessonId: lessonId }).unwrap();
        } else {
          res = await showRichText({ Id: executionId, LessonId: lessonId }).unwrap();
        }

        setContentData(res.Data ?? null);
      } catch (err) {
        const error = err as BaseResponse<null>;
        toasError(error?.Message || "حدث خطأ ");
      }

      setIsLoading(false);
    }

    load();
  }, [type, executionId, lessonId]);

  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [videoStats, setVideoStats] = useState({
    currentTime: 0,
    duration: 0,
    playCount: 0,
    volume: 1,
  });

  const copyCurrentUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("تم النسخ بنجاح", {
        description: "يمكنك الآن مشاركة الرابط مع زملائك بسهولة.",
      });
    } catch {}
  };

  // لو لسة يحمل
  // if (isLoading || !contentData) return <p className="text-center py-10">جاري التحميل...</p>;

  const lessonTitle = contentData?.LessonTitle || "";
  const contentUrl = contentData?.Contents || "";
  const comments = contentData?.Comments || [];

  const currentIndex = lessons.findIndex((l) => String(l.Id) === lessonId);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex !== -1 && currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  const prevUrl = prevLesson ? getContentUrl(executionId, prevLesson.Id, prevLesson.ContentType) : null;

  const nextUrl = nextLesson ? getContentUrl(executionId, nextLesson.Id, nextLesson.ContentType) : null;

  const renderViewer = () => {
    switch (type) {
      case "video":
        return <VideoViewer videoUrl={contentUrl} lessonTitle={lessonTitle} onStatsUpdate={setVideoStats} />;

      case "pdf":
        return <PdfViewer pdfUrl={contentUrl} />;

      case "sound":
        return <AudioPlayer audioUrl={contentUrl} />;

      default:
        return <RichTextViewer htmlContent={contentUrl} />;
    }
  };

  return (
    <section className="py-8 font-ar-medium">
      <div className="container grid lg:grid-cols-12 grid-cols-1 lg:gap-x-12 gap-y-8">
        <div className="lg:col-span-8">
          <div className="flex items-center mb-4 justify-between">
            <h1 className="text-2xl font-bold ">{lessonTitle}</h1>
            <Button onClick={copyCurrentUrl}>
              <Share2 />
            </Button>
          </div>

          {renderViewer()}

          <div className="flex items-center justify-between mt-4">
            {prevUrl && (
              <Link href={prevUrl}>
                <Button variant="ghost">السابق</Button>
              </Link>
            )}

            {nextUrl && (
              <Link href={nextUrl}>
                <Button>التالي</Button>
              </Link>
            )}
          </div>

          {contentData?.AllowComment && <CommentsSection comments={comments} lessonId={lessonId} executionId={executionId} />}
        </div>

        <ChaptersContent lessonId={lessonId} executionId={executionId} onLessonsLoaded={setLessons} />
      </div>
    </section>
  );
}

export default Page;
