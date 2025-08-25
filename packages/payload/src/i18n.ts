import { Config } from "payload";
import { SupportedLanguages } from "@payloadcms/translations";

import { en } from "@payloadcms/translations/languages/en";
import { pt } from "@payloadcms/translations/languages/pt";

export const AVAILABLE_LANGUAGES = {
  pt,
  en,
};

export type I18nOptions = {
  fallbackLanguage: keyof typeof AVAILABLE_LANGUAGES;
  supportedLanguages: Array<keyof typeof AVAILABLE_LANGUAGES>;
};

export const i18n = ({
  fallbackLanguage,
  supportedLanguages,
}: I18nOptions): Config["i18n"] => {
  return {
    fallbackLanguage: fallbackLanguage,
    supportedLanguages: Object.values(supportedLanguages).reduce((acc, key) => {
      const keyName = key as keyof typeof AVAILABLE_LANGUAGES;
      acc[keyName] = AVAILABLE_LANGUAGES[keyName];
      return acc;
    }, {} as SupportedLanguages),
  };
};

export default i18n;
