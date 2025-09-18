// components/sections/experience.tsx
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, CalendarDays } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  logo: string;          // /public path
  period: string;        // e.g. "Sep 2025 – Present"
  duration: string;      // e.g. "1 mo"
  location: string;      // e.g. "La Jolla, CA"
  workType: "On-site" | "Hybrid" | "Remote" | string;
  bullets: string[];
  skills: string[];
  tag?: string;          // optional small label, e.g. "Internship"
};

const experiences: ExperienceItem[] = [
  {
    title: "AI Solutions Architect",
    tag: "Internship",
    company: "ClearDesk",
    logo: "/companies/cleardesk.png",
    period: "Sep 2025 – Present",
    duration: "1 mo",
    location: "La Jolla, CA",
    workType: "Hybrid",
    bullets: [
      "Architected an AI/ML recommendation engine reducing time-to-match by 50%, boosting placement accuracy.",
      "Automated client reporting with NLP pipelines generating weekly CRM updates, increasing client retention.",
      "Designed AI workflows (Zapier, n8n) reducing recruiter overhead 40%, enabling MLOps-ready deployment.",
    ],
    skills: [
      "Python","SQL","LLMs","NLP","n8n","Zapier","MLOps","CRM Analytics",
    ],
  },
  {
    title: "AI Automation Developer",
    tag: "Internship",
    company: "Asistee",
    logo: "/companies/asistee.png",
    period: "Jul 2025 – Aug 2025",
    duration: "2 mos",
    location: "Tokyo, Japan",
    workType: "On-site",
    bullets: [
      "Engineered an AI scheduling agent (Java, Python, SQL, Google Maps API) reducing assignment time 50%.",
      "Deployed multilingual address-translation pipelines with OpenAI API cutting duplicate entries by 90%.",
      "Delivered real-time dashboards (Looker Studio, SQL) accelerating strategic business decisions.",
    ],
    skills: [
      "Python","Java","SQL","Google Maps API","OpenAI API","ETL","Looker Studio","Automation",
    ],
  },
  {
    title: "Data Analyst Intern",
    tag: "Internship",
    company: "POiN",
    logo: "/companies/poin.png",
    period: "Jun 2024 – Aug 2024",
    duration: "3 mos",
    location: "Madrid, Spain",
    workType: "On-site",
    bullets: [
      "Optimized SQL data models and warehouse schemas for 100K+ records, improving query performance 40%.",
      "Applied scikit-learn NLP models for personalization, lifting recommendation relevance by 30%.",
      "Delivered stakeholder reports aligning analytics with growth targets and business requirements.",
    ],
    skills: [
      "SQL","Python (Pandas, scikit-learn)","Data Warehousing","Dashboards","A/B Analysis","Reporting",
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
      "Analyzed an $8.3M budget using variance analysis and financial modeling, cutting overhead 10%.",
      "Automated forecasting workflows in Excel, SQL, and Power BI to improve budget accuracy and cycle time.",
      "Translated financial insights into process-improvement initiatives and long-term planning strategies.",
    ],
    skills: [
      "Excel (VBA)","SQL","Power BI","Financial Modeling","Forecasting","Variance Analysis",
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
      "Automated reporting pipelines in Power BI + SQL, reducing manual errors and strengthening transparency.",
      "Led stakeholder management, gathered business requirements, and documented user stories.",
      "Collaborated cross-functionally in an Agile/Scrum framework to enable data-driven decision-making.",
    ],
    skills: [
      "Power BI","SQL","Stakeholder Management","Agile/Scrum","Requirements","Process Documentation",
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

                  {/* Meta chips: period · duration · location all on one line via wrap */}
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
