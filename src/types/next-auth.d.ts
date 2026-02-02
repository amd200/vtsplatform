// // src/types/nextauth.d.ts
// import { User as AppUser } from "./common.types";

// declare module "next-auth" {
//   interface Session {
//     user: AppUser;
//   }

//   interface User {
//     id: string;
//     name: string | null;
//   }
// }

// declare module "next-auth/jwt" {
//   export interface JWT {
//     StudentToken: string;
//     UserId: string;
//     PersonId: string;
//     Role: number;
//     StudentName: string;
//     StudentImage: string;
//     // [key: string]: unknown; // مهم جدا لتوافق الـ callback مع NextAuth
//   }
// }



import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id: string;
    StudentName: string;
    StudentToken: string;
    StudentImage: string;
    Role: number;
    name: string; // مهم جدًا علشان NextAuth
  }

  interface Session {
    user: {
      UserId: string;
      StudentName: string;
      StudentImage: string;
      StudentToken: string;
      Role: number;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    UserId: string;
    StudentName: string;
    StudentImage: string;
    StudentToken: string;
    Role: number;
  }
}
