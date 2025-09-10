import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Zap } from "lucide-react";
import heroImage from "@/assets/soc-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="SOC Command Center" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Next-Gen{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SOC Simulation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced Security Operations Center environment demonstrating real-time threat detection, 
            incident response, and automated security workflows aligned with MITRE ATT&CK framework.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <TrendingUp className="mr-2 h-5 w-5" />
              View Project Details
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3">
              <Zap className="mr-2 h-5 w-5" />
              Live Demo
            </Button>
          </div>

          {/* Key Stats Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-cyber-success mb-2">3min</div>
              <div className="text-sm text-muted-foreground">Detection Time</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-cyber-secondary mb-2">5/5</div>
              <div className="text-sm text-muted-foreground">Attacks Contained</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-cyber-warning mb-2">30%</div>
              <div className="text-sm text-muted-foreground">False Positive Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};