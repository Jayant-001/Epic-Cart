import { NextResponse } from "next/server";

export async function middleware(request) {
    const path = request.nextUrl.pathname;
    const authPaths = path === "/auth/login" || path === "/auth/signup";
    const privatePaths = path.startsWith("/account");
    const isPublicPath = path === "/auth/login" || path === "/auth/signup";
    const token = request.cookies.get("token")?.value || "";

    if (authPaths && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    if (privatePaths && !token) {
        return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
    }
}

export const config = {
    matcher: ["/", "/account/:path*", "/auth/login", "/auth/signup"],
};
