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
import ChaptersContent from "@/features/student/components/ChaptersContent";
function Page() {
  const params = useParams();
  const executionId = Array.isArray(params.executionId) ? params.executionId[0] : params.executionId;
  const lessonId = Array.isArray(params.id) ? params.id[0] : params.id;
  const { data: pdfData } = useShowPdfQuery({ Id: executionId, LessonId: lessonId });
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
        <ChaptersContent lessonId={String(lessonId)} executionId={String(executionId)} />
      </div>
    </section>
  );
}

export default Page;
