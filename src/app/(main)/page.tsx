import About from "@/components/Home/About";
import Books from "@/components/Home/Books";
import Categories from "@/components/Home/Categories";
import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import HowItWork from "@/components/Home/HowItWork";
import ExamPaper3D from "@/features/student/components/ExamPaper3D";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Categories />
      <Books />
      <Courses />
      <HowItWork/>
    </>
  );
}
