import Image from "next/image";
import { SparklesText } from "@/components/ui/sparkles-text";
function Hero() {
  return (
    <section className="bg-primary h-[75vh] py-8">
      <div className="container bg-white h-full rounded grid lg:grid-cols-2 gap-x-12 items-center">
        <div className="text-center font-ar-medium max-w-lg text-primary">
            
          {/* <SparklesText colors={{ first: "#3192ff", second: "#03438b" }} className="text-2xl mb-3">
          </SparklesText> */}
          <h1 className="text-2xl mb-3 font-bold">عائلة دكتور إسلام يحيى</h1>
          <p className="max-w-80 -300 mx-auto text-xl">اهلًا دفعة 2026 في منصة د/ إسلام يحيى - لدراسة كل ما يتعلق بمنهج الفيزيــــاء للثانوية العامة والأزهرية .</p>
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
