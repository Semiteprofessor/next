import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.url));
  }
//   return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: "/profile",
};
