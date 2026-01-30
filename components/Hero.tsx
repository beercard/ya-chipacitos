"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const slides = [
    { 
      id: 1, 
      image: '/images/hero/hero-main.jpg', 
      copy1: '🌟 Descubrí nuestros sabores,', 
      copy2: 'viví la experiencia YA CHIPACITOS',
      cta: 'PEDIDOS YA',
      ctaLink: 'https://web.pedisy.com/tiendas/ya-chipacitos',
      showLogo: false
    },
    { 
      id: 2, 
      image: '/images/hero/2.jpg', 
      copy1: 'Corazón Correntino', 
      copy2: 'RICO y CALENTITO',
      description: 'Viví la experiencia Ya Chipacitos',
      cta: 'PEDIDOS YA',
      ctaLink: 'https://web.pedisy.com/tiendas/ya-chipacitos',
      showLogo: true
    },
    { 
      id: 3, 
      image: '/images/hero/3.jpg', 
      copy1: 'No lo pienses mas..', 
      copy2: 'Pedí ahora…',
      cta: 'PEDIDOS YA',
      ctaLink: 'https://web.pedisy.com/tiendas/ya-chipacitos',
      showLogo: false
    },
  ];

  return (
    <section id="inicio" className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-black">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={slide.image} 
                  alt={slide.copy1} 
                  fill
                  priority={slide.id === 1}
                  className="object-cover opacity-60 blur-sm" 
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-transparent to-brand-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative z-20 container mx-auto px-4 text-center text-white mt-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="inline-block px-6 py-2 mb-4 md:mb-8"
                >
                  {slide.copy1 && (
                    <span className="font-hand text-lg md:text-2xl uppercase tracking-widest text-white block mb-2">
                      {slide.copy1}
                    </span>
                  )}
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-8xl font-display text-pop font-bold mb-8 drop-shadow-2xl leading-tight md:leading-none tracking-wide break-words"
                >
                  <span className="text-brand-yellow">{slide.copy2}</span>
                </motion.h1>

                {slide.description && (
                   <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8 flex flex-col items-center justify-center gap-4"
                   >
                     <p className="text-xl md:text-2xl font-bold">{slide.description}</p>
                     {slide.showLogo && (
                       <div className="w-32 h-12 relative">
                         <Image 
                           src="/images/logos/logo-ya-chipacitos.png" 
                           alt="Ya! Chipacitos" 
                           fill
                           className="object-contain"
                         />
                       </div>
                     )}
                   </motion.div>
                )}
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10 w-full px-4"
                >
                  <a href={slide.ctaLink} target="_blank" className="w-full max-w-sm md:w-auto bg-brand-red text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-red-600 transition-all transform hover:-translate-y-1 hover:shadow-brand-red/50 shadow-xl animate-pulse flex items-center justify-center gap-2">
                    <span>🍕</span> {slide.cta}
                  </a>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
