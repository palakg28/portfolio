// components/sections/experience.tsx
"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, CalendarDays } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  logo: string;
  period: string;
  duration: string;
  location: string;
  workType: "On-site" | "Hybrid" | "Remote" | string;
  bullets: string[];
  skills: string[];
  tag?: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "AI Solutions Engineer",
    company: "ClearDesk",
    logo: "/companies/cleardesk.png",
    period: "Sep 2025 – Present",
    duration: "9 mos",
    location: "La Jolla, CA",
    workType: "Hybrid",
    bullets: [
      "Engineered production AI agent workflows in Python, LangChain, and OpenAI APIs orchestrating 500+ daily transactions, cutting time-to-match from 8 minutes to ~5 minutes through end-to-end automation.",
      "Authored a reusable prompt library and multi-agent components for cross-functional ops and analytics teams; trained non-technical reviewers via an adoption runbook, dropping override rates from 40% to 12%.",
      "Partnered with senior engineers using Cursor and Claude Code on platform tooling and code review, owning p95 inference latency under 2s across 6 microservices during 5x traffic spikes.",
    ],
    skills: [
      "Python",
      "LangChain",
      "OpenAI API",
      "Claude",
      "n8n",
      "Zapier",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "Production AI",
      "Enablement",
    ],
  },
  {
    title: "AI Automation Developer",
    company: "Asistee",
    logo: "/companies/asistee.png",
    period: "Jul 2025 – Aug 2025",
    duration: "2 mos",
    location: "Tokyo, Japan",
    workType: "On-site",
    bullets: [
      "Developed an async Python automation engine integrating REST APIs and webhooks across 200+ business locations and 4 SaaS systems (Microsoft 365, ticketing, CRM, scheduling), cutting workflow lead time from 24h to 17h.",
      "Led an A/B framework comparing LLM agent architectures (CrewAI vs deterministic state machines) on 1,200+ tasks; recommended the production pattern, lifting accuracy 40% on ambiguous cases.",
      "Coached 50+ client deployment teams on the recommended pattern, authoring adoption playbooks and onboarding materials for non-technical operators.",
    ],
    skills: [
      "Python",
      "OpenAI API",
      "CrewAI",
      "REST APIs",
      "Webhooks",
      "Microsoft 365",
      "n8n",
      "Multi-Agent Evaluation",
      "Client Enablement",
    ],
  },
  {
    title: "Applied Machine Learning Analyst",
    company: "POiN",
    logo: "/companies/poin.png",
    period: "Jun 2024 – Aug 2024",
    duration: "3 mos",
    location: "Madrid, Spain",
    workType: "On-site",
    bullets: [
      "Trained a gradient-boosted recommendation model in Python (scikit-learn + Pandas) on 100K+ user interaction logs, lifting precision@5 from 0.42 to 0.55 through hand-engineered features.",
      "Streamlined a reproducible data pipeline cleaning 2.5M+ events across 4 regions, plus an internal documentation site so analysts could re-run pipelines without engineering support.",
      "Translated model outputs into stakeholder reports aligning ML work with growth targets and business requirements.",
    ],
    skills: [
      "Python",
      "scikit-learn",
      "Pandas",
      "SQL",
      "Data Pipelines",
      "A/B Analysis",
      "Stakeholder Reporting",
    ],
  },
  {
    title: "Finance Analyst",
    company: "Office of Finance & Resources – UC San Diego",
    logo: "/companies/ucsd_ofr.png",
    period: "Oct 2023 – Jun 2024",
    duration: "9 mos",
    location: "La Jolla, CA",
    workType: "On-site",
    bullets: [
      "Owned allocation of an $8.3M student events budget across 30+ campus departments, using variance analysis, historical attendance data, and ROI modeling to defend each decision in stakeholder negotiations.",
      "Automated forecasting workflows in Excel, SQL, and Power BI, turning ad-hoc reporting requests into self-serve dashboards and improving budget cycle time.",
      "Translated financial insights into process-improvement initiatives, reducing manual reporting effort by ~40%.",
    ],
    skills: [
      "Excel (VBA)",
      "SQL",
      "Power BI",
      "Financial Modeling",
      "Stakeholder Management",
      "Cross-Functional Communication",
      "Variance Analysis",
    ],
  },
  {
    title: "Vice President of Finance",
    company: "Business Council – UC San Diego",
    logo: "/companies/ucsd_bc.png",
    period: "Jun 2023 – Jun 2024",
    duration: "1 yr 1 mo",
    location: "La Jolla, CA",
    workType: "On-site",
    bullets: [
      "Automated reporting pipelines in Power BI and SQL across the council, reducing manual errors and strengthening financial transparency for student leadership.",
      "Led stakeholder management with student leaders and faculty advisors; gathered business requirements and documented user stories in an Agile cadence.",
      "Drove data-informed decisions on budget allocation, partnerships, and event planning through cross-functional collaboration.",
    ],
    skills: [
      "Power BI",
      "SQL",
      "Stakeholder Management",
      "Agile/Scrum",
      "Leadership",
      "Process Documentation",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-black px-6 md:px-16 lg:px-32 py-20">
      <h2 className="text-white text-4xl font-bold mb-8 text-center">Experience</h2>
      <div className="mx-auto max-w-4xl space-y-6">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.title}`}
            className="bg-black/40 border border-white/10 p-5 md:p-6 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              {/* Company logo */}
              <div className="relative h-12 w-12 shrink-0 rounded-md overflow-hidden ring-1 ring-white/15 bg-white">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              {/* Main content */}
              <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-white text-xl font-semibold leading-tight flex items-center gap-2">
                      {exp.title}
                      {exp.tag ? (
                        <span className="text-xs uppercase tracking-wide text-white/60">
                          {exp.tag}
                        </span>
                      ) : null}
                    </h3>
                    <p className="text-white/80">{exp.company}</p>
                  </div>
                  {/* Meta chips */}
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-white/10 text-white border border-white/15">
                      <CalendarDays className="mr-1 h-3.5 w-3.5" /> {exp.period}
                    </Badge>
                    <Badge className="bg-white/10 text-white border border-white/15">
                      <Briefcase className="mr-1 h-3.5 w-3.5" /> {exp.duration}
                    </Badge>
                    <Badge className="bg-white/10 text-white border border-white/15">
                      <MapPin className="mr-1 h-3.5 w-3.5" /> {exp.location} · {exp.workType}
                    </Badge>
                  </div>
                </div>
                {/* Bullets */}
                <ul className="mt-4 list-disc pl-6 space-y-2 text-white/90">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
