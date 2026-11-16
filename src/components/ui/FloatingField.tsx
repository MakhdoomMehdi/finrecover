"use client";

import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";

interface BaseProps {
  id: string;
  label: string;
  error?: string;
  valid?: boolean;
}

const field =
  "peer w-full rounded-xl border bg-white/[0.06] px-4 pb-2 pt-6 text-base text-white outline-none transition focus:border-brand-tint focus:ring-2 focus:ring-brand-tint/40";
const label =
  "pointer-events-none absolute left-4 top-2 origin-left text-xs font-medium text-white/75 transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-tint";
const floatingLabel =
  "peer-placeholder-shown:top-[1.1rem] peer-placeholder-shown:text-base peer-placeholder-shown:text-white/70";

const borderFor = (error?: string) => (error ? "border-red-300" : "border-white/20");

function ErrorText({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-red-200">
      {error}
    </p>
  );
}

export const FloatingInput = forwardRef<HTMLInputElement, BaseProps & InputHTMLAttributes<HTMLInputElement>>(
  function FloatingInput({ id, label: text, error, valid, required, className = "", ...rest }, ref) {
    return (
      <div>
        <div className="relative">
          <input
            ref={ref}
            id={id}
            placeholder=" "
            required={false}
            aria-required={required}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`${field} ${borderFor(error)} ${valid ? "pr-11" : ""} ${className}`}
            {...rest}
          />
          <label htmlFor={id} className={`${label} ${floatingLabel}`}>
            {text}
            {required && <span aria-hidden="true"> *</span>}
          </label>
          {valid && !error && (
            <CheckCircle2 className="pointer-events-none absolute right-4 top-4 h-5 w-5 text-brand-tint" aria-hidden="true" />
          )}
        </div>
        <ErrorText id={id} error={error} />
      </div>
    );
  }
);

export const FloatingTextarea = forwardRef<
  HTMLTextAreaElement,
  BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>
>(function FloatingTextarea({ id, label: text, error, required, className = "", ...rest }, ref) {
  return (
    <div>
      <div className="relative">
        <textarea
          ref={ref}
          id={id}
          placeholder=" "
          rows={4}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${field} resize-none ${borderFor(error)} ${className}`}
          {...rest}
        />
        <label htmlFor={id} className={`${label} ${floatingLabel}`}>
          {text}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      </div>
      <ErrorText id={id} error={error} />
    </div>
  );
});

export const FloatingSelect = forwardRef<
  HTMLSelectElement,
  BaseProps & SelectHTMLAttributes<HTMLSelectElement> & { options: { value: string; label: string }[] }
>(function FloatingSelect({ id, label: text, error, required, options, className = "", ...rest }, ref) {
  return (
    <div>
      <div className="relative">
        <select
          ref={ref}
          id={id}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          defaultValue=""
          className={`${field} cursor-pointer appearance-none pr-11 ${borderFor(error)} ${className}`}
          {...rest}
        >
          <option value="" disabled className="bg-brand-deep text-white">
            Select…
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value} className="bg-brand-deep text-white">
              {o.label}
            </option>
          ))}
        </select>
        <label htmlFor={id} className={label}>
          {text}
          {required && <span aria-hidden="true"> *</span>}
        </label>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70" aria-hidden="true" />
      </div>
      <ErrorText id={id} error={error} />
    </div>
  );
});
