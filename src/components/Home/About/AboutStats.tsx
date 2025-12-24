"use client";

import CountUp from "react-countup";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { lamp } from "@/assets/images";

export default function AboutStats() {
  return (
    <Parallax
      className="bg-white flex flex-col justify-center items-center z-40 
            px-[60px] py-[15px] 
            right-[30px] lg:top-[30px] top-[90px] 
            rounded-lg shadow-[0_0_64.39px_0_rgba(0,0,0,0.07)] absolute p-4"
      style={{
        transition: "transform 0.5s cubic-bezier(0, 0, 0.25, 1)",
        willChange: "transform",
      }}
      speed={3}
    >
      <div className=" bg-primary p-2 rounded-xl border-2 border-white top-0 -translate-y-1/2 right-5 absolute">
        <Image src={lamp} alt="Profile picture" width={25} />
      </div>{" "}
      <CountUp enableScrollSpy scrollSpyOnce className="font-bold text-secondary text-3xl" suffix="+" end={1200} />
      <span className="text-xl font-bold">طلاب جدد</span>
    </Parallax>
  );
}
