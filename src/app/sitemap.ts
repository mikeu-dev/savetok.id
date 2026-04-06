import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tikdrop.my.id').replace(/\/$/, '');
  const now = new Date().toISOString();

  const staticRoutes = [
    { path: '', changeFrequency: 'always' as const, priority: 1 },
    { path: '/history', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/disclaimer', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/terms-of-service', changeFrequency: 'yearly' as const, priority: 0.5 },
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path || '/'}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
