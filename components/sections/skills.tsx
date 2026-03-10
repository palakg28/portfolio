// components/sections/skills.tsx
"use client";

type SkillGroup = {
  label: string;
  skills: string[];
};

const groups: SkillGroup[] = [
  {
    label: "Data & Programming",
    skills: [
      "Python (Pandas, NumPy, scikit-learn)",
      "SQL (Postgres, MySQL, SQL Server)",
      "Java & JavaScript",
      "R (Analysis/Modeling)",
      "C/C++ (Foundations)",
      "Git & GitHub",
    ],
  },
  {
    label: "Data Engineering & Systems",
    skills: [
      "ETL/ELT Pipelines (dbt, Airflow)",
      "Data Warehousing (Snowflake, SQL Server)",
      "Docker & Containerization",
      "Cloud Infrastructure (AWS, GCP)",
      "API Design (REST, JSON)",
      "Medallion Architecture",
    ],
  },
  {
    label: "Analytics & Visualization",
    skills: [
      "Tableau & Power BI (DAX)",
      "Looker Studio",
      "Financial Modeling & FP&A",
      "Statistical Analysis",
      "A/B Testing & Experimentation",
      "KPI Framework Design",
    ],
  },
  {
    label: "AI & Automation",
    skills: [
      "Machine Learning (XGBoost, LSTM)",
      "Predictive Demand Forecasting",
      "NLP & LLM Integration (Claude API)",
      "Agentic AI & Prompt Engineering",
      "MLOps & Model Deployment",
      "Automation (n8n, Zapier)",
    ],
  },
  {
    label: "Product & Strategy",
    skills: [
      "Technical Product Management",
      "Agile/Scrum (Jira, Confluence)",
      "PRD Writing & Roadmapping",
      "Marketplace Logistics",
      "GTM Strategy",
      "Stakeholder Management",
    ],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="bg-black px-6 md:px-16 lg:px-32 py-20">
      <h2 className="text-white text-4xl font-bold mb-8 text-center">Skills</h2>

      <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.label}
            className="rounded-2xl border border-white/10 bg-black/40 p-6"
          >
            <p className="text-white/70 text-sm mb-3">{g.label}</p>
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
