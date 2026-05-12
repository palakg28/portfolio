// components/sections/skills.tsx

"use client";

type SkillGroup = {
  label: string;
  skills: string[];
};

const groups: SkillGroup[] = [
  {
    label: "AI Agents & LLM Systems",
    skills: [
      "Multi-Agent Systems",
      "Claude / OpenAI / Gemini APIs",
      "LangChain & CrewAI",
      "Tool Calling & Function Calling",
      "Prompt Engineering",
      "Prompt Injection Defense",
      "LLM Evaluation & Guardrails",
      "RAG & Vector Search",
    ],
  },
  {
    label: "AI Automation & Workflow Engineering",
    skills: [
      "n8n Production Workflows",
      "Zapier & Make Automations",
      "HubSpot CRM Integrations",
      "Google Workspace APIs",
      "Zoom Transcript Automation",
      "Webhook-Based Pipelines",
      "Human-in-the-Loop Review",
      "Workflow Logging & Retry Logic",
    ],
  },
  {
    label: "Backend, APIs & Production Systems",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "SQLAlchemy",
      "Postgres / MySQL / SQL Server",
      "Docker & Containerization",
      "JSON Schema Design",
      "Authentication & OAuth",
    ],
  },
  {
    label: "Data, Retrieval & AI Infrastructure",
    skills: [
      "ETL / ELT Pipelines",
      "Data Warehousing",
      "Medallion Architecture",
      "dbt & Airflow",
      "Vector Databases",
      "Data Validation",
      "Knowledge Base Design",
      "AI-Ready Data Pipelines",
    ],
  },
  {
    label: "Analytics, BI & Decision Systems",
    skills: [
      "Tableau & Power BI",
      "Looker Studio",
      "KPI Framework Design",
      "Operational Dashboards",
      "A/B Testing",
      "Statistical Analysis",
      "Predictive Forecasting",
      "XGBoost & LSTM Models",
    ],
  },
  {
    label: "AI Product, Adoption & Enablement",
    skills: [
      "Technical Discovery",
      "Solution Design",
      "AI Adoption Playbooks",
      "Prompt Libraries",
      "User Training & Enablement",
      "PRD Writing",
      "Stakeholder Management",
      "GTM & RevOps Alignment",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black px-6 md:px-16 lg:px-32 py-20">
      <h2 className="text-white text-4xl font-bold mb-4 text-center">
        Skills
      </h2>

      <p className="mx-auto max-w-3xl text-center text-white/70 mb-10 leading-relaxed">
        A practical AI skill set focused on building, deploying, and driving
        adoption of LLM-powered systems across business workflows, data
        pipelines, and customer-facing operations.
      </p>

      <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.label}
            className="rounded-2xl border border-white/10 bg-black/40 p-6 transition-transform duration-200 hover:-translate-y-1 hover:bg-white/[0.03]"
          >
            <p className="text-white text-lg font-semibold mb-4">{g.label}</p>

            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
