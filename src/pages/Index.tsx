import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import { MetricCard } from "@/components/MetricCard";
import { TechBadge } from "@/components/TechBadge";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Target, 
  Zap, 
  TrendingDown, 
  Clock, 
  AlertTriangle,
  Database,
  Network,
  Search,
  Bot,
  Eye,
  FileText,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const keyMetrics = [
    {
      title: "Detection Time Reduced",
      value: "< 3min",
      description: "From 15 minutes to under 3 minutes",
      icon: Clock,
      trend: "down" as const,
      trendValue: "80%"
    },
    {
      title: "Attacks Contained", 
      value: "5/5",
      description: "100% success rate in lab environment",
      icon: Shield,
      trend: "up" as const,
      trendValue: "100%"
    },
    {
      title: "False Positives Reduced",
      value: "30%",
      description: "Enhanced analyst workflow efficiency", 
      icon: TrendingDown,
      trend: "down" as const,
      trendValue: "30%"
    }
  ];

  const objectives = [
    {
      icon: Database,
      title: "Design & Architecture",
      description: "Build a mini SOC environment with Splunk SIEM for log ingestion and correlation"
    },
    {
      icon: Target,
      title: "Threat Detection", 
      description: "Simulate real-world attacks (phishing, brute force, malware beaconing) in controlled lab"
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Implement detection and response playbooks for common incidents"
    },
    {
      icon: Search,
      title: "Threat Intelligence",
      description: "Enrich alerts using external feeds (VirusTotal, AbuseIPDB, AlienVault OTX)"
    },
    {
      icon: Bot,
      title: "Automation",
      description: "Use Python scripts to auto-flag suspicious IPs, domains, and hashes"
    }
  ];

  const deliverables = [
    {
      category: "SOC Setup",
      items: [
        "Deployed Splunk SIEM to collect logs from Windows Server, Linux, and network devices",
        "Configured Snort IDS for packet-level threat detection"
      ]
    },
    {
      category: "Attack Simulation", 
      items: [
        "Simulated phishing campaigns and credential harvesting with Social Engineering Toolkit (SET)",
        "Executed brute-force and port scanning attacks via Hydra and Nmap",
        "Introduced malware samples in sandboxed environment for detection testing"
      ]
    },
    {
      category: "Detection & Response",
      items: [
        "Created Splunk correlation rules to detect brute force attempts, privilege escalation, and lateral movement", 
        "Built incident response runbooks covering triage, containment, eradication, and recovery",
        "Used Wireshark for forensic packet analysis"
      ]
    },
    {
      category: "Reporting & Visualization",
      items: [
        "Designed SOC dashboards displaying attack trends, active incidents, and analyst workload",
        "Mapped alerts and responses to the MITRE ATT&CK framework for coverage validation"
      ]
    }
  ];

  const technologies = {
    siem: ["Splunk"],
    forensics: ["Wireshark", "Volatility"],
    'threat-intel': ["VirusTotal", "AlienVault OTX", "AbuseIPDB"], 
    'attack-sim': ["Metasploit", "Kali Linux", "Nmap", "Hydra"],
    automation: ["Python", "API Integrations", "Alert Enrichment Scripts"]
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Key Metrics Section */}
      <ProjectSection title="Key Outcomes & Metrics">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </ProjectSection>

      {/* Project Objectives */}
      <ProjectSection title="Project Objectives" className="bg-card/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <Card key={index} className="p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300 border-border/50">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <objective.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{objective.title}</h3>
                  <p className="text-sm text-muted-foreground">{objective.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ProjectSection>

      {/* Project Execution */}
      <ProjectSection title="Project Execution & Deliverables">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {deliverables.map((deliverable, index) => (
            <Card key={index} className="p-6 border-border/50">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent mr-3">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{deliverable.category}</h3>
              </div>
              <ul className="space-y-3">
                {deliverable.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </ProjectSection>

      {/* Technologies Used */}
      <ProjectSection title="Tools & Technologies Used" className="bg-card/20">
        <div className="space-y-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4 capitalize">
                {category.replace('-', ' ')}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techs.map((tech, index) => (
                  <TechBadge key={index} name={tech} category={category as any} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Framework Alignment */}
      <ProjectSection title="Framework Alignment">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 text-center border-border/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <div className="p-4 rounded-full bg-cyber-warning/10 text-cyber-warning inline-block mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">MITRE ATT&CK Framework</h3>
            <p className="text-muted-foreground">
              Mapped all alerts and response procedures to MITRE ATT&CK tactics and techniques 
              for comprehensive threat coverage validation.
            </p>
          </Card>

          <Card className="p-8 text-center border-border/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <div className="p-4 rounded-full bg-cyber-secondary/10 text-cyber-secondary inline-block mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">NIST Cybersecurity Framework</h3>
            <p className="text-muted-foreground">
              Implemented detection, response, and recovery capabilities aligned with NIST CSF 
              core functions: Identify, Protect, Detect, Respond, Recover.
            </p>
          </Card>
        </div>
      </ProjectSection>

      {/* Footer */}
      <footer className="py-12 bg-card/50 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Capstone SOC Project</h3>
          <p className="text-muted-foreground mb-4">
            Next-Generation Security Operations Center Simulation
          </p>
          <Badge variant="outline" className="border-primary/30 text-primary">
            Cybersecurity Excellence
          </Badge>
        </div>
      </footer>
    </div>
  );
};

export default Index;