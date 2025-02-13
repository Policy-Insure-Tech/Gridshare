"use client";

import { Button } from "@/components/ui/button";
import { Building2Icon, SunIcon, LineChartIcon, ArrowRight } from "lucide-react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { cn } from "@/lib/utils";
import { FeatureCard } from "@/components/ui/feature-card";
import { useState } from "react";
import { RegistrationDialog } from "@/components/blocks/registration-dialog";

export function HeroSection() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-8 sm:py-16 md:py-24 px-4",
        "fade-bottom overflow-hidden relative"
      )}
    >
      <RetroGrid />
      
      <div className="mx-auto flex max-w-container flex-col gap-6 sm:gap-8 pt-8 sm:pt-16 relative z-20">
        <div className="flex flex-col items-center gap-6 sm:gap-8 text-center">
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold leading-tight text-transparent drop-shadow-2xl">
            Solar Power Without Panels
          </h1>

          <p className="text-sm sm:text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground md:text-xl px-4">
            Reserve solar farm capacity and save on electricity bills. No installation needed.
          </p>

          <div className="relative z-30 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0 sm:w-auto">
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                console.log("okokko")
                setShowDialog(true)}}
              type="button"
              className="w-full sm:w-auto min-h-[3rem] text-base"
            >
              Join Project
            </Button>
            
            <Button
              variant="glow"
              size="lg"
              asChild
              className="w-full sm:w-auto min-h-[3rem] text-base"
            >
              <a href="#process" className="flex items-center justify-center gap-2">
                How It Works
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:gap-6 pt-8 sm:pt-12 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Building2Icon}
              title="Needs no installation"
              description="No obtrusive structures on roof"
              className="delay-500"
            />
            <FeatureCard
              icon={SunIcon}
              title="Go solar instantly"
              description="3 mins, not the usual 3 months"
              className="delay-700"
            />
            <FeatureCard
              icon={LineChartIcon}
              title="Maximise Savings"
              description="20% more than rooftop solar"
              className="delay-1000"
            />
          </div>
        </div>
      </div>

      <RegistrationDialog 
        open={showDialog}
        onOpenChange={setShowDialog}
      />
    </section>
  );
}