"use client";

import React, { useEffect, useState } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useJoinMeetingMutation } from "../services/lessonContentApi";

function MeetingViewer() {
  const domainName = "vpaas-magic-cookie-adf1099659c94340a841dcc60ff4d3da.8x8.vc";

  const lessonId = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // GUID حقيقي

  const [joinMeeting] = useJoinMeetingMutation();

  const [token, setToken] = useState<string | null>(null);
  const [room, setRoom] = useState<string | null>(null);

  useEffect(() => {
    const join = async () => {
      try {
        const res = await joinMeeting().unwrap();
        console.log("JOIN RESPONSE:", res);

        setToken(res.token);
        setRoom(res.room);
      } catch (err) {
        console.error("JOIN ERROR:", err);
      }
    };

    join();
  }, [joinMeeting]);

  if (!token || !room) {
    return <div>Loading meeting...</div>;
  }

  return (
    <div className="w-full max-w-full relative" dir="ltr">
      <JitsiMeeting
        domain={domainName}
        roomName={room} // 👈 من API
        jwt={token} // 👈 من API
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "450px";
        }}
      />
    </div>
  );
}

export default MeetingViewer;
