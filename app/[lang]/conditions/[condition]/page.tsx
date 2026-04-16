import React from 'react';
import type { Metadata } from 'next';
import { generateConditionContent } from '@/lib/contentEngine';
import { SchemaInjector } from '@/components/SEO/SchemaInjector';

type Params = { condition: string; lang: string };

const capitalize = (str: string) => str.replace(/\b\w/g, l => l.toUpperCase());

export async function generateMetadata({ params }: { params: Promise<Params> | Params }): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const condition = capitalize(resolvedParams.condition.replace(/-/g, ' '));
  const isAr = resolvedParams.lang === 'ar';
  
  return {
    title: isAr ? `علاج ${condition} الواعد بالشفاء في عُمان` : `Advanced ${condition} Treatment in Oman`,
    description: isAr ? `نقدم برامج تعافي مصممة لاستهداف ${condition} باستخدام طرائق مبنية على الأدلة.` : `We provide targeted recovery blueprints for ${condition} utilizing purely evidence-based clinical modalities.`,
  };
}

export default async function ConditionPage({ params }: { params: Promise<Params> | Params }) {
  const resolvedParams = await Promise.resolve(params);
  const condition = capitalize(resolvedParams.condition.replace(/-/g, ' '));
  const lang = resolvedParams.lang as 'en' | 'ar';
  const isAr = lang === 'ar';

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": condition,
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": isAr ? "علاج طبيعي" : "Physiotherapy"
      }
    }
  ];

  return (
    <main className="animate-fade-in" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
      <SchemaInjector schemas={schemas} />
      <header className="container hero-section glass-box" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <h1 className="gradient-text">{isAr ? `تخفيف آلام ${condition} في عُمان` : `${condition} Pain Relief & Therapy in Oman`}</h1>
        <p style={{ fontSize: '1.2rem' }}>{isAr ? `معالجة الأسباب الجذرية وراء ${condition} باستراتيجيات سريرية متقدمة.` : `Targeting the root restrictions causing ${condition} with highly specific, data-driven physio protocols.`}</p>
      </header>

      {generateConditionContent(condition, lang).map((content, index) => (
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
