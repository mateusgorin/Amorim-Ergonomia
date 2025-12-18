import React, { useState } from 'react';
import { BlogPost } from '../types';
import { blogPosts } from '../data/blogPosts';
import { BookOpen, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedPostIndex, setExpandedPostIndex] = useState<number | null>(null);

  const isAllVisible = visibleCount >= blogPosts.length;

  const handleShowMore = () => {
    if (isAllVisible) {
      setVisibleCount(3);
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setVisibleCount(blogPosts.length);
    }
  };

  const visiblePosts = blogPosts.slice(0, visibleCount);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand font-bold uppercase tracking-wide text-sm">Conteúdo Especializado</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 mt-2">Blog de Notícias NR-17 & Ergonomia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Informação técnica, dicas práticas e atualizações legais para manter sua empresa segura e produtiva.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {visiblePosts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
               {/* Cover Image */}
              <div className="h-48 relative bg-gray-100">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-brand text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                      BLOG
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
                          className="mt-6 text-brand font-bold underline text-sm flex items-center gap-1 hover:text-brand-dark"
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

        <div className="text-center">
          <button
            onClick={handleShowMore}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold shadow-md transition-all duration-300 ${
              isAllVisible 
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                : 'bg-brand text-white hover:bg-brand-dark hover:-translate-y-1 hover:shadow-xl'
            }`}
          >
            {isAllVisible ? (
              <>
                Mostrar Menos <ChevronUp size={20} />
              </>
            ) : (
              <>
                Ver todos os artigos do blog <ChevronDown size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;