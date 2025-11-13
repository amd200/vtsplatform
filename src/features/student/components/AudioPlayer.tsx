"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, Video as VV } from "lucide-react";
import Video from "next-video";
import { Button } from "@/components/ui/button";
import { Chapter, Lesson } from "@/types/common.types";
import Link from "next/link";
import getContentUrl from "@/features/student/utils/getContentUrl";
import ChaptersContent from "@/features/student/components/ChaptersContent";
import { useShowAudioQuery, useShowVideoQuery } from "../services/lessonContentApi";
import MediaThemeTailwindAudio from "player.style/tailwind-audio/react";

function AudioPlayer({ executionId, lessonId }: { executionId: string; lessonId: string }) {
  const { data, error } = useShowAudioQuery({ Id: executionId, LessonId: lessonId });

  return (
    <div className="w-full max-w-full relative" dir="ltr">
      <MediaThemeTailwindAudio
        style={{
          width: "100%",
          "--media-accent-color": "var(--primary)",
        }}
      >
        <audio slot="media" src={"https://backup.qurango.net/radio/nasser_alqatami"} playsInline crossOrigin="anonymous"></audio>
      </MediaThemeTailwindAudio>{" "}
    </div>
  );
}

export default AudioPlayer;
