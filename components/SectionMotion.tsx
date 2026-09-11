"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionMotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function SectionMotion({ children, className, delay = 0 }: SectionMotionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
