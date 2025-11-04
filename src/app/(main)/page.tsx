import Categories from "@/components/Home/Categories";
import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Courses />
    </>
  );
}
