// components/sections/projects.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  description: string;
  image?: string;   // optional screenshot/preview
  repo?: string;    // GitHub URL (optional — some projects are proprietary)
  live?: string;    // demo / case study link
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Information-Box Bargaining: Multi-Agent Claude Negotiation System",
    tagline:
      "4 Claude Agents • Anthropic SDK • Tool-Use Schemas • Prompt-Injection Defense",
    description:
      "A working prototype of a new negotiation primitive — built for high-stakes private deals where neither side wants to reveal their cards first (M&A, regulatory cooperation, AI safety agreements). Designed and shipped a four-agent Claude orchestration: two Negotiator AIs talk inside a sealed environment, a Mediator polices for jailbreaks and prompt-injection attacks, and a Synthesizer extracts joint proposals as structured tool calls so sensitive content never leaks to humans. The privacy guarantee is structural — the synthesizer's tool schema has no prose field, so the AI cannot put fact contents into any human-facing output. Built end-to-end: FastAPI + SQLAlchemy backend, React + Vite frontend, asymmetric server-side rendering, audit endpoints, and a smoke test that verifies the mediator catches injection attacks at high severity.",
    image: "/projects/info-box-bargaining.png",
    repo: "https://github.com/palakg28/Information-Box_Bargaining",
    tags: [
      "Multi-Agent Systems",
      "Claude API",
      "Anthropic SDK",
      "Tool Use",
      "AI Safety",
      "Prompt Injection Defense",
      "FastAPI",
    ],
  },
  {
    title: "AI Meeting Intelligence & CRM Automation",
    tagline:
      "Zoom + n8n + OpenAI + HubSpot • Transcripts → Structured Insights → CRM • Built for SDR Adoption",
    description:
      "Production automation that turns Zoom transcripts into structured CRM updates. Built a custom Zoom OAuth app with webhooks, an n8n orchestration pipeline for transcript ingestion and metadata normalization, and an OpenAI processing layer that generates concise summaries and action items. Zapier syncs outcomes into HubSpot, attaching engagement notes to the correct contact timeline. Partnered with SDR and RevOps teams to align the workflow with real sales motion, with retries, logging, and validation for production reliability.",
    image: "/projects/meeting-intelligence.png",
    live: "https://www.linkedin.com/in/palakgupta28/overlay/Project/289075862/treasury/?profileId=ACoAAD08N9kBjO7vClgjPQ86SCuxHkmiq2j5_Dk",
    tags: [
      "n8n",
      "Zapier",
      "OpenAI",
      "HubSpot CRM",
      "Zoom API",
      "Production AI",
      "Enablement",
    ],
  },
  {
    title: "AI Calendar Agent: Agentic Scheduling with n8n",
    tagline:
      "n8n + OpenAI + Google APIs • Proximity-aware routing • Zero double-booking",
    description:
      "AI-powered scheduling agent that converts Google Sheets bookings into conflict-free, proximity-aware Calendar events. Encoded business rules — capacity limits, rest buffers, travel optimization — and integrated Sheets, Calendar, Maps Geocoding, and OpenAI for address normalization and enrichment. Production-ready with traceability (event IDs, links), retries, and RFC 3339 time compliance. Cut manual scheduling time 50% and improved staff allocation efficiency 35%.",
    image: "/projects/n8n.png",
    repo: "https://github.com/palakg28/AutoScheduler-AI-Powered-Calendar-Automation",
    live: "https://www.linkedin.com/in/palakgupta28/overlay/Project/46252510/treasury/?profileId=ACoAAD08N9kBjO7vClgjPQ86SCuxHkmiq2j5_Dk",
    tags: [
      "n8n",
      "OpenAI",
      "Google APIs",
      "Agentic Automation",
      "Production Ops",
    ],
  },
  {
    title: "TenantSafe SD: Civic LLM for Rental Transparency",
    tagline:
      "Claude API • LLM Pipelines • 100K+ Municipal Records • Plain-English Outputs",
    description:
      "Civic LLM tool that processes 100K+ San Diego municipal records — 311 complaints, code violations, inspection data — and turns them into instant risk scores, plain-English summaries, and pre-lease inspection checklists for renters. Built the Claude API integration, retrieval and ranking pipeline, and the non-technical user interface end-to-end — an applied pattern for making opaque institutional data usable by everyday people.",
    image: "/projects/tenantsafe-ui.png",
    repo: "https://github.com/palakg28/tenantsafe-sd",
    tags: [
      "Claude API",
      "LLM Pipelines",
      "RAG",
      "Civic Tech",
      "Non-Technical UX",
    ],
  },
  {
    title: "Demand Forecasting + Ops Enablement Dashboard",
    tagline:
      "XGBoost & LSTM Ensemble • Airflow Orchestration • Ops-Facing Confidence Surfacing",
    description:
      "End-to-end ML product that cut service bottlenecks 20% — but the load-bearing piece was adoption. Built an Ops-facing dashboard that translated raw model confidence intervals into proactive staffing alerts and shift recommendations, so non-technical ops leads could trust and act on model output without reading any of the underlying ML.",
    image: "/projects/demand-forecast-architecture.png",
    repo: "https://github.com/palakg28/demand-forecasting-product",
    tags: ["Machine Learning", "MLOps", "Ops Enablement", "Airflow", "SQL"],
  },
  {
    title: "Bronze → Gold Data Warehouse: AI-Ready Infrastructure",
    tagline:
      "Dockerized SQL Server • Medallion Architecture • KPI + Feature Views for AI Workloads",
    description:
      "Production-style warehouse with dimensional models and KPI views, designed to safely connect internal business data to downstream AI agents and analytics. ETL scripts, tests, and documentation included. The kind of foundation that makes LLM workflows reliable instead of brittle.",
    image: "/projects/drawio.png",
    repo: "https://github.com/palakg28/Bronze-to-Gold-SQL-Data-Warehouse-for-Business-KPIs",
    tags: [
      "SQL Server",
      "Medallion Architecture",
      "Docker",
      "AI-Ready Data",
      "ETL",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black px-6 md:px-16 lg:px-32 py-20">
      <h2 className="text-white text-4xl font-bold mb-10 text-center">
        Projects
      </h2>
      {/* Balanced 2x2 grid */}
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="
              group relative overflow-hidden rounded-2xl
              border border-white/10 bg-black/40
              transition-transform duration-200 hover:-translate-y-1
              shadow-[0_0_0_0_rgba(0,0,0,0)]
              hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]
              flex flex-col h-full
            "
          >
            {/* Header image / gradient */}
            {p.image ? (
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={p.image}
                  alt={`${p.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            ) : (
              <div className="h-32 w-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20" />
            )}
            {/* Body */}
            <div className="flex flex-col p-5 gap-3 grow">
              <header>
                <h3 className="text-white text-lg font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/70 text-xs mt-1">{p.tagline}</p>
              </header>
              <p className="text-white/80 text-sm leading-relaxed">
                {p.description}
              </p>
              {/* Tags */}
              <div className="mt-1 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {/* Footer pinned at bottom */}
              <div className="mt-auto pt-4 flex gap-3">
                {p.repo && (
                  <Button
                    asChild
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    <Link
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open GitHub repo"
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                )}
                {p.live && (
                  <Button
                    asChild
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/15"
                  >
                    <Link
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open live demo or case study"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Case Study
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            {/* Subtle glow on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
