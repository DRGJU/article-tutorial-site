import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github.css';

interface ArticleContentProps {
  content: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-gray-700 leading-relaxed mb-4" {...props} />
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            if (inline) {
              return (
                <code className="bg-gray-100 rounded px-1.5 py-0.5 text-sm text-red-600 font-mono" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto my-4">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          },
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 rounded-r text-gray-700" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside space-y-2 my-4 ml-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside space-y-2 my-4 ml-4" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="text-gray-700" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer" {...props} />
          ),
          img: ({ node, ...props }) => (
            <img className="max-w-full h-auto rounded-lg my-4 shadow-md" {...props} />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border-collapse border border-gray-300" {...props} />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="border border-gray-300 px-4 py-2" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
