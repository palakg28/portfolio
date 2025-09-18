// components/sections/resume.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const PDF_URL = "/Palak_Gupta_Resume.pdf";        // keep in /public
const IMAGE_URL = "/Palak_Gupta_Resume.png";      // optional: full-page image

export default function Resume() {
  return (
    <section id="resume" className="bg-black px-6 md:px-16 lg:px-32 py-20 scroll-mt-28">
      <h2 className="tracking-tight text-white text-4xl md:text-5xl font-bold mb-6 text-center">
        Resume
      </h2>

      {/* actions */}
      <div className="mt-4 flex justify-center gap-3">
        <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
          <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Open PDF
          </a>
        </Button>
        <Button asChild className="bg-white/10 hover:bg-white/20 text-white border border-white/15">
          <a href={PDF_URL} download>
            <Download className="mr-2 h-4 w-4" /> Download
          </a>
        </Button>
      </div>

      {/* full-page visual (no scroll) */}
      {IMAGE_URL ? (
        <div className="mt-8 mx-auto w-full max-w-3xl">
          <Image
            src={IMAGE_URL}
            alt="Palak Gupta — Resume"
            width={2550}         // 8.5x11 @300dpi
            height={3300}
            className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
            priority
          />
        </div>
      ) : (
        // Fallback: PDF viewer sized to page aspect (shows full page if 1-page)
        <div className="mt-8 mx-auto w-full max-w-4xl aspect-[8.5/11] rounded-2xl overflow-hidden border border-white/10">
          <iframe
            src={`${PDF_URL}#zoom=page-fit`}
            className="w-full h-full"
            title="Resume"
          />
        </div>
      )}
    </section>
  );
}
