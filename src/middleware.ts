import { i18nRouter } from "next-i18n-router";
import { NextRequest } from "next/server";
import i18nConfig from "./app/i18n/i18nConfig";

/**
 * 我们在访问域名时，会根据设置的语言转发到对应语言路由下，例如：
 * 浏览器语言是zh，我们当前设置是zh，请求localhost:3000 可以直接访问，域名此时为localhost:3000, 等同于localhost:3000/zh
 * 浏览器语言是zh，我们当前设置是en，请求localhost:3000，域名会转发到localhost:3000/en
 */
export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
