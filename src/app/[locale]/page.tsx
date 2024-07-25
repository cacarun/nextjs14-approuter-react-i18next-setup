import TranslationsProvider from "@/common/TranslationsProvider";
import Header from '@/components/Header';
import initTranslations from "@/i18n";
import { getNamespaces } from "@/i18n/i18nConfig";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // 服务器组件上下文，如果有其它服务器组件可以再次调用该方法
  const ns = getNamespaces();
  const { t, resources } = await initTranslations(locale, ns);
  return (
    <TranslationsProvider
          namespaces={ns}
          locale={locale}
          resources={resources}
        >
      <main className=' relative flex max-h-screen min-h-screen flex-row'>
        <div>{t('title')}</div>
        <Header />
      </main>
    </TranslationsProvider>
  );
}