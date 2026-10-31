import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://maxyron.com/', changeFrequency: 'monthly', priority: 1 }];
}
