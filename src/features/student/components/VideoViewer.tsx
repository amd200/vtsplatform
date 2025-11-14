"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Video from "next-video";
import { useShowVideoQuery } from "../services/lessonContentApi";

function VideoViewer({ executionId, lessonId, setLessonName }: { executionId: string; lessonId: string; setLessonName: (name: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [checkpointIndex, setCheckpointIndex] = useState(0);
  const [checkpointVisible, setCheckpointVisible] = useState(false);

  const [videoStats, setVideoStats] = useState({
    currentTime: 0,
    duration: 0,
    playCount: 0,
  });

  const { data } = useShowVideoQuery({ Id: executionId, LessonId: lessonId });

  // --- Save progress key ---
  const STORAGE_KEY = `video_${lessonId}_time`;

  // --- Load lesson title ---
  useEffect(() => {
    if (data?.Data?.LessonTitle) {
      setLessonName(data.Data.LessonTitle);
    }
  }, [data]);

  // --- Load saved time when video loads ---
  useEffect(() => {
    const savedTime = localStorage.getItem(STORAGE_KEY);

    if (savedTime && videoRef.current) {
      const resumeTime = parseFloat(savedTime);

      // Wait for metadata
      videoRef.current.onloadedmetadata = () => {
        if (videoRef.current && !isNaN(resumeTime)) {
          videoRef.current.currentTime = resumeTime;
        }
      };
    }
  }, [data]);

  // Checkpoints
  const checkpoints = [
    { time: 60, message: "✋ توقف! هل تريد متابعة الفيديو؟" },
    { time: 120, message: "🚀 وصلت لنقطة مهمة! اضغط للمتابعة" },
  ];

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const duration = e.currentTarget.duration;
    setVideoStats((prev) => ({ ...prev, duration }));
  };

  const handlePlay = () => {
    setVideoStats((prev) => ({
      ...prev,
      playCount: prev.playCount + 1,
    }));
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const currentTime = e.currentTarget.currentTime;

    setVideoStats((prev) => ({ ...prev, currentTime }));

    localStorage.setItem(STORAGE_KEY, currentTime.toString());

    // Checkpoint logic
    if (checkpointIndex < checkpoints.length && currentTime >= checkpoints[checkpointIndex].time) {
      e.currentTarget.pause();
      setCheckpointVisible(true);
    }
  };

  // --- Ended ---
  const handleEnded = () => {
    setVideoStats((prev) => ({ ...prev, currentTime: 0 }));
    localStorage.removeItem(STORAGE_KEY); // لو عايز يمسح التقدم بعد الانتهاء
  };

  const handleCheckpointContinue = () => {
    setCheckpointVisible(false);
    setCheckpointIndex((prev) => prev + 1);

    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="w-full max-w-full relative" dir="ltr">
      <Video ref={videoRef} src={data?.Data?.Contents} height={500} controls style={{ width: "100%", maxWidth: "100%" }} onLoadedMetadata={handleLoadedMetadata} onPlay={handlePlay} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} />

      {/* Checkpoint Popup */}
      {/* {checkpointVisible && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="mb-4 text-lg">{checkpoints[checkpointIndex].message}</p>
            <Button onClick={handleCheckpointContinue}>أكمل الفيديو</Button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default VideoViewer;

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
