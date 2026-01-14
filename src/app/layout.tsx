import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.scss";
import "./globals.css";
import "@/styles/chatbot.scss";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";
import DirectionProviderWrapper from "@/providers/DirectionProviderWrapper";
import SessionWrapper from "@/providers/SessionWrapper";
import ProviderWrapper from "@/providers/ProviderWrapper";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import Salesiq from "./salesiq";
import { Toaster } from "@/components/ui/sonner";
import ParallaxWrapper from "@/providers/ParallaxWrapper";
import "@/18n/config";
import ShakeDetector from "@/components/ShakeDetector";
import { GeneralSettingsResponse } from "@/types/common.types";
import { fetcher } from "@/lib/api/fetcher";
import N8nChat from "@/components/N8nChat";
import Head from "next/head";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});
const arLight = localFont({
  src: "../assets/fonts/ARABIC-LIGHT.ttf",
  display: "swap",
  variable: "--font-ar-light",
});

const arMedium = localFont({
  src: "../assets/fonts/ARABIC-MEDIUM.ttf",
  display: "swap",
  variable: "--font-ar-medium",
});

const arBold = localFont({
  src: "../assets/fonts/ARABIC-BOLD.ttf",
  display: "swap",
  variable: "--font-ar-bold",
});

export const metadata: Metadata = {
  title: {
    default: "VTS Platform – منصتك التعليمية المتكاملة",
    template: "%s | VTS Platform",
  },

  description: "VTS Platform هي منصة تعليمية ذكية توفر محتوى دراسي، جلسات تفاعلية، اختبارات، وإحصائيات أداء مخصصة للطلاب لضمان تجربة تعليمية أفضل.",

  keywords: ["منصة تعليمية", "تعليم", "VTS Platform", "تعليم إلكتروني", "اختبارات", "كورسات", "تعلم عن بعد", "جلسات تعليمية"],

  authors: [{ name: "VTS Team" }],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "VTS Platform – منصتك التعليمية المتكاملة",
    description: "تعلّم بطريقة أسهل، نظم دراستك، راقب تقدمك، واستفد من محتوى تفاعلي يساعدك على النجاح.",
    type: "website",
    locale: "ar_EG",
    url: "https://vtsplatform.vercel.app",
    siteName: "VTS Platform",
    images: [
      {
        url: "/assets/images/48452b18-a693-4265-90f2-eb230e6847f9.webp",
        width: 1200,
        height: 630,
        alt: "VTS Platform Preview",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://vtsplatform.vercel.app",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await fetcher<GeneralSettingsResponse>(`/platform/settings/generalSettings`);
  const settings = data?.Data;
  return (
    <html lang="ar" dir="rtl" className={`${arLight.variable} ${cairo.variable} ${arMedium.variable} ${arBold.variable}`}>
      <body className={`antialiased font-ar-medium`}>
        <ToastContainer />
        <ShakeDetector />
        <ProviderWrapper>
          <ParallaxWrapper>
            <SessionWrapper>{children}</SessionWrapper>
          </ParallaxWrapper>
        </ProviderWrapper>
        {/* <Script src="/nutrient-viewer/nutrient-viewer.js" strategy="beforeInteractive" /> */}
        {/* <Salesiq widgetCode="siqd29074ac33ce4ef3a1a65c99b8ea93675cbad44e888f83b0e253b6db26b63d6d" domain="https://salesiq.zohopublic.com/widget" /> */}
        <Toaster className="!font-ar-medium" position="top-center" />
        {/* <Script
          type="module"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
        webhookUrl: 'https://n8n.srv1078880.hstgr.cloud/webhook/c3e92960-f5f8-4274-a44c-d4657dc5e6d1/chat'
      });
    `,
          }}
        /> */}
        {/* <Script id="n8n-chat-ui" type="module" strategy="afterInteractive">
          {`
            import n8nChatUiWidget  from "https://proxy.n8nchatui.com/api/embed/qTxO9A";

            n8nChatUiWidget.load()
          `}
        </Script> */}
        {/* <N8nChat /> */}
      </body>
    </html>
  );
}
