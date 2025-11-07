"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Video as VV } from "lucide-react";
import Video from "next-video";
import myVideo from "@/../videos/spider.mp4";
import { Button } from "@/components/ui/button";
import { Chapter, Lesson } from "@/types/common.types";
import Link from "next/link";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useParams } from "next/navigation";
import ChaptersContent from "@/features/student/components/ChaptersContent";
import PdfViewer from "@/features/student/components/PdfViewer";
import RichTextViewer from "@/features/student/components/RichTextViewer";
import VideoViewer from "@/features/student/components/VideoViewer";
function Page() {
  const params = useParams();
  const type = params.type;
  const executionId = Array.isArray(params.executionId) ? params.executionId[0] : params.executionId;
  const lessonId = Array.isArray(params.id) ? params.id[0] : params.id;
  const renderViewer = () => {
    switch (type) {
      case "video":
        return <VideoViewer executionId={String(executionId)} lessonId={String(lessonId)} />;
        return "";
      case "pdf":
        return <PdfViewer executionId={String(executionId)} lessonId={String(lessonId)} />;
      case "richtext":
      default:
        return <RichTextViewer executionId={String(executionId)} lessonId={String(lessonId)} />;
    }
  };

  return (
    <section className="py-8 font-ar-medium">
      <div className="container grid lg:grid-cols-12 grid-cols-1 gap-x-12 gap-y-8">
        <div className="lg:col-span-8 col-span-12">
          {/* <div className="w-full h-[500px]"></div> */}
          {renderViewer()}
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
