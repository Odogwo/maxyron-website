import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://maxyron.com';
  return [
    { url: `${base}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/products`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/learning`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spiritual-consciousness`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/research`, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
