import { Resource } from "i18next";

export function getNamespaces() {
  return ["common", "common2"];
}

export function getOptions(
  locale: string,
  namespaces?: string[],
  resources?: Resource,
) {
  const ns = namespaces !== undefined ? namespaces : getNamespaces();
  return {
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: ns[0],
    fallbackNS: ns[0],
    ns,
    preload: resources ? [] : i18nConfig.locales,
  };
}

// 这个属性必须要用默认导出
const i18nConfig = {
  defaultLocale: "zh",
  locales: ["zh", "en", "fr"],
};
export default i18nConfig;
