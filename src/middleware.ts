import { withAuth } from "next-auth/middleware";

export default withAuth({
//   pages: {
//     signIn: "/login",
//     error: "/auth/error",
//   },
  callbacks: {
    authorized: ({ req, token }) => {
      console.log(req);

      if (req.nextUrl.pathname.startsWith("/student")) {
        if (token?.Role !== 8) {
          return false;
        }
      }

      return !!token;
    },
  },
});

export const config = {
  matcher: ["/student/:path*"],
};
