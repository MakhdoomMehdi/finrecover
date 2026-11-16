export type ServiceIcon = "TrendingUp" | "Users" | "Cpu" | "Lightbulb";

export interface ServiceStat {
  value: number;
  suffix: string;
  label: string;
}

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface Service {
  id: string;
  /** Same as id; used for schema.org URLs */
  slug: string;
  /** Value used by the consultation form's service dropdown / ?service= param */
  formValue: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: ServiceIcon;
  features: string[];
  steps: ServiceStep[];
  stats: ServiceStat[];
}

export const SERVICES: Service[] = [
  {
    id: "loan-recovery",
    slug: "loan-recovery",
    formValue: "loan-recovery",
    title: "Loan Recovery & Debt Handling",
    shortTitle: "Loan Recovery",
    description:
      "Expert end-to-end debt recovery for businesses. Proven strategies, from early-stage collections to complex legal escalations, maximise recovery while preserving client relationships.",
    icon: "TrendingUp",
    features: [
      "Pre-legal & legal recovery strategies",
      "Debtor tracing and skip-tracing",
      "Portfolio acquisition and management",
      "Compliance-first collections",
      "Real-time recovery dashboard",
    ],
    steps: [
      { title: "Portfolio Assessment", desc: "Analysis of portfolio age, risk tier and debtor profile." },
      { title: "Strategy Design", desc: "Digital-first approach, legal escalation paths and settlement protocols." },
      { title: "Active Recovery", desc: "Skilled agents and automation on an omnichannel platform." },
      { title: "Reporting & Handback", desc: "Live dashboards, weekly reports and clean handback of resolved accounts." },
    ],
    stats: [{ value: 95, suffix: "%", label: "Recovery Rate" }],
  },
  {
    id: "workforce-outsourcing",
    slug: "workforce-outsourcing",
    formValue: "workforce-outsourcing",
    title: "Workforce Outsourcing (BPO)",
    shortTitle: "BPO Services",
    description:
      "Scalable, trained contact-centre and back-office talent on demand. We handle hiring, training, QA and operations so you focus on growth, not headcount.",
    icon: "Users",
    features: [
      "Dedicated call centre agents",
      "Back-office processing teams",
      "Multilingual support capabilities",
      "Quality assurance & monitoring",
      "Rapid scale-up within 2 weeks",
    ],
    steps: [
      { title: "Needs Analysis", desc: "Scope, volumes, SLAs and language requirements." },
      { title: "Talent Acquisition", desc: "Recruitment, background checks and skills testing." },
      { title: "Training & Onboarding", desc: "Domain-specific training on your products, systems and compliance." },
      { title: "Managed Operations", desc: "Real-time QA, reporting and continuous improvement." },
    ],
    stats: [
      { value: 2, suffix: " Weeks", label: "Avg. Ramp Time" },
      { value: 60, suffix: "%", label: "Cost Reduction" },
    ],
  },
  {
    id: "automated-crm",
    slug: "automated-crm",
    formValue: "automated-crm",
    title: "Automated Recovery & CRM Systems",
    shortTitle: "Automated CRM",
    description:
      "Purpose-built technology for digital lenders. Automated recovery workflows and CRM integrations reduce manual effort, accelerate collections and give full visibility across your loan book.",
    icon: "Cpu",
    features: [
      "Omnichannel automated workflows (SMS, WhatsApp, email, IVR)",
      "CRM integration & customisation",
      "Predictive delinquency scoring",
      "Automated promise-to-pay tracking",
      "Regulatory compliance controls",
    ],
    steps: [
      { title: "System Audit", desc: "Review of your current stack, CRM and workflow bottlenecks." },
      { title: "Solution Design", desc: "Automation rules, escalation triggers and communication cadences." },
      { title: "Integration & Testing", desc: "API integration with your loan management system and full UAT." },
      { title: "Go-Live & Optimise", desc: "KPI monitoring and ongoing optimisation, included." },
    ],
    stats: [],
  },
  {
    id: "consultancy",
    slug: "consultancy",
    formValue: "consultancy",
    title: "Business Consultancy",
    shortTitle: "Consultancy",
    description:
      "Strategic advisory for financial institutions navigating complex recovery landscapes: sector expertise, regulatory insight and practical execution.",
    icon: "Lightbulb",
    features: [
      "Debt portfolio strategy & restructuring",
      "Regulatory compliance advisory",
      "Operational efficiency reviews",
      "Technology road-mapping",
      "Training & capability building",
    ],
    steps: [
      { title: "Discovery", desc: "Understand your business, goals and challenges." },
      { title: "Diagnosis", desc: "Data-driven view of gaps, risks and opportunities." },
      { title: "Recommendations", desc: "Roadmap with clear priorities and ROI projections." },
      { title: "Implementation Support", desc: "Hands-on delivery, not just a report on a shelf." },
    ],
    stats: [{ value: 10, suffix: "+", label: "Years Experience" }],
  },
];
