import React from 'react';
import type { Metadata } from 'next';
import { generateConditionContent } from '@/lib/contentEngine';
import { SchemaInjector } from '@/components/SEO/SchemaInjector';

type Params = { technique: string; lang: string };

const capitalize = (str: string) => str.replace(/\b\w/g, l => l.toUpperCase());

export async function generateMetadata({ params }: { params: Promise<Params> | Params }): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const technique = capitalize(resolvedParams.technique.replace(/-/g, ' '));
  const isAr = resolvedParams.lang === 'ar';
  
  return {
    title: isAr ? `طرق علاج ${technique} في عُمان` : `${technique} Masterclass Therapy Oman`,
    description: isAr ? `تقديم تكتيكات ${technique} معتمدة لتسريع النتائج للمرضى في مسقط وخارجها.` : `Deploying accredited ${technique} tactics to accelerate results for patients in Muscat and beyond.`,
  };
}

export async function generateStaticParams() {
  const locales = ['en', 'ar'];
  const { techniques } = await import('@/lib/data');
  const params: { technique: string; lang: string }[] = [];
  
  for (const lang of locales) {
    for (const technique of techniques) {
      params.push({ technique, lang });
    }
  }
  return params;
}

export default async function TechniquePage({ params }: { params: Promise<Params> | Params }) {
  const resolvedParams = await Promise.resolve(params);
  const technique = capitalize(resolvedParams.technique.replace(/-/g, ' '));
  const lang = resolvedParams.lang as 'en' | 'ar';
  const isAr = lang === 'ar';

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "name": technique,
    }
  ];

  return (
    <main className="animate-fade-in" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
      <SchemaInjector schemas={schemas} />
      <header className="container hero-section glass-box" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <h1 className="gradient-text">{isAr ? `تطبيق ${technique} لتعافي مثالي` : `${technique} Execution for Rapid Recovery`}</h1>
        <p style={{ fontSize: '1.2rem' }}>{isAr ? `فريقنا المتخصص في عمان يطبق استراتيجيات ${technique} لتوسيع نطاق الحركة وتخفيف ألم الأنسجة العميقة.` : `Our specialist unit in Oman applies deep ${technique} mechanics to expand movement ranges safely.`}</p>
      </header>

      {generateConditionContent(technique, lang).map((content, index) => (
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
