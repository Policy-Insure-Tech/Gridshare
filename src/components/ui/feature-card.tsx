
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl p-6",
        "bg-white/60 border border-gray-100/60",
        "transition-all duration-300",
        "hover:shadow-md hover:bg-white/90 hover:border-gray-200/60",
        "backdrop-blur-sm",
        "animate-appear opacity-0",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div 
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-lg",
            "bg-white/80 group-hover:bg-white transition-all duration-300"
          )}
        >
          <Icon className="h-6 w-6 text-primary/70 group-hover:text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-base text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
