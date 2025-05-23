import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;
  
  // Path checks
  const isAuthPage = url.pathname.startsWith("/sign-in") || 
                     url.pathname.startsWith("/sign-up") || 
                     url.pathname.startsWith("/verify") ||
                     url.pathname === "/";
                     
  const isDashboardPage = url.pathname.startsWith("/dashboard");
  
  // Redirect authenticated users away from auth pages
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  
  // Redirect unauthenticated users away from dashboard
  if (!token && isDashboardPage) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  
  // For all other cases, continue normally
  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in", "/sign-up", "/", "/dashboard/:path*", "/verify/:path*"],
};