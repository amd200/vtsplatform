"use client";
import getContentUrl from "@/features/student/utils/getContentUrl";
import { ContentType, Lesson } from "@/types/common.types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useOpenLesson(executionId: string) {
  const router = useRouter();
  const { data: session } = useSession();
  const filesPath = process.env.NEXT_PUBLIC_BASE_URL;

  const openLesson = async (lesson: Lesson) => {
    if ((true && ContentType[lesson?.ContentType] == ContentType[0]) || ContentType[lesson?.ContentType] == ContentType[7]) {
      const type = ContentType[lesson?.ContentType] == ContentType[0] ? "Youtube" : "Video";
      const redirectUrl = `vtsplayer:${filesPath}|${executionId}|${lesson?.Id}|${lesson?.Duration}|${false}|${session?.user?.id}|${type}`;
      // console.log(redirectUrl);
      window.location.href = redirectUrl;
      return;
    }

    const url = getContentUrl(executionId, lesson.Id, lesson.ContentType);

    router.push(url);
  };

  return { openLesson };
}
