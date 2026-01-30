
import { Rocket, Star, Users, Zap, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Star, title: "Calidad Superior" },
    { icon: Users, title: "Trabajo en Equipo" },
    { icon: Zap, title: "Innovación Continua" },
    { icon: Heart, title: "Compromiso" },
    { icon: ShieldCheck, title: "Responsabilidad" },
    { icon: Users, title: "Entorno Positivo" },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Historia */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-outline text-brand-yellow text-center mb-12 transform -rotate-2">Nuestra Historia</h2>
          <div className="relative border-l-4 border-black ml-4 md:ml-auto md:mr-auto md:w-2/3 pl-8 space-y-12">
            <div className="relative">
              <div className="absolute -left-[42px] top-0 bg-brand-red w-6 h-6 rounded-full border-4 border-black"></div>
              <h3 className="text-2xl font-bold text-brand-red mb-2">2019 - El Comienzo</h3>
              <p className="text-gray-700 text-lg">Ricardo comienza este sueño con pasión y dedicación, buscando crear el chipá más rico de la ciudad. Gracias a su espíritu innovador hoy ofrecemos productos de calidad.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[42px] top-0 bg-brand-yellow w-6 h-6 rounded-full border-4 border-black"></div>
              <h3 className="text-2xl font-bold text-brand-black mb-2">Pandemia - Resiliencia</h3>
              <p className="text-gray-700 text-lg">A pesar de las dificultades, nos adaptamos y crecimos con al apoyo de nuestros clientes. Hoy, Ya! Chipacitos combina tradición, innovación y una visión global.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[42px] top-0 bg-brand-red w-6 h-6 rounded-full border-4 border-black"></div>
              <h3 className="text-2xl font-bold text-brand-black mb-2">Actualidad - Expansión</h3>
              <p className="text-gray-700 text-lg">Hoy contamos con sucursales y múltiples formatos de venta con un equipo increíble, llevando sabor a cada rincón.</p>
            </div>
          </div>
        </div>

        {/* Misión */}
        <div className="bg-brand-yellow neobrutal-card rounded-3xl p-12 text-center mb-20">
          <div className="bg-brand-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Rocket className="text-black w-10 h-10" />
          </div>
          <h2 className="text-4xl font-display mb-6">Nuestra Misión</h2>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            "En Ya! Chipacitos nos apasiona ofrecer productos auténticos y de alta calidad, elaborados con procesos de mejora continua. Nuestro compromiso es ser parte de tus momentos especiales, llevando el sabor y la tradición chipacera a tu mesa."
          </p>
        </div>

        {/* Valores */}
        <div>
          <h2 className="text-4xl font-display text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl neobrutal-card flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <val.icon className="w-12 h-12 text-brand-yellow mb-4" />
                <h4 className="font-bold text-lg">{val.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
