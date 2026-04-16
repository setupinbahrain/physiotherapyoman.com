import React from "react";
import type { Metadata } from "next";
import { SchemaInjector } from "@/components/SEO/SchemaInjector";
import { generateCityContent } from "@/lib/contentEngine";
import { services } from "@/lib/data";
import HeroSlideshow from "@/components/HeroSlideshow";

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
      
      {/* 1. Massive Dynamic Hero Slideshow */}
      <HeroSlideshow lang={lang} />

      {/* 2. Authority Section Restructured */}
      <section className="container content-section" style={{ paddingBottom: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)' }}>
            {isAr ? "تحول جذري في معايير الرعاية الصحية" : "A Paradigm Shift in Specialized Care"}
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
            {isAr ? "نحن لسنا مجرد عيادة؛ نحن شبكة تأهيل شاملة توظف أحدث التقنيات القائمة على الأدلة." : "We are not just a clinic; we are a comprehensive rehabilitation matrix employing purely evidence-based clinical scaling."}
          </p>
        </div>
        
        <div className="grid-cards mt-md px-1" style={{ gap: '3rem' }}>
          <div className="card card-premium hover-float">
            <div className="premium-icon-box">🌍</div>
            <h3 style={{ fontSize: '1.4rem' }}>{isAr ? "تغطية شاملة للسلطنة" : "Nationwide Coverage"}</h3>
            <p>{isAr ? "من مسقط إلى صلالة، توفر شبكتنا أخصائيين محليين يقدمون رعاية عالمية المستوى في مدينتك." : "From Muscat to Salalah, our matrix maps local specialists directly to your current district for immediate intervention."}</p>
          </div>
          <div className="card card-premium hover-float">
            <div className="premium-icon-box">🧬</div>
            <h3 style={{ fontSize: '1.4rem' }}>{isAr ? "علاجات مبنية على الأدلة" : "Clinical Frameworks"}</h3>
            <p>{isAr ? "نستخدم أحدث تقنيات تخفيف الضغط، والتأهيل العصبي، والعلاج اليدوي المتقدم لتسريع تعافيك." : "We deploy proven manual therapy, neurological scaling, and active decompression variables to force recovery adaptation."}</p>
          </div>
          <div className="card card-premium hover-float">
            <div className="premium-icon-box">🏡</div>
            <h3 style={{ fontSize: '1.4rem' }}>{isAr ? "خدمات الزيارة المنزلية" : "Home Visit Architectures"}</h3>
            <p>{isAr ? "رعاية مخصصة تصلك إلى باب منزلك، مثالية لكبار السن أو بعد العمليات الجراحية." : "Direct in-home physical therapy for severe post-op cases or geriatric conditioning across local branches."}</p>
          </div>
        </div>
      </section>

      {/* 3. Core Specialties Link Silo with Bold Branding */}
      <section className="content-section" style={{ background: 'var(--primary)', color: '#fff', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '0.5rem' }}>
                {isAr ? "مجالات تخصصنا" : "Therapeutic Pathways"}
              </h2>
              <p style={{ color: 'var(--secondary)' }}>{isAr ? "حدد الخدمة للوصول المباشر إلى الخبراء المحليين." : "Select a service for direct assignment to local specialists."}</p>
            </div>
            <a href={`/${lang}/muscat`} className="btn btn-massive" style={{ padding: '0.8rem 2rem', fontSize: '1rem', background: 'transparent', border: '1px solid var(--secondary)', color: 'var(--secondary)', boxShadow: 'none' }}>
              {isAr ? "عرض جميع المدن" : "View All Locations"}
            </a>
          </div>

          <div className="grid-cards px-1" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {services.map((service, idx) => (
              <a key={idx} href={`/${lang}/muscat/${service}`} className="card hover-float" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff', textAlign: 'center', fontWeight: '600' }}>
                {isAr ? service.replace(/-/g, ' ') : service.replace(/-/g, ' ')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Magazine Editorial Hub (Massive SEO Injection Redesigned) */}
      <section className="container">
        <div className="editorial-hub">
          {generateCityContent(isAr ? "عُمان" : "Oman", lang).map((section: any, index: number) => {
            // Apply blockquote dynamically to the second section to break up text visually
            const isBlockquoteSection = index === 1;

            return (
              <div key={`national-content-${index}`} style={{ marginBottom: '4rem' }}>
                <h2>{section.heading}</h2>
                <div className="editorial-content-flow">
                  {section.paragraphs.map((para: string, pIndex: number) => {
                    if (isBlockquoteSection && pIndex === 0) {
                      return (
                        <div key={`para-${pIndex}`} className="blockquote-premium" dangerouslySetInnerHTML={{ __html: para }} />
                      );
                    }
                    return (
                      <p key={`para-${pIndex}`} dangerouslySetInnerHTML={{ __html: para }}></p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FAQ Endcap */}
      <section className="container content-section" style={{ borderTop: "1px solid var(--glass-border)", paddingTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem' }}>{isAr ? "أسئلة شائعة" : "Frequently Asked Questions"}</h2>
        <div className="faq-container mt-md">
          {(schemas[1] as any).mainEntity.map((faq: any, index: number) => (
            <div key={index} className="faq-item" style={{ maxWidth: '800px' }}>
              <h3 style={{ marginTop: 0, fontSize: '1.25rem', color: 'var(--primary)' }}>{faq.name}</h3>
              <p style={{ marginBottom: 0, fontSize: '1.1rem' }} className="text-muted">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
