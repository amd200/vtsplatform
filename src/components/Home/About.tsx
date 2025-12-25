import { capbg, dots, lamp, lettersEng, paperLine, rock, teacher } from "@/assets/images";
import { Check } from "lucide-react";
import Image from "next/image";
import AboutStats from "./About/AboutStats";
import { GeneralSettingsResponse } from "@/types/common.types";
import { fetcher } from "@/lib/api/fetcher";
import { stripHtml } from "@/utils/stripHtml";

async function About() {
  const data = await fetcher<GeneralSettingsResponse>(`/platform/settings/generalSettings`);
  const settings = data?.Data;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
  return (
    <section className="pt-20">
      <div className="container grid lg:grid-cols-2 items-center">
        <div className="space-y-5 relative  flex md:flex-row flex-col-reverse justify-center lg:items-baseline items-end   ">
          <Image src={rock} alt="rock" width={81} height={106} className="absolute lg:top-[80px] top-0  right-0 lg:right-[-10px]" />
          <Image src={paperLine} alt="rock" className="absolute -bottom-12 max-lg:hidden left-[20%] md:left-[45%]  z-20 h-[91px] w-[264px] -translate-x-1/2" />
          <Image src={dots} alt="dots" className="absolute bottom-0 md:right-0 left-0 " />
          <div className="bg-secondary w-[268px] aspect-[268/388]   relative rounded-full z-10  overflow-hidden  border-[10px] border-white">
            <div className="four">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
          </div>
          <div
            className="
    bg-secondary rounded-full relative overflow-hidden
    w-full mx-auto max-w-[371px] aspect-[371/538]
    md:left-20 md:top-0 top-30
  "
          >
            <Image fill src={BASE_URL + "/" + settings?.AboutImage} alt="Teacher" sizes="(max-width: 768px) 90vw, 371px" className="  object-cover object-bottom"  />
          </div>

          <AboutStats />
        </div>
        <div className="relative">
          {/* <div className="size-[375px] -z-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2   rounded-full bg-[radial-gradient(circle,_#f57005_61%,_#ffffff_61%)] blur-[665.21px]  "></div> */}
          <div className="size-[375px] max-lg:hidden -z-10 absolute right-0 top-1/2 transform -translate-y-1/2   rounded-full bg-[radial-gradient(circle,_#f57005_61%,_#ffffff_61%)] blur-[665.21px] "></div>
          {/* <Image src={capbg} alt="lettersEng" className="absolute lg:size-[150px] size-[100px] top-2/3 lg:left-5 left-12 -translate-x-1/2" /> */}
          <div className="bg-[#2B7BAC0D] inline-block rounded-full px-3 py-1 text-lg text-primary mb-2">اختيارك الاول </div>
          <h2 className="font-bold lg:text-4xl text-3xl leading-normal mb-3 ">منصة Vedu</h2>
          <p className="lg:text-lg text-lg  text-grey mb-5">{stripHtml(settings?.AboutText)}</p>
          <div className="grid lg:grid-cols-2 gap-y-7">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-full bg-secondary flex items-center justify-center text-white text-xs font-bold">
                <Check />
              </div>
              <span className="text-lg font-medium">جوائز على التسليمات</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="size-9 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                <Check />
              </div>
              <span className="text-lg font-medium">جوائز على الدرجة النهائية</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="size-9 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                <Check />
              </div>
              <span className="text-lg font-medium">متابعة و تواصل مستمر</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="size-9 rounded-full bg-secondary flex items-center justify-center text-white text-xs font-bold">
                <Check />
              </div>
              <span className="text-lg font-medium">اختبارات على كل درس</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
