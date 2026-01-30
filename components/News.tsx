"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function News() {
  const frozenStores = [
    { name: 'SABOR Y AROMA CORRIENTES', address: 'JUNIN 1672' },
    { name: 'PARCHES ALMACEN', address: 'AV MAIPU 802' },
    { name: 'MERCADO DE PRODUCTOS', address: 'LAVALLE 1255' },
    { name: 'DELIMART', address: 'CORRIENTES Y CHACO', extra: 'DELIMART.COM.AR' },
    { name: 'CELIA SHOP', address: 'PERUGORRIA 1585' },
    { name: 'DIPEX', address: 'TUCUMAN 851' },
    { name: 'TUTTI LACTEOS', address: 'HIPOLITO IRIGOYEN 488' },
    { name: 'SUPERMAX', address: 'TODAS LAS SUCURSALES' },
    { name: 'FULL 24', address: 'AV GDOR RUIZ 2451' },
    { name: 'GRATEful', address: 'AV GDOR RUIZ 2451' },
    { name: 'GRUNEN', address: 'BELGRANO 257 / QUINTANA 1083' },
    { name: 'ITALIA', address: 'AV GDOR RUIZ 2530' },
  ];

  return (
    <section id="novedades" className="py-20 bg-brand-yellow/5">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-outline text-brand-yellow text-center mb-12 transform rotate-1 uppercase"
        >
          Novedades
        </motion.h2>
        
        {/* Nuevo Centro y Franquicias */}
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
              <span className="text-white text-3xl font-display font-bold uppercase tracking-wider border-4 border-brand-yellow p-4 rounded bg-black/50 text-center">
                Próximamente
              </span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase text-brand-red">
              NUEVO CENTRO DE PRODUCCION y SISTEMA DE FRANQUICIAS
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              ¡Se viene algo grande! Estamos trabajando para llevar el sabor de Ya! Chipacitos a todo el país.
            </p>
          </motion.div>
        </div>

        {/* Congelados */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold text-center mb-10 uppercase">CONSEGUÍ ACÁ NUESTROS CONGELADOS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frozenStores.map((store, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-xl neobrutal-card border-2 border-black hover:shadow-lg transition-all"
              >
                <h4 className="font-bold text-xl mb-2 text-brand-red">{store.name}</h4>
                <p className="font-bold text-gray-700 flex items-center gap-2">
                  <span className="text-lg">📍</span> {store.address}
                </p>
                {store.extra && <p className="text-sm text-gray-500 mt-2 font-bold">{store.extra}</p>}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Venta Corporativa */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
           <div className="bg-brand-black text-white p-8 rounded-xl neobrutal-shadow-lg border-4 border-brand-yellow relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-6 text-brand-yellow uppercase">VENTA CORPORATIVA</h3>
                <p className="text-lg mb-6">¿Tenés una empresa u oficina? Llevamos el mejor chipá para tus reuniones y eventos.</p>
                <div className="flex items-center gap-4 text-xl font-bold">
                  <span>📞</span>
                  <a href="tel:+5493794658997" className="hover:text-brand-yellow transition-colors">+54 9 379 465 8997</a>
                </div>
                <p className="mt-2 text-gray-400 text-sm">Oficina Comercial</p>
              </div>
           </div>

           <div className="bg-white p-8 rounded-xl neobrutal-card border-4 border-black">
              <h3 className="text-3xl font-display font-bold mb-6 text-brand-black uppercase">VENTA MAYORISTA</h3>
              <p className="text-lg mb-6 text-gray-700">Sumate a nuestra red de distribución. Consultanos por condiciones y precios.</p>
              <form className="space-y-4">
                <input type="text" className="w-full border-2 border-black rounded p-2 font-bold bg-gray-50" placeholder="Nombre de tu negocio" />
                <input type="text" className="w-full border-2 border-black rounded p-2 font-bold bg-gray-50" placeholder="Teléfono de contacto" />
                <button type="submit" className="w-full bg-brand-red text-white font-bold py-3 rounded neobrutal-button hover:bg-red-700 transition-colors uppercase">
                  Solicitar Información
                </button>
              </form>
           </div>
        </div>

      </div>
    </section>
  );
}
