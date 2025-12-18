import React, { useState } from 'react';
import { generateBlogPosts } from '../services/geminiService';
import { BlogPost } from '../types';
import { Sparkles, Loader2, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogGenerator: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expandedPostIndex, setExpandedPostIndex] = useState<number | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    try {
      const generatedPosts = await generateBlogPosts();
      setPosts(generatedPosts);
    } catch (err) {
      setError('Ocorreu um erro ao gerar os artigos com IA. Verifique sua chave API ou tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="text-brand w-5 h-5" />
            <span className="text-brand font-bold uppercase tracking-wide text-sm">Powered by Gemini AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Blog de Notícias NR-17 & Ergonomia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Conteúdo atualizado e especializado gerado com inteligência artificial para manter sua empresa informada.
          </p>

          {!loading && posts.length === 0 && (
            <button
              onClick={handleGenerate}
              className="bg-gradient-to-r from-brand to-brand-light text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 mx-auto"
            >
              <Sparkles size={20} />
              Gerar Artigos Agora
            </button>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-brand animate-spin mb-4" />
              <p className="text-gray-600 font-medium animate-pulse">
                A IA está pensando e escrevendo artigos especializados para você...
                <br/>
                <span className="text-sm text-gray-400">(Isso pode levar alguns segundos devido ao modo de pensamento profundo)</span>
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg inline-block mt-4 border border-red-200">
              {error}
            </div>
          )}
        </div>

        {posts.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                 {/* Placeholder for AI suggested image theme */}
                <div className="h-48 bg-gray-200 relative flex items-center justify-center text-center p-4">
                    <span className="text-gray-500 text-sm font-medium italic">
                        {post.imageSuggestion || "Imagem Ilustrativa sobre Ergonomia"}
                    </span>
                    <div className="absolute top-4 right-4 bg-brand text-white text-xs font-bold px-2 py-1 rounded">
                        AI GENERATED
                    </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map(tag => (
                        <span key={tag} className="text-xs bg-brand/10 text-brand px-2 py-1 rounded-full font-semibold">#{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 font-sans">{post.metaDescription}</p>
                  
                  {expandedPostIndex === index ? (
                     <div className="mt-4 text-gray-700 text-sm prose prose-sm prose-brand max-w-none">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                        <button 
                            onClick={() => setExpandedPostIndex(null)}
                            className="mt-4 text-brand font-bold underline text-sm"
                        >
                            Ler menos
                        </button>
                     </div>
                  ) : (
                    <div className="mt-auto pt-4">
                        <button 
                            onClick={() => setExpandedPostIndex(index)}
                            className="flex items-center gap-2 text-brand font-bold hover:text-brand-dark transition-colors"
                        >
                            Ler artigo completo <BookOpen size={16} />
                        </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGenerator;