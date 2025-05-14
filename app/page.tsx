import BasicNavbar from "@/components/basic-navbar";
import FadeInImage from "@/components/fade-in-image";
import { AboutUsSection } from "@/sections/AboutUsSection";
import Features from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { HowWeWorkSection } from "@/sections/HowWeWorkSection";
import Introduction from "@/sections/Introduction";
import { PrincingSection } from "@/sections/PrincingSection";
import Projects from "@/sections/Projects";
import Stats from "@/sections/Stats";
import {Button} from "@heroui/button";
export default function Home() {
  return (
  <div className="flex w-full flex-col bg-[#000]">
    <main>
      <section className="relative min-h-[75vh] flex items-center justify-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-20 px-5 flex flex-col items-center justify-center gap-4 sm:gap-6">
          <div className="text-center text-4xl font-bold leading-[1.2] tracking-tighter md:text-5xl">
            <div className="text-white">
              Seja bem vindo à <br /> <span className="text-orange-400">GESOLAR Invest</span>
            </div>
          </div>

          <p className="text-center font-normal leading-7 text-white/75 sm:w-[466px] lg:text-lg">
            Invista em usinas de energia solar de forma fácil, simples e descomplicada, com alta rentabilidade e baixo risco.
          </p>
        </div>
        <div className="h-full bg-black/75 absolute top-0 left-0 right-0 bottom-0 z-10"/>
        <video className="h-[75vh] w-full object-cover" src={"../mp4/hero-video.mp4"} autoPlay muted loop playsInline/>
      </section>

      <Introduction />
      <Features />
      <Stats />
      <HowWeWorkSection />
      <Projects />
      <PrincingSection />

      <AboutUsSection />
    </main>

    <Footer />
  </div>
  );
}
