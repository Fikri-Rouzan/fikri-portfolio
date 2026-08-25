"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactSchema, ContactFormData } from "@/lib/schemas/contact";
import { sendContactEmail } from "@/actions/contact";

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
        message: "reCAPTCHA not ready yet. Please try again in a moment.",
      });
      return;
    }

    const token = await executeRecaptcha("contact_form");

    const result = await sendContactEmail({
      formData: data,
      token,
    });

    // Handle the result of the email sending
    if (result.success) {
      setStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });
      reset();
    } else {
      setStatus({
        type: "error",
        message: result.error || "An error occurred while sending the message.",
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
          className={`p-3.5 rounded-base border-2 border-border font-mono text-xs sm:text-sm flex items-center gap-2.5 shadow-[2px_2px_0px_0px_var(--border)] ${
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

      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-name"
            className="font-mono text-xs uppercase tracking-wider text-foreground"
          >
            Name *
          </label>
          <input
            {...register("name")}
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            disabled={isSubmitting}
            className="w-full px-3.5 py-2.5 rounded-base border-2 border-border bg-background text-foreground text-sm font-sans placeholder:text-foreground/40 focus:outline-none focus:shadow-[2px_2px_0px_0px_var(--border)] transition-shadow"
          />
          {errors.name && (
            <span className="font-mono text-[11px] text-red-500 font-bold">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-email"
            className="font-mono text-xs uppercase tracking-wider text-foreground"
          >
            Email *
          </label>
          <input
            {...register("email")}
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            disabled={isSubmitting}
            className="w-full px-3.5 py-2.5 rounded-base border-2 border-border bg-background text-foreground text-sm font-sans placeholder:text-foreground/40 focus:outline-none focus:shadow-[2px_2px_0px_0px_var(--border)] transition-shadow"
          />
          {errors.email && (
            <span className="font-mono text-[11px] text-red-500 font-bold">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-subject"
          className="font-mono text-xs uppercase tracking-wider text-foreground"
        >
          Subject *
        </label>
        <input
          {...register("subject")}
          id="contact-subject"
          type="text"
          autoComplete="off"
          placeholder="Project inquiry..."
          disabled={isSubmitting}
          className="w-full px-3.5 py-2.5 rounded-base border-2 border-border bg-background text-foreground text-sm font-sans placeholder:text-foreground/40 focus:outline-none focus:shadow-[2px_2px_0px_0px_var(--border)] transition-shadow"
        />
        {errors.subject && (
          <span className="font-mono text-[11px] text-red-500 font-bold">
            {errors.subject.message}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="font-mono text-xs uppercase tracking-wider text-foreground"
        >
          Message *
        </label>
        <textarea
          {...register("message")}
          id="contact-message"
          rows={5}
          autoComplete="off"
          placeholder="Tell me about your project..."
          disabled={isSubmitting}
          className="w-full px-3.5 py-2.5 rounded-base border-2 border-border bg-background text-foreground text-sm font-sans placeholder:text-foreground/40 focus:outline-none focus:shadow-[2px_2px_0px_0px_var(--border)] transition-shadow resize-none"
        />
        {errors.message && (
          <span className="font-mono text-[11px] text-red-500 font-bold">
            {errors.message.message}
          </span>
        )}
      </div>

      {/* Submit button */}
      <div className="mt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 py-3 rounded-base border-2 border-border bg-main text-white font-mono text-sm font-bold shadow-shadow hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_var(--border)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--border)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>SENDING...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>SEND MESSAGE</span>
            </>
          )}
        </button>
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
