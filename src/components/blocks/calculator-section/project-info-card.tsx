
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Building } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectInfoCardProps {
  className?: string;
}

export function ProjectInfoCard({ className }: ProjectInfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("", className)}
    >
      <Card className="p-6 bg-card/50 backdrop-blur">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Voyager 25</h3>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Mumbai, Maharashtra</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Building className="h-4 w-4" />
              <span>Managed by JRP Eco Solutions</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 py-4 border-y">
            <div className="space-y-1">
              <span className="text-lg font-semibold">25.3 KW</span>
              <p className="text-sm text-muted-foreground">Project Capacity</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-lg font-semibold">Oct 2039</span>
              </div>
              <p className="text-sm text-muted-foreground">Valid Until</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
