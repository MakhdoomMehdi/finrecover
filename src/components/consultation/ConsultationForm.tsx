"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import {
  consultationSchema,
  PORTFOLIO_OPTIONS,
  SERVICE_OPTIONS,
  type ConsultationValues,
} from "@/lib/consultation-schema";
import { FloatingInput, FloatingSelect, FloatingTextarea } from "@/components/ui/FloatingField";
import { WHATSAPP_URL } from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

const swap = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.18 },
};

export function ConsultationForm() {
  const params = useSearchParams();
  const presetService = params.get("service");
  const intent = params.get("intent");
  const [status, setStatus] = useState<Status>("idle");
  const startedAt = useRef(0);

  const defaults: ConsultationValues = {
    name: "",
    company: "",
    email: "",
    phone: "",
    service: SERVICE_OPTIONS.some((o) => o.value === presetService) ? (presetService as string) : "",
    portfolioSize: "",
    message: intent === "assessment" ? "I'd like a free portfolio assessment." : "",
    website: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields, dirtyFields },
  } = useForm<ConsultationValues>({
    resolver: zodResolver(consultationSchema),
    mode: "onTouched",
    defaultValues: defaults,
  });

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  // Any edit after a successful send returns the button to its idle state.
  useEffect(() => {
    const sub = watch((_values, info) => {
      if (info.type === "change") {
        setStatus((s) => (s === "success" || s === "error" ? "idle" : s));
      }
    });
    return () => sub.unsubscribe();
  }, [watch]);

  const onSubmit = async (values: ConsultationValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, elapsedMs: Date.now() - startedAt.current }),
      });
      if (!res.ok) throw new Error("Request failed");
      reset({ ...defaults, service: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const valid = (name: keyof ConsultationValues) => !!dirtyFields[name] && !!touchedFields[name] && !errors[name];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Book a free consultation"
      className="glass-strong relative space-y-4 rounded-3xl p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] sm:p-8"
    >
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-white">Book your free strategy call</h2>
        <p className="mt-1 text-sm text-white/75">Takes under a minute. Fields marked * are required.</p>
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FloatingInput
          id="name"
          label="Full Name"
          required
          autoComplete="name"
          error={errors.name?.message}
          valid={valid("name")}
          {...register("name")}
        />
        <FloatingInput
          id="company"
          label="Company"
          required
          autoComplete="organization"
          error={errors.company?.message}
          valid={valid("company")}
          {...register("company")}
        />
        <FloatingInput
          id="email"
          type="email"
          label="Work Email"
          required
          autoComplete="email"
          error={errors.email?.message}
          valid={valid("email")}
          {...register("email")}
        />
        <FloatingInput
          id="phone"
          type="tel"
          label="Phone"
          required
          autoComplete="tel"
          error={errors.phone?.message}
          valid={valid("phone")}
          {...register("phone")}
        />
        <FloatingSelect
          id="service"
          label="Service Interested In"
          required
          options={SERVICE_OPTIONS}
          error={errors.service?.message}
          {...register("service")}
        />
        <FloatingSelect
          id="portfolioSize"
          label="Portfolio Size"
          required
          options={PORTFOLIO_OPTIONS}
          error={errors.portfolioSize?.message}
          {...register("portfolioSize")}
        />
      </div>

      <FloatingTextarea id="message" label="Message" error={errors.message?.message} {...register("message")} />

      <motion.button
        type="submit"
        disabled={status === "loading" || status === "success"}
        whileTap={{ scale: 0.98 }}
        className={`relative flex h-14 w-full items-center justify-center overflow-hidden rounded-xl text-base font-bold transition-colors disabled:cursor-not-allowed ${
          status === "success"
            ? "bg-brand-teal text-white"
            : "bg-white text-brand-slate shadow-glow hover:bg-brand-tint"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "loading" ? (
            <motion.span key="loading" {...swap} className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending…
            </motion.span>
          ) : status === "success" ? (
            <motion.span key="success" {...swap} className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                <motion.path
                  d="M5 12.5l4.2 4.2L19 7"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
              </svg>
              Request sent
            </motion.span>
          ) : (
            <motion.span key="idle" {...swap} className="flex items-center gap-2">
              Book My Free Consultation
              <Send className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <div aria-live="polite" role="status" className="min-h-[1.5rem] text-center text-sm">
        {status === "success" && (
          <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="font-semibold text-brand-tint">
            Thank you! We&apos;ll contact you within 24 hours.
          </motion.p>
        )}
        {status === "error" && (
          <p className="font-medium text-red-200">
            Something went wrong. Please try again, or{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline">
              message us on WhatsApp
            </a>
            .
          </p>
        )}
      </div>

      <p className="text-center text-xs text-white/65">
        By submitting you agree to our{" "}
        <Link href="/legal/privacy-policy" className="underline hover:text-white">
          Privacy Policy
        </Link>
        . We never share your data.
      </p>
    </form>
  );
}

export function ConsultationFormSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading form"
      className="glass-strong animate-pulse space-y-4 rounded-3xl p-6 sm:p-8"
    >
      <div className="h-7 w-3/4 rounded-lg bg-white/10" />
      <div className="grid gap-4 sm:grid-cols-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-14 rounded-xl bg-white/10" />
        ))}
      </div>
      <div className="h-28 rounded-xl bg-white/10" />
      <div className="h-14 rounded-xl bg-white/20" />
    </div>
  );
}
