"use client";
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex justify-center md:justify-start">
              <Image 
                src="/images/logos/logo-ya-chipacitos.png" 
                alt="Ya! Chipacitos" 
                width={200} 
                height={80} 
                className="h-16 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-300">Pasión por productos auténticos.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-display text-brand-yellow mb-4">CONTACTO</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={18} className="text-brand-red" />
                <a href="tel:+5493794658997" className="hover:text-brand-yellow transition-colors">+54 9 3794 658997</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={18} className="text-brand-red" />
                <a href="mailto:yachipacitos@gmail.com" className="hover:text-brand-yellow transition-colors">yachipacitos@gmail.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Instagram size={18} className="text-brand-red" />
                <a href="https://instagram.com" target="_blank" className="hover:text-brand-yellow transition-colors">Seguinos en Instagram</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-display text-brand-yellow mb-4">MEDIOS DE PAGO</h3>
            <p className="text-gray-300 mb-4">Aceptamos todos los medios de pago.</p>
            <div className="grid grid-cols-3 gap-4 bg-white/10 p-4 rounded-lg max-w-[200px] mx-auto md:mx-0">
               <div className="flex items-center justify-center bg-white rounded p-1 h-10 w-full">
                 <Image 
                   src="/images/logos/visa.svg" 
                   alt="Visa" 
                   width={0} height={0} sizes="100vw"
                   className="h-full w-auto object-contain" 
                 />
               </div>
               <div className="flex items-center justify-center bg-white rounded p-1 h-10 w-full">
                 <Image 
                   src="/images/logos/mastercard.svg" 
                   alt="Mastercard" 
                   width={0} height={0} sizes="100vw"
                   className="h-full w-auto object-contain" 
                 />
               </div>
               <div className="flex items-center justify-center bg-white rounded p-1 h-10 w-full">
                 <Image 
                   src="/images/logos/mercadopago.webp" 
                   alt="Mercado Pago" 
                   width={0} height={0} sizes="100vw"
                   className="h-full w-auto object-contain" 
                 />
               </div>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ya! Chipacitos. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
