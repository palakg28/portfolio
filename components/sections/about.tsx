"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const intro =
  "Building production AI agents and automations that turn ambiguous business workflows into reliable, adoptable systems. I work the full lifecycle—designing LLM-powered tools, shipping them in n8n, Python, and Claude/OpenAI APIs, and getting non-technical teams to actually use them.";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 py-20"
    >
      <h2 className="text-white text-4xl font-bold mb-10 text-center">About Me</h2>
      <div className="w-full bg-black bg-grid-small-white/[0.2] relative rounded-md p-6 md:p-10">
        <div className="absolute inset-0 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="relative">
          <TextGenerateEffect words={intro} />
        </div>
      </div>
      <p className="mt-6 max-w-3xl text-white/80 text-center">
        Whether it&apos;s engineering{" "}
        <span className="font-semibold">multi-agent LLM workflows</span> that cut operational time in half, or shipping{" "}
        <span className="font-semibold">n8n and Claude-powered automations</span> that connect AI to the systems business teams already live in, my focus is on AI that real people actually use—not pilots that gather dust.
      </p>
      <div className="w-full max-w-3xl mt-10">
        <h3 className="text-white text-2xl font-semibold mb-4">Technical Focus</h3>
        <ul className="list-disc pl-6 space-y-3 text-white/90 leading-relaxed">
          <li>
            <span className="font-semibold">Building AI Agents:</span> Designing multi-agent LLM systems with LangChain, CrewAI, and Claude/OpenAI APIs for real production workloads.
          </li>
          <li>
            <span className="font-semibold">AI Automation:</span> Shipping production n8n, Zapier, and Make workflows that wire LLMs into Microsoft 365, CRMs, and internal tooling.
          </li>
          <li>
            <span className="font-semibold">Enablement &amp; Adoption:</span> Building prompt libraries, adoption runbooks, and training programs that get non-technical teams trusting and using AI day-to-day.
          </li>
          <li>
            <span className="font-semibold">AI-Ready Infrastructure:</span> Engineering data pipelines and retrieval systems (RAG, vector DBs, Medallion warehouses) that safely connect internal data to AI agents.
          </li>
        </ul>
      </div>
      <div className="w-full max-w-3xl mt-10">
        <h3 className="text-white text-2xl font-semibold mb-4">Professional Impact</h3>
        <ul className="list-disc pl-6 space-y-3 text-white/90 leading-relaxed">
          <li>
            <span className="font-semibold">50%+ reduction</span> in manual operational workflows through production AI agents and automations.
          </li>
          <li>
            <span className="font-semibold">500+ daily transactions</span> handled by multi-agent LLM systems shipped at ClearDesk.
          </li>
          <li>
            <span className="font-semibold">Adoption frameworks</span> that dropped reviewer override rates from 40% to 12%, getting non-technical teams to genuinely trust AI tools.
          </li>
          <li>
            <span className="font-semibold">100K+ records</span> processed through LLM pipelines that surface plain-English outputs for non-technical end users.
          </li>
        </ul>
      </div>
      <p className="mt-8 max-w-3xl text-white/80 text-center italic">
        I thrive in roles where the build and the adoption are owned by the same person—because the best AI tools are the ones people actually use.
      </p>
      
        href="#skills"
        className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition"
      >
        View my full skill set →
      </a>
    </section>
  );
}
