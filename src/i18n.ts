import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ru from "./locales/ru/translation.json";
import uz from "./locales/uz/translation.json";

i18n
  .use(LanguageDetector) // автоопределение языка
  .use(initReactI18next) // подключение к react
  .init({
    resources: {
      ru: { translation: ru },
      uz: { translation: uz },
    },
    fallbackLng: "ru", // язык по умолчанию
    interpolation: {
      escapeValue: false, // React сам экранирует
    },
  });

export default i18n;
