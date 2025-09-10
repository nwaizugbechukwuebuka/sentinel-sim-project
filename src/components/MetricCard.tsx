import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  trend?: "up" | "down";
  trendValue?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend, 
  trendValue 
}: MetricCardProps) => {
  return (
    <Card className="group relative p-6 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-cyber)] border-border/50">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          {trend && trendValue && (
            <div className={`text-sm font-medium ${
              trend === 'up' ? 'text-cyber-success' : 'text-cyber-danger'
            }`}>
              {trend === 'up' ? '↗' : '↘'} {trendValue}
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="text-2xl font-bold text-foreground">{value}</div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};