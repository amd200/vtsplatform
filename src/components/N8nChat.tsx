"use client";

import { useEffect } from "react";
import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";

export default function N8nChat() {
  useEffect(() => {
    createChat({
      webhookUrl: "https://n8n.srv1078880.hstgr.cloud/webhook/c3e92960-f5f8-4274-a44c-d4657dc5e6d1/chat",
      allowFileUploads: true,
      allowedFilesMimeTypes: "image/*,application/pdf",
      initialMessages: ["أهلاً بيك 🤍 فريق الدعم الفني معاك خطوة بخطوة. أي مشكلة تقابلك، أي حاجة مش واضحة، ابعتها لنا واحنا هنحلّها مع بعض بهدوء ومن غير تعقيد 💪🛠️ خليك مطمّن… إحنا هنا عشانك 🌟"],
      defaultLanguage: "en",
      mode: "window",
      i18n: {
        en: {
          title: "اسأل الدعم الفني",
          subtitle: "",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "اسأل سؤال",
          closeButtonTooltip: "إغلاق المحادثة",
        },
      },
    });

    const style = document.createElement("style");
    style.innerHTML = `
     :root {
  --chat--color--primary: #ffff;
  --chat--color--primary-shade-50: #fff;
  --chat--color--primary--shade-100: #fff;
  --chat--color--secondary: #0675b9;
  --chat--color-secondary-shade-50: #0675b9;
  --chat--header-height: 60px;
  --chat--header--padding: 0 12px;
  --chat--header--background: #fff;
  --chat--textarea--height: 50px;
  --chat--message--padding: 8px 15px;
  --chat--message--border-radius: 5px;
  --chat--message--bot--background: #0675b9;
  --chat--message--bot--color: #fff;
  --chat--message--user--background: #f5f5f5;
  --chat--message--user--color: #000;
}

.chat-layout {
  font-family: "cairo";
}
.chat-layout .chat-header {
  display: flex;
  flex-direction: row-reverse;
  justify-content: end;
}
.chat-layout .chat-header .chat-heading h1 {
  font-size: 18px;
  color: #000;
  font-weight: 600;
}
.chat-layout .chat-body {
  background-color: #fff;
}
.chat-layout .chat-footer {
  background-color: #fff;
  border: none;
}
  .chat-layout {
  direction:LTR;
  }
.chat-layout .chat-footer .chat-input .chat-inputs {
  border: none;
  border: 1px solid #eee;
  width: 95%;
  margin: auto;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
}
.chat-layout .chat-footer .chat-input .chat-inputs textarea {
  box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.1);
}
.chat-layout .chat-footer .chat-powered-by span {
  font-weight: bold;
}

.chat-window-wrapper .chat-window-toggle {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);
}
.chat-window-wrapper .chat-window-toggle svg {
  fill: #000;
  color: #000;
}

.chat-message-typing-body .chat-message-typing-circle {
  background-color: rgba(255, 255, 255, 0.6509803922);
}/*# sourceMappingURL=style.css.map */
    `;
    const interval = setInterval(() => {
      const header = document.querySelector(".chat-header") as HTMLElement | null;
      const heading = document.querySelector(".chat-heading") as HTMLElement | null;
      const toggle = document.querySelector(".chat-window-toggle") as HTMLElement | null;
      const poweredBy = document.querySelector(".chat-powered-by") as HTMLElement | null;

      if (!header || !heading || !toggle) return;

      // Powered by
      if (poweredBy) {
        poweredBy.innerHTML = `Powered by <span>Beso & Ahmed</span>`;
      }

      // Avatar
      const avatarExists = heading.querySelector("img");
      if (!avatarExists) {
        const avatar = document.createElement("img");
        avatar.src = "https://www.svgrepo.com/show/339963/chat-bot.svg";
        avatar.alt = "Bot avatar";
        avatar.style.width = "40px";
        avatar.style.height = "40px";
        avatar.style.marginInlineStart = "10px";
        heading.style.display = "flex";
        heading.style.alignItems = "center";
        heading.appendChild(avatar);
      }

      // Close button
      if (!header.querySelector(".chat-close-btn")) {
        const closeBtn = document.createElement("button");
        closeBtn.className = "chat-close-btn";
        closeBtn.innerHTML = "✕";
        closeBtn.style.border = "none";
        closeBtn.style.background = "transparent";
        closeBtn.style.fontSize = "22px";
        closeBtn.style.color = "black";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.marginInlineEnd = "auto";

        closeBtn.onclick = () => {
          toggle.click();
        };

        header.style.display = "flex";
        header.style.alignItems = "center";
        header.appendChild(closeBtn);
      }

      // خلصنا → أوقف الفحص
      clearInterval(interval);
    }, 300);

    document.head.appendChild(style);
    return () => clearInterval(interval);
  }, []);

  return null;
}
