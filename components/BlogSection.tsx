import React, { useState } from 'react';
import { BlogPost } from '../types';
import { blogPosts } from '../data/blogPosts';
import { BookOpen, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);

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
    <section id="blog" className="pt-14 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand font-bold uppercase tracking-wide text-sm">Conteúdo Especializado</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 mt-2">Blog de Notícias NR-17 & Ergonomia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Informação técnica, dicas práticas e atualizações legais para manter sua empresa segura e produtiva.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {visiblePosts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
               {/* Cover Image */}
              <div className="h-48 relative bg-gray-100 min-h-[192px]">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    loading="lazy"
                    width="800"
                    height="400"
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
                
                <div className="mt-auto pt-4 border-t border-gray-50">
                    <Link 
                        to={`/blog/${post.slug}`}
                        className="flex items-center gap-2 text-brand font-bold hover:text-brand-dark transition-colors text-sm uppercase tracking-wide"
                    >
                        Ler artigo completo <BookOpen size={16} />
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 mb-6"></div>
        <div className="text-center">
          <button
            onClick={handleShowMore}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 ${
              isAllVisible 
                ? 'shadow-sm border border-gray-300 text-gray-500 hover:bg-gray-100' 
                : 'shadow-md bg-brand text-white hover:bg-brand-dark hover:-translate-y-1 hover:shadow-xl'
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