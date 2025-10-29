
import { ArrowRight, Rocket } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from './animate-on-scroll';
import { Button } from '@/components/ui/button';
import { GooeyText } from '@/components/ui/gooey-text-morphing';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center px-6 pb-20">
      <div className="max-w-4xl mx-auto text-left z-10 w-full p-8 rounded-3xl glass-morphism">
        <AnimateOnScroll animationClass="animate-scale-in">
            <GooeyText
                texts={["Unlock Human Potential.", "Automate Everything Else."]}
                morphTime={2.5}
                cooldownTime={0.4}
                className="h-48"
                textClassName="text-gradient-animate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            />
        </AnimateOnScroll>
        
        <AnimateOnScroll animationClass="animate-slide-in-up" delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl">
            Coreveil Automation empowers businesses to reclaim time, slash operational costs, and scale effortlessly. We build intelligent Business Process, Chat, and Voice AI solutions that work 24/7, so your team can focus on what matters most: growing your business.
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll animationClass="animate-slide-in-up" delay={300}>
          <div className="flex justify-start mb-16">
            <Button asChild size="lg" className="group relative px-8 py-4 overflow-hidden rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30 text-lg">
              <Link href="https://cal.com/coreveil" target="_blank" rel="noopener noreferrer">
                Schedule Your Free Automation Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>

    </section>
  );
}
