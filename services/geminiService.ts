import { GoogleGenAI, Type } from "@google/genai";
import { BlogPost } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBlogPosts = async (): Promise<BlogPost[]> => {
  const modelId = "gemini-3-pro-preview"; // Using Pro for complex reasoning and content generation

  const prompt = `
    Crie um blog de notícias especializado em NR-17 e ergonomia, alinhado ao conteúdo e à linguagem do site Amorim Ergonomia.
    
    Instruções detalhadas:
    Gere 3 artigos completos (para demonstração) prontos para publicação com foco em ergonomia, segurança do trabalho e NR-17.
    
    Os artigos devem ser informativos, originais, de alta qualidade e voltados para profissionais e empresas, abordando temas como:
    - Atualizações legais sobre a NR-17
    - Dicas práticas de ergonomia no trabalho
    - Estudos de caso e boas práticas
    - Benefícios da ergonomia para saúde, conforto e produtividade
    - Tecnologias e ferramentas ergonômicas

    Cada artigo deve ter:
    - Título SEO otimizado
    - Resumo (meta description)
    - Introdução envolvente
    - Subtítulos e seções organizadas (use Markdown no corpo do texto)
    - Conclusão com chamada para ação
    - imageUrl: Forneça uma URL de imagem do Unsplash que represente o artigo.
    
    Utilize a linguagem e tom profissional, semelhante ao conteúdo do site Amorim Ergonomia.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 4096 }, // Using thinking budget for better content planning
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              metaDescription: { type: Type.STRING },
              content: { type: Type.STRING, description: "Full article content in Markdown format" },
              imageUrl: { type: Type.STRING },
              tags: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["title", "metaDescription", "content", "imageUrl", "tags"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as BlogPost[];
    }
    return [];
  } catch (error) {
    console.error("Error generating blog posts:", error);
    throw error;
  }
};