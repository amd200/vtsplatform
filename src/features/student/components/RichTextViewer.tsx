import React from "react";
import { useShowRichTextQuery } from "../services/studentApi";

function RichTextViewer({ executionId, lessonId }: { executionId: string; lessonId: string }) {
  const { data: rishTextData } = useShowRichTextQuery({ Id: executionId, LessonId: lessonId });
  return <div className="prose w-full [&_iframe]:w-full [&_iframe]:h-[500px]" dangerouslySetInnerHTML={{ __html: rishTextData?.Data?.Contents || "" }} />;
}

export default RichTextViewer;
