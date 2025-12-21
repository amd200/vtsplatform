"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ar",
    supportedLngs: ["ar", "en"],
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    resources: {
      ar: {
        sidebar: require("./locales/ar/sidebar.json"),
        student: require("./locales/ar/student.json"),
        common: require("./locales/ar/common.json"),
      },
      en: {
        common: require("./locales/en/common.json"),
        student: require("./locales/en/student.json"),
        sidebar: require("./locales/en/sidebar.json"),
      },
    },
  });

export default i18n;
