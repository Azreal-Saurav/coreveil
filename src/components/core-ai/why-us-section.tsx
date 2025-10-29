
import { Award, Layers, Rocket } from "lucide-react";
import AnimateOnScroll from "./animate-on-scroll";

const whyUsPoints = [
    {
        icon: <Layers className="w-8 h-8 text-blue-400" />,
        title: "Bespoke Solutions, Not Templates",
        description: "Your business is unique. We build completely custom automation flows designed specifically for your operational needs and goals.",
    },
    {
        icon: <Rocket className="w-8 h-8 text-purple-400" />,
        title: "Technology That Scales With You",
        description: "We use cutting-edge, future-proof technology, ensuring that as your business grows, your automation capabilities grow seamlessly with you.",
    },
    {
        icon: <Award className="w-8 h-8 text-pink-400" />,
        title: "A Partnership Focused on Your ROI",
        description: "Our success is measured by your success. Every solution is designed to deliver a clear and measurable return on investment, whether through time saved, costs reduced, or sales increased.",
    },
]

export default function WhyUsSection() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-5xl mx-auto">
                <AnimateOnScroll animationClass="animate-slide-in-up" className="text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-animate">Your Partner in Growth and Efficiency</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                        We don’t just build automations; we build the backbone for your business to scale globally. We are committed to your success.
                    </p>
                </AnimateOnScroll>
                <div className="space-y-12">
                    {whyUsPoints.map((point, i) => (
                        <AnimateOnScroll key={i} animationClass="animate-scale-in" delay={i * 100}>
                           <div className="flex flex-col md:flex-row items-start gap-8">
                                <div className="p-4 bg-secondary/50 border border-border rounded-xl">
                                    {point.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
                                    <p className="text-muted-foreground text-lg">{point.description}</p>
                                </div>
                           </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    )
}
