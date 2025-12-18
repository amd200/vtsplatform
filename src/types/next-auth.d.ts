import type { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      UserId: string;
      Role: number;
      StudentToken: string;
      StudentName: string;
      StudentImage: string;
    };
  }

  interface User extends DefaultUser {
    Role?: number;
    StudentToken?: string;
    StudentName?: string;
    StudentImage?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    UserId: string;
    Role: number;
    StudentToken: string;
    StudentName: string;
    StudentImage: string;
  }
}
