
export default function Careers() {
  return (
    <section className="py-20 bg-brand-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-yellow">
          ¿CUÁNTAS GANAS TENÉS DE CRECER Y DIVERTIRTE?
        </h2>
        <p className="text-2xl mb-12">Te esperamos. Sumate al equipo.</p>
        
        <div className="max-w-xl mx-auto bg-white text-brand-black p-8 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">Trabajá con Nosotros</h3>
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-bold mb-1">Nombre y Apellido</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2 bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Celular</label>
              <input type="tel" className="w-full border border-gray-300 rounded p-2 bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded p-2 bg-gray-50" />
            </div>
            <button type="submit" className="w-full bg-brand-yellow text-brand-black font-bold py-3 rounded hover:bg-yellow-400 transition-colors text-lg">
              POSTULARME
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
