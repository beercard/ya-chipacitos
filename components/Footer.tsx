"use client";
import { Instagram, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-black border-t-4 border-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left items-center">
          
          {/* Left: Pedilo Ya Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-2xl font-display text-brand-yellow mb-6 font-outline-sm">¡PEDILO AHORA!</h3>
            <a 
              href="https://web.pedisy.com/tiendas/ya-chipacitos" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-yellow text-brand-black neobrutal-button font-bold text-lg px-8 py-3 rounded-full hover:bg-white transition-colors shadow-lg"
            >
              PEDIDOS YA
            </a>
          </motion.div>
          
          {/* Center: Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-center"
          >
            <h3 className="text-2xl font-display text-brand-yellow mb-4 font-outline-sm">CONTACTO</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li className="flex items-center justify-center gap-2">
                <Phone size={18} className="text-brand-red" />
                <a href="tel:+5493794658997" className="hover:text-brand-yellow transition-colors">+54 9 3794 658997</a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Mail size={18} className="text-brand-red" />
                <a href="mailto:yachipacitos@gmail.com" className="hover:text-brand-yellow transition-colors">yachipacitos@gmail.com</a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Instagram size={18} className="text-brand-red" />
                <a href="https://www.instagram.com/yachipacitos/" target="_blank" className="hover:text-brand-yellow transition-colors">Seguinos en Instagram</a>
              </li>
            </ul>
          </motion.div>

          {/* Right: Logo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <Image 
                src="/images/logos/logo-ya-chipacitos.png" 
                alt="Ya! Chipacitos" 
                width={250} 
                height={100} 
                className="h-24 w-auto object-contain" 
              />
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ya! Chipacitos. Todos los derechos reservados. | Desarrollado por <a href="https://vektra.digital/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow font-bold underline">Vektra</a>
        </div>
      </div>
    </footer>
  );
}
