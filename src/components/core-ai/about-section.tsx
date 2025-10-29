
"use client";

import { CheckCircle, Handshake, Target, Lightbulb } from 'lucide-react';
import AnimateOnScroll from '@/components/core-ai/animate-on-scroll';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';
import React from 'react';
import TransformationDiagram from './transformation-diagram';

const principles = [
  { icon: <CheckCircle className="h-6 w-6" />, title: "Integrity Above All", desc: "We operate with complete transparency. Our contracts are clear, our process is straightforward, and we believe in earning your trust through honesty and exceptional work." },
  { icon: <Handshake className="h-6 w-6" />, title: "A True Partnership Mindset", desc: "When you work with Coreveil, you gain a strategic partner. We invest ourselves in understanding your goals and align our solutions directly with the outcomes you want to achieve." },
  { icon: <Target className="h-6 w-6" />, title: "Discipline in Execution", desc: "Ideas are nothing without execution. We bring a disciplined, structured approach to every project, ensuring we deliver on time, on budget, and beyond expectations." },
  { icon: <Lightbulb className="h-6 w-6" />, title: "Innovation in Our DNA", desc: "The world of AI is constantly evolving, and so are we. We are committed to staying on the cutting edge of technology to ensure our clients always have a competitive advantage." }
];

const GridItem = ({
  className,
  icon,
  title,
  description,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}) => {
  return (
    <li className={cn("list-none h-full", className)}>
      <div className="relative h-full rounded-2xl border border-border p-2">
        <GlowingEffect
          spread={60}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-secondary/40 p-6 shadow-sm">
          <div className="relative flex flex-1 flex-col justify-start gap-3">
            <div className="w-fit rounded-lg border border-border bg-accent p-3">
              <div className="text-blue-400">{icon}</div>
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-semibold text-foreground">
                {title}
              </h3>
              <h2 className="font-sans text-sm text-muted-foreground flex-1">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function AboutSection() {

  return (
    <section id="about" className="relative py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-left">
        <AnimateOnScroll animationClass="animate-scale-in">
          <div className="mb-12 flex items-center h-auto">
            <h2 className="text-gradient-animate text-3xl sm:text-4xl font-bold leading-tight">
              The Architects of Business Efficiency
            </h2>
          </div>
        </AnimateOnScroll>
          <AnimateOnScroll animationClass="animate-slide-in-left" delay={100} className="w-full">
            <p className="text-lg text-muted-foreground mb-4">
              Coreveil was founded with a clear and ambitious vision: to level the playing field for business by making intelligent automation simple, powerful, and accessible. We saw brilliant entrepreneurs and business leaders trapped by the daily grind of repetitive tasks—time that should have been spent on innovation, strategy, and customer relationships.
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Our mission is to free you from that operational drag. We are a team of expert engineers, strategists, and problem-solvers dedicated to liberating business from operational bottlenecks through the power of AI.
            </p>
          </AnimateOnScroll>

          <TransformationDiagram />
          
          <AnimateOnScroll animationClass="animate-slide-in-left" delay={200} className="w-full mb-12">
              <h3 className="text-3xl font-bold mb-4 text-gradient-animate">Our Vision for the Future</h3>
              <p className="text-lg text-muted-foreground">
                  We are building a global, multi-layered automation company that becomes the trusted backbone for business worldwide. We envision a future where seamless, intelligent systems are not a luxury but a standard for business of all sizes, and we are dedicated to leading that transformation with integrity and innovation.
              </p>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="animate-slide-in-left" delay={300} className="w-full">
              <h3 className="text-3xl font-bold mb-6 text-gradient-animate">The Principles That Drive Us</h3>
          </AnimateOnScroll>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((item, i) => (
              <AnimateOnScroll
                key={i}
                animationClass="animate-slide-in-left"
                delay={400 + i * 100}
                className="h-full"
              >
                <GridItem
                    icon={item.icon}
                    title={item.title}
                    description={item.desc}
                />
              </AnimateOnScroll>
            ))}
          </ul>
      </div>
    </section>
  );
}
