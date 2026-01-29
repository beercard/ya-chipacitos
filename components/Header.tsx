"use client";
import Link from 'next/link';
import { Instagram, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-yellow shadow-md py-2' : 'bg-brand-yellow/90 backdrop-blur-md py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-display font-bold text-brand-black tracking-wider hover:scale-105 transition-transform">
          YA! CHIPACITOS
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-bold text-brand-black text-sm tracking-wide">
          <Link href="#inicio" className="hover:text-brand-red transition-colors">INICIO</Link>
          <Link href="#nosotros" className="hover:text-brand-red transition-colors">NOSOTROS</Link>
          <Link href="#productos" className="hover:text-brand-red transition-colors">PRODUCTOS</Link>
          <Link href="#locales" className="hover:text-brand-red transition-colors">LOCALES</Link>
          <Link href="#contacto" className="hover:text-brand-red transition-colors">CONTACTO</Link>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-brand-black text-brand-yellow p-2 rounded-full hover:bg-brand-red hover:text-white transition-all transform hover:rotate-12">
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-black p-2 hover:bg-black/5 rounded-lg transition-colors" 
          onClick={() => setIsOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Modern Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>
      
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-brand-yellow z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-brand-black hover:text-brand-red transition-colors p-2 bg-white/20 rounded-full">
            <X size={28} />
          </button>
        </div>
        
        <div className="flex flex-col px-8 space-y-6 font-display text-2xl text-brand-black">
          <Link href="#inicio" onClick={() => setIsOpen(false)} className="border-b border-brand-black/10 pb-2 hover:pl-4 transition-all">INICIO</Link>
          <Link href="#nosotros" onClick={() => setIsOpen(false)} className="border-b border-brand-black/10 pb-2 hover:pl-4 transition-all">NOSOTROS</Link>
          <Link href="#productos" onClick={() => setIsOpen(false)} className="border-b border-brand-black/10 pb-2 hover:pl-4 transition-all">PRODUCTOS</Link>
          <Link href="#locales" onClick={() => setIsOpen(false)} className="border-b border-brand-black/10 pb-2 hover:pl-4 transition-all">LOCALES</Link>
          <Link href="#contacto" onClick={() => setIsOpen(false)} className="border-b border-brand-black/10 pb-2 hover:pl-4 transition-all">CONTACTO</Link>
        </div>

        <div className="mt-auto p-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-black font-bold bg-white/20 p-4 rounded-xl hover:bg-white/40 transition-colors">
            <Instagram size={24} />
            <span>Seguinos en Instagram</span>
          </a>
        </div>
      </div>
    </header>
  );
}
