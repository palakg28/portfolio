// components/sections/about.tsx
"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";

const intro =
  `I’m Palak Gupta — a rising senior at UC San Diego (Mathematics–Computer Science). ` +
  `I work at the intersection of data, AI, and business strategy, turning complex datasets into clear decisions and intelligent systems that deliver measurable impact.`;

export default function About() {
  return (
    <section
      id="about"
      className="bg-black flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 py-20"
    >
      <h2 className="text-white text-4xl font-bold mb-10 text-center">About Me</h2>

      {/* Typing intro */}
      <div className="w-full bg-black bg-grid-small-white/[0.2] relative rounded-md p-6 md:p-10">
        <div className="absolute inset-0 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="relative">
          <TextGenerateEffect words={intro} />
        </div>
      </div>

      {/* What I Do — concise, ATS-friendly */}
      <div className="w-full max-w-3xl mt-10">
        <h3 className="text-white text-2xl font-semibold mb-4">What I Do</h3>
        <ol className="list-decimal pl-6 space-y-3 text-white/90 leading-relaxed">
          <li>Build scalable <span className="font-semibold">ETL/data pipelines</span> with strong quality checks.</li>
          <li>Develop <span className="font-semibold">dashboards & KPI frameworks</span> for exec decision-making.</li>
          <li>Apply <span className="font-semibold">ML & predictive analytics</span> for forecasting and anomaly detection.</li>
          <li>Design <span className="font-semibold">AI automations</span> that reduce manual work improving response-time and reliability targets.</li>
          <li>Translate analysis into <span className="font-semibold">product & business strategy</span>.</li>
        </ol>
      </div>

      {/* Impact snippet */}
      <p className="mt-6 max-w-3xl text-white/80 text-center">
        Recent impact: 50%+ reduction in manual work, systems scaled for 100K+ records,
        multi-million-dollar budgets analyzed, and engagement boosted via AI-powered personalization.
      </p>

      {/* Gentle pointer to the separate skills section */}
      <a
        href="#skills"
        className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition"
      >
        View my full skill set →
      </a>
    </section>
  );
}
