import { ContentType } from "@/types/common.types";

export default function getContentUrl(executionId: string, lessonId: string, contentType: ContentType): string {
  const typeName = ContentType[contentType]?.toLowerCase();

  if (typeName === "quiz" || typeName === "quizmodels") {
    // return `/student/exam/${executionId}/${lessonId}`;
    return `/student/exam/${lessonId}`;
  }
  else if (typeName === "Forum" || typeName === "forum") {
    // return `/student/exam/${executionId}/${lessonId}`;
    return `/student/community`;
  }
  const safeType = typeName || "richtext";
  return `/student/content/${safeType}/${executionId}/${lessonId}`;
}
