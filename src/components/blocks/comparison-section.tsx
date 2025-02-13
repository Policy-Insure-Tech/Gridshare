
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const ComparisonItem = ({
  title,
  gridshare,
  rooftop,
  isPositive = true,
  delay = 0,
}: {
  title: string;
  gridshare: string;
  rooftop: string;
  isPositive?: boolean;
  delay?: number;
}) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.tr
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted group"
    >
      <TableCell className="text-center p-3 sm:p-4 md:p-6">
        <div className="flex items-center justify-start gap-2 sm:gap-4 md:gap-6 transition-transform duration-200 group-hover:translate-x-1">
          <div className="min-w-[32px] sm:min-w-[40px] flex justify-center">
            <div className="p-1.5 sm:p-2 rounded-full bg-emerald-100">
              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
            </div>
          </div>
          <span className="font-medium text-foreground text-sm sm:text-base text-left">{gridshare}</span>
        </div>
      </TableCell>
      {!isMobile && (
        <TableCell className="p-3 sm:p-4 md:p-6 text-center hidden sm:table-cell">
          <span className="font-medium text-slate-700">{title}</span>
        </TableCell>
      )}
      <TableCell className="text-center p-3 sm:p-4 md:p-6">
        <div className="flex items-center justify-start gap-2 sm:gap-4 md:gap-6">
          <div className="min-w-[32px] sm:min-w-[40px] flex justify-center">
            <div className={cn(
              "p-1.5 sm:p-2 rounded-full",
              isPositive ? "bg-emerald-100" : "bg-red-100"
            )}>
              {isPositive ? (
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
              ) : (
                <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
              )}
            </div>
          </div>
          <span className="text-slate-600 text-sm sm:text-base text-left">{rooftop}</span>
        </div>
      </TableCell>
    </motion.tr>
  );
};

export function ComparisonSection() {
  const isMobile = useIsMobile();
  
  return (
    <section className={cn(
      "bg-background text-foreground relative",
      "py-12 sm:py-16 md:py-24 px-4 overflow-hidden"
    )}>
      <RetroGrid />
      
      <div className="mx-auto max-w-[1000px] relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-appear">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2 sm:mb-3">
            NEEDS NO INSTALLATION
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
            GridShare: Energy Beyond Limits
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Compare the benefits of our GridShare solution with traditional rooftop installations
            and see why more people are choosing the future of solar energy.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-xl border bg-card/50 backdrop-blur-sm p-3 sm:p-4 md:p-6 shadow-xl ring-1 ring-inset ring-muted/10 animate-appear opacity-0 delay-100">
          <Table>
            <TableHeader>
              <TableRow className="border-b-2">
                <TableCell className="flex-1 p-3 sm:p-4 md:p-6 text-center">
                  <div className="font-semibold text-xl sm:text-2xl md:text-3xl">
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      GridShare
                    </span>
                  </div>
                </TableCell>
                {!isMobile && (
                  <TableCell className="flex-1 p-3 sm:p-4 md:p-6 text-center hidden sm:table-cell">
                    <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800">Features</span>
                  </TableCell>
                )}
                <TableCell className="flex-1 p-3 sm:p-4 md:p-6 text-center">
                  <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-500">Rooftop Solar</span>
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <ComparisonItem 
                title="Installation"
                gridshare="No installation needed - Start saving immediately"
                rooftop="Requires roof installation - Takes weeks"
                isPositive={false}
                delay={0.1}
              />
              <ComparisonItem 
                title="Initial Cost"
                gridshare="Low entry cost - Pay as you go"
                rooftop="High upfront investment"
                isPositive={false}
                delay={0.2}
              />
              <ComparisonItem 
                title="Maintenance"
                gridshare="Professionally maintained by experts"
                rooftop="Owner responsible for maintenance"
                isPositive={false}
                delay={0.3}
              />
              <ComparisonItem 
                title="Scalability"
                gridshare="Scale up or down anytime"
                rooftop="Fixed capacity - Limited by roof space"
                isPositive={false}
                delay={0.4}
              />
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
