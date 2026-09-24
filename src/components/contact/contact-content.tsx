"use client";

import { motion } from "motion/react";
import { Mail, ExternalLink } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { CONTACTS } from "@/data/contact";

export function ContactContent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="py-4 sm:py-8"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border-2 border-border bg-main text-white font-mono text-xs font-bold shadow-shadow-sm">
          <Mail className="w-3.5 h-3.5 text-white" />
          GET IN TOUCH
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading tracking-tight mb-3">
          Let&apos;s Build Something Together.
        </h1>
        <p className="font-mono text-sm text-foreground/80 max-w-xl">
          Have a project in mind or want to collaborate? Send a message or reach
          out through my socials.
        </p>
      </div>

      {/* Contact form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 order-1">
          <ContactForm />
        </div>

        {/* Contact information */}
        <div className="lg:col-span-5 order-2 flex flex-col gap-4">
          {CONTACTS.map((item) => {
            const Icon = item.icon;

            // If the contact item has a href, render it as a link
            if (item.href) {
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  whileHover={{
                    x: -2,
                    y: -4,
                    transition: { duration: 0.15, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 sm:p-5 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow hover:shadow-shadow-lg hover:bg-main hover:text-white flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="p-2.5 rounded-base border-2 border-border bg-background text-foreground group-hover:bg-secondary-background group-hover:text-foreground shrink-0">
                      <Icon
                        className="w-4 h-4"
                        {...(item.variant ? { variant: item.variant } : {})}
                      />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-mono text-[10px] uppercase text-foreground/70 group-hover:text-white/80">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold truncate">
                        {item.value}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                </motion.a>
              );
            }

            // If the contact item does not have a href, render it as a static div
            return (
              <div
                key={item.label}
                className="p-4 sm:p-5 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex items-center gap-3.5"
              >
                <div className="p-2.5 rounded-base border-2 border-border bg-background text-foreground shrink-0">
                  <Icon
                    className="w-4 h-4"
                    {...(item.variant ? { variant: item.variant } : {})}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-foreground/70">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
