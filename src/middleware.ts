import { timeout } from "@/util/timeout";
import { NextResponse, type NextMiddleware } from "next/server";

export const middleware: NextMiddleware = async (request) => {
    const start = performance.now();
    await timeout(1);
    const end = performance.now();
    console.log(
        `[middleware] ${request.nextUrl.pathname} took ${end - start}ms`
    );

    return NextResponse.next({ request });
};

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};
