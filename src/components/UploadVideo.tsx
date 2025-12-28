"use client";

import * as tus from "tus-js-client";

export default function UploadVideo({ videoId }: { videoId: string }) {
  const handleUpload = async (file: File) => {
    const res = await fetch("/api/bunny/tus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ videoId }),
    });
    console.log(handleUpload)

    const { signature, expire, libraryId } = await res.json();

    const upload = new tus.Upload(file, {
      endpoint: "https://video.bunnycdn.com/tusupload",
      headers: {
        AuthorizationSignature: signature,
        AuthorizationExpire: expire,
        VideoId: videoId,
        LibraryId: libraryId,
      },
      metadata: {
        filetype: file.type,
        title: file.name,
      },
      retryDelays: [0, 3000, 5000, 10000],
      onProgress(bytesUploaded, bytesTotal) {
        console.log(
          Math.floor((bytesUploaded / bytesTotal) * 100) + "%"
        );
      },
      onSuccess() {
        alert("Upload finished 🎉");
      },
    });
console.log(upload)
    upload.findPreviousUploads().then((prev) => {
      if (prev.length) upload.resumeFromPreviousUpload(prev[0]);
      upload.start();
    });
  };

  return (
    <input
      type="file"
      accept="video/*"
      onChange={(e) =>
        e.target.files && handleUpload(e.target.files[0])
      }
    />
  );
}
