import { MetadataRoute } from 'next';
import { cities, services, conditions, techniques } from '../lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://physiotherapyoman.com';

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    }
  ];

  // Tier 2: Cities
  cities.forEach((city) => {
    sitemapEntries.push({
      url: `${baseUrl}/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // Tier 3: City x Service Matrix
    services.forEach((service) => {
      sitemapEntries.push({
        url: `${baseUrl}/${city}/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // Tier 4: Conditions
  conditions.forEach((condition) => {
    sitemapEntries.push({
      url: `${baseUrl}/conditions/${condition}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Tier 4: Techniques
  techniques.forEach((tech) => {
    sitemapEntries.push({
      url: `${baseUrl}/techniques/${tech}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
