
"use client";

import { FileText, Clock, Bot, Cpu, Lightbulb, TrendingUp, Handshake, Sprout, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./animate-on-scroll";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const BeforeIcon = ({ icon, label, className }: { icon: React.ReactNode, label: string, className?: string }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
      {icon}
    </div>
    <span className={`text-xs font-medium ${className}`}>{label}</span>
  </div>
);


export default function TransformationDiagram() {
  return (
    <div className="my-24">
      <AnimateOnScroll animationClass="animate-slide-in-up">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 p-4">
            {/* Before State */}
            <div className="relative w-full md:flex-1 p-2 rounded-2xl border border-transparent">
              <GlowingEffect spread={60} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative h-full flex flex-col items-center p-6 rounded-xl bg-secondary/30 border border-border">
                  <h3 className="text-lg font-bold mb-6 text-muted-foreground">Before: Operational Drag</h3>
                  <div className="grid grid-cols-2 gap-6 w-full">
                      <BeforeIcon icon={<FileText className="w-6 h-6 text-muted-foreground/80"/>} label="Manual Tasks" className="text-muted-foreground/80" />
                      <BeforeIcon icon={<Clock className="w-6 h-6 text-muted-foreground/80"/>} label="Wasted Time" className="text-muted-foreground/80" />
                      <BeforeIcon icon={<Bot className="w-6 h-6 text-muted-foreground/80" />} label="Repetitive Work" className="text-muted-foreground/80" />
                      <div className="flex flex-col items-center gap-2 text-center text-muted-foreground/80">
                          <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                          </div>
                          <span className="text-xs font-medium">Burnout</span>
                      </div>
                  </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex md:hidden flex-col items-center text-blue-500 animate-pulse rotate-90">
                <ArrowRight className="w-8 h-8" />
            </div>
            <div className="hidden md:flex flex-col items-center text-blue-500 animate-pulse">
                <ArrowRight className="w-12 h-12" />
            </div>


            {/* Coreveil Engine */}
            <div className="relative w-full md:w-auto p-2 rounded-full border border-transparent">
               <GlowingEffect spread={100} glow={true} disabled={false} proximity={100} inactiveZone={0.01} borderWidth={2} />
               <div className="relative flex flex-col items-center p-8 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border-2 border-blue-500 shadow-xl shadow-blue-500/20">
                  <Cpu className="w-16 h-16 text-blue-400 mb-2" />
                  <h3 className="text-xl font-bold text-gradient-animate">Coreveil AI</h3>
                  <p className="text-sm text-muted-foreground">Automation Engine</p>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex md:hidden flex-col items-center text-purple-500 animate-pulse rotate-90">
                <ArrowRight className="w-8 h-8" />
            </div>
             <div className="hidden md:flex flex-col items-center text-purple-500 animate-pulse">
                <ArrowRight className="w-12 h-12" />
            </div>

            {/* After State */}
            <div className="relative w-full md:flex-1 p-2 rounded-2xl border border-transparent">
              <GlowingEffect spread={60} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative h-full flex flex-col items-center p-6 rounded-xl bg-secondary/30 border border-border">
                  <h3 className="text-lg font-bold mb-6 text-foreground">After: Strategic Growth</h3>
                  <div className="grid grid-cols-2 gap-6 w-full">
                      <BeforeIcon icon={<Lightbulb className="w-6 h-6 text-primary"/>} label="Innovation" className="text-foreground" />
                      <BeforeIcon icon={<TrendingUp className="w-6 h-6 text-primary"/>} label="Strategy" className="text-foreground" />
                      <BeforeIcon icon={<Handshake className="w-6 h-6 text-primary"/>} label="Relationships" className="text-foreground" />
                      <BeforeIcon icon={<Sprout className="w-6 h-6 text-primary"/>} label="Growth" className="text-foreground" />
                  </div>
              </div>
            </div>

        </div>
      </AnimateOnScroll>
    </div>
  );
}
