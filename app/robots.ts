import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'anthropic-ai', 'ClaudeBot', 'PerplexityBot', 'OAI-SearchBot', 'cohere-ai'],
        allow: '/',
      }
    ],
    sitemap: 'https://physiotherapyoman.com/sitemap.xml',
  };
}
