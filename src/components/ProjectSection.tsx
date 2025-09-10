import { ReactNode } from "react";

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ProjectSection = ({ title, children, className = "" }: ProjectSectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        {children}
      </div>
    </section>
  );
};