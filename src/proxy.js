import { NextResponse } from "next/server";
import { ur } from "zod/locales";

/** * @param {import('next/server').NextRequest} request
 */
export function proxy(request) {
  const token = request.cookies.get("token");
  const url = request.nextUrl.clone();

  if (
    token &&
    (url.pathname === "/" ||
      url.pathname === "/login" ||
      url.pathname === "/register")
  ) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  if (!token && url.pathname.startsWith("/dashboard")) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*"],
};
