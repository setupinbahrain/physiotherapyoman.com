import React from 'react';
import type { Metadata } from 'next';
import { generateMatrixContent } from '@/lib/contentEngine';
import { SchemaInjector } from '@/components/SEO/SchemaInjector';

type Params = { city: string; service: string; lang: string };

const capitalize = (str: string) => str.replace(/\b\w/g, l => l.toUpperCase());

export async function generateMetadata({ params }: { params: Promise<Params> | Params }): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const city = capitalize(resolvedParams.city.replace(/-/g, ' '));
  const service = capitalize(resolvedParams.service.replace(/-/g, ' '));
  const isAr = resolvedParams.lang === 'ar';
  
  return {
    title: isAr ? `أفضل ${service} في ${city} | علاج طبيعي عُمان` : `Best ${service} in ${city} | Expert Physiotherapists`,
    description: isAr ? `متخصصون في ${service} بالاستناد إلى الأدلة في ${city}. استرجع قدرتك على الحركة وتخلص من الألم اليوم.` : `Targeted, evidence-based ${service} available throughout ${city}. Regain mobility and eliminate pain safely today.`,
  };
}

export async function generateStaticParams() {
  const locales = ['en', 'ar'];
  const { cities, services } = await import('@/lib/data');
  const params: { city: string; service: string; lang: string }[] = [];
  
  for (const lang of locales) {
    for (const city of cities) {
      for (const service of services) {
        params.push({ city, service, lang });
      }
    }
  }
  return params;
}

export default async function ServicePage({ params }: { params: Promise<Params> | Params }) {
  const resolvedParams = await Promise.resolve(params);
  const city = capitalize(resolvedParams.city.replace(/-/g, ' '));
  const service = capitalize(resolvedParams.service.replace(/-/g, ' '));
  const lang = resolvedParams.lang as 'en' | 'ar';
  const isAr = lang === 'ar';

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": isAr ? `${service} في ${city}` : `${service} in ${city}`,
      "url": `https://physiotherapyoman.com/${lang}/${resolvedParams.city}/${resolvedParams.service}`,
      "telephone": "+96872517821",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
      }
    }
  ];

  return (
    <main className="animate-fade-in" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
      <SchemaInjector schemas={schemas} />
      <header className="container hero-section glass-box" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <h1 className="gradient-text">{isAr ? `${service} داخل ${city}` : `${service} within ${city}`}</h1>
        <p style={{ fontSize: '1.2rem' }}>{isAr ? `نقدم خطط علاج متخصصة في مسارات ${service} للمرضى في منطقة ${city}.` : `Extensive and highly specialized recovery pathways for your exact ${service} requirements, mapped exclusively for ${city} residents.`}</p>
      </header>

      {generateMatrixContent(city, service, lang).map((content, index) => (
        <section key={index} className="container content-section" style={{ borderTop: index === 0 ? "1px solid var(--glass-border)" : "none" }}>
          <h2>{content.heading}</h2>
          {content.paragraphs.map((p, pIndex) => (
            <p key={pIndex} dangerouslySetInnerHTML={{ __html: p }}></p>
          ))}
        </section>
      ))}
    </main>
  );
}
