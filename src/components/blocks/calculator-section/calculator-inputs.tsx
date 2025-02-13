
import { useState } from "react";
import { IndianRupee, Calculator, Percent } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CalculatorInputsProps {
  monthlyBill: number;
  offsetPercentage: number;
  onBillChange: (value: number) => void;
  onOffsetChange: (value: number) => void;
}

export function CalculatorInputs({
  monthlyBill,
  offsetPercentage,
  onBillChange,
  onOffsetChange,
}: CalculatorInputsProps) {
  return (
    <div className="space-y-12">
      {/* Monthly Bill Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <Calculator className="h-5 w-5 text-primary" />
            <label 
              htmlFor="monthlyBill" 
              className="text-base font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            >
              Current Monthly Power Bill
            </label>
          </div>
          <p className="text-sm text-muted-foreground">
            Enter your average monthly electricity expenses
          </p>
        </div>
        <div className="relative">
          <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
          <Input
            id="monthlyBill"
            type="number"
            value={monthlyBill}
            onChange={(e) => onBillChange(Number(e.target.value))}
            className="pl-10 h-12 text-lg font-medium transition-shadow duration-200 hover:shadow-md focus:shadow-lg focus:ring-primary/20 focus:border-primary"
            placeholder="Enter your monthly bill"
          />
        </div>
      </motion.div>

      {/* Offset Percentage Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <Percent className="h-5 w-5 text-primary" />
            <label className="text-base font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Target Savings Percentage
            </label>
          </div>
          <p className="text-sm text-muted-foreground">
            Adjust how much of your bill you want to offset
          </p>
        </div>
        <div className="px-1">
          <Slider
            value={[offsetPercentage]}
            onValueChange={(value) => onOffsetChange(value[0])}
            min={0}
            max={100}
            step={1}
            className="py-4"
          />
          <div className="flex justify-between text-sm mt-2">
            <span className="text-muted-foreground font-medium">0%</span>
            <motion.span 
              key={offsetPercentage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-primary font-semibold"
            >
              {offsetPercentage}%
            </motion.span>
            <span className="text-muted-foreground font-medium">100%</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
