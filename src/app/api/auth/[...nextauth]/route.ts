// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions, Account, Profile, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { BaseResponse } from "@/types/common.types";
import { SignInData, SignInResponse } from "@/features/auth/types/auth.types";

// async function refreshAccessToken(token: JWT) {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Auth/refreshToken`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token.accessToken}`,
//       },
//       body: JSON.stringify({ refreshToken: token.refreshToken }),
//     });

//     const raw = await res.text();
//     let data: BaseResponse<LoginData>;
//     try {
//       data = JSON.parse(raw) as BaseResponse<LoginData>;
//     } catch {
//       throw new Error(`Invalid JSON response: ${raw.slice(0, 100)}`);
//     }

//     if (!res.ok || !data.success || !data.data) {
//       throw data;
//     }

//     return {
//       ...token,
//       accessToken: data.data.accessToken,
//       refreshToken: data.data.refreshToken ?? token.refreshToken,
//       expiresAt: data.data.expiresAt,
//       user: data.data.user,
//       error: undefined,
//     };
//   } catch (err) {
//     console.error("RefreshAccessTokenError", err);
//     return { ...token, error: "RefreshAccessTokenError" };
//   }
// }

type Credentials = { UserName?: string; Password?: string; studentCode?: string };

async function loginRequest(endpoint: string, credentials: Credentials) {
  const res = await fetch(`${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer UhqBUAP3T6Irguej2ogSdg==" },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) {
    throw new Error("Login failed");
  }
  const data: SignInResponse = await res.json();
  console.log("aaaaaaaaaaaaaaaaaaaaa", data);

  if (res.ok && data) {
    return {
      id: data?.Data?.UserId,
      StudentName: data?.Data?.StudentName,
      StudentToken: data?.Data?.StudentToken,
      StudentImage: data?.Data?.StudentImage,
      Role: Number(data?.Data?.Role),
    };
  }
  return null;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        UserName: { label: "UserName" },
        Password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        return await loginRequest("https://eslam-yahia-physics/api/platform/Account/SignIn", credentials!);
      },
    }),
    // CredentialsProvider({
    //   id: "studentCode",
    //   name: "StudentCode",
    //   credentials: {
    //     studentCode: { label: "Student Code" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     return await loginRequest("/Auth/loginByStudentCode", credentials!);
    //   },
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    //   authorization: {
    //     params: { prompt: "consent", access_type: "offline", response_type: "code" },
    //   },
    // }),
  ],

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        token.StudentName = user.StudentName || "";
        token.StudentToken = user.StudentToken || "";
        token.StudentImage = user.StudentImage || "";
        token.Role = Number(user.Role);
      }
      // token.Role = Number(user?.Role);
      // token.StudentToken = user?.StudentToken || "";
      // if (trigger === "update" && session) {
      //   token.user = session.user;
      // }
      // token.accessToken = user.accessToken;
      // token.refreshToken = u.refreshToken;
      // token.expiresAt = u.expiresAt;
      // token.user = u.user;

      // if (token.expiresAt && Date.now() >= new Date(token.expiresAt).getTime()) {
      //   token = await refreshAccessToken(token);
      // }

      return token;
    },

    async session({ session, token }) {
      console.log("tokne", token);
      session.user = {
        UserId: token.UserId || "",
        StudentName: token.StudentName || "",
        StudentImage: token.StudentImage || "",
        StudentToken: token.StudentToken || "",
        Role: token.Role || 0,
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

  pages: { signIn: "/login" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
