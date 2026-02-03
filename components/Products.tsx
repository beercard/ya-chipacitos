"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Products() {
  const products = [
    { 
      id: 1, 
      image: '/images/products/Chipacitos Clasicos.jpeg', 
      title: 'Chipacitos Clásicos',
      description: 'Ricos y calentitos para todos los días'
    },
    { 
      id: 2, 
      image: '/images/products/Chipá Saborizado.jpeg', 
      title: 'Chipá Saborizado',
      description: 'Los aliados de tus picadas.'
    },
    { 
      id: 3, 
      image: '/images/products/Chipá XXL.jpeg', 
      title: 'Chipá XXL',
      description: 'Una explosión de auténtico sabor correntino'
    },
    { 
      id: 4, 
      image: '/images/products/Chipa Sandwich.jpeg', 
      title: 'Chipandwich',
      description: 'La combinación perfecta entre dos grandes'
    },
    { 
      id: 5, 
      image: '/images/products/Chipánada.jpeg', 
      title: 'Chipanada',
      description: 'Una Edición Limitada sólo para festejar nuestra Patria'
    },
    { 
      id: 6, 
      image: '/images/products/Chipáncho.jpeg', 
      title: 'Chipapanchos',
      description: 'Edición Limitada para festejar lo que vos quieras'
    },
  ];

  return (
    <section id="productos" className="py-20 bg-pattern-dots">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display text-pop text-center mb-12 transform rotate-1"
        >
          Tentate Acá
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {products.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden neobrutal-card group"
            >
              <div className="h-32 md:h-64 bg-gray-200 relative overflow-hidden">
                 <Image 
                   src={item.image} 
                   alt={item.title} 
                   fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={70}
                />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-2xl font-bold font-display mb-1 md:mb-2 leading-tight">{item.title}</h3>
                <p className="text-sm md:text-lg text-black font-hand mb-2 md:mb-4 line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Destacado */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-brand-red rounded-3xl p-8 md:p-12 neobrutal-shadow-lg border-4 border-black text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-6xl font-display font-bold mb-6 font-outline text-brand-yellow">¿TE QUEDASTE CON GANAS?</h3>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">No esperes más. Hacé tu pedido ahora y recibilo calentito en tu casa.</p>
            <a 
              href="https://web.pedisy.com/tiendas/ya-chipacitos" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-yellow text-brand-black neobrutal-button font-bold text-lg md:text-xl px-10 py-4 rounded-full hover:bg-white transition-colors shadow-lg"
            >
              PEDILO YA!
            </a>
            <p className="mt-6 text-xs md:text-sm font-medium opacity-80 uppercase tracking-wide">
              CONSULTAR EL RADIO DE ENTREGA HABILITADO EN LA CIUDAD DE CORRIENTES.
            </p>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </motion.div>
      </div>
    </section>
  );
}
