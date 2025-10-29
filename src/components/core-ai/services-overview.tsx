
import { Bot, MessageSquare, Zap, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./animate-on-scroll";
import { Button } from "../ui/button";
import Link from "next/link";

const services = [
    {
        icon: <Zap className="w-8 h-8 text-blue-400" />,
        title: "Business Process Automation",
        description: "Eliminate hours of manual work every day. We automate your critical workflows—from invoicing and data entry to CRM updates—creating a seamless and efficient operational backbone for your company.",
        link: "/services",
        linkLabel: "Learn More About Process Automation",
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
        title: "AI WhatsApp & Chat Automation",
        description: "Engage customers 24/7 with an intelligent AI chatbot for your website and WhatsApp. Our bots answer FAQs, qualify leads, take orders, and book appointments, ensuring you never miss an opportunity.",
        link: "/services",
        linkLabel: "Learn More About AI Chat",
    },
    {
        icon: <Bot className="w-8 h-8 text-pink-400" />,
        title: "AI Voice Call Agents",
        description: "Deploy sophisticated AI voice agents that engage leads and customers in natural, human-like conversations. Perfect for confirming orders, booking appointments, and gathering customer feedback at scale.",
        link: "/services",
        linkLabel: "Learn More About Voice Agents",
    },
];

export default function ServicesOverview() {
    return (
        <section className="py-20 px-6 bg-secondary/20">
            <div className="max-w-7xl mx-auto">
                <AnimateOnScroll animationClass="animate-slide-in-up" className="text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-animate">Build a Smarter, More Efficient Business</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                        We design and deploy custom automation solutions tailored to your unique business needs. Whether you need to streamline internal processes or revolutionize your customer engagement, we have the expertise to deliver results.
                    </p>
                </AnimateOnScroll>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <AnimateOnScroll key={i} animationClass="animate-scale-in" delay={i * 100}>
                            <div className="p-8 bg-secondary/50 border border-border rounded-2xl h-full flex flex-col hover-lift transition-all">
                                <div className="mb-6">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                                <Button asChild variant="ghost" className="group mt-auto justify-start p-0 h-auto text-blue-400">
                                    <Link href={service.link}>
                                        {service.linkLabel}
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
