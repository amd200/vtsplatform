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
import MediaThemeTailwindAudio from "player.style/tailwind-audio/react";

function AudioPlayer({ audioUrl }: { audioUrl: string }) {
  return (
    <div className="w-full max-w-full relative" dir="ltr">
      <MediaThemeTailwindAudio
        style={{
          width: "100%",
          "--media-accent-color": "var(--primary)",
        }}
      >
        <audio slot="media" src={audioUrl} playsInline crossOrigin="anonymous"></audio>
      </MediaThemeTailwindAudio>{" "}
    </div>
  );
}

export default AudioPlayer;
