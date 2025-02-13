
import { motion } from "framer-motion";
import { IndianRupee, Calendar, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CalculatorResultsProps {
  monthlyCredits: number;
  reservedCapacity: number;
  annualSavings: number;
  totalSavings: number;
  reservationFee: number;
  onReserveClick: () => void;
}

export function CalculatorResults({
  monthlyCredits,
  reservedCapacity,
  annualSavings,
  totalSavings,
  reservationFee,
  onReserveClick,
}: CalculatorResultsProps) {
  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="space-y-6">
      {/* Primary Savings Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-orange-50 via-orange-100/50 to-white">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Monthly Credits</p>
              <p className="text-4xl font-bold text-foreground">
                {formatCurrency(monthlyCredits)}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {[
          {
            label: "Reserved Capacity",
            value: `${reservedCapacity.toFixed(2)} kW`,
            icon: <Zap className="h-4 w-4" />,
          },
          {
            label: "Annual Savings",
            value: formatCurrency(annualSavings),
            icon: <Calendar className="h-4 w-4" />,
          },
          {
            label: "Total Savings (15y)",
            value: formatCurrency(totalSavings),
            icon: <IndianRupee className="h-4 w-4" />,
          },
          {
            label: "Return (XIRR)",
            value: "~11.5%",
            icon: <Calendar className="h-4 w-4" />,
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  {stat.icon}
                  <span className="text-xs">{stat.label}</span>
                </div>
                <p className="text-lg font-semibold">{stat.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Reservation Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="bg-card">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Reservation Fee</p>
                <p className="text-2xl font-bold">{formatCurrency(reservationFee)}</p>
              </div>
              <Badge variant="secondary">EMI Available</Badge>
            </div>
            <Button 
              className="w-full" 
              size="lg"
              onClick={onReserveClick}
            >
              Reserve Your Share
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
