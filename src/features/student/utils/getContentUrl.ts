import { ContentType } from "@/types/common.types";

export default function getContentUrl(executionId: string, lessonId: string, contentType: ContentType) {
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
