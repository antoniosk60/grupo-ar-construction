
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el Consultor Inteligente de Grupo-AR, una empresa mexicana líder en soluciones integrales de ingeniería y mantenimiento. 
Tu objetivo es ayudar a los clientes potenciales a entender cómo Grupo-AR puede realizar sus proyectos.

Información clave de Grupo-AR:
- Servicios Principales: 
  1. Electricidad Profesional (NOM-001-SEDE, subestaciones, tableros).
  2. Telecomunicaciones (Cableado Cat6/6a, Fibra Óptica, CCTV Hikvision, WiFi 6).
  3. Remodelaciones Integrales (Diseño 3D, cocinas, baños, locales comerciales).
  4. Impermeabilización Profesional (Membranas líquidas, láminas asfálticas, garantías de hasta 5-10 años).
- Valores: Calidad Garantizada, Equipo Profesional Certificado, Garantía por escrito.
- Contacto: randaleonel@gmail.com | +52 729 685 3914.

Cuando un usuario pregunte por un presupuesto, dales una estimación general técnica (aclarando que es referencia) y anímalos a contactar directamente al equipo para un diagnóstico preciso.
Responde de manera profesional, técnica (mencionando normas y marcas como Fluke o Hikvision si es relevante) pero accesible, y siempre en español.
`;

export async function chatWithGemini(userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Lo siento, tuve un problema procesando tu solicitud. Por favor contacta a soporte.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "En este momento no puedo responder. Por favor, intenta más tarde o usa nuestro formulario de contacto.";
  }
}
