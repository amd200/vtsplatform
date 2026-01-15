import type { Metadata } from "next";

import About from "@/components/Home/About";
import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import HowItWork from "@/components/Home/HowItWork";
import Statics from "@/components/Home/Statics";

import { fetcher } from "@/lib/api/fetcher";
import { StudentCoursesResponse } from "@/features/student/types/student.types";
import Categories from "@/components/Home/Categories";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

// export async function generateMetadata(): Promise<Metadata> {
//   try {
//     const data = await fetcher<StudentCoursesResponse>("/platform/global/AllCourses");

//     const courses = data?.Data || [];

//     const topCoursesTitles = courses
//       .slice(0, 4)
//       .map((c) => c.Title)
//       .join("، ");

//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

//     return {
//       // هيطبق template من layout.tsx
//       title: "الصفحة الرئيسية",

//       description: courses.length > 0 ? `VTS Platform توفر مقررات تعليمية مميزة مثل: ${topCoursesTitles}` : "VTS Platform هي منصة تعليمية ذكية توفر محتوى دراسي تفاعلي",

//       keywords: ["VTS Platform", "منصة تعليمية", "كورسات أونلاين", "تعليم إلكتروني", ...courses.map((c) => c.CategoryName)],

//       openGraph: {
//         title: "VTS Platform – منصتك التعليمية المتكاملة",
//         description: "ابدأ رحلتك التعليمية مع أفضل المقررات والمدربين على VTS Platform",
//         images: courses[5]?.ImageLink
//           ? [
//               {
//                 url: `${baseUrl}${courses[5].ImageLink}`,
//                 width: 1200,
//                 height: 630,
//                 alt: courses[0].Title,
//               },
//             ]
//           : undefined,
//       },
//     };
//   } catch (error) {
//     return {
//       title: "الصفحة الرئيسية",
//       description: "VTS Platform هي منصة تعليمية ذكية توفر محتوى دراسي تفاعلي",
//     };
//   }
// }

export default async function Home() {
  const session = await getServerSession(authOptions);
  const isLoggedIn = !!session;

  return (
    <>
      <Hero />
      <About />
      {isLoggedIn && <Categories />}
      <Courses />
      <HowItWork />
      <Statics />
    </>
  );
}
