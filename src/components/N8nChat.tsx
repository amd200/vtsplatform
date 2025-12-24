// components/N8nChat.tsx
"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    // امنع التكرار
    if (document.getElementById("n8n-chat-ui-script")) return;

    const script = document.createElement("script");
    script.id = "n8n-chat-ui-script";
    script.type = "module";
    script.src = "https://proxy.n8nchatui.com/api/embed/l0k7xE";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return null;
}
