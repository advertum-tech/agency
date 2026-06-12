import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already on a localized path — do nothing
  if (pathname.startsWith("/et")) return NextResponse.next();
  if (pathname.startsWith("/ru")) return NextResponse.next();

  // Legal pages exist only in English — no localized counterpart
  if (pathname === "/terms" || pathname === "/privacy") return NextResponse.next();

  // Автредиректы отключены: по умолчанию английский, язык меняется только вручную
  // if (cookieLang === "et") {
  //   return NextResponse.redirect(
  //     new URL(`/et${pathname === "/" ? "" : pathname}`, request.url),
  //     302
  //   );
  // }
  // RU отключён — редиректы оставлены закомментированными
  // if (cookieLang === "ru") {
  //   return NextResponse.redirect(
  //     new URL(`/ru${pathname === "/" ? "" : pathname}`, request.url),
  //     302
  //   );
  // }

  // Гео-редирект отключён
  // const country = request.headers.get("x-vercel-ip-country") ?? "";
  // if (country === "EE") {
  //   const response = NextResponse.redirect(
  //     new URL(`/et${pathname === "/" ? "" : pathname}`, request.url),
  //     302
  //   );
  //   response.cookies.set("lang", "et", {
  //     path: "/",
  //     maxAge: 60 * 60 * 24 * 365,
  //     sameSite: "lax",
  //   });
  //   return response;
  // }
  // if (country === "RU") {
  //   const response = NextResponse.redirect(
  //     new URL(`/ru${pathname === "/" ? "" : pathname}`, request.url),
  //     302
  //   );
  //   response.cookies.set("lang", "ru", {
  //     path: "/",
  //     maxAge: 60 * 60 * 24 * 365,
  //     sameSite: "lax",
  //   });
  //   return response;
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|images|.*\\..*).*)"],
};
