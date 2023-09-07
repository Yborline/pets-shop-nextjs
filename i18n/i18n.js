import en from "../trans/en.json";
import ua from "../trans/ua.json";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
};

if (typeof window !== "undefined") {
  const item = localStorage.getItem("key");
}

if (typeof window !== "undefined") {
  i18n.use(initReactI18next).init({
    resources,
    lng: JSON.parse(localStorage.getItem("language")),
    fallbackLng: "ua",
  });
}
export default i18n;
