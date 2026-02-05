
import React, { useMemo, useState } from 'react';
import { buildMailtoUrl, buildWhatsAppUrl, CONTACT_EMAIL, WHATSAPP_NUMBER_DISPLAY } from '../contactInfo';
import { sendContactEmail } from '../services/emailService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Electricidad Professional',
    message: ''
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState<string>('');
  const [shareLinks, setShareLinks] = useState<{ whatsappUrl: string; mailtoUrl: string } | null>(null);

  const composedMessage = useMemo(() => {
    const phoneLine = formData.phone.trim() ? `Teléfono: ${formData.phone.trim()}` : 'Teléfono: (no proporcionado)';
    return [
      'Solicitud de servicio - Grupo AR',
      '',
      `Nombre: ${formData.name.trim() || '(sin nombre)'}`,
      `Email: ${formData.email.trim() || '(sin email)'}`,
      phoneLine,
      `Servicio: ${formData.type}`,
      '',
      'Mensaje:',
      formData.message.trim() || '(sin mensaje)',
    ].join('\n');
  }, [formData]);

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
        if (value.trim()) {
          // Only allow digits, spaces, hyphens, and optional leading plus sign
          const allowedCharsRegex = /^\+?[\d\s-]*$/;
          if (!allowedCharsRegex.test(value)) {
            error = 'Solo se permiten dígitos, espacios, guiones y un "+" al inicio';
          } else {
            // Check for at least 10 digits (common for MX)
            const digitCount = value.replace(/\D/g, '').length;
            if (digitCount < 10) {
              error = 'El número debe contener al menos 10 dígitos';
            }
          }
        }
        break;
      case 'message':
        if (!value.trim()) error = 'El mensaje es obligatorio';
        else if (value.trim().length < 10) error = 'Cuéntanos un poco más (mínimo 10 caracteres)';
        break;
    }
    return error;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields on submit
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, (formData as any)[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');
    setSubmitError('');

    const subject = `Solicitud de servicio: ${formData.type}`;
    const whatsappUrl = buildWhatsAppUrl(composedMessage);
    const mailtoUrl = buildMailtoUrl(subject, composedMessage);
    setShareLinks({ whatsappUrl, mailtoUrl });

    try {
      await sendContactEmail({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        serviceType: formData.type,
        message: formData.message.trim(),
        composedMessage,
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', type: 'Electricidad Professional', message: '' });
      setErrors({});
    } catch (err) {
      const message = err instanceof Error ? err.message : 'No se pudo enviar el mensaje.';
      setSubmitError(message);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // If it's the phone field, we can proactively block characters that aren't allowed at all
    if (name === 'phone') {
      const sanitizedValue = value.replace(/[^\d\s-|+]/g, '');
      // Ensure + only appears at the start
      const finalValue = sanitizedValue.startsWith('+') 
        ? '+' + sanitizedValue.slice(1).replace(/\+/g, '')
        : sanitizedValue.replace(/\+/g, '');
        
      setFormData(prev => ({ ...prev, [name]: finalValue }));
      const error = validateField(name, finalValue);
      setErrors(prev => ({ ...prev, [name]: error }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Contact Info */}
        <div className="lg:sticky lg:top-32 self-start space-y-12">
          <div>
            <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Hablemos de tu obra</h2>
            <p className="text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight leading-[1.1]">
              Inicia tu <br />
              <span className="text-gradient">Proyecto</span> hoy
            </p>
            <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-md">
              Estamos listos para llevar tus ideas al siguiente nivel con rigor técnico y excelencia operativa.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group transition-all duration-300 hover:shadow-lg hover:bg-white">
              <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">Escríbenos</h4>
                <a className="text-slate-600 font-bold hover:text-amber-500 transition-colors" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group transition-all duration-300 hover:shadow-lg hover:bg-white">
              <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">WhatsApp</h4>
                <a
                  className="text-slate-600 font-bold hover:text-green-600 transition-colors"
                  href={buildWhatsAppUrl('Hola, me gustaría cotizar un proyecto con Grupo AR.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {WHATSAPP_NUMBER_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>

	        {/* Form */}
	        <div className="relative group">
	          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
	          <div className="relative bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl">
	            {status === 'success' ? (
	              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
	                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
	                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
	                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">¡Mensaje Recibido!</h3>
	                <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
	                  Gracias por contactar a Grupo AR. Un ingeniero se pondrá en contacto contigo en las próximas 24 horas.
	                </p>

	                {shareLinks && (
	                  <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md">
	                    <a
	                      href={shareLinks.whatsappUrl}
	                      target="_blank"
	                      rel="noopener noreferrer"
	                      className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-2xl font-black transition-all"
	                    >
	                      Enviar por WhatsApp
	                    </a>
	                    <a
	                      href={shareLinks.mailtoUrl}
	                      className="flex-1 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-black transition-all"
	                    >
	                      Enviar por correo
	                    </a>
	                  </div>
	                )}

	                <button 
	                  onClick={() => {
	                    setStatus('idle');
	                    setShareLinks(null);
	                    setSubmitError('');
	                  }}
	                  className="mt-10 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
	                >
	                  Enviar otro mensaje
	                </button>
	              </div>
	            ) : (
	              <form onSubmit={handleSubmit} className="space-y-6">
	                {status === 'error' && (
	                  <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-left">
	                    <p className="text-xs font-black uppercase tracking-widest text-red-700">No se pudo enviar</p>
	                    <p className="mt-2 text-sm font-medium text-red-800">{submitError || 'Intenta de nuevo o envía por WhatsApp/correo.'}</p>
	                  </div>
	                )}
	                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
	                  <div className="space-y-2">
	                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Nombre Completo *</label>
	                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className={`w-full px-6 py-4 rounded-2xl border ${errors.name ? 'border-red-400' : 'border-slate-100'} focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-slate-50/50 font-medium`} 
                      placeholder="P. ej. Juan Pérez" 
                    />
                    {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase ml-4 animate-in fade-in slide-in-from-top-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Corporativo *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className={`w-full px-6 py-4 rounded-2xl border ${errors.email ? 'border-red-400' : 'border-slate-100'} focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-slate-50/50 font-medium`} 
                      placeholder="juan@empresa.com" 
                    />
                    {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase ml-4 animate-in fade-in slide-in-from-top-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Teléfono</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className={`w-full px-6 py-4 rounded-2xl border ${errors.phone ? 'border-red-400' : 'border-slate-100'} focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-slate-50/50 font-medium`} 
                      placeholder="+52 00 0000 0000" 
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase ml-4 animate-in fade-in slide-in-from-top-1">{errors.phone}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Tipo de Servicio *</label>
                    <select 
                      name="type" 
                      value={formData.type} 
                      onChange={handleChange} 
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-slate-50/50 font-bold text-slate-700"
                    >
                      <option>Electricidad Professional</option>
                      <option>Telecomunicaciones</option>
                      <option>Remodelaciones</option>
                      <option>Impermeabilización</option>
                      <option>Otros</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Descripción del Proyecto *</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    className={`w-full px-6 py-4 rounded-2xl border ${errors.message ? 'border-red-400' : 'border-slate-100'} focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-slate-50/50 font-medium resize-none`} 
                    placeholder="Cuéntanos un poco sobre los alcances técnicos..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase ml-4 animate-in fade-in slide-in-from-top-1">{errors.message}</p>}
	                </div>

	                <button 
	                  type="submit" 
	                  disabled={status === 'loading'} 
	                  className="w-full group relative bg-slate-900 hover:bg-slate-800 text-white font-black py-5 rounded-[2rem] transition-all overflow-hidden shadow-2xl shadow-slate-900/20 active:scale-[0.98] disabled:opacity-70"
	                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Procesando...
                      </>
                    ) : (
                      <>
                        Enviar Solicitud Técnica
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      </>
                    )}
	                  </span>
	                </button>

	                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
	                  <a
	                    href={buildWhatsAppUrl(composedMessage)}
	                    target="_blank"
	                    rel="noopener noreferrer"
	                    className="text-center bg-green-50 hover:bg-green-100 text-green-700 font-black py-4 rounded-2xl transition-all border border-green-200"
	                  >
	                    Enviar por WhatsApp
	                  </a>
	                  <a
	                    href={buildMailtoUrl(`Solicitud de servicio: ${formData.type}`, composedMessage)}
	                    className="text-center bg-slate-50 hover:bg-slate-100 text-slate-900 font-black py-4 rounded-2xl transition-all border border-slate-200"
	                  >
	                    Enviar por correo
	                  </a>
	                </div>

	                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">Al enviar aceptas nuestra política de privacidad</p>
	              </form>
	            )}
	          </div>
	        </div>
      </div>
    </div>
  );
};

export default Contact;
