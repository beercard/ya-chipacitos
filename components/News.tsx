"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function News() {
  return (
    <section className="py-20 bg-brand-yellow/5">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-outline text-brand-yellow text-center mb-12 transform rotate-1"
        >
          Novedades y Expansión
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] bg-gray-300 rounded-2xl overflow-hidden relative neobrutal-shadow-lg border-4 border-black"
          >
            <Image 
              src="/images/news/banner.jpg" 
              alt="Nueva Obra" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-white text-3xl font-display font-bold uppercase tracking-wider border-4 border-brand-yellow p-4 rounded bg-black/50">Próximamente</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold mb-4">Estamos Creciendo...</h3>
            <p className="text-xl text-gray-700 mb-6">
              ¡Se viene algo grande! Estamos trabajando en nuestro nuevo centro de producción y sistema de franquicias.
              Queremos llevar el sabor de Ya! Chipacitos a todo el país.
            </p>
            <div className="bg-white p-8 rounded-xl neobrutal-card">
              <h4 className="text-xl font-bold mb-4">Interesados en Franquicias / Mayorista</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Nombre Completo</label>
                  <input type="text" className="w-full border-2 border-black rounded p-2 font-bold" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Contacto (Tel/Email)</label>
                  <input type="text" className="w-full border-2 border-black rounded p-2 font-bold" placeholder="Tu contacto" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Interés</label>
                  <select className="w-full border-2 border-black rounded p-2 font-bold">
                    <option>Franquicia</option>
                    <option>Compra Mayorista</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded neobrutal-button hover:bg-gray-900 transition-colors">
                  ENVIAR CONSULTA
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Mayorista Logos */}
        <div className="text-center">
          <h4 className="text-xl font-bold mb-8 text-gray-500 uppercase tracking-widest">Nuestros Aliados Comerciales</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* <Image src="/images/logos/pedidosya.svg" alt="PedidosYa" width={100} height={40} className="h-12 w-auto object-contain" /> */}
             <span className="font-bold text-gray-400 text-xl">PedidosYa</span>
             {/* <Image src="/images/logos/rappi.png" alt="Rappi" width={100} height={40} className="h-10 w-auto object-contain" /> */}
             <span className="font-bold text-gray-400 text-xl">Rappi</span>
             {/* Generic Business Icon as Placeholder for others */}
             <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
                <span className="text-3xl">☕</span> Cafeterías
             </div>
             <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
                <span className="text-3xl">🏨</span> Hoteles
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
