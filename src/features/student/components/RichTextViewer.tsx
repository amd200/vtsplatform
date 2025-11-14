import React, { useEffect } from "react";
import { useShowRichTextQuery } from "../services/lessonContentApi";

interface Props {
  executionId: string;
  lessonId: string;
  setLessonName: (name: string) => void;
}

function RichTextViewer({ executionId, lessonId, setLessonName }: Props) {
  const { data: rishTextData } = useShowRichTextQuery({
    Id: executionId,
    LessonId: lessonId,
  });

  useEffect(() => {
    if (rishTextData?.Data?.Title) {
      setLessonName(rishTextData.Data.LessonTitle);
    }
  }, [rishTextData]);

  return (
    <div
      className="prose w-full [&_iframe]:w-full [&_iframe]:h-[500px]"
      dangerouslySetInnerHTML={{
        __html: rishTextData?.Data?.Contents || "",
      }}
    />
  );
}

export default RichTextViewer;
