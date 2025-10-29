
import type { ChatbotResponse, SuggestedAction } from './types';

const CONTEXT = {
  name: "Coreveil Automation",
  tagline: "Automate Everything. Focus on Growth.",
  description: "An AI Automation Agency helping business automate their processes to focus on growth.",
  services: [
    {
      name: "Business Process Automation",
      price: "₹5k - ₹15k per project",
      description: "Automate daily workflows like invoicing, feedback collection, CRM syncing, and data management."
    },
    {
      name: "AI WhatsApp & Chat Automation",
      price: "₹15k - ₹20k per project",
      description: "Intelligent WhatsApp and website bots for 24/7 customer support, lead collection, and order management."
    },
    {
      name: "AI Voice Call Agents",
      price: "₹25k - ₹40k per project",
      description: "AI voice agents for order confirmation, feedback collection, and appointment booking with a human-like voice."
    }
  ],
  contact: {
    email: "aseemmadaan9@gmail.com",
    linkedin: "https://www.linkedin.com/in/aseem-9-madaan/",
    scheduleCall: "https://cal.com/coreveil",
    contactPage: "/contact",
    servicesPage: "/services",
  }
};

const defaultActions: SuggestedAction[] = [
    { label: 'View Services', url: '/services' },
    { label: 'Schedule a Call', url: 'https://cal.com/coreveil' },
];

const responses: { keywords: string[], response: () => ChatbotResponse }[] = [
  {
    keywords: ["hello", "hi", "hey"],
    response: () => ({
      answer: `Hello! I'm Core-AI. How can I help you with Coreveil Automation's services today?`,
      actions: defaultActions,
    }),
  },
  {
      keywords: ["coreveil", "about", "who are you"],
      response: () => ({
          answer: `Coreveil Automation is an AI Automation Agency. Our mission is to help business automate everything so they can focus on growth. We build solutions that work for your business and your customers.`,
          actions: defaultActions
      })
  },
  {
    keywords: ["services", "what do you do", "offer"],
    response: () => ({
      answer: `We offer three main services: Business Process Automation (${CONTEXT.services[0].price}), AI WhatsApp & Chat Automation (${CONTEXT.services[1].price}), and AI Voice Call Agents (${CONTEXT.services[2].price}). Which one are you interested in?`,
      actions: defaultActions,
    }),
  },
  {
      keywords: ["business process", "bpa", "workflow"],
      response: () => ({
          answer: `Our Business Process Automation service helps automate daily workflows like invoicing, CRM syncing, and data management. It costs between ${CONTEXT.services[0].price}.`,
          actions: defaultActions,
      })
  },
  {
      keywords: ["whatsapp", "chat", "bot"],
      response: () => ({
          answer: `Our AI WhatsApp & Chat Automation service provides intelligent bots for your website and WhatsApp for 24/7 support and lead collection. This service costs between ${CONTEXT.services[1].price}.`,
          actions: defaultActions,
      })
  },
  {
      keywords: ["voice", "call", "agent"],
      response: () => ({
          answer: `We can build AI Voice Call Agents to handle tasks like order confirmation and appointment booking. The price for this service ranges from ${CONTEXT.services[2].price}.`,
          actions: defaultActions,
      })
  },
  {
    keywords: ["pricing", "cost", "how much"],
    response: () => ({
      answer: `Our pricing varies by service: Business Process Automation is ${CONTEXT.services[0].price}, AI WhatsApp & Chat Automation is ${CONTEXT.services[1].price}, and AI Voice Call Agents are ${CONTEXT.services[2].price}.`,
      actions: defaultActions,
    }),
  },
  {
    keywords: ["contact", "email", "get in touch", "call", "schedule"],
    response: () => ({
      answer: `You can email us at ${CONTEXT.contact.email} or schedule a free call on our calendar. I can also point you to our contact page.`,
      actions: [
        { label: 'Schedule a Call', url: CONTEXT.contact.scheduleCall },
        { label: 'Go to Contact Page', url: CONTEXT.contact.contactPage },
      ],
    }),
  },
  {
      keywords: ["demo", "how to start", "get started"],
      response: () => ({
          answer: "The best way to get started is to schedule a free automation audit call with us. You can also explore our services in more detail on the services page.",
          actions: [
            { label: 'Schedule Your Free Audit', url: CONTEXT.contact.scheduleCall },
            { label: 'Explore Services', url: CONTEXT.contact.servicesPage },
          ]
      })
  },
  {
    keywords: ["thank you", "thanks"],
    response: () => ({
      answer: "You're welcome! Is there anything else I can help you with?",
    }),
  },
];

const defaultResponse: ChatbotResponse = {
  answer: "I'm sorry, I can only answer questions about Coreveil Automation and its services. You can ask me about our offerings, pricing, or how to get in contact.",
  actions: defaultActions
};

export const getChatbotResponse = (message: string): ChatbotResponse => {
  const lowerCaseMessage = message.toLowerCase();
  for (const res of responses) {
    if (res.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
      return res.response();
    }
  }
  return defaultResponse;
};
