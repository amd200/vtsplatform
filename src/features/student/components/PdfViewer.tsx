import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useShowPdfQuery } from "../services/lessonContentApi";
function PdfViewer({ executionId, lessonId }: { executionId: string; lessonId: string }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { data: pdfData } = useShowPdfQuery({ Id: executionId, LessonId: lessonId });
  return (
    <div className="w-full max-w-full h-[500px]">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">{pdfData?.Data?.Contents && <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={pdfData?.Data?.Contents} />}</Worker>
    </div>
  );
}

export default PdfViewer;
