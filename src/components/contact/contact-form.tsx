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
      className="p-6 sm:p-8 rounded-base border-2 border-border bg-secondary-background shadow-shadow flex flex-col gap-5"
    >
      {/* Status message */}
      {status.type && (
        <div
          className={`p-3.5 rounded-base border-2 border-border font-mono text-xs sm:text-sm flex items-center gap-2.5 shadow-shadow-sm ${
            status.type === "success"
              ? "bg-[#05e17a] text-black"
              : "bg-[#ff4d50] text-white"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      {/* Input fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                className="font-mono text-xs uppercase tracking-wider text-foreground"
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
                  className="w-full px-3.5 py-2.5 rounded-base border-2 border-border bg-background text-foreground text-sm font-sans placeholder:text-foreground/40 focus:outline-none focus:shadow-shadow-sm transition-shadow resize-none"
                />
              ) : (
                <input
                  {...register(field.name)}
                  id={`contact-${field.name}`}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-base border-2 border-border bg-background text-foreground text-sm font-sans placeholder:text-foreground/40 focus:outline-none focus:shadow-shadow-sm transition-shadow"
                />
              )}

              {fieldError && (
                <span className="font-mono text-[11px] text-red-500 font-bold">
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
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </div>
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
