
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    contactPhone: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);

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
        setShowModal(true);
      } else {
        setStatus('error');
        alert('Hubo un error al enviar la postulación. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      alert('Hubo un error de conexión. Por favor, verifica tu conexión e intenta nuevamente.');
    } finally {
      if (status !== 'success') setStatus('idle');
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

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl p-8 max-w-md w-full neobrutal-shadow-lg border-4 border-black text-center relative"
            >
              <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 uppercase text-black">¡Postulación Enviada!</h3>
              <p className="text-lg text-gray-700 mb-8 font-medium">
                ¡Gracias por querer sumarte al equipo! Hemos recibido tus datos correctamente.
              </p>
              <button 
                onClick={() => {
                  setShowModal(false);
                  setStatus('idle');
                }}
                className="bg-brand-red text-white font-bold py-3 px-8 rounded-full neobrutal-button hover:bg-red-700 transition-colors uppercase text-lg w-full"
              >
                GENIAL
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
