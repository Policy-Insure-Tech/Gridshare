
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  infoNote: string;
  imageSrc: string;
  bgColor: string;
  isReversed?: boolean;
}

export function StepCard({
  number,
  title,
  description,
  infoNote,
  imageSrc,
  bgColor,
  isReversed = false,
}: StepCardProps) {
  const contentAnimation = {
    hidden: { opacity: 0, x: isReversed ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: isReversed ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={cn(
      "grid gap-12 lg:gap-16 items-center",
      "lg:grid-cols-2",
      isReversed && "lg:[&>div:first-child]:order-last"
    )}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={contentAnimation}
        className="space-y-8"
      >
        <div className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-400">Step</span>
            <span className="text-5xl font-bold text-primary">{number}</span>
          </div>
          
          <h3 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            {title}
          </h3>
        </div>

        <p className="text-xl text-gray-600 leading-relaxed">
          {description}
        </p>

        <div className="flex items-start gap-3 bg-green-50/50 border border-green-100 rounded-xl p-4">
          <InfoIcon className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
          <p className="text-base text-gray-600">{infoNote}</p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={imageAnimation}
        className={cn(
          "aspect-[1/1] rounded-2xl overflow-hidden shadow-lg p-8",
          bgColor
        )}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
}
