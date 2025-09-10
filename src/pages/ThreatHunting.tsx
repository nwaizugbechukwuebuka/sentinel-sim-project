import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import { MetricCard } from "@/components/MetricCard";
import { TechBadge } from "@/components/TechBadge";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Target, 
  Zap, 
  TrendingDown, 
  Clock, 
  AlertTriangle,
  Shield,
  Network,
  Eye,
  FileText,
  CheckCircle,
  Activity,
  Database,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const ThreatHunting = () => {
  const keyMetrics = [
    {
      title: "Investigation Time Reduced",
      value: "40%",
      description: "Faster analyst investigation through automation",
      icon: Clock,
      trend: "down" as const,
      trendValue: "40%"
    },
    {
      title: "Hidden Threats Detected", 
      value: "8/8",
      description: "All persistence techniques successfully identified",
      icon: Eye,
      trend: "up" as const,
      trendValue: "100%"
    },
    {
      title: "Coverage Improvement",
      value: "25%",
      description: "Enhanced detection for covert exfiltration", 
      icon: TrendingDown,
      trend: "up" as const,
      trendValue: "25%"
    }
  ];

  const huntingObjectives = [
    {
      icon: Database,
      title: "Persistence Hunting",
      description: "Detect suspicious registry keys, scheduled tasks, and WMI events for persistence mechanisms"
    },
    {
      icon: Network,
      title: "Lateral Movement Hunting", 
      description: "Trace remote logins (RDP, SMB, PsExec) and anomalous Kerberos requests (Pass-the-Ticket)"
    },
    {
      icon: Activity,
      title: "C2 Communication Hunting",
      description: "Identify beaconing patterns in network traffic with regular intervals and low-entropy domains"
    },
    {
      icon: FileText,
      title: "Data Exfiltration Detection",
      description: "Hunt for large outbound transfers and DNS tunneling techniques"
    }
  ];

  const executionWorkflow = [
    {
      category: "Lab Setup",
      items: [
        "Configured Splunk SIEM for Windows & Linux log ingestion",
        "Deployed Sysmon for enriched endpoint telemetry",
        "Integrated Wireshark & Zeek for network traffic visibility"
      ]
    },
    {
      category: "Attack Simulation", 
      items: [
        "Created persistence via registry Run keys and scheduled tasks",
        "Used Mimikatz for credential dumping and simulated Pass-the-Ticket attacks",
        "Set up Metasploit C2 beacon to mimic APT-style command-and-control"
      ]
    },
    {
      category: "Threat Hunting Queries",
      items: [
        "Splunk queries for registry modifications linked to persistence",
        "Detection of abnormal PowerShell commands (encodedcommand, iex)",
        "Kerberos TGS requests outside working hours identification",
        "Beaconing traffic analysis (interval-based HTTP POSTs)"
      ]
    },
    {
      category: "Intelligence Enrichment",
      items: [
        "Queried VirusTotal and AbuseIPDB for suspicious IOCs",
        "Applied MITRE ATT&CK mapping for each detection (T1053, T1078)",
        "Built automated enrichment pipelines for faster triage"
      ]
    }
  ];

  const technologies = {
    siem: ["Splunk", "Sysmon", "Windows Event Logs"],
    network: ["Zeek", "Wireshark"],
    'threat-sim': ["Metasploit", "Mimikatz", "Empire"],
    'threat-intel': ["VirusTotal API", "AbuseIPDB"],
    frameworks: ["MITRE ATT&CK", "NIST Incident Response"]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to SOC Project
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Search className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Advanced Threat Hunting Lab
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Detecting Stealthy Persistence and Lateral Movement
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Proactive Threat Detection
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                APT Simulation
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                MITRE ATT&CK Aligned
              </Badge>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Metrics Section */}
      <ProjectSection title="Key Outcomes & Metrics">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </ProjectSection>

      {/* Why This Project */}
      <ProjectSection title="Why This Project?" className="bg-card/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 text-center border-border/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <div className="p-3 rounded-lg bg-cyber-success/10 text-cyber-success inline-block mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Proactive, Not Reactive</h3>
            <p className="text-sm text-muted-foreground">
              Shows ability to hunt beyond traditional SOC monitoring
            </p>
          </Card>
          
          <Card className="p-6 text-center border-border/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <div className="p-3 rounded-lg bg-cyber-warning/10 text-cyber-warning inline-block mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Real-World Alignment</h3>
            <p className="text-sm text-muted-foreground">
              Simulates APT tactics used by groups like APT29/Cozy Bear
            </p>
          </Card>
          
          <Card className="p-6 text-center border-border/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <div className="p-3 rounded-lg bg-primary/10 text-primary inline-block mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Recruiter Appeal</h3>
            <p className="text-sm text-muted-foreground">
              Demonstrates initiative, depth in analytics, and hands-on security mindset
            </p>
          </Card>
        </div>
      </ProjectSection>

      {/* Hunting Objectives */}
      <ProjectSection title="Hunting Objectives">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {huntingObjectives.map((objective, index) => (
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

      {/* Execution & Workflow */}
      <ProjectSection title="Execution & Workflow" className="bg-card/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {executionWorkflow.map((workflow, index) => (
            <Card key={index} className="p-6 border-border/50">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent mr-3">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{workflow.category}</h3>
              </div>
              <ul className="space-y-3">
                {workflow.items.map((item, itemIndex) => (
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
      <ProjectSection title="Tools & Technologies Used">
        <div className="space-y-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4 capitalize">
                {category.replace('-', ' & ')}
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
      <ProjectSection title="Framework Alignment" className="bg-card/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 text-center border-border/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <div className="p-4 rounded-full bg-cyber-warning/10 text-cyber-warning inline-block mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">MITRE ATT&CK Framework</h3>
            <p className="text-muted-foreground">
              Mapped all hunting queries and detections to specific ATT&CK techniques 
              including T1053 (Scheduled Tasks) and T1078 (Valid Accounts).
            </p>
          </Card>

          <Card className="p-8 text-center border-border/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <div className="p-4 rounded-full bg-cyber-secondary/10 text-cyber-secondary inline-block mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">NIST Incident Response</h3>
            <p className="text-muted-foreground">
              Integrated threat hunting activities into the NIST incident response lifecycle 
              for proactive threat detection and containment.
            </p>
          </Card>
        </div>
      </ProjectSection>

      {/* Footer */}
      <footer className="py-12 bg-card/50 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
              <Search className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Advanced Threat Hunting Lab</h3>
          <p className="text-muted-foreground mb-4">
            Detecting Stealthy Persistence and Lateral Movement
          </p>
          <Badge variant="outline" className="border-primary/30 text-primary">
            Proactive Threat Detection
          </Badge>
        </div>
      </footer>
    </div>
  );
};

export default ThreatHunting;