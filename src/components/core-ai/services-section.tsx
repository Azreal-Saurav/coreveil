
"use client";

import { services } from '@/lib/data';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from './animate-on-scroll';
import { GlowCard } from '@/components/ui/spotlight-card';
import MagnifyOnHover from './magnify-on-hover';

const colorMap: { [key: string]: 'blue' | 'purple' | 'green' } = {
  "Business Process Automation": "purple",
  "AI WhatsApp & Chat Automation": "green",
  "AI Voice Call Agents": "blue",
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animationClass="animate-slide-in-up">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-animate">Our AI Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect automation package for your business needs
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-8 w-full">
          {services.map((service, index) => (
            <AnimateOnScroll 
              key={index}
              animationClass='animate-scale-in' 
              delay={index * 100} 
              className="h-full"
            >
              <MagnifyOnHover>
                <GlowCard
                  glowColor={colorMap[service.title]}
                  customSize
                  width="100%"
                  height="100%"
                  className="!p-8 !gap-0 h-full flex flex-col"
                >
                  <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md bg-accent`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 leading-tight ${service.title === 'AI WhatsApp & Chat Automation' ? 'text-[#25D366]' : 'text-gradient-animate'}`}>{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow min-h-[110px]">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-primary/10 text-primary">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-6 border-t border-border mt-auto">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-3xl font-bold">{service.price}</span>
                      <span className="text-sm text-muted-foreground">per project</span>
                    </div>
                    <Link 
                      href="/contact"
                      className="group/button inline-flex items-center justify-center w-full py-3 rounded-xl text-center font-semibold transition-all hover:scale-105 shadow-lg text-white"
                      style={{ background: `linear-gradient(to right, ${service.gradientFrom}, ${service.gradientTo})` }}
                    >
                      Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </GlowCard>
              </MagnifyOnHover>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
