export const SITE_NAME = "Fin Recover";
export const SITE_TAGLINE = "Transforming Debt Recovery & Business Operations";
export const SITE_DESCRIPTION =
  "Fin Recover provides cutting-edge loan recovery, workforce outsourcing, automated CRM systems for digital lenders, and strategic consultancy services.";
export const SITE_URL = "https://finrecover.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/fin-recover/home/";
export const CONTACT_EMAIL = "wasifalikhanjadoon@gmail.com";
export const CONTACT_PHONE = "+92 318 5417337";
export const WHATSAPP_NUMBER = "+923185417337";
export const WHATSAPP_URL = "https://wa.me/923185417337";
export const CEO_LINKEDIN_URL = "https://www.linkedin.com/in/wasif-ali-khan-18b887259";
export const CONTACT_ADDRESS = "Lahore, Pakistan";

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Loan Recovery", href: "/services#loan-recovery" },
      { label: "BPO Services", href: "/services#workforce-outsourcing" },
      { label: "Automated CRM", href: "/services#automated-crm" },
      { label: "Consultancy", href: "/services#consultancy" },
    ],
  },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "Our Story", href: "/company/our-story" },
      { label: "Vision and Values", href: "/company/vision-and-values" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
  { label: "Contact Us", href: "/company/contact" },
];

export { SERVICES } from "./services";

export const STATS = [
  { value: 95, suffix: "%", label: "Recovery Rate", description: "Industry-leading collections performance" },
  { value: 200, suffix: "+", label: "Clients Served", description: "Across banking, fintech & leasing sectors" },
  { value: 50, suffix: "M+", label: "USD Recovered", description: "Across portfolios since inception" },
  { value: 10, suffix: "+", label: "Years of Expertise", description: "Deep domain knowledge & sector relationships" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Fin Recover transformed our collections unit. Within 90 days our early-stage recovery rate jumped by 28%. Their compliance-first approach also saved us from two potential regulatory issues.",
    author: "Chief Risk Officer",
    company: "Leading Digital Lender",
    initials: "CRO",
  },
  {
    quote:
      "We outsourced our entire back-office to Fin Recover. Onboarding was seamless and the team felt like an extension of our own company from day one. We scaled from 20 agents to 80 in under a month.",
    author: "Head of Operations",
    company: "Regional Microfinance Institution",
    initials: "HO",
  },
  {
    quote:
      "Their automated recovery system plugged directly into our LMS. The predictive scoring alone reduced our portfolio at risk by 15% in the first quarter. Exceptional technical depth.",
    author: "CEO",
    company: "Fintech Startup",
    initials: "CEO",
  },
];

export const LEGAL_PAGES = [
  { title: "Terms of Service", href: "/legal/terms-of-service", downloadable: false },
  { title: "Privacy Policy", href: "/legal/privacy-policy", downloadable: false },
  { title: "Data Protection & Security", href: "/legal/data-protection", downloadable: false },
  { title: "Debt Collection Compliance", href: "/legal/debt-collection-compliance", downloadable: false },
  { title: "Data Processing Agreement", href: "/legal/data-processing-agreement", downloadable: true },
];

export const FOOTER_LINKS = {
  services: [
    { label: "Loan Recovery & Debt Handling", href: "/services#loan-recovery" },
    { label: "Workforce Outsourcing", href: "/services#workforce-outsourcing" },
    { label: "Automated CRM Systems", href: "/services#automated-crm" },
    { label: "Business Consultancy", href: "/services#consultancy" },
  ],
  company: [
    { label: "Our Story", href: "/company/our-story" },
    { label: "Vision and Values", href: "/company/vision-and-values" },
    { label: "Leadership", href: "/company/leadership" },
    { label: "Careers", href: "/company/careers" },
    { label: "Contact Us", href: "/company/contact" },
  ],
  legal: [
    { label: "Terms of Service", href: "/legal/terms-of-service" },
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Data Protection", href: "/legal/data-protection" },
    { label: "Debt Collection Compliance", href: "/legal/debt-collection-compliance" },
    { label: "Data Processing Agreement", href: "/legal/data-processing-agreement" },
  ],
};