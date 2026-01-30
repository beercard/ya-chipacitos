"use client";
import { MapPin, Phone, Wifi, CreditCard, Navigation } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Locations() {
  const locations = [
    { 
      name: "SUCURSAL YRIGOYEN", 
      address: "Hipólito Yrigoyen 956, W3400 Corrientes", 
      phone: "0379 4157715", 
      mapLink: "https://maps.app.goo.gl/do71BgqqNjqeteax6",
      image: "/images/locations/1.jpg" 
    },
    { 
      name: "SUCURSAL PARAGUAY", 
      address: "Paraguay 388, W3402 Corrientes", 
      phone: "379 5084 247", 
      mapLink: "https://maps.app.goo.gl/7fPijNwZo74R7Qk76",
      image: "/images/locations/2.jpeg" 
    },
    { 
      name: "SUCURSAL CORDOBA", 
      address: "Córdoba 1533, W3400 Corrientes", 
      phone: "379 4344206", 
      mapLink: "https://maps.app.goo.gl/U8audVcWAaD5XAQv6",
      image: "/images/locations/3.PNG" 
    },
    { 
      name: "SUCURSAL SAN LORENZO", 
      address: "San Lorenzo 780, W3400 CFJ, Corrientes", 
      phone: "379 5195824", 
      mapLink: "https://maps.app.goo.gl/5XbFCvfmgBovM5hA7",
      image: "/images/locations/4.jpeg" 
    },
    { 
      name: "GOYA", 
      address: "José E. Gómez 544, W3450FZL Goya", 
      phone: "3777 640368", 
      mapLink: "https://maps.app.goo.gl/dvH1c4moRELMTKV97",
      image: "/images/locations/5.jpeg" 
    },
    { 
      name: "ITUIZANGO", 
      address: "Entre Ríos 2255, Ituzaingó, Corrientes", 
      phone: "3786 407068", 
      mapLink: "https://maps.app.goo.gl/rjg8a2K8mxqW63dv9",
      image: "/images/locations/6.jpeg" 
    },
  ];

  return (
    <section id="locales" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display text-pop text-center mb-12 transform -rotate-1"
        >
          Nuestros Locales
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {locations.map((loc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl p-4 md:p-6 neobrutal-card border-none flex flex-col h-full"
            >
              <div className="h-32 md:h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden relative shrink-0">
                <Image 
                  src={loc.image} 
                  alt={loc.name} 
                  fill
                  className="object-cover hover:scale-105 transition-transform" 
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-sm md:text-xl font-bold font-display mb-2">{loc.name}</h3>
              <div className="space-y-2 text-gray-600 text-xs md:text-base mb-4 grow">
                <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-brand-red transition-colors group">
                  <MapPin size={16} className="text-brand-red mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-words underline decoration-transparent group-hover:decoration-brand-red transition-all">{loc.address}</span>
                </a>
                <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-brand-red transition-colors group">
                  <Phone size={16} className="text-brand-red shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="underline decoration-transparent group-hover:decoration-brand-red transition-all">{loc.phone}</span>
                </a>
              </div>
              <a 
                href={loc.mapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-brand-yellow text-black neobrutal-button font-bold py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-yellow transition-colors text-sm md:text-base mt-auto"
              >
                <Navigation size={16} />
                Cómo llegar
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gray-600 font-bold"
        >
          <div className="flex items-center gap-2">
            <Wifi className="text-brand-yellow" />
            <span>WIFI Disponible</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="text-brand-yellow" />
            <span>Medios de Pago Aceptados</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
