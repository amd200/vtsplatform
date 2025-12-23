"use client";
import { wave, wave2 } from "@/assets/images";
import Image from "next/image";
import CountUp from "react-countup";

function Statics() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="w-full min-h-[220px] grid lg:grid-cols-4 md:grid-cols-2 relative py-8 lg:px-0 px-8 bg-primary rounded-lg z-40 gap-y-6">
          <Image src={wave2} className="lg:block hidden absolute top-1/2 -translate-y-1/2 -z-10" alt="wave" />
          <div className="flex flex-col items-center justify-center text-white pb-6 lg:pb-0 border-b-[3px] lg:border-b-0 lg:border-l-2 border-dashed border-[#FFFFFF66] last:border-0">
            <CountUp enableScrollSpy scrollSpyOnce suffix="+" end={6.3} decimals={2} decimal="." className="text-[54px] font-bold" />
            <span>دورات تدريبية</span>
          </div>
          <div className="flex flex-col items-center justify-center text-white pb-6 lg:pb-0 border-b-[3px] lg:border-b-0 lg:border-l-2 border-dashed border-[#FFFFFF66] last:border-0">
            {" "}
            <CountUp enableScrollSpy scrollSpyOnce suffix="+" end={6.3} decimals={2} decimal="." className="text-[54px] font-bold" />
            <span>دورات تدريبية</span>
          </div>
          <div className="flex flex-col items-center justify-center text-white pb-6 lg:pb-0 border-b-[3px] lg:border-b-0 lg:border-l-2 border-dashed border-[#FFFFFF66] last:border-0">
            <CountUp enableScrollSpy scrollSpyOnce suffix="+" end={6.3} decimals={2} decimal="." className="text-[54px] font-bold" />
            <span>دورات تدريبية</span>
          </div>
          <div className="flex flex-col items-center justify-center text-white lg:pb-0 pb-6">
            {" "}
            <CountUp enableScrollSpy scrollSpyOnce suffix="+" end={6.3} decimals={2} decimal="." className="text-[54px] font-bold" />
            <span>دورات تدريبية</span>
          </div>
          <div className="triangle-overlay"></div>
        </div>
      </div>
    </section>
  );
}

export default Statics;
