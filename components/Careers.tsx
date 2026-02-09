"use client";
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Careers() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    email: '',
    // Step 2
    name: '',
    date: new Date().toISOString().split('T')[0],
    city: '',
    phone: '',
    altPhone: '',
    linkedin: '',
    // Step 3
    educationLevel: 'Secundario',
    title: '',
    institution: '',
    englishLevel: 'Basico',
    itTools: '',
    // Step 4
    lastCompany: '',
    lastPosition: '',
    experienceYears: 'Sin Experiencia',
    mainTasks: '',
    // Step 5
    availability: 'Full Time',
    mobility: 'No',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf') {
        alert('Por favor, subí tu CV en formato PDF.');
        if (fileInputRef.current) fileInputRef.current.value = '';
        return;
      }
      setCvFile(file);
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const data = new FormData();
    data.append('type', 'RRHH');
    // Append all text fields
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    // Append file
    if (cvFile) {
      data.append('cvFile', cvFile);
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: data, // Sending FormData automatically sets multipart/form-data
      });

      if (response.ok) {
        setStatus('success');
        setShowModal(true);
        // Reset form
        setStep(1);
        setFormData({
            email: '',
            name: '',
            date: new Date().toISOString().split('T')[0],
            city: '',
            phone: '',
            altPhone: '',
            linkedin: '',
            educationLevel: 'Secundario',
            title: '',
            institution: '',
            englishLevel: 'Basico',
            itTools: '',
            lastCompany: '',
            lastPosition: '',
            experienceYears: 'Sin Experiencia',
            mainTasks: '',
            availability: 'Full Time',
            mobility: 'No',
        });
        setCvFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
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

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h4 className="font-bold text-xl mb-4 text-brand-red uppercase">Paso 1: Contacto Inicial</h4>
            <div>
              <label className="block text-sm font-bold mb-1">Correo Electrónico *</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border-2 border-gray-300 rounded p-3 bg-gray-50 focus:border-brand-yellow outline-none transition-colors font-bold" 
                placeholder="ejemplo@email.com"
              />
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
             <h4 className="font-bold text-xl mb-4 text-brand-red uppercase">Paso 2: Datos Personales</h4>
            <div>
              <label className="block text-sm font-bold mb-1">Nombre y Apellido *</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Fecha de carga *</label>
              <input type="date" name="date" value={formData.date} onChange={handleInputChange} required className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Ciudad/Zona de residencia *</label>
              <input type="text" name="city" value={formData.city} onChange={handleInputChange} required className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Teléfono / WhatsApp *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Teléfono / WhatsApp (Alternativo)</label>
              <input type="tel" name="altPhone" value={formData.altPhone} onChange={handleInputChange} className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Link a LinkedIn</label>
              <input type="url" name="linkedin" value={formData.linkedin} onChange={handleInputChange} className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold" placeholder="https://linkedin.com/in/..." />
            </div>
          </motion.div>
        );
      case 3:
        return (
           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h4 className="font-bold text-xl mb-4 text-brand-red uppercase">Paso 3: Formación</h4>
            <div>
              <label className="block text-sm font-bold mb-1">Nivel de Estudios *</label>
              <select name="educationLevel" value={formData.educationLevel} onChange={handleInputChange} className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold">
                <option value="Secundario">Secundario</option>
                <option value="Terciario">Terciario</option>
                <option value="Universitario en curso">Universitario en curso</option>
                <option value="Universitario graduado">Universitario graduado</option>
                <option value="Posgrado">Posgrado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Título / Carrera</label>
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Institución</label>
              <input type="text" name="institution" value={formData.institution} onChange={handleInputChange} className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Nivel de Inglés *</label>
              <div className="flex flex-wrap gap-4">
                {['Basico', 'Intermedio', 'Avanzado', 'Billingue'].map((level) => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="englishLevel" value={level} checked={formData.englishLevel === level} onChange={handleInputChange} className="w-4 h-4 text-brand-yellow focus:ring-brand-yellow" />
                    <span className="font-bold text-sm">{level}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Herramientas Informáticas clave</label>
              <textarea name="itTools" value={formData.itTools} onChange={handleInputChange} className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold h-20" placeholder="Excel, Word, Sistemas de gestión..."></textarea>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
             <h4 className="font-bold text-xl mb-4 text-brand-red uppercase">Paso 4: Experiencia Laboral</h4>
             <div>
              <label className="block text-sm font-bold mb-1">Última empresa</label>
              <input type="text" name="lastCompany" value={formData.lastCompany} onChange={handleInputChange} className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Último cargo</label>
              <input type="text" name="lastPosition" value={formData.lastPosition} onChange={handleInputChange} className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Años de experiencia en el puesto *</label>
              <div className="space-y-2">
                 {['Sin Experiencia', 'Menos de 1 año', 'Entre 1 y 3 años', 'Más de 3 años'].map((exp) => (
                  <label key={exp} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="experienceYears" value={exp} checked={formData.experienceYears === exp} onChange={handleInputChange} className="w-4 h-4 text-brand-yellow focus:ring-brand-yellow" />
                    <span className="font-bold text-sm">{exp}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Principales tareas</label>
              <textarea name="mainTasks" value={formData.mainTasks} onChange={handleInputChange} className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold h-24"></textarea>
            </div>
          </motion.div>
        );
      case 5:
        return (
           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
             <h4 className="font-bold text-xl mb-4 text-brand-red uppercase">Paso 5: Disponibilidad y CV</h4>
             <div>
              <label className="block text-sm font-bold mb-2">Disponibilidad horaria *</label>
              <div className="flex gap-4">
                 {['Full Time', 'Part Time'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="availability" value={opt} checked={formData.availability === opt} onChange={handleInputChange} className="w-4 h-4 text-brand-yellow focus:ring-brand-yellow" />
                    <span className="font-bold text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">¿Posee movilidad propia? *</label>
              <div className="flex gap-4">
                 {['Si', 'No'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="mobility" value={opt} checked={formData.mobility === opt} onChange={handleInputChange} className="w-4 h-4 text-brand-yellow focus:ring-brand-yellow" />
                    <span className="font-bold text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Carga tu CV en Formato PDF *</label>
              <input 
                type="file" 
                ref={fileInputRef}
                accept=".pdf"
                onChange={handleFileChange}
                required
                className="w-full border-2 border-gray-300 rounded p-2 bg-gray-50 font-bold file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-yellow file:text-brand-black hover:file:bg-yellow-400" 
              />
              <p className="text-xs text-gray-500 mt-1">Solo archivos .pdf</p>
            </div>
           </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-brand-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-yellow">
          ¿CUÁNTAS GANAS TENÉS DE CRECER Y DIVERTIRTE?
        </h2>
        <p className="text-2xl mb-12">Te esperamos. Sumate al equipo.</p>
        
        <div className="max-w-2xl mx-auto bg-white text-brand-black p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-brand-yellow">
          <h3 className="text-3xl font-display font-bold mb-6 text-brand-red uppercase">Formulario de Postulación</h3>
          <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed text-justify">
            Muchas gracias por tu interés en formar parte de nuestro equipo. A través de este formulario podrás cargar tu Currículum Vitae y tus datos de contacto para ser considerado en nuestras búsquedas activas y futuras oportunidades.
            <br/><br/>
            Por favor, completa todos los campos con información actualizada. Los datos proporcionados serán tratados con estricta confidencialidad y utilizados exclusivamente para fines de reclutamiento y selección.
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2 rounded-full mb-8 overflow-hidden">
            <div 
              className="bg-brand-yellow h-full transition-all duration-300 ease-out"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>

          <form className="text-left" onSubmit={handleSubmit}>
            {renderStep()}

            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              {step > 1 && (
                <button 
                  type="button" 
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  ATRÁS
                </button>
              )}
              
              {step < 5 ? (
                <button 
                  type="button" 
                  onClick={nextStep}
                  className="bg-brand-yellow text-brand-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors ml-auto"
                >
                  SIGUIENTE
                </button>
              ) : (
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="bg-brand-red text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors ml-auto disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                >
                  {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'}
                </button>
              )}
            </div>
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
                ¡Gracias por querer sumarte al equipo! Hemos recibido tu CV y tus datos correctamente.
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