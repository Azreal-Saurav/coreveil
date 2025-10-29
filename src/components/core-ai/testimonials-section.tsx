
"use client";

import { testimonials as testimonialData } from '@/lib/data';
import AnimateOnScroll from './animate-on-scroll';
import { Marquee } from '@/components/ui/marquee';
import { cn } from '@/lib/utils';
import { GlowingEffect } from '../ui/glowing-effect';

const TestimonialCard = ({ quote, name, designation }: { quote: string, name: string, designation: string }) => {
  return (
    <div className="relative shrink-0 p-2" style={{ width: 'clamp(300px, 80vw, 400px)' }}>
      <GlowingEffect
        spread={60}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className={cn(
        "relative w-full h-full overflow-hidden rounded-xl p-6 sm:p-8",
        "glass-morphism"
      )}>
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground text-base sm:text-lg">&quot;{quote}&quot;</p>
          <div className="mt-4 flex items-center gap-3">
            <div>
              <p className="font-semibold text-foreground">{name}</p>
              <p className="text-sm text-muted-foreground">{designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll animationClass="animate-slide-in-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-animate">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">Real results from real business</p>
        </AnimateOnScroll>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center gap-4">
        <Marquee pauseOnHover className="[--duration:60s]">
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} name={testimonial.name} designation={testimonial.business} quote={testimonial.text} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
