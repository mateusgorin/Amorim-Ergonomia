import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Tag } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Artigo não encontrado</h1>
        <Link to="/" className="text-brand hover:underline">← Voltar ao início</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Link to="/#blog" className="inline-flex items-center gap-2 text-brand font-semibold mb-8 hover:underline text-sm">
          <ArrowLeft size={16} /> Voltar ao blog
        </Link>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1 text-xs bg-brand/10 text-brand px-2 py-1 rounded-full font-semibold">
              <Tag size={10} /> {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-8 pb-8 border-b border-gray-100">Por Vanessa Fonseca Amorim · Amorim Ergonomia</p>
        {post.imageUrl && (
          <img src={post.imageUrl} alt={post.title} className="w-full rounded-xl mb-8 object-cover max-h-64" />
        )}
        <div className="prose prose-lg prose-gray max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        <div className="mt-12 p-6 bg-brand/5 rounded-2xl border border-brand/20 text-center">
          <p className="font-semibold text-gray-900 mb-3">Precisa de consultoria ergonômica em Brasília?</p>
          <a href="https://wa.me/5561996883389" className="inline-block bg-brand text-white px-6 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors">
            Falar com a Vanessa pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
