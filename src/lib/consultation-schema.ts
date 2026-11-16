import { z } from "zod";
import { SERVICES } from "./services";

export const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => ({ value: s.formValue, label: s.title })),
  { value: "not-sure", label: "Not sure yet" },
];

export const PORTFOLIO_OPTIONS = [
  { value: "under-10m", label: "Under PKR 10 million" },
  { value: "10m-50m", label: "PKR 10 – 50 million" },
  { value: "50m-250m", label: "PKR 50 – 250 million" },
  { value: "250m-1b", label: "PKR 250 million – 1 billion" },
  { value: "over-1b", label: "Over PKR 1 billion" },
  { value: "not-sure", label: "Not sure yet" },
];

export const consultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80, "Name is too long"),
  company: z.string().trim().min(2, "Please enter your company name").max(120, "Company name is too long"),
  email: z.string().trim().email("Enter a valid work email").max(120, "Email is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s\-()]{7,20}$/, "Enter a valid phone number"),
  service: z.string().min(1, "Select a service"),
  portfolioSize: z.string().min(1, "Select a portfolio size"),
  message: z.string().trim().max(1500, "Message is too long (max 1500 characters)").optional(),
  /** Honeypot: real users never fill this in */
  website: z.string().max(0).optional(),
});

export type ConsultationValues = z.infer<typeof consultationSchema>;

/** Server-side schema also receives how long the form was open (bot heuristic). */
export const consultationApiSchema = consultationSchema.extend({
  elapsedMs: z.number().optional(),
});
