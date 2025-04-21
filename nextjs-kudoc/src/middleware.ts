import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	console.log(pathname);
	// Skip if it's a direct request to a static file
	if (pathname.includes("/static-site/") || pathname.endsWith(".html")) {
		console.log("skipping");
		return NextResponse.next();
	}

	// For all other routes, let the rewrite handle it
	return NextResponse.next();
}

export const config = {
	matcher: [
		// Match all routes except static files and api routes
		"/((?!api|_next/static|favicon.ico).*)",
	],
};
