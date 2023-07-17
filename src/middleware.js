import { NextResponse } from "next/server";

export async function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === "/auth/login" || path === "/auth/signup";
    const token = request.cookies.get("token")?.value || "";

    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }
    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/auth/login', request.nextUrl));
    }
}

export const config = {
    matcher: ["/", "/account", "/auth/login", "/auth/signup"],
};