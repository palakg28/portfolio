"use client";

import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Button } from "../ui/button";

import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md px-6"
    >
      {/* Background sparkles */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Heading */}
      <h1 className="md:text-6xl text-3xl font-bold text-center text-white relative z-20">
        Let’s Connect 🚀
      </h1>
      <p className="mt-4 text-white/80 text-center max-w-xl relative z-20 text-lg">
        Whether it’s data, AI, or analytics strategy — I’d love to chat and
        collaborate. Drop me a message, and let’s turn ideas into impact.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4 justify-center relative z-20">
  {/* Email */}
  <Button
  asChild
  size="lg"
  className="min-w-40 bg-indigo-600 hover:bg-indigo-700 text-white"
>
  <a href="mailto:palakgupta0428@gmail.com" aria-label="Email Palak">
    Email <Mail className="ml-2 size-5" />
  </a>
</Button>

  {/* GitHub */}
  <Button
    asChild
    size="lg"
    className="min-w-40 bg-indigo-600 hover:bg-indigo-700 text-white"
  >
    <Link
      href="https://github.com/palakg28"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub <Github className="ml-2 size-5" />
    </Link>
  </Button>

  {/* LinkedIn */}
  <Button
    asChild
    size="lg"
    className="min-w-40 bg-indigo-600 hover:bg-indigo-700 text-white"
  >
    <Link
      href="https://www.linkedin.com/in/palakgupta28/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn <Linkedin className="ml-2 size-5" />
    </Link>
  </Button>
</div>
    </section>
  );
}
