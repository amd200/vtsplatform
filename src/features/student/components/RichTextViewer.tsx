import React, { useEffect } from "react";

interface Props {
  htmlContent: string;
}

function RichTextViewer({ htmlContent }: Props) {
  return (
    <div
      className="prose w-full [&_iframe]:w-full [&_iframe]:h-[500px]"
      dangerouslySetInnerHTML={{
        __html: htmlContent || "",
      }}
    />
  );
}

export default RichTextViewer;
