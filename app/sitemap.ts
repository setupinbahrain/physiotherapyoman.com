import { MetadataRoute } from 'next';
import { cities, services, conditions, techniques } from '../lib/data';

const BASE_URL = 'https://physiotherapyoman.com';
const LOCALES = ['en', 'ar'];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const lang of LOCALES) {
    // 1. Core Homepage
    sitemapEntries.push({
      url: `${BASE_URL}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    });

    // 2. City Hubs
    cities.forEach((city) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${lang}/${city}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });

      // 3. City + Service Intersections
      services.forEach((service) => {
        sitemapEntries.push({
          url: `${BASE_URL}/${lang}/${city}/${service}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        });
      });
    });

    // 4. Conditions
    conditions.forEach((condition) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${lang}/conditions/${condition}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

    // 5. Techniques
    techniques.forEach((technique) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${lang}/techniques/${technique}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  }

  return sitemapEntries;
}
