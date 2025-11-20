import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
function PdfViewer({ pdfUrl }: { pdfUrl: string }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="w-full max-w-full h-[500px]">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">{pdfUrl && <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={pdfUrl} />}</Worker>
    </div>
  );
}

export default PdfViewer;
