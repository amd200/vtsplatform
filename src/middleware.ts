// middleware.js
export { default } from "next-auth/middleware";

// Optional: Configure specific routes to protect or exclude
export const config = {
  matcher: ["/student/:path*", "/admin/:path*"], // Protect specific paths
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // Protect all paths except static assets
};
