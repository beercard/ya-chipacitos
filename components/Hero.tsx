"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const slides = [
    { id: 1, image: '/images/hero/hero-main.jpg', text: 'Chipacitos Calentitos' },
    { id: 2, image: '/images/hero/2.jpg', text: 'Sabor Irresistible' },
    { id: 3, image: '/images/hero/3.jpg', text: 'Pedilo Ahora' },
  ];

  return (
    <section id="inicio" className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-brand-black">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="w-full h-full relative">
                 <Image 
                   src={slide.image} 
                   alt={slide.text} 
                   fill
                   priority
                   className="object-cover opacity-60" 
                   sizes="100vw"
                 />
                 <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-transparent to-brand-black/60"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center text-white mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block border-2 border-brand-yellow text-brand-yellow px-4 py-1 rounded-full mb-6 font-bold tracking-widest text-sm uppercase"
        >
          La auténtica receta correntina
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-8 drop-shadow-2xl leading-none"
        >
          NO LO PIENSES MÁS...<br/>
          <span className="text-brand-yellow">PEDÍ AHORA...</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10"
        >
          <a href="tel:+5493794658997" className="w-full md:w-auto bg-white text-brand-black font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
            <span>📞</span> +54 9 379 465 8997
          </a>
          <a href="https://web.pedisy.com/tiendas/ya-chipacitos" target="_blank" className="w-full md:w-auto bg-brand-red text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-red-600 transition-all transform hover:-translate-y-1 hover:shadow-brand-red/50 shadow-xl animate-pulse flex items-center justify-center gap-2">
            <span>🍕</span> HACER PEDIDO ONLINE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
