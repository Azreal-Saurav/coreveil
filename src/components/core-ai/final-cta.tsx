
import Link from "next/link";
import AnimateOnScroll from "./animate-on-scroll";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-20 px-6 bg-secondary/20">
            <div className="max-w-4xl mx-auto text-left">
                <AnimateOnScroll animationClass="animate-slide-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-animate">Ready to Transform Your Business?</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-10">
                        Let's discuss how automation can solve your biggest challenges. The initial consultation is free, and the potential for growth is limitless.
                    </p>
                    <Button asChild size="lg" className="group relative px-8 py-4 overflow-hidden rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30 text-lg">
                        <Link href="/services">
                            Get Started Now
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
