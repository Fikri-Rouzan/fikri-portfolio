"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { motion } from "motion/react";
import { contactSchema, ContactFormData } from "@/lib/schemas/contact";
import { sendContactEmail } from "@/actions/contact";
import { FORM_FIELDS } from "@/data/contact";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

function FormFields() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [status, setStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormData) => {
    setStatus({ type: null, message: "" });

    if (!executeRecaptcha) {
      setStatus({
        type: "error",
        message: "reCAPTCHA is not ready yet. Please try again in a moment.",
      });
      return;
    }

    try {
      const token = await executeRecaptcha("contact_form");

      const result = await sendContactEmail({
        formData: data,
        token,
      });

      if (result.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        reset();
      } else {
        setStatus({
          type: "error",
          message:
            result.error ||
            "Something went wrong while sending your message. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "reCAPTCHA verification timed out. Please try again.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="p-4 sm:p-6 lg:p-8 rounded-base border-2 border-border bg-secondary-background shadow-shadow flex flex-col gap-4 sm:gap-5"
    >
      {/* Status message */}
      <div role="status" aria-live="polite" className="empty:hidden">
        {status.type && (
          <div
            className={`p-3 sm:p-3.5 rounded-base border-2 border-border font-mono text-xs sm:text-sm flex items-center gap-2.5 shadow-shadow-sm text-black ${
              status.type === "success" ? "bg-[#a6e3a1]" : "bg-[#f4a3a5]"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            )}
            <span>{status.message}</span>
          </div>
        )}
      </div>

      {/* Input fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {FORM_FIELDS.map((field) => {
          const fieldError = errors[field.name];

          return (
            <div
              key={field.name}
              className={`flex flex-col gap-1.5 ${
                field.fullWidth ? "sm:col-span-2" : "col-span-1"
              }`}
            >
              <label
                htmlFor={`contact-${field.name}`}
                className="font-mono text-xs sm:text-sm uppercase tracking-wider text-foreground"
              >
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  {...register(field.name)}
                  id={`contact-${field.name}`}
                  rows={field.rows || 5}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  disabled={isSubmitting}
                  aria-invalid={fieldError ? true : undefined}
                  aria-describedby={
                    fieldError ? `contact-${field.name}-error` : undefined
                  }
                  className="w-full px-3.5 py-2.5 rounded-base border-2 border-border bg-background text-foreground text-base sm:text-sm font-sans placeholder:text-foreground/40 focus-visible:shadow-shadow-sm focus:outline-none transition-shadow resize-none disabled:opacity-60"
                />
              ) : (
                <input
                  {...register(field.name)}
                  id={`contact-${field.name}`}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  spellCheck={field.type === "email" ? false : undefined}
                  placeholder={field.placeholder}
                  disabled={isSubmitting}
                  aria-invalid={fieldError ? true : undefined}
                  aria-describedby={
                    fieldError ? `contact-${field.name}-error` : undefined
                  }
                  className="w-full px-3.5 py-3 sm:py-2.5 rounded-base border-2 border-border bg-background text-foreground text-base sm:text-sm font-sans placeholder:text-foreground/40 focus-visible:shadow-shadow-sm focus:outline-none transition-shadow disabled:opacity-60"
                />
              )}

              {fieldError && (
                <span
                  id={`contact-${field.name}-error`}
                  className="font-mono text-xs text-red-600 dark:text-red-400 font-bold"
                >
                  {fieldError.message}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit button */}
      <div className="mt-2">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={
            !isSubmitting
              ? {
                  x: -2,
                  y: -3,
                  transition: { duration: 0.15, ease: "easeOut" },
                }
              : {}
          }
          whileTap={!isSubmitting ? { scale: 0.96 } : {}}
          className="w-full sm:w-auto px-6 py-3 rounded-base border-2 border-border bg-main text-white font-mono text-sm font-bold shadow-shadow hover:shadow-shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2
                className="w-4 h-4 motion-safe:animate-spin"
                aria-hidden="true"
              />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </div>

      <p className="font-sans text-xs text-foreground/70 text-pretty">
        This site is protected by reCAPTCHA. The Google{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-main"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-main"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </form>
  );
}

export function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <FormFields />
    </GoogleReCaptchaProvider>
  );
}
