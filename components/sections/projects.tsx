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
  repo: string;     // GitHub URL
  live?: string;    // demo / Tableau link
  tags: string[];
};

const projects: Project[] = [
  {
    title: "SQL Data Warehouse (Bronze → Gold) for Business KPIs",
    tagline: "Dockerized SQL Server • Medallion architecture • KPI views",
    description:
      "Production-style warehouse with dimensional models and KPI views powering product, customer, and revenue intelligence. ETL scripts, tests, and docs—BI/ML-ready.",
    image: "/projects/drawio.png",
    repo: "https://github.com/palakg28/Bronze-to-Gold-SQL-Data-Warehouse-for-Business-KPIs",
    tags: ["SQL Server", "Data Modeling", "ETL", "Docker", "BI KPIs"],
  },
  {
    title: "Tableau HR Analytics Dashboard",
    tagline: "Workforce insights • Hiring vs. terminations • Comp & demographics",
    description:
      "End-to-end HR analytics from planning to interactive dashboards. Highlights retention risk, education/performance signals, salary by role/age, and leadership-ready summaries.",
    image: "/projects/tableau.png",
    repo: "https://github.com/palakg28/Tableau-HR-Analytics",
    live: "https://public.tableau.com/app/profile/palak.gupta7383/viz/HROverviewDashboard_17562573699270/HRSummary",
    tags: ["Tableau", "Storytelling", "HR Analytics", "Dashboards"],
  },
  {
    title: "Coffee Sales Insights Dashboard (Excel)",
    tagline: "Executive KPIs • Slicers & timelines • Customer/product views",
    description:
      "Interactive Excel BI with XLOOKUP/INDEX-MATCH, PivotTables/Charts, and dynamic filters. Tracks sales trends, top products, geo mix, and key customers to guide pricing & category decisions.",
    image: "/projects/excel.png",
    repo: "https://github.com/palakg28/coffee-sales-insights-dashboard",
    tags: ["Excel", "PivotTables", "Data Cleaning", "BI"],
  },
  {
    title: "AI AutoScheduler (n8n + Google APIs)",
    tagline: "Agentic automation • Proximity-aware routing • Zero double-booking",
    description:
      "n8n workflow that converts sheet bookings into conflict-free Google Calendar events. Capacity/rest rules, Maps enrichment, and write-back of event IDs—cutting manual scheduling ~50% and boosting efficiency ~35%.",
    image: "/projects/n8n.png",
    repo: "https://github.com/palakg28/AutoScheduler-AI-Powered-Calendar-Automation",
    tags: ["n8n", "Automation", "Google APIs", "Scheduling", "Ops"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black px-6 md:px-16 lg:px-32 py-20">
  <h2 className="text-white text-4xl font-bold mb-10 text-center">Projects</h2>

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
                      aria-label="Open live demo"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
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
