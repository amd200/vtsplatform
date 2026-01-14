import About from "@/components/Home/About";
import Books from "@/components/Home/Books";
import Categories from "@/components/Home/Categories";
import Courses from "@/components/Home/Courses";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import HowItWork from "@/components/Home/HowItWork";
import Instructors from "@/components/Home/Instructors";
import Statics from "@/components/Home/Statics";
import UploadVideo from "@/components/UploadVideo";
import ExamPaper3D from "@/features/student/components/ExamPaper3D";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features/> */}
      <About />
      {/* <UploadVideo videoId="8fc24e4e-572c-4d3b-93ec-4d029ecd1334" /> */}
      {/* <Instructors/> */}
      {/* <Categories /> */}
      {/* <Books /> */}
      <Courses />
      <HowItWork />
      <Statics />
    </>
  );
}
