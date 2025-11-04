import Image from "next/image";
import { SparklesText } from "@/components/ui/sparkles-text";
function Hero() {
  return (
    <section className="bg-primary h-[75vh] py-8">
      <div className="container bg-white h-full rounded grid lg:grid-cols-2 gap-x-12 items-center">
        <div className="text-center font-ar-medium max-w-lg text-primary">
          <SparklesText colors={{ first: "#3192ff", second: "#03438b" }} className="text-2xl mb-3">
            عائلة دكتور إسلام يحيى
          </SparklesText>
          {/* <h1 className="text-2xl"></h1> */}
          <p className="max-w-80 -300 mx-auto text-xl">اهلًا دفعة 2026 في منصة د/ إسلام يحيى - لدراسة كل ما يتعلق بمنهج الفيزيــــاء للثانوية العامة والأزهرية .</p>
        </div>
        <div className="w-full h-auto">
          <div className="w-full h-[300px] relative">
            <Image src="https://mrahmedmostafa.com/Files/AboutImage/48452b18-a693-4265-90f2-eb230e6847f9.jpg" alt="image" fill className="rounded object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
