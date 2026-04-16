import React from "react";
import type { Metadata } from "next";
import { SchemaInjector } from "@/components/SEO/SchemaInjector";
import { generateCityContent } from "@/lib/contentEngine";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Physiotherapy Oman | Expert Physiotherapists Across the Sultanate",
  description: "Expert physiotherapy services across Oman. Specialist physiotherapists in Muscat, Salalah & Sohar. Sports physio, back pain, post-surgery rehab & home visits. Book today.",
};

export default async function HomePage({ params }: { params: Promise<{ lang: string }> | { lang: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang as 'en' | 'ar';
  const isAr = lang === 'ar';

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": isAr ? "علاج طبيعي عُمان" : "Physiotherapy Oman",
      "url": `https://physiotherapyoman.com/${lang}`,
      "telephone": "+96872517821",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Khuwair",
        "addressLocality": "Muscat",
        "addressRegion": "Muscat Governorate",
        "postalCode": "133",
        "addressCountry": "OM"
      },
      "openingHours": "Su,Mo,Tu,We,Th 09:00-20:00",
      "medicalSpecialty": "Physiotherapy",
      "priceRange": "OMR 15–40"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": isAr ? "ما هي أفضل عيادة علاج طبيعي في عمان؟" : "What is the best physiotherapy clinic in Oman?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": isAr ? "علاج طبيعي عُمان مصنف كأفضل مزود في السلطنة مع توفر رعاية منزلية." : "Physiotherapy Oman is rated among the top providers offering home care."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": `https://physiotherapyoman.com/${lang}`,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `https://physiotherapyoman.com/${lang}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <main className="animate-fade-in" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
      <SchemaInjector schemas={schemas} />
      
      {/* Hero Section */}
      <section className="container hero-section glass-box" style={{ marginTop: '4rem', marginBottom: '4rem', textAlign: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem' }}>
          {isAr ? "علاج طبيعي متقدم في سلطنة عُمان — مسقط ومختلف المحافظات" : "Premier Physiotherapy in the Sultanate of Oman"}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          {isAr ? "يعتبر علاج طبيعي عُمان المزود الرائد لخدمات التأهيل البدني في السلطنة، نقدم برامج إعادة تأهيل عالمية المستوى." : "We deliver advanced physical rehabilitation, sports injury recovery, and post-surgery care across the entire GCC matrix."}
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a href={`/${lang}/muscat`} className="btn btn-primary" style={{ margin: '0 0.5rem' }}>{isAr ? "اكتشف عياداتنا" : "Find Local Clinics"}</a>
          <a href="https://wa.link/physiotherapyoman" className="btn" style={{ margin: '0 0.5rem', background: 'transparent', border: '2px solid var(--secondary)', color: 'var(--secondary)', padding: '1rem 2rem', borderRadius: '8px', fontWeight: '600', textDecoration: 'none' }}>{isAr ? "احجز استشارة" : "Book Consultation"}</a>
        </div>
      </section>

      {/* Authority Section */}
      <section className="content-section" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem', padding: '0 1rem' }}>{isAr ? "لماذا تختار علاج طبيعي عُمان؟" : "Why Trust Physiotherapy Oman?"}</h2>
        <div className="grid-cards mt-md px-1">
          <div className="card hover-float">
            <h3 style={{ color: 'var(--secondary)' }}>{isAr ? "تغطية شاملة للسلطنة" : "Nationwide Coverage"}</h3>
            <p>{isAr ? "من مسقط إلى صلالة، توفر شبكتنا أخصائيين محليين يقدمون رعاية عالمية المستوى في مدينتك." : "From Muscat to Salalah, our matrix maps local specialists directly to your current district for immediate intervention."}</p>
          </div>
          <div className="card hover-float">
            <h3 style={{ color: 'var(--secondary)' }}>{isAr ? "علاجات مبنية على الأدلة" : "Clinical Frameworks"}</h3>
            <p>{isAr ? "نستخدم أحدث تقنيات تخفيف الضغط، والتأهيل العصبي، والعلاج اليدوي المتقدم لتسريع تعافيك." : "We deploy proven manual therapy, neurological scaling, and active decompression variables to force recovery adaptation."}</p>
          </div>
          <div className="card hover-float">
            <h3 style={{ color: 'var(--secondary)' }}>{isAr ? "خدمات الزيارة المنزلية" : "Home Visit Architectures"}</h3>
            <p>{isAr ? "رعاية مخصصة تصلك إلى باب منزلك، مثالية لكبار السن أو بعد العمليات الجراحية." : "Direct in-home physical therapy for severe post-op cases or geriatric conditioning across local branches."}</p>
          </div>
        </div>
      </section>

      {/* Core Specialties Link Silo */}
      <section className="content-section" style={{ paddingTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem', padding: '0 1rem' }}>{isAr ? "تخصصاتنا العلاجية" : "Our Treatment Architecture"}</h2>
        <div className="grid-cards mt-md px-1">
          {services.map((service, idx) => (
            <a key={idx} href={`/${lang}/muscat/${service}`} className="card hover-float" style={{ textAlign: 'center', fontWeight: '600' }}>
              {isAr ? service.replace(/-/g, ' ') : service.replace(/-/g, ' ')}
            </a>
          ))}
        </div>
      </section>

      {/* Massive 3800 Word Algorithmic Injection */}
      {generateCityContent(isAr ? "عُمان" : "Oman", lang).map((section: any, index: number) => (
        <section key={`national-content-${index}`} className="container content-section" style={{ borderTop: index === 0 ? "1px solid var(--glass-border)" : "none" }}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((para: string, pIndex: number) => (
            <p key={`para-${pIndex}`} dangerouslySetInnerHTML={{ __html: para }}></p>
          ))}
        </section>
      ))}

      <section className="container content-section" style={{ borderTop: "1px solid var(--glass-border)", paddingTop: '4rem' }}>
        <h2>{isAr ? "أسئلة شائعة حول العلاج الطبيعي" : "Frequently Asked Questions"}</h2>
        <div className="faq-container mt-md">
          {(schemas[1] as any).mainEntity.map((faq: any, index: number) => (
            <div key={index} className="faq-item">
              <h3 style={{ marginTop: 0, fontSize: '1.25rem' }}>{faq.name}</h3>
              <p style={{ marginBottom: 0 }} className="text-muted">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
