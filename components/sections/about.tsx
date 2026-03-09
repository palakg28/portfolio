// components/sections/about.tsx
"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const intro =
  `I am a Mathematics–Computer Science student at UC San Diego working at the intersection of data engineering, agentic AI, and product strategy. ` +
  `I specialize in architecting the technical infrastructure that transforms complex data into high-utility business tools.`;

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

      {/* Second paragraph */}
      <p className="mt-6 max-w-3xl text-white/80 text-center">
        Whether it is building <span className="font-semibold">XGBoost demand engines</span> to stabilize marketplace logistics or engineering{" "}
        <span className="font-semibold">LLM-powered civic tools</span>, my focus is on bridging the gap between deep analytics and measurable product growth.
      </p>

      {/* Technical Focus */}
      <div className="w-full max-w-3xl mt-10">
        <h3 className="text-white text-2xl font-semibold mb-4">Technical Focus</h3>
        <ul className="list-disc pl-6 space-y-3 text-white/90 leading-relaxed">
          <li><span className="font-semibold">Architecting Pipelines:</span> Engineering scalable ETL/ELT workflows and Medallion-style data warehouses.</li>
          <li><span className="font-semibold">Predictive Modeling:</span> Deploying ML architectures for forecasting, anomaly detection, and AOV optimization.</li>
          <li><span className="font-semibold">Intelligent Automation:</span> Designing agentic AI systems that resolve operational friction and buy back human time.</li>
          <li><span className="font-semibold">Product Strategy:</span> Translating technical logic into PRDs, KPI frameworks, and executive-level insights.</li>
        </ul>
      </div>

      {/* Professional Impact */}
      <div className="w-full max-w-3xl mt-10">
        <h3 className="text-white text-2xl font-semibold mb-4">Professional Impact</h3>
        <ul className="list-disc pl-6 space-y-3 text-white/90 leading-relaxed">
          <li><span className="font-semibold">50%+ reduction</span> in manual operational workflows through targeted AI automation.</li>
          <li><span className="font-semibold">20.1% decrease</span> in service bottlenecks via predictive demand forecasting.</li>
          <li><span className="font-semibold">100K+ records</span> managed through high-concurrency, scalable data architectures.</li>
          <li><span className="font-semibold">Multi-million-dollar</span> budget optimizations driven by automated financial reporting and BI.</li>
        </ul>
      </div>

      {/* Closing line */}
      <p className="mt-8 max-w-3xl text-white/80 text-center italic">
        I thrive in roles where high-logic engineering meets high-utility product design.
      </p>

      {/* Pointer to skills */}
      
        href="#skills"
        className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition"
      >
        View my full skill set →
      </a>
    </section>
  );
}
