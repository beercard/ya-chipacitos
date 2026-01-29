"use client";
import Link from 'next/link';
import Image from 'next/image';
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
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-brand-red shadow-md py-2' : 'bg-brand-red/95 backdrop-blur-md py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="hover:scale-105 transition-transform">
          <Image 
            src="/images/logos/logo-ya-chipacitos.png" 
            alt="Ya! Chipacitos" 
            width={180} 
            height={60} 
            className="h-12 w-auto object-contain" 
            priority
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-bold text-white text-sm tracking-wide">
          <Link href="#inicio" className="hover:text-brand-yellow transition-colors">INICIO</Link>
          <Link href="#nosotros" className="hover:text-brand-yellow transition-colors">NOSOTROS</Link>
          <Link href="#productos" className="hover:text-brand-yellow transition-colors">PRODUCTOS</Link>
          <Link href="#locales" className="hover:text-brand-yellow transition-colors">LOCALES</Link>
          <Link href="#contacto" className="hover:text-brand-yellow transition-colors">CONTACTO</Link>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-red p-2 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-all transform hover:rotate-12">
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" 
          onClick={() => setIsOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Modern Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>
      
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-brand-red z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-brand-yellow transition-colors p-2 bg-white/10 rounded-full">
            <X size={28} />
          </button>
        </div>
        
        <div className="flex flex-col px-8 space-y-6 font-display text-2xl text-white">
          <Link href="#inicio" onClick={() => setIsOpen(false)} className="border-b border-white/10 pb-2 hover:pl-4 transition-all hover:text-brand-yellow">INICIO</Link>
          <Link href="#nosotros" onClick={() => setIsOpen(false)} className="border-b border-white/10 pb-2 hover:pl-4 transition-all hover:text-brand-yellow">NOSOTROS</Link>
          <Link href="#productos" onClick={() => setIsOpen(false)} className="border-b border-white/10 pb-2 hover:pl-4 transition-all hover:text-brand-yellow">PRODUCTOS</Link>
          <Link href="#locales" onClick={() => setIsOpen(false)} className="border-b border-white/10 pb-2 hover:pl-4 transition-all hover:text-brand-yellow">LOCALES</Link>
          <Link href="#contacto" onClick={() => setIsOpen(false)} className="border-b border-white/10 pb-2 hover:pl-4 transition-all hover:text-brand-yellow">CONTACTO</Link>
        </div>

        <div className="mt-auto p-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-red font-bold bg-white p-4 rounded-xl hover:bg-brand-yellow transition-colors shadow-lg">
            <Instagram size={24} />
            <span>Seguinos en Instagram</span>
          </a>
        </div>
      </div>
    </header>
  );
}
