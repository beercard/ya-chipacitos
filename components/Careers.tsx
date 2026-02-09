
"use client";
import { useState } from 'react';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    contactPhone: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Trabajar con nosotros' }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', contactPhone: '', email: '' });
        alert('¡Postulación enviada con éxito! Gracias por querer sumarte al equipo.');
      } else {
        setStatus('error');
        alert('Hubo un error al enviar la postulación. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      alert('Hubo un error de conexión. Por favor, verifica tu conexión e intenta nuevamente.');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <section className="py-20 bg-brand-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-yellow">
          ¿CUÁNTAS GANAS TENÉS DE CRECER Y DIVERTIRTE?
        </h2>
        <p className="text-2xl mb-12">Te esperamos. Sumate al equipo.</p>
        
        <div className="max-w-xl mx-auto bg-white text-brand-black p-8 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">Trabajá con Nosotros</h3>
          <form className="space-y-4 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold mb-1">Nombre y Apellido</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 focus:border-brand-yellow outline-none transition-colors" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Celular</label>
              <input 
                type="tel" 
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleInputChange}
                required
                className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 focus:border-brand-yellow outline-none transition-colors" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 focus:border-brand-yellow outline-none transition-colors" 
              />
            </div>
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-brand-yellow text-brand-black font-bold py-3 rounded hover:bg-yellow-400 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'ENVIANDO...' : 'POSTULARME'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
