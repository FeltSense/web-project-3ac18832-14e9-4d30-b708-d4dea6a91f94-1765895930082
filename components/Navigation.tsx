'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo & Brand */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative px-3 py-2 bg-slate-950 rounded-lg">
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">TB</span>
          </div>
        </div>
        <div className="hidden sm:block">
          <h1 className="text-xl font-bold text-white tracking-tight">Tech Business</h1>
          <p className="text-xs text-cyan-400/70 font-medium">Modern Growth</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group">
          Home
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        
        <a href="#pricing" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group">
          Pricing
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>

        <a href="#features" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group">
          Features
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>

        <a href="#about" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group">
          About
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <button className="px-5 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 border border-cyan-500/40 hover:border-cyan-400/60 rounded-lg backdrop-blur-sm">
          Sign In
        </button>
        <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors duration-200" aria-label="Toggle menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Accent Line */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
</nav>

{/* Spacer for fixed nav */}
<div className="h-20"></div>
  );
}