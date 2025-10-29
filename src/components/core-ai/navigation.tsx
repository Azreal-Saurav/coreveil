
'use client';

import { Home, Info, Zap, Mail, Linkedin } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  {
    name: 'Home',
    url: '/',
    icon: Home,
  },
  {
    name: 'About',
    url: '/about',
    icon: Info,
  },
  {
    name: 'Services',
    url: '/services',
    icon: Zap,
  },
  {
    name: 'Contact',
    url: '/contact',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aseem-9-madaan/',
    icon: Linkedin,
  },
];

export default function Navigation() {
  return (
    <NavBar items={navItems} />
  );
}
