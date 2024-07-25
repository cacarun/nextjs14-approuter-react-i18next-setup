"use client";

import initTranslations from "@/i18n";
import { tranInstanceManager } from '@/hook'
import { Resource, createInstance } from "i18next";
import { PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: PropsWithChildren<{
  locale: string;
  namespaces: string[];
  resources: Resource;
}>) {
  const i18n = createInstance();
  tranInstanceManager.instance = i18n;
  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
