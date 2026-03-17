import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://savetok.id';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // Hindari indeksasi dashboard khusus & API
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
