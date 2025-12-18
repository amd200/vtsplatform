import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginRequest } from "@/lib/loginRequest";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        UserName: { label: "UserName" },
        Password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        return await loginRequest(`${process.env.NEXT_PUBLIC_API_URL}/platform/Account/SignIn`, credentials!);
      },
    }),
  ],

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.UserId = user.id;
        token.Role = Number(user.Role);
        token.StudentToken = user.StudentToken;
        token.StudentName = user.StudentName;
        token.StudentImage = user.StudentImage;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.UserId as string,
        UserId: token.UserId as string,
        Role: token.Role as number,
        StudentToken: token.StudentToken as string,
        StudentName: token.StudentName as string,
        StudentImage: token.StudentImage as string,
      };

      return session;
    },
    redirect({ url, baseUrl }) {
      try {
        const callbackUrl = url.split("?").pop();
        const searchParams = new URLSearchParams(callbackUrl).get("callbackUrl");
        if (searchParams) return searchParams;
      } catch {}
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },

  pages: {
    signIn: "/login",
  },
});
