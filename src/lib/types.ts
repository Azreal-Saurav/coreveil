
export interface MousePosition {
  x: number;
  y: number;
}

export interface DragonProps {
  mouse: MousePosition;
}

export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  price: string;
  gradient: string;
  gradientFrom: string;
  gradientTo: string;
  shadowColor: string;
}

export interface Testimonial {
  name: string;
  business: string;
  rating: number;
  text: string;
  image: string;
}

export interface Stat {
    icon: JSX.Element,
    label: string,
    value: string,
    suffix: string
}

export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
}

export interface SuggestedAction {
  label: string;
  url: string;
}

export interface ChatbotResponse {
  answer: string;
  actions?: SuggestedAction[];
}

export interface ChatbotMessage {
  role: 'user' | 'bot';
  content: string;
  actions?: SuggestedAction[];
}
