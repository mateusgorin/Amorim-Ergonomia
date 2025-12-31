import React, { useState } from 'react';
import { generateBlogPosts } from '../services/geminiService';
import { BlogPost } from '../types';
import { Sparkles, Loader2, BookOpen, Tag, ChevronUp } from 'lucide-react';
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
      setError('Ocorreu um erro ao gerar os artigos com IA. Verifique sua conexão ou tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="text-brand w-5 h-5" />
            <span className="text-brand font-bold uppercase tracking-wide text-sm">Powered by Gemini AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Blog Dinâmico NR-17 & Ergonomia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Clique abaixo para gerar conteúdos inéditos e especializados utilizando inteligência artificial de última geração.
          </p>

          {!loading && (
            <button
              onClick={handleGenerate}
              className="bg-gradient-to-r from-brand to-brand-light text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 mx-auto"
            >
              <Sparkles size={20} />
              {posts.length > 0 ? 'Gerar Novos Artigos' : 'Gerar Artigos Agora'}
            </button>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-brand animate-spin mb-4" />
              <p className="text-gray-600 font-medium animate-pulse text-center">
                A IA está pensando e escrevendo artigos especializados para você...
                <br/>
                <span className="text-sm text-gray-400">(Processando via Gemini Pro - isso pode levar alguns segundos)</span>
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
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img 
                      src={post.imageUrl || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800'} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-brand text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                        AI GENERATED
                    </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 text-xs bg-brand/10 text-brand px-2 py-1 rounded-full font-semibold">
                          <Tag size={10} /> {tag}
                        </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight min-h-[3.5rem]">{post.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 font-sans line-clamp-3">{post.metaDescription}</p>
                  
                  {expandedPostIndex === index ? (
                     <div className="mt-4 text-gray-700 text-sm prose prose-sm prose-brand max-w-none border-t pt-4">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                        <button 
                            onClick={() => setExpandedPostIndex(null)}
                            className="mt-6 text-brand font-bold underline text-sm flex items-center gap-1"
                        >
                            <ChevronUp size={16} /> Ler menos
                        </button>
                     </div>
                  ) : (
                    <div className="mt-auto pt-4 border-t border-gray-50">
                        <button 
                            onClick={() => setExpandedPostIndex(index)}
                            className="flex items-center gap-2 text-brand font-bold hover:text-brand-dark transition-colors text-sm uppercase tracking-wide"
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