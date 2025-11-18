import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, schema }) => {
  useEffect(() => {
    document.title = `${title} | Seattle Refinishing Pros`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Handle JSON-LD Schema
    let script = document.getElementById('json-ld-schema');
    if (!script) {
        script = document.createElement('script');
        script.id = 'json-ld-schema';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
    }
    
    if (schema) {
        script.textContent = JSON.stringify(schema);
    }

    // In a real Next.js app, we would handle canonical links here too.
  }, [title, description, schema]);

  return null;
};

export default SEO;