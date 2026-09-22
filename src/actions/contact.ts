"use server";

import { Resend } from "resend";
import { contactSchema, ContactFormData } from "@/lib/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendContactPayload {
  formData: ContactFormData;
  token: string;
}

export async function sendContactEmail({
  formData,
  token,
}: SendContactPayload) {
  const validation = contactSchema.safeParse(formData);

  if (!validation.success) {
    return {
      success: false,
      error: "Invalid form submission. Please check your input fields.",
    };
  }

  if (!token) {
    return {
      success: false,
      error: "reCAPTCHA verification missing. Please refresh and try again.",
    };
  }

  // Verify the reCAPTCHA token with Google's API
  try {
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      },
    );

    const recaptchaData = await recaptchaRes.json();

    // Check if the reCAPTCHA verification was successful and if the score is above a certain threshold
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return {
        success: false,
        error: "reCAPTCHA verification failed. Please try again.",
      };
    }

    const { name, email, subject, message } = validation.data;

    // Send the email using Resend
    const { error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ["fikrirzn@gmail.com"],
      replyTo: email,
      subject: `${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}
