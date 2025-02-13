
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CalculatorInputs } from "./calculator-inputs";
import { CalculatorResults } from "./calculator-results";
import { ProjectInfoCard } from "./project-info-card";
import { Badge } from "@/components/ui/badge";
import { JoinProjectDialog } from "../join-project-dialog";

const ELECTRICITY_RATE = 8.5; // ₹/kWh
const ANNUAL_GENERATION_PER_KW = 1460; // kWh/year
const PRICE_PER_KW = 45000; // ₹/kW
const CREDITS_PER_KWH = 7.5; // ₹/kWh

export function CalculatorSection() {
  const [monthlyBill, setMonthlyBill] = useState(3000);
  const [offsetPercentage, setOffsetPercentage] = useState(50);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const calculations = useMemo(() => {
    // Monthly energy usage in kWh
    const monthlyEnergy = monthlyBill / ELECTRICITY_RATE;
    
    // Required solar capacity in kW with rate adjustment
    const requiredCapacity = (monthlyEnergy * (offsetPercentage / 100) * (ELECTRICITY_RATE / CREDITS_PER_KWH)) / (ANNUAL_GENERATION_PER_KW / 12);
    
    // Monthly production in kWh
    const monthlyProduction = requiredCapacity * (ANNUAL_GENERATION_PER_KW / 12);
    
    // Monthly credits generated
    const monthlyCredits = monthlyProduction * CREDITS_PER_KWH;
    
    // Reservation cost
    const reservationFee = requiredCapacity * PRICE_PER_KW;
    
    // Annual and total savings
    const annualSavings = monthlyCredits * 12;
    const totalSavings = annualSavings * 15; // 15 years project duration

    return {
      requiredCapacity,
      monthlyCredits,
      reservationFee,
      annualSavings,
      totalSavings,
    };
  }, [monthlyBill, offsetPercentage]);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex justify-center mb-4">
              <Badge variant="secondary" className="rounded-full">
                Operational Until 2035
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Digital Solar Savings Calculator
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto px-2">
              Estimate your potential savings with our Soho•195 project. Input your current power bill 
              and desired savings to see how much you could save with digital solar.
            </p>
          </motion.div>

          {/* Calculator Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 sm:gap-8"
            >
              <ProjectInfoCard />
              <div className="bg-card/50 backdrop-blur rounded-lg p-4 sm:p-6 border">
                <CalculatorInputs
                  monthlyBill={monthlyBill}
                  offsetPercentage={offsetPercentage}
                  onBillChange={setMonthlyBill}
                  onOffsetChange={setOffsetPercentage}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card/50 backdrop-blur rounded-lg p-4 sm:p-6 border">
                <CalculatorResults
                  monthlyCredits={calculations.monthlyCredits}
                  reservedCapacity={calculations.requiredCapacity}
                  annualSavings={calculations.annualSavings}
                  totalSavings={calculations.totalSavings}
                  reservationFee={calculations.reservationFee}
                  onReserveClick={() => setIsDialogOpen(true)}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <JoinProjectDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
      />
    </section>
  );
}
