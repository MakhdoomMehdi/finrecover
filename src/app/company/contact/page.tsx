"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, LINKEDIN_URL, WHATSAPP_URL, WHATSAPP_NUMBER, SITE_NAME } from "@/lib/constants";
import { SectionReveal } from "@/components/ui/SectionReveal";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const services = [
  "Loan Recovery & Debt Handling",
  "Workforce Outsourcing (BPO)",
  "Automated Recovery & CRM Systems",
  "Business Consultancy",
  "General Enquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate form submission — replace with real API endpoint
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-32 pb-20 relative overflow-hidden">
        <div className="container-tight relative z-10">
          <SectionReveal>
            <span className="badge bg-white/15 text-sky-light mb-5">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 max-w-3xl leading-tight">
              Let&apos;s Start a{" "}
              <span className="bg-gradient-to-r from-amber to-white bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Whether you need a free portfolio assessment, want to discuss outsourcing, or simply have a question — our team is ready to help.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <SectionReveal>
                <h2 className="text-2xl font-display font-bold text-navy mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-sky-light/20 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-mid group-hover:text-white transition-all">
                      <Mail className="w-5 h-5 text-sky-mid group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-navy/80 font-medium uppercase tracking-widest mb-0.5">Email</div>
                      <div className="text-navy font-semibold text-sm group-hover:text-sky-mid transition-colors">{CONTACT_EMAIL}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange group-hover:text-white transition-all">
                      <Phone className="w-5 h-5 text-orange group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-navy/80 font-medium uppercase tracking-widest mb-0.5">Phone</div>
                      <div className="text-navy font-semibold text-sm group-hover:text-orange transition-colors">{CONTACT_PHONE}</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <div className="text-xs text-navy/80 font-medium uppercase tracking-widest mb-0.5">Address</div>
                      <div className="text-navy font-semibold text-sm">{CONTACT_ADDRESS}</div>
                    </div>
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-all">
                      <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-navy/80 font-medium uppercase tracking-widest mb-0.5">WhatsApp</div>
                      <div className="text-navy font-semibold text-sm group-hover:text-green-600 transition-colors">{WHATSAPP_NUMBER}</div>
                    </div>
                  </a>

                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A66C2] transition-all">
                      <LinkedInIcon className="w-5 h-5 text-[#0A66C2] group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-navy/80 font-medium uppercase tracking-widest mb-0.5">LinkedIn</div>
                      <div className="text-navy font-semibold text-sm group-hover:text-[#0A66C2] transition-colors">{SITE_NAME}</div>
                    </div>
                  </a>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <div className="bg-navy rounded-2xl p-7 text-white">
                  <h3 className="font-display font-bold text-lg mb-3">Response Time</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We respond to all enquiries within <strong className="text-amber">24 business hours</strong>. For urgent matters, please call us directly.
                  </p>
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <div className="text-xs text-white/65 uppercase tracking-widest mb-1">Office Hours</div>
                    <div className="text-sm text-white/80">Monday – Saturday, 9:00 AM – 6:00 PM PKT</div>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <SectionReveal delay={0.1}>
                {submitted ? (
                  <div className="card-base text-center py-16">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-5" />
                    <h3 className="font-display font-bold text-navy text-2xl mb-3">Message Received!</h3>
                    <p className="text-navy/80 mb-6">
                      Thank you for reaching out. A member of our team will be in touch within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 bg-sky-mid text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-navy transition-colors text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="card-base space-y-5">
                    <h2 className="text-xl font-display font-bold text-navy mb-2">Send Us a Message</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-navy/80 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          {...register("name")}
                          className="w-full px-4 py-2.5 rounded-lg border border-sky-light/50 focus:border-sky-mid focus:ring-2 focus:ring-sky-mid/20 outline-none text-navy text-sm transition-all"
                          placeholder="John Smith"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-navy/80 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          className="w-full px-4 py-2.5 rounded-lg border border-sky-light/50 focus:border-sky-mid focus:ring-2 focus:ring-sky-mid/20 outline-none text-navy text-sm transition-all"
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold text-navy/80 uppercase tracking-wider mb-1.5">
                        Company Name *
                      </label>
                      <input
                        {...register("company")}
                        className="w-full px-4 py-2.5 rounded-lg border border-sky-light/50 focus:border-sky-mid focus:ring-2 focus:ring-sky-mid/20 outline-none text-navy text-sm transition-all"
                        placeholder="Your Organisation"
                      />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                    </div>

                    {/* Service interest */}
                    <div>
                      <label className="block text-xs font-semibold text-navy/80 uppercase tracking-wider mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        {...register("service")}
                        className="w-full px-4 py-2.5 rounded-lg border border-sky-light/50 focus:border-sky-mid focus:ring-2 focus:ring-sky-mid/20 outline-none text-navy text-sm transition-all bg-white"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-navy/80 uppercase tracking-wider mb-1.5">
                        Message *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-lg border border-sky-light/50 focus:border-sky-mid focus:ring-2 focus:ring-sky-mid/20 outline-none text-navy text-sm transition-all resize-none"
                        placeholder="Tell us about your challenge or what you're looking to achieve..."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-orange text-white font-bold px-8 py-3.5 rounded-xl hover:bg-amber hover:text-navy transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-navy/80 text-center">
                      By submitting this form you agree to our{" "}
                      <a href="/legal/privacy-policy" className="underline hover:text-sky-mid transition-colors">Privacy Policy</a>.
                    </p>
                  </form>
                )}
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
