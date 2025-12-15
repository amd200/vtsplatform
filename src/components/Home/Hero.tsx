import Image from "next/image";
import { SparklesText } from "@/components/ui/sparkles-text";
function Hero() {
  return (
    <section className="bg-primary h-[75vh] py-8">
      <div className="container bg-white h-full rounded grid lg:grid-cols-2 gap-x-12 items-center">
        <div className="text-center font-ar-medium max-w-lg text-primary">
          {/* <SparklesText colors={{ first: "#3192ff", second: "#03438b" }} className="text-2xl mb-3">
          </SparklesText> */}
          <h1 className="text-2xl mb-3 font-bold relative w-fit mx-auto z-50">
            عائلة دكتور إسلام يحيى
            <span className="w-[82px] h-[36px] bg-[#fadbd7] -z-20 absolute bottom-[-15px] left-[-20px] rounded"></span>
          </h1>
          <p className="max-w-80 -300 mx-auto text-xl relative z-50">
            اهلًا دفعة 2026 في منصة د/ إسلام يحيى - لدراسة كل ما يتعلق بمنهج الفيزيــــاء للثانوية العامة والأزهرية .<span className="w-[82px] h-[36px] bg-[#f3f3e0] -z-20 absolute bottom-[-20px] left-[0px] rounded"></span>
            <span className="w-[36px] h-[82px] bg-[#dfe8f3] -z-20 absolute top-0 right-0 rounded"></span>
          </p>
        </div>
        <div className="w-full h-auto">
          <div className="w-full h-[300px] relative">
            <Image src="https://www.alpha-dz.com/static/media/heroSectionImage.e8c5d677b315b26a4494.webp" alt="image" fill className="rounded object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
