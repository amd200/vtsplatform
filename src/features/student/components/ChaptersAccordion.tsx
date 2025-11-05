import { Calendar, Languages, LinkIcon } from "lucide-react";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Chapter, ContentType, Lesson } from "@/types/common.types";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, File, Music, Users } from "lucide-react";
import Link from "next/link";

const lessonTypeConfig: Record<ContentType, { icon: React.ReactNode; buttonText: string }> = {
  [ContentType.RichText]: { icon: <BookOpen className="size-4 text-primary" />, buttonText: "عرض النص" },
  [ContentType.Word]: { icon: <FileText className="size-4 text-primary" />, buttonText: "فتح Word" },
  [ContentType.Link]: { icon: <LinkIcon className="size-4 text-primary" />, buttonText: "فتح الرابط" },
  [ContentType.Quiz]: { icon: <Users className="size-4 text-primary" />, buttonText: "بدء الاختبار" },
  [ContentType.VdoCipher]: { icon: <Video className="size-4 text-primary" />, buttonText: "مشاهدة" },
  [ContentType.Forum]: { icon: <Users className="size-4 text-primary" />, buttonText: "الدخول للمنتدى" },
  [ContentType.Publitio]: { icon: <Video className="size-4 text-primary" />, buttonText: "مشاهدة الفيديو" },
  [ContentType.Video]: { icon: <Video className="size-4 text-primary" />, buttonText: "مشاهدة الفيديو" },
  [ContentType.PDF]: { icon: <File className="size-4 text-primary" />, buttonText: "فتح PDF" },
  [ContentType.Sound]: { icon: <Music className="size-4 text-primary" />, buttonText: "استماع" },
  [ContentType.HomeWork]: { icon: <FileText className="size-4 text-primary" />, buttonText: "فتح الواجب" },
  [ContentType.OfflineActivity]: { icon: <FileText className="size-4 text-primary" />, buttonText: "عرض النشاط" },
  [ContentType.QuizModels]: { icon: <Users className="size-4 text-primary" />, buttonText: "عرض نموذج الاختبار" },
  [ContentType.PowerPoint]: { icon: <File className="size-4 text-primary" />, buttonText: "فتح PowerPoint" },
  [ContentType.Meeting]: { icon: <Users className="size-4 text-primary" />, buttonText: "الانضمام للاجتماع" },
};

function getContentUrl(executionId: string, lessonId: string, contentType: ContentType) {
  switch (contentType) {
    case ContentType.Video:
    case ContentType.VdoCipher:
      return `/student/content/video/${executionId}/${lessonId}`;
    case ContentType.PDF:
      return `/student/content/pdf/${executionId}/${lessonId}`;
    case ContentType.Word:
      return `/student/content/word/${executionId}/${lessonId}`;
    case ContentType.Quiz:
    case ContentType.QuizModels:
      return `/student/content/quiz/${executionId}/${lessonId}`;
    case ContentType.Link:
      return `/student/content/link/${executionId}/${lessonId}`;
    case ContentType.Sound:
      return `/student/content/sound/${executionId}/${lessonId}`;
    case ContentType.PowerPoint:
      return `/student/content/ppt/${executionId}/${lessonId}`;
    case ContentType.Forum:
      return `/student/content/forum/${executionId}/${lessonId}`;
    case ContentType.HomeWork:
      return `/student/content/homework/${executionId}/${lessonId}`;
    case ContentType.Meeting:
      return `/student/content/meeting/${executionId}/${lessonId}`;
    case ContentType.OfflineActivity:
      return `/student/content/offline/${executionId}/${lessonId}`;
    default:
      return `/student/content/unknown/${executionId}/${lessonId}`;
  }
}

function ChaptersAccordion({ chapters, executionId }: { chapters: Chapter[]; executionId: string }) {
  return (
    <Accordion type="single" collapsible className="bg-[#f8f8f8] p-8">
      {chapters &&
        chapters.length > 0 &&
        chapters.map((chapter, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-white px-4">
            <AccordionTrigger className="">{chapter?.Title}</AccordionTrigger>
            <AccordionContent>
              <ul className="">
                {chapter?.Lessons?.map((lesson: Lesson) => {
                  const config = lessonTypeConfig[lesson.ContentType];
                  const url = getContentUrl(executionId, lesson.Id, lesson.ContentType);

                  return (
                    <li key={lesson.Id} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded">
                      <div className="flex items-center gap-2">
                        <div className="size-7 flex items-center justify-center bg-white rounded-full">{config.icon}</div>
                        <span>{lesson.Title}</span>
                        <span>{chapter.ExecutionId}</span>
                        <span>{lesson.Id}</span>
                      </div>
                      <Button size="sm" asChild>
                        <Link href={url}>{config.buttonText}</Link>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </AccordionContent>
            {/* <AccordionContent>
              <Accordion type="single" collapsible className="">
                <AccordionItem value="nested-1">
                  <AccordionTrigger>🧩 الفصل الأول</AccordionTrigger>
                  <AccordionContent>
                    <ul className="">
                      <li>مقدمة في الدورة</li>
                      <li>أساسيات البرمجة</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="nested-2">
                  <AccordionTrigger>🧩 الفصل الثاني</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>المتغيرات وأنواع البيانات</li>
                      <li>الشروط والحلقات</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent> */}
          </AccordionItem>
        ))}

      {/* <AccordionItem value="item-2" className="bg-white px-4">
        <AccordionTrigger>📗 دورة تصميم</AccordionTrigger>
        <AccordionContent>دورة متخصصة في تصميم واجهات المستخدم (UI/UX)</AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
}

export default ChaptersAccordion;
