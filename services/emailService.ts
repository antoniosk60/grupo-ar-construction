type SendContactEmailInput = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  composedMessage: string;
};

import { CONTACT_EMAIL } from '@/contactInfo';

function getEmailJsConfig() {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;

  // Log para depuración (solo en desarrollo)
  if (import.meta.env.DEV) {
    console.log('🔧 Configuración EmailJS cargada:', {
      publicKey: publicKey ? `${publicKey.substring(0, 10)}...` : 'NO ENCONTRADA',
      serviceId: serviceId || 'NO ENCONTRADO',
      templateId: templateId || 'NO ENCONTRADO',
      publicKeyLength: publicKey?.length || 0
    });
  }

  return { publicKey, serviceId, templateId };
}

export async function sendContactEmail(input: SendContactEmailInput) {
  const { publicKey, serviceId, templateId } = getEmailJsConfig();

  if (!publicKey || !serviceId || !templateId) {
    const missing = [];
    if (!publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY');
    if (!serviceId) missing.push('VITE_EMAILJS_SERVICE_ID');
    if (!templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID');
    
    throw new Error(
      `Envío por correo no configurado. Variables faltantes: ${missing.join(', ')}`
    );
  }

  if (!serviceId.startsWith('service_')) {
    throw new Error('El `VITE_EMAILJS_SERVICE_ID` no parece válido (debe verse como `service_xxxxx`).');
  }

  if (!templateId.startsWith('template_')) {
    throw new Error('El `VITE_EMAILJS_TEMPLATE_ID` no parece válido (debe verse como `template_xxxxx`).');
  }

  try {
    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: input.name,
        from_email: input.email,
        phone: input.phone,
        service_type: input.serviceType,
        message: input.message,
        composed_message: input.composedMessage,
        to_email: CONTACT_EMAIL,
        reply_to: input.email,
        today: new Date().toLocaleDateString('es-MX')
      },
    };

    // Log del payload (sin datos sensibles completos)
    if (import.meta.env.DEV) {
      console.log('📤 Enviando email con:', {
        service_id: payload.service_id,
        template_id: payload.template_id,
        user_id: `${payload.user_id.substring(0, 8)}...`,
        template_params: {
          from_name: payload.template_params.from_name,
          email: `${payload.template_params.from_email.substring(0, 5)}...`,
          service_type: payload.template_params.service_type
        }
      });
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    
    if (!response.ok) {
      console.error('❌ Error respuesta EmailJS:', responseText);
      throw new Error(`Error ${response.status}: ${responseText || 'No se pudo enviar el correo'}`);
    }

    console.log('✅ Email enviado exitosamente');
    return responseText;

  } catch (error) {
    console.error('💥 Error en sendContactEmail:', error);
    
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error('Error de red o conexión. Verifica tu internet e intenta de nuevo.');
  }
}

// Función de prueba para desarrollo
export async function testEmailJSConnection() {
  console.log('🧪 Probando conexión con EmailJS...');
  
  const { publicKey, serviceId, templateId } = getEmailJsConfig();
  
  if (!publicKey || !serviceId || !templateId) {
    return {
      success: false,
      message: 'Variables faltantes',
      details: { publicKey: !!publicKey, serviceId: !!serviceId, templateId: !!templateId }
    };
  }
  
  try {
    // Prueba simple de conexión
    const testPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: 'Test',
        from_email: 'test@example.com',
        phone: '1234567890',
        service_type: 'Prueba',
        message: 'Mensaje de prueba',
        composed_message: 'Prueba de conexión EmailJS',
        today: new Date().toLocaleDateString()
      }
    };
    
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testPayload),
    });
    
    return {
      success: response.ok,
      status: response.status,
      statusText: response.statusText,
      publicKeyFormat: publicKey.startsWith('user_') ? 'correcto' : 'posible error'
    };
    
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
  }
}
