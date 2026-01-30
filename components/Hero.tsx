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
      image: '/images/hero/Portada 1.jpeg', 
      copy1: 'Descubrí nuestros sabores,', 
      copy2: 'Viví la experiencia YA CHIPACITOS',
      cta: 'PEDIDOS YA',
      ctaLink: 'https://web.pedisy.com/tiendas/ya-chipacitos'
    },
    { 
      id: 2, 
      image: '/images/hero/Portada 2.jpeg', 
      copy1: 'Corazón Correntino', 
      copy2: 'RICO y CALENTITO',
      cta: 'PEDIDOS YA',
      ctaLink: 'https://web.pedisy.com/tiendas/ya-chipacitos'
    },
    { 
      id: 3, 
      image: '/images/hero/Portada 3.jpeg', 
      copy1: 'No lo pienses mas..', 
      copy2: 'Pedí ahora…',
      cta: 'PEDIDOS YA',
      ctaLink: 'https://web.pedisy.com/tiendas/ya-chipacitos'
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
              {/* Background Image with Blur */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={slide.image} 
                  alt={slide.copy2} 
                  fill
                  priority={slide.id === 1}
                  className="object-cover opacity-60 blur-sm" 
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-transparent to-brand-black/60"></div>
              </div>

              {/* Content - No Blur */}
              <div className="relative z-20 container mx-auto px-4 text-center text-white mt-16 flex flex-col items-center justify-center h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-2 md:mb-4"
                >
                  <span className="font-hand text-2xl md:text-4xl lg:text-5xl text-white block drop-shadow-lg">
                    {slide.copy1}
                  </span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-8xl font-display text-pop font-bold mb-8 drop-shadow-2xl leading-tight tracking-wide break-words"
                >
                  <span className="text-brand-yellow">{slide.copy2}</span>
                </motion.h1>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-8"
                >
                  <a href={slide.ctaLink} target="_blank" className="inline-block bg-brand-yellow text-brand-black neobrutal-button font-bold text-lg md:text-xl px-10 py-4 rounded-full hover:bg-white transition-colors shadow-lg">
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
