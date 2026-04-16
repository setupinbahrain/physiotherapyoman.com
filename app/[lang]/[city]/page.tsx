import React from 'react';
import type { Metadata } from 'next';
import { generateCityContent } from '@/lib/contentEngine';
import { SchemaInjector } from '@/components/SEO/SchemaInjector';

type Params = { city: string; lang: string };

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export async function generateMetadata({ params }: { params: Promise<Params> | Params }): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const city = capitalize(resolvedParams.city.replace(/-/g, ' '));
  const isAr = resolvedParams.lang === 'ar';
  
  return {
    title: isAr ? `أفضل علاج طبيعي في ${city} | عيادات الخبراء` : `Best Physiotherapy in ${city} | Expert Clinics`,
    description: isAr ? `نقدم برامج علاج طبيعي متطورة لتخفيف آلام الظهر والإصابات الرياضية وتأهيل ما بعد الجراحة في ${city}.` : `We provide advanced physical therapy for back pain, sports injuries, and post-surgery rehabilitation in ${city}.`,
  };
}

export default async function CityPage({ params }: { params: Promise<Params> | Params }) {
  const resolvedParams = await Promise.resolve(params);
  const city = capitalize(resolvedParams.city.replace(/-/g, ' '));
  const lang = resolvedParams.lang as 'en' | 'ar';
  const isAr = lang === 'ar';

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": isAr ? `علاج طبيعي عُمان - ${city}` : `Physiotherapy Oman - ${city}`,
      "url": `https://physiotherapyoman.com/${lang}/${resolvedParams.city}`,
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
        <h1 className="gradient-text">{isAr ? `تأهيل سريري متقدم في ${city}` : `Advanced Clinical Rehabilitation in ${city}`}</h1>
        <p style={{ fontSize: '1.2rem' }}>{isAr ? `أخصائيو علاج طبيعي معتمدون يخدمون منطقة ${city} المتخصصة بتقنيات مبنية على الأدلة.` : `Certified physiotherapists serving the ${city} district utilizing strictly evidence-based therapeutic modalities.`}</p>
      </header>

      {generateCityContent(city, lang).map((content, index) => (
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
