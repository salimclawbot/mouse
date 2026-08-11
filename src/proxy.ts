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

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
