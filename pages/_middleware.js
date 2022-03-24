import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req, NextRequest) {
    // Token will exist if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    // URL request
    const { pathname } = req.nextUrl

    // Allow the requests if the following is true...
    // 1. It's a request for next-auth session & provider fetching
    // 2. The token exists

    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    }

    // Redirect them to login page if they don't have token NAD are requesting a protected route
    if (!token && pathname !== '/login') {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }
}