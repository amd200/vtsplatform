"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, Video as VV } from "lucide-react";
import Video from "next-video";
import { Button } from "@/components/ui/button";
import { useGetCourseDetailsQuery, useShowVideoQuery } from "@/features/student/services/studentApi";
import { Chapter, Lesson } from "@/types/common.types";
import Link from "next/link";
import getContentUrl from "@/features/student/utils/getContentUrl";
import ChaptersContent from "@/features/student/components/ChaptersContent";

function VideoViewer({ executionId, lessonId }: { executionId: string; lessonId: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStats, setVideoStats] = useState({
    currentTime: 0,
    duration: 0,
    played: false,
    paused: false,
    ended: false,
    volume: 1,
    playCount: 0,
  });

  const { data } = useShowVideoQuery({ Id: executionId, LessonId: lessonId });

  const checkpoints = [
    { time: 60, message: "✋ توقف! هل تريد متابعة الفيديو؟" },
    { time: 120, message: "🚀 وصلت لنقطة مهمة! اضغط للمتابعة" },
  ];
  const [checkpointIndex, setCheckpointIndex] = useState(0);
  const [checkpointVisible, setCheckpointVisible] = useState(false);

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    const duration = video.duration;
    setVideoStats((prev) => ({ ...prev, duration }));
    console.log("📊 Video loaded:", { duration });
  };

  const handlePlay = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setVideoStats((prev) => ({
      ...prev,
      played: true,
      paused: false,
      playCount: prev.playCount + 1,
    }));
    console.log("▶️ Video started playing - Count:", videoStats.playCount + 1);
  };

  const handlePause = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setVideoStats((prev) => ({ ...prev, paused: true }));
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    const currentTime = video.currentTime;
    setVideoStats((prev) => ({ ...prev, currentTime }));

    // Checkpoint logic
    if (checkpointIndex < checkpoints.length && currentTime >= checkpoints[checkpointIndex].time) {
      video.pause();
      setCheckpointVisible(true);
    }
  };

  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setVideoStats((prev) => ({ ...prev, ended: true, paused: false }));
    console.log("🏁 Video completed");
  };

  const handleVolumeChange = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    const volume = video.volume;
    setVideoStats((prev) => ({ ...prev, volume }));
  };

  const handleCheckpointContinue = () => {
    setCheckpointVisible(false);
    setCheckpointIndex((prev) => prev + 1);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Format time helper
  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getProgress = () => {
    if (!videoStats.duration) return 0;
    return (videoStats.currentTime / videoStats.duration) * 100;
  };

  return (
    <div className="w-full relative">
      <Video ref={videoRef} src={data?.Data?.Contents} height={500} controls style={{ width: "100%" }} onLoadedMetadata={handleLoadedMetadata} onPlay={handlePlay} onPause={handlePause} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} onVolumeChange={handleVolumeChange} />
      {/* Popup عند checkpoint */}
      {checkpointVisible && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="mb-4 text-lg">{checkpoints[checkpointIndex].message}</p>
            <Button onClick={handleCheckpointContinue}>أكمل الفيديو</Button>
          </div>
        </div>
      )}
    </div>
  );
//   return (
//     <section className="py-8 font-ar-medium">
//       <div className="container grid grid-cols-12 gap-x-12 gap-y-8">
//         <div className="lg:col-span-8 col-span-12" dir="ltr">
//           <div className="w-full relative">
//             <Video ref={videoRef} src={data?.Data?.Contents} height={500} controls style={{ width: "100%" }} onLoadedMetadata={handleLoadedMetadata} onPlay={handlePlay} onPause={handlePause} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} onVolumeChange={handleVolumeChange} />

//             {/* Popup عند checkpoint */}
//             {checkpointVisible && (
//               <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
//                 <div className="bg-white p-6 rounded shadow-lg text-center">
//                   <p className="mb-4 text-lg">{checkpoints[checkpointIndex].message}</p>
//                   <Button onClick={handleCheckpointContinue}>أكمل الفيديو</Button>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="flex items-center justify-between mt-4">
//             <Button variant={"ghost"}>السابق</Button>
//             <Button>التالي</Button>
//           </div>

//           <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
//               <div className="text-2xl font-bold text-blue-600">{videoStats.playCount}</div>
//               <div className="text-sm text-blue-500">مرات التشغيل</div>
//             </div>
//             <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
//               <div className="text-2xl font-bold text-green-600">{formatTime(videoStats.currentTime)}</div>
//               <div className="text-sm text-green-500">الوقت الحالي</div>
//             </div>
//             <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg text-center">
//               <div className="text-2xl font-bold text-purple-600">{Math.round(getProgress())}%</div>
//               <div className="text-sm text-purple-500">نسبة التقدم</div>
//             </div>
//             <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg text-center">
//               <div className="text-2xl font-bold text-orange-600">{Math.round(videoStats.volume * 100)}%</div>
//               <div className="text-sm text-orange-500">مستوى الصوت</div>
//             </div>
//           </div>
//         </div>

//         <ChaptersContent executionId={executionId} />
//       </div>
//     </section>
//   );
}

export default VideoViewer;
