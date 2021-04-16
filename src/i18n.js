import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ruTranslation from './locales/ru.json';
import enTranslation from './locales/en.json';

const resources = {
  ru: { translation: ruTranslation },
  en: { translation: enTranslation },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    load: 'languageOnly',
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',
    // react i18next special options (optional)
    // keySeparator: false,
    react: {
      useSuspense: true,
    },
  });

export default i18n;
