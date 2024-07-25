import { useTranslation } from "react-i18next";
import { ITran } from "./i18n/type";
import { i18n } from "i18next";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "./i18n/i18nConfig";

// 其实客户端可以直接调用useTranslation()获取t，但没有类型提示，所以我们封装了一层
export function useClientTranslation() {
    const { t: tt, i18n } = useTranslation();
    const t: ITran = (key, namespace, occupied) => {
      return (tt as any)(key, { ns: namespace ?? "common", ...occupied });
    };
    return { t, i18n } as { t: ITran; i18n: i18n };
  }
  
  // 改变语言的hook
  export function useChangeLanguage() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
  
    const handleChange = (newLocale: string) => {
      // set cookie for next-i18n-router
      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "; expires=" + date.toUTCString();
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
  
      if (currentLocale === i18nConfig.defaultLocale) {
        router.push("/" + newLocale + currentPathname);
      } else {
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
        );
      }
  
      router.refresh();
    };
    return { currentLocale, handleChange };
  }
  // 在非组件中引用
  class TranInstanceManager {
    private i18nInstance!: i18n;
    get instance() {
      return this.i18nInstance;
    }
    set instance(value: i18n) {
      this.i18nInstance = value;
    }
  }
  export const tranInstanceManager = new TranInstanceManager();
  
  export function getTranslationWithoutReact() {
    const i18n = tranInstanceManager.instance;
    return i18n.t as unknown as ITran;
  }
  