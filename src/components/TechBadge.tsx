import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  name: string;
  category: 'siem' | 'forensics' | 'threat-intel' | 'attack-sim' | 'automation';
}

const categoryStyles = {
  siem: "bg-cyber-primary/20 text-cyber-primary border-cyber-primary/30",
  forensics: "bg-cyber-secondary/20 text-cyber-secondary border-cyber-secondary/30", 
  'threat-intel': "bg-cyber-accent/20 text-cyber-accent border-cyber-accent/30",
  'attack-sim': "bg-cyber-warning/20 text-cyber-warning border-cyber-warning/30",
  automation: "bg-cyber-success/20 text-cyber-success border-cyber-success/30"
};

export const TechBadge = ({ name, category }: TechBadgeProps) => {
  return (
    <Badge 
      variant="outline" 
      className={`${categoryStyles[category]} hover:scale-105 transition-transform duration-200`}
    >
      {name}
    </Badge>
  );
};