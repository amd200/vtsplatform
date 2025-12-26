import Image from "next/image";
import { SparklesText } from "@/components/ui/sparkles-text";
import { logo } from "@/assets/images";
import { useGetGeneralSettingsQuery } from "@/services/settings";
import { fetcher } from "@/lib/api/fetcher";
import { StudentCoursesResponse } from "@/features/student/types/student.types";
import { GeneralSettingsResponse } from "@/types/common.types";
async function Hero() {
  const data = await fetcher<GeneralSettingsResponse>(`/platform/settings/generalSettings`);
  const settings = data?.Data;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
  return (
    <section className="bg-primary h-[75vh] py-8">
      <div className="container bg-white h-full rounded grid lg:grid-cols-2 gap-x-12 items-center">
        <div className="text-center font-ar-medium max-w-lg text-primary">
          {/* <SparklesText colors={{ first: "#3192ff", second: "#03438b" }} className="text-2xl mb-3">
          </SparklesText> */}
          <h1 className="text-2xl mb-3 font-bold relative w-fit mx-auto z-40">
            {settings?.WelcomeMessageHomePage}
            <span className="w-[82px] h-[36px] bg-[#fadbd7] -z-20 absolute bottom-[-15px] left-[-20px] rounded"></span>
          </h1>
          <p className="max-w-80 -300 mx-auto text-xl relative z-40">
            {settings?.PlatformMessageHomePage}
            <span className="w-[82px] h-[36px] bg-[#f3f3e0] -z-20 absolute bottom-[-20px] left-[0px] rounded"></span>
            <span className="w-[36px] h-[82px] bg-[#dfe8f3] -z-20 absolute top-0 right-0 rounded"></span>
          </p>
        </div>
        <div className="w-full h-auto">
          <div className="w-[400px] mx-auto h-[380px] md:h-[220px]  relative bg-white">
            {/* <Image src={BASE_URL + settings?.AboutImage} alt="image" fill sizes="(max-width: 768px) 100vw, 600px" className="rounded object-contain" priority /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
