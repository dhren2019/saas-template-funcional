const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Crear el modelo
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",  // Modelo de Gemini que quieres usar
});

const generationConfig = {
  temperature: 1,  // Control de aleatoriedad
  topP: 0.95,      // Control de probabilidad
  topK: 64,        // Límite de los mejores K resultados
  maxOutputTokens: 8192,  // Límite de tokens para la respuesta
  responseMimeType: "text/plain",  // Tipo de respuesta
};

export const chatSession = model.startChat({
  generationConfig,
  // Puedes ajustar la configuración de seguridad aquí
  history: [],  // Historial de conversación, si se requiere
});

// Función para llamar a la API y obtener el contenido optimizado
export const fetchOptimizedContent = async (url: string) => {
  try {
    // Enviar el mensaje para optimizar SEO
    const response = await chatSession.sendMessage(
      `Optimize the following page URL for SEO. Provide the optimized title, meta description, and sitemap.\nURL: ${url}`
    );

    if (!response || response.error) {
      throw new Error('Error al obtener los datos de la API');
    }

    const { title, metadescription, sitemap } = response.data;

    // Retornar los resultados optimizados
    return {
      title: title || "No Title Found",
      metadescription: metadescription || "No Meta Description Found",
      sitemap: sitemap || "No Sitemap Found",
    };
  } catch (error) {
    console.error("Error al obtener el contenido optimizado:", error);
    throw error;  // Lanza el error para que sea manejado en el componente
  }
};
