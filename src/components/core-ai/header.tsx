
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from './navigation';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 sm:p-6">
      <Link href="/" className="z-50">
        <div className="flex items-center space-x-2">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-secondary rounded-lg flex items-center justify-center ring-1 ring-border overflow-hidden">
            <Image src="https://cdn.vectorstock.com/i/1000v/47/28/mythical-dragon-logo-vector-50614728.jpg" alt="Coreveil Logo" width={40} height={40} className="object-cover" />
          </div>
          <span className="hidden sm:inline-block text-lg font-bold text-gradient-animate">Coreveil</span>
        </div>
      </Link>
      <div className="flex-grow flex justify-center">
        <Navigation />
      </div>
      <div className="w-10 sm:w-20"></div>
    </header>
  );
}
