import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Calculator, HelpCircle, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactoPage: React.FC = () => {
  // Budget Calculator State
  const [category, setCategory] = useState('Electricidad');
  const [serviceType, setServiceType] = useState('Residencial');
  const [size, setSize] = useState(50);
  const [complexity, setComplexity] = useState('Básica');
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  // Calculator Multipliers
  const handleCalculate = () => {
    let basePrice = 0;
    if (category === 'Electricidad') {
      basePrice = serviceType === 'Industrial' ? 1200 : 450;
    } else if (category === 'Construcciones') {
      basePrice = serviceType === 'Cimentación' ? 2500 : 1800;
    } else if (category === 'Remodelaciones') {
      basePrice = serviceType === 'Integral' ? 1400 : 750;
    } else if (category === 'Impermeabilización') {
      basePrice = serviceType === 'Premium-10años' ? 280 : 150;
    }

    let complexityMultiplier = 1;
    if (complexity === 'Intermedia') complexityMultiplier = 1.35;
    if (complexity === 'Avanzada') complexityMultiplier = 1.7;

    const totalEstimate = Math.round(basePrice * size * complexityMultiplier);
    setEstimatedCost(totalEstimate);
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'El nombre es obligatorio';
        else if (value.trim().length < 3) error = 'El nombre debe tener al menos 3 caracteres';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = 'El correo es obligatorio';
        else if (!emailRegex.test(value)) error = 'Ingresa un correo electrónico válido';
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'El teléfono es obligatorio';
        } else {
          const allowedCharsRegex = /^\+?[\d\s-]*$/;
          if (!allowedCharsRegex.test(value)) {
            error = 'Solo se permiten dígitos, espacios, guiones y un "+" al inicio';
          } else {
            const digitCount = value.replace(/\D/g, '').length;
            if (digitCount < 10) {
              error = 'El número debe contener al menos 10 dígitos';
            }
          }
        }
        break;
      case 'subject':
        if (!value.trim()) error = 'El asunto es obligatorio';
        break;
      case 'message':
        if (!value.trim()) error = 'El mensaje es obligatorio';
        else if (value.trim().length < 10) error = 'Cuéntanos un poco más (mínimo 10 caracteres)';
        break;
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === 'phone') {
      const sanitizedValue = value.replace(/[^\d\s-|+]/g, '');
      finalValue = sanitizedValue.startsWith('+') 
        ? '+' + sanitizedValue.slice(1).replace(/\+/g, '')
        : sanitizedValue.replace(/\+/g, '');
    }

    setFormData(prev => ({ ...prev, [name]: finalValue }));
    const error = validateField(name, finalValue);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, (formData as any)[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        const templateParams = {
          from_name: formData.name,
          reply_to: formData.email,
          phone_number: formData.phone,
          service_type: formData.subject,
          message: formData.message,
          to_name: 'Grupo AR'
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setFormSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setErrors({});
        setTimeout(() => setFormSuccess(false), 8000);
      } catch (error) {
        console.error('EmailJS Error:', error);
        setErrors({ submit: 'Ocurrió un error al enviar tu solicitud. Por favor inténtalo de nuevo o contáctanos por WhatsApp.' });
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log('EmailJS keys not configured. Simulating submission:', formData);
      setTimeout(() => {
        setFormSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setErrors({});
        setIsLoading(false);
        setTimeout(() => setFormSuccess(false), 8000);
      }, 1500);
    }
  };

  // WhatsApp send from calculator
  const handleSendWhatsAppQuote = () => {
    if (!estimatedCost) return;
    const text = `Hola Grupo AR. He utilizado su Calculadora de Presupuestos en línea y me interesa cotizar una obra:\n- *Especialidad:* ${category}\n- *Tipo:* ${serviceType}\n- *Dimensión:* ${size} m² / unids\n- *Complejidad:* ${complexity}\n- *Estimado Preliminar:* M.N. $${estimatedCost.toLocaleString('es-MX')}\n\n¿Podrían brindarme una cotización formal? Gracias.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/527296853914?text=${encodedText}`, '_blank');
  };

  return (
    <div className="pt-24 pb-16 sm:pb-24 bg-slate-50 min-h-screen">
      <Helmet>
        <title>Contacto y Cotizaciones de Obra | Grupo AR</title>
        <meta name="description" content="Ponte en contacto con Grupo AR. Utiliza nuestra calculadora de presupuesto estimada o envíanos un mensaje para agendar asesoría técnica personalizada." />
        <meta property="og:title" content="Contacto y Cotizaciones de Obra | Grupo AR" />
        <meta property="og:description" content="Inicia la cotización de tu obra residencial o industrial hoy mismo. Respuestas rápidas y asesoramiento profesional calificado." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-950 to-slate-950 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black font-display mb-4 tracking-tight"
          >
            ¿Hablamos de tu <span className="text-gradient">Próxima Obra?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Estamos listos para brindarte asesoría técnica personalizada y cotizaciones competitivas para tu proyecto industrial, residencial o comercial.
          </motion.p>
        </div>
      </section>

      {/* Main Content Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Contact Details & Links */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] space-y-6">
                <div>
                  <h3 className="text-2xl font-black font-display text-white mb-2">Canales Directos</h3>
                  <p className="text-slate-400 text-sm">Respuesta oportuna a través de nuestras oficinas corporativas.</p>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Llamadas o Mensajes</p>
                      <a href="tel:+527296853914" className="text-lg font-bold text-white hover:text-amber-500 transition-colors block mt-1">
                        +52 729 685 3914
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Email de Ventas</p>
                      <a href="mailto:randaleonel@gmail.com" className="text-lg font-bold text-white hover:text-amber-500 transition-colors block mt-1">
                        randaleonel@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Oficina Central</p>
                      <p className="text-slate-300 mt-1 font-medium leading-relaxed">
                        Paseo de la Reforma, Ciudad de México, México.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-[2.5rem] bg-white p-6 border border-slate-100 shadow-sm h-64 overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661592406716!2d-99.1674063!3d19.4270245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02f20!2sPaseo%20de%20la%20Reforma%2C%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1710530000000!5m2!1ses-419!2smx" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  className="rounded-2xl"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Direct Form submit */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[3.5rem] border border-slate-100 shadow-md">
              <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 mb-6 tracking-tight">
                Envía un <span className="text-gradient">Mensaje de Obra</span>
              </h3>
              
              <AnimatePresence>
                {formSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mb-8 p-6 rounded-3xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-sm flex items-start gap-3"
                  >
                    <CheckCircle className="w-5.5 h-5.5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">¡Mensaje recibido correctamente!</p>
                      <p className="text-xs text-emerald-600 mt-1">Un ingeniero o asesor comercial del corporativo Grupo AR se pondrá en contacto contigo en un plazo menor a 24 horas.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Nombre completo *</label>
                    <input
                      name="name"
                      required
                      type="text"
                      onChange={handleInputChange}
                      value={formData.name}
                      placeholder="Ej. Ing. Leonel Aranda"
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-400' : 'border-slate-200'} rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium`}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase mt-1 ml-1 animate-in fade-in">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Correo Electrónico *</label>
                    <input
                      name="email"
                      required
                      type="email"
                      onChange={handleInputChange}
                      value={formData.email}
                      placeholder="ejemplo@correo.com"
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-400' : 'border-slate-200'} rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium`}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase mt-1 ml-1 animate-in fade-in">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Teléfono de contacto *</label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      onChange={handleInputChange}
                      value={formData.phone}
                      placeholder="Ej. 729 685 3914"
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-400' : 'border-slate-200'} rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium`}
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase mt-1 ml-1 animate-in fade-in">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Asunto / Especialidad *</label>
                    <input
                      name="subject"
                      required
                      type="text"
                      onChange={handleInputChange}
                      value={formData.subject}
                      placeholder="Ej. Cotización de Obra Eléctrica"
                      className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-400' : 'border-slate-200'} rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium`}
                    />
                    {errors.subject && <p className="text-red-500 text-[10px] font-bold uppercase mt-1 ml-1 animate-in fade-in">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Detalles del Mensaje *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    onChange={handleInputChange}
                    value={formData.message}
                    placeholder="Describe los requerimientos generales de tu proyecto, volumen estimado, temporalidad y ubicación..."
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-400' : 'border-slate-200'} rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase mt-1 ml-1 animate-in fade-in">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 px-6 rounded-xl font-black shadow-lg shadow-amber-500/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Requerimientos Técnicos
                    </>
                  )}
                </button>
                {errors.submit && (
                  <p className="text-red-500 text-xs font-bold uppercase text-center mt-2 animate-in fade-in">
                    {errors.submit}
                  </p>
                )}
              </form>
            </div>

          </div>

          {/* Interactive Calculator Banner */}
          <div className="bg-white border border-slate-100 rounded-[3.5rem] p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <Calculator className="w-8 h-8 text-amber-500" />
                <h2 className="text-2xl sm:text-4xl font-black font-display text-slate-900 tracking-tight text-center">
                  Presupuestador <span className="text-gradient">de Obra Rápido</span>
                </h2>
              </div>
              <p className="text-slate-500 text-sm sm:text-base text-center mb-10 leading-relaxed max-w-xl mx-auto">
                Selecciona las características de lo que necesitas y obtén de inmediato un rango de costo preliminar aproximado. ¡Puedes exportar la cotización por WhatsApp!
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Especialidad</label>
                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      setEstimatedCost(null);
                      if (e.target.value === 'Electricidad') {
                        setServiceType('Residencial');
                      } else if (e.target.value === 'Construcciones') {
                        setServiceType('Estructura');
                      } else if (e.target.value === 'Remodelaciones') {
                        setServiceType('Integral');
                      } else if (e.target.value === 'Impermeabilización') {
                        setServiceType('Básica-3años');
                      }
                    }}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                  >
                    <option value="Electricidad">Electricidad</option>
                    <option value="Construcciones">Construcción</option>
                    <option value="Remodelaciones">Remodelación</option>
                    <option value="Impermeabilización">Impermeabilización</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Tipo de Servicio</label>
                  <select
                    value={serviceType}
                    onChange={(e) => {
                      setServiceType(e.target.value);
                      setEstimatedCost(null);
                    }}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                  >
                    {category === 'Electricidad' && (
                      <>
                        <option value="Residencial">Cableado General</option>
                        <option value="Industrial">Peinado & Tablero de Fuerza</option>
                        <option value="CargadorTesla">Instalación Tesla Charger</option>
                      </>
                    )}
                    {category === 'Construcciones' && (
                      <>
                        <option value="Cimentación">Cimentación de Concreto</option>
                        <option value="Estructura">Levantamiento de Muros/Estructura</option>
                        <option value="Metálica">Montaje de Techo/Viguería Acero</option>
                      </>
                    )}
                    {category === 'Remodelaciones' && (
                      <>
                        <option value="BañoCocina">Remodelar Baño o Cocina</option>
                        <option value="Acabados">Acabados & Carpintería</option>
                        <option value="Integral">Reestructuración Integral completa</option>
                      </>
                    )}
                    {category === 'Impermeabilización' && (
                      <>
                        <option value="Básica-3años">Sistema Acrílico de 3 años</option>
                        <option value="Media-5años">Manto Prefabricado de 5 años</option>
                        <option value="Premium-10años">Poliuretano Líquido de 10 años</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Dimensión ({category === 'Electricidad' && serviceType === 'CargadorTesla' ? 'Unid' : 'm²'})</label>
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={size}
                    onChange={(e) => {
                      setSize(parseInt(e.target.value) || 0);
                      setEstimatedCost(null);
                    }}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 font-bold focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Complejidad de Obra</label>
                  <select
                    value={complexity}
                    onChange={(e) => {
                      setComplexity(e.target.value);
                      setEstimatedCost(null);
                    }}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                  >
                    <option value="Básica">Básica (Estándar)</option>
                    <option value="Intermedia">Intermedia (Detallada)</option>
                    <option value="Avanzada">Avanzada (Alta especificación)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                <div className="text-center sm:text-left">
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">Costo Estimado Preliminar:</p>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-display">
                    {estimatedCost ? `M.N. $${estimatedCost.toLocaleString('es-MX')}` : 'Por calcular...'}
                  </p>
                </div>

                <div className="flex gap-3 shrink-0 w-full sm:w-auto">
                  {!estimatedCost ? (
                    <button
                      onClick={handleCalculate}
                      className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-amber-500/15"
                    >
                      <Calculator className="w-4 h-4" />
                      Calcular Costo
                    </button>
                  ) : (
                    <button
                      onClick={handleSendWhatsAppQuote}
                      className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-md shadow-green-500/10"
                    >
                      Solicitar por WhatsApp
                    </button>
                  )}
                </div>
              </div>

              <p className="flex items-center gap-1.5 md:gap-2 text-[11px] text-slate-400 font-medium justify-center mt-4">
                <HelpCircle className="w-3.5 h-3.5" />
                Nota: Los precios son rangos sugeridos con fines de planeación. El presupuesto final requiere visita técnica.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactoPage;
