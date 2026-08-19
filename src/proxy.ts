import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase();

  if (host === "www.verticalmouseguide.com") {
    const canonical = request.nextUrl.clone();
    canonical.hostname = "verticalmouseguide.com";
    canonical.port = "";
    canonical.protocol = "https:";
    return NextResponse.redirect(canonical, 308);
  }

  const { pathname } = request.nextUrl;
  const consolidatedRoutes: Record<string, string> = {
    "/best-vertical-mouse-graphic-designers": "/best-vertical-mouse-for-graphic-designers",
    "/best-vertical-mouse-left-handed-users": "/best-vertical-mouse-left-handed",
    "/how-long-adjust-vertical-mouse": "/how-long-to-adjust-vertical-mouse",
    "/how-long-adjust-vertical-mouse-2026": "/how-long-to-adjust-vertical-mouse",
    "/how-to-set-up-vertical-mouse": "/how-to-set-up-vertical-mouse-ergonomics-guide",
    "/how-to-set-up-vertical-mouse-correctly": "/how-to-set-up-vertical-mouse-ergonomics-guide",
    "/kensington-pro-fit-ergo-review-2026": "/kensington-pro-fit-ergo-review",
    "/privacy": "/privacy-policy",
  };
  const consolidatedTarget = consolidatedRoutes[pathname];
  if (consolidatedTarget) {
    const canonical = request.nextUrl.clone();
    canonical.pathname = consolidatedTarget;
    return NextResponse.redirect(canonical, 308);
  }

  if (pathname.startsWith("/guides/") || pathname.startsWith("/articles/")) {
    const canonical = request.nextUrl.clone();
    canonical.pathname = pathname.replace(/^\/(?:guides|articles)\//, "/");
    return NextResponse.redirect(canonical, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
