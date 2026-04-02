import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Anda dapat menambahkan URL blog atau URL dinamis Anda di sini juga ke depannya
  const baseUrl = 'https://savetok.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    // Contoh penambahan struktur
    // {
    //   url: `${baseUrl}/cara-download`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
