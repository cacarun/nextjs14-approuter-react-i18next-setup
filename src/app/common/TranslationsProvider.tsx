"use client";

import initTranslations from "@/i18n";
import { tranInstanceManager } from '@/hook'
import { Resource, createInstance } from "i18next";
import { PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";

// 提供客户端组件的上下文
/**
 * This provider is a Client Component that creates an i18next instance on the client and uses the I18nextProvider to provide the instance to all descendent Client Components.
 * We only need to use the provider once per page. Let’s add it to our home page
 */
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
