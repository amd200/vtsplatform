import React from "react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, File, Music, Users, LinkIcon } from "lucide-react";
import { Chapter, ContentType, Lesson } from "@/types/common.types";
import getContentUrl from "../utils/getContentUrl";
import { DownloadDropdown } from "@/components/shared/DownloadDropdown";
import { useSession } from "next-auth/react";
import { useOpenLesson } from "@/hooks/useOpenLesson";

/* ================= Types ================= */

type ChaptersAccordionAccess = {
  isBuy: boolean;
};

type ChaptersAccordionProps = {
  chapters: Chapter[];
  executionId: string;
  courseDetails?: ChaptersAccordionAccess;
};

/* ================= Lesson Config ================= */

const lessonTypeConfig: Record<ContentType, { icon: React.ReactNode; buttonText: string }> = {
  [ContentType.RichText]: {
    icon: <BookOpen className="size-4 text-primary" />,
    buttonText: "عرض النص",
  },
  [ContentType.Word]: {
    icon: <FileText className="size-4 text-primary" />,
    buttonText: "فتح Word",
  },
  [ContentType.Link]: {
    icon: <LinkIcon className="size-4 text-primary" />,
    buttonText: "فتح الرابط",
  },
  [ContentType.Quiz]: {
    icon: <Users className="size-4 text-primary" />,
    buttonText: "بدء الاختبار",
  },
  [ContentType.VdoCipher]: {
    icon: <Video className="size-4 text-primary" />,
    buttonText: "مشاهدة",
  },
  [ContentType.Forum]: {
    icon: <Users className="size-4 text-primary" />,
    buttonText: "الدخول للمنتدى",
  },
  [ContentType.Publitio]: {
    icon: <Video className="size-4 text-primary" />,
    buttonText: "مشاهدة الفيديو",
  },
  [ContentType.Video]: {
    icon: <Video className="size-4 text-primary" />,
    buttonText: "مشاهدة الفيديو",
  },
  [ContentType.PDF]: {
    icon: <File className="size-4 text-primary" />,
    buttonText: "فتح PDF",
  },
  [ContentType.Sound]: {
    icon: <Music className="size-4 text-primary" />,
    buttonText: "استماع",
  },
  [ContentType.HomeWork]: {
    icon: <FileText className="size-4 text-primary" />,
    buttonText: "فتح الواجب",
  },
  [ContentType.OfflineActivity]: {
    icon: <FileText className="size-4 text-primary" />,
    buttonText: "عرض النشاط",
  },
  [ContentType.QuizModels]: {
    icon: <Users className="size-4 text-primary" />,
    buttonText: "عرض نموذج الاختبار",
  },
  [ContentType.PowerPoint]: {
    icon: <File className="size-4 text-primary" />,
    buttonText: "فتح PowerPoint",
  },
  [ContentType.Meeting]: {
    icon: <Users className="size-4 text-primary" />,
    buttonText: "الانضمام للاجتماع",
  },
};

/* ================= Component ================= */

function ChaptersAccordion({ chapters, executionId, courseDetails }: ChaptersAccordionProps) {
  if (!chapters || chapters.length === 0) return null;

  const { data: session } = useSession();
  return (
    <>
      <Accordion type="single" collapsible className="bg-[#f8f8f8] p-4 space-y-2">
        {chapters.map((chapter) => (
          <AccordionItem key={chapter.Id} value={`chapter-${chapter.Id}`} className="bg-white rounded px-4">
            <AccordionTrigger>{chapter.Title}</AccordionTrigger>

            <AccordionContent className="pl-4">
              {/* ================= Lessons ================= */}
              {chapter.Lessons?.length > 0 && (
                <ul className="space-y-2">
                  {chapter.Lessons.map((lesson: Lesson) => {
                    const config = lessonTypeConfig[lesson.ContentType];
                    const url = getContentUrl(executionId, lesson.Id, lesson.ContentType);
                    const { openLesson } = useOpenLesson(executionId);

                    const canView = courseDetails?.isBuy || lesson.CanViewWithoutPay;

                    return (
                      <li key={lesson.Id} className="flex justify-between items-center px-3 py-2 rounded bg-gray-50">
                        <div className="flex items-center gap-2">
                          <div className="size-7 flex items-center justify-center bg-white rounded-full">{config.icon}</div>
                          <span>{lesson.Title}</span>
                        </div>

                        <Button size="sm" asChild>
                          <Link
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              openLesson(lesson);
                            }}
                          >
                            {config.buttonText}
                          </Link>
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* ================= Child Chapters (Recursive) ================= */}
              {chapter.ChaptersChild?.length > 0 && (
                <div className="mt-2">
                  <ChaptersAccordion chapters={chapter.ChaptersChild} executionId={executionId} />
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default ChaptersAccordion;
