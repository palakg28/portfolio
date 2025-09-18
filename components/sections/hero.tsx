// components/sections/hero.tsx
import Image from "next/image";
import palakImg from "@/public/palak.png"; 
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Hero() {
  return (
    <section id="home">
      <WavyBackground className="mx-auto max-w-6xl px-6 pb-28 pt-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT: text + CTAs */}
          <div className="text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              Palak Gupta
            </h1>

            <p className="mt-3 text-base md:text-lg text-white/90">
              Math–CS @ UC San Diego | Data · AI · Analytics Portfolio
            </p>

            <p className="mt-4 text-sm md:text-base text-white/80 max-w-xl">
              I design <span className="font-semibold">pipelines, predictive models,
              dashboards, and agentic AI systems</span> that turn complex data into
              clear business decisions — bridging analytics and strategy. ✨
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="min-w-36 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="#about" aria-label="Go to About section">About Me</Link>
              </Button>
              <Button asChild className="min-w-36 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="#experience" aria-label="See experience">Experience</Link>
              </Button>
              <Button asChild className="min-w-36 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="#projects" aria-label="See my projects">View Projects</Link>
              </Button>
            
              <Button asChild className="min-w-36 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="#skills" aria-label="See skills">Skills</Link>
              </Button>
              <Button asChild className="min-w-36 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="#resume" aria-label="Go to Resume section">Resume</Link>
              </Button>
              <Button asChild className="min-w-36 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="#contact" aria-label="Go to Contact section">Contact</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT: photo */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-white/10 via-white/20 to-white/10 blur-lg" />
              <Image
                src="/palak.png"               // make sure this exists in /public
                alt="Palak Gupta"
                width={420}
                height={520}
                priority
                className="relative z-10 w-[260px] md:w-[340px] h-auto rounded-2xl object-cover shadow-2xl ring-1 ring-white/15"
              />
            </div>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
}
