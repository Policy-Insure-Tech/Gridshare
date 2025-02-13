
"use client";

import { motion } from "framer-motion";
import { StepCard } from "@/components/ui/step-card";

const steps = [
  {
    number: 1,
    title: "Reserve Solar",
    description: "Reserve solar you need to offset your monthly power bill from an active project. You get credits for the power produced from your reserved solar panels.",
    infoNote: "1 credit = ₹1 offset on power bill",
    // imageSrc: "/lovable-uploads/931c089e-cc0f-441a-a0e8-2d6e89119b5d.png",
    imageSrc: "../../../public/lovable-uploads/Step 1.png",
    bgColor: "bg-emerald-50",
  },
  {
    number: 2,
    title: "Link Your Account",
    description: "Your GridShare account will monitor and store the credits generated daily. Add your billing details inside the account to use credits from your digital solar. Select from 70+ utility power providers across India available on our platform.",
    infoNote: "You can link multiple billers with your digital solar",
    imageSrc: "../../../public/lovable-uploads/Step 2.png",
    bgColor: "bg-blue-50",
  },
  {
    number: 3,
    title: "Pay Bill",
    description: "Make bill payments through GridShare account to avail credits. You can fully offset your bills with credits and pay nothing, or at times when the power bill is larger than the credits you have, you can pay the balance through preferred payment methods.",
    infoNote: "Credits don't expire, any unused credits can be passed on to later months.",
    imageSrc: "../../../public/lovable-uploads/Step 3.png",
    bgColor: "bg-orange-50",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          {/* Title with orange dots decoration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 sm:gap-4 mb-6"
          >
            <div className="hidden sm:flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F26B3A]" />
              <div className="w-2 h-2 rounded-full bg-[#F26B3A]" />
              <div className="w-2 h-2 rounded-full bg-[#F26B3A]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F26B3A]">
              How It Works
            </h2>
            <div className="hidden sm:flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F26B3A]" />
              <div className="w-2 h-2 rounded-full bg-[#F26B3A]" />
              <div className="w-2 h-2 rounded-full bg-[#F26B3A]" />
            </div>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
          >
            Get started with digital solar in three simple steps. No installation required, just pure savings on your electricity bills.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-20 sm:space-y-32">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              {...step}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
