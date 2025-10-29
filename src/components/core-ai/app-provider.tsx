
"use client";

import Header from "@/components/core-ai/header";
import Footer from "@/components/core-ai/footer";
import dynamic from 'next/dynamic';
import Chatbot from "./chatbot";

const AnimatedBackground = dynamic(() => import('@/components/core-ai/animated-background'), { ssr: false });

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
