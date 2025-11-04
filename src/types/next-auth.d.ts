// src/types/nextauth.d.ts
import { User as AppUser } from "./common.types";

declare module "next-auth" {
  interface Session {
    user: AppUser;
  }

  interface User {
    id?: string;
    StudentName?: string;
    StudentToken?: string;
    StudentImage?: string;
    Role?: number;
  }
}

declare module "next-auth/jwt" {
  export interface JWT {
    StudentToken: string;
    UserId: string;
    PersonId: string;
    Role: number;
    StudentName: string;
    StudentImage: string;
    // [key: string]: unknown; // مهم جدا لتوافق الـ callback مع NextAuth
  }
}
