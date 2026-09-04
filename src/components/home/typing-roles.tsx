"use client";

import * as React from "react";
import { motion } from "motion/react";

const ROLES = ["Data Scientist", "Fullstack Web Developer"];

export function TypingRoles() {
  const [text, setText] = React.useState("");
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    // Set a timeout to handle typing and deleting
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setText(
          currentRole.substring(
            0,
            isDeleting ? text.length - 1 : text.length + 1,
          ),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="font-mono text-base sm:text-xl font-bold text-main flex items-center gap-1.5 min-h-8">
      <span>{text}</span>
      <motion.span
        animate={{
          opacity: [1, 0, 1],
          scaleY: [1, 1.25, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-0.5 sm:w-1 h-4 sm:h-5 bg-main inline-block origin-center"
      />
    </div>
  );
}
