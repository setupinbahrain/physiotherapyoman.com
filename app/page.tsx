import React from "react";
import type { Metadata } from "next";
import { SchemaInjector } from "../components/SEO/SchemaInjector";
import { generateCityContent } from "../lib/contentEngine";

export const metadata: Metadata = {
  title: "Physiotherapy Oman | Expert Physiotherapists Across the Sultanate",
  description: "Expert physiotherapy services across Oman. Specialist physiotherapists in Muscat, Salalah & Sohar. Sports physio, back pain, post-surgery rehab & home visits. Book today.",
};

export default function HomePage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Physiotherapy Oman",
      "url": "https://physiotherapyoman.com",
      "telephone": "+96890000000",
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
          "name": "What is the best physiotherapy clinic in Oman?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physiotherapy Oman is rated among the top physiotherapy providers in the Sultanate, offering specialist care in Muscat and across Oman. Our clinics provide sports physiotherapy, orthopaedic rehabilitation, neurological physiotherapy, and home visit services with certified physiotherapists."
          }
        },
        {
          "@type": "Question",
          "name": "How much does physiotherapy cost in Oman?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physiotherapy session costs in Oman typically range from OMR 15 to OMR 40 per session depending on the type of treatment, location, and clinic. Initial assessment sessions are usually priced separately. Contact our Muscat clinic for a transparent pricing guide."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get physiotherapy at home in Oman?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Physiotherapy Oman provides home visit physiotherapy services across Muscat and major Oman cities. Our mobile physiotherapists bring all necessary equipment to your home, making professional treatment accessible for patients with mobility limitations, post-surgical recovery needs, or busy schedules."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a referral to see a physiotherapist in Oman?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No referral is required to book a physiotherapy appointment with Physiotherapy Oman. You can book directly online, via WhatsApp, or by phone. However, if you have a medical report from your doctor, please bring it to your first session to help our physiotherapists understand your condition."
          }
        },
        {
          "@type": "Question",
          "name": "How many physiotherapy sessions will I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The number of sessions depends on your condition and treatment goals. Acute injuries typically require 4–8 sessions. Chronic conditions and post-surgical rehabilitation may require 12–20+ sessions. Your physiotherapist will provide a personalised treatment plan after your initial assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Is physiotherapy covered by health insurance in Oman?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many health insurance plans in Oman cover physiotherapy sessions, including plans from NLGIC, AXA, and other major providers. We recommend checking your policy or contacting your insurer directly. Our team can assist with insurance pre-authorisation requests."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Physiotherapy Oman located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physiotherapy Oman has clinics in Muscat including Al Khuwair and Al Ghubra, with services available in Salalah and Sohar. Our home visit service covers all Muscat Governorate districts. Check our Locations page for exact addresses and maps."
          }
        },
        {
          "@type": "Question",
          "name": "What conditions does physiotherapy treat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physiotherapy treats a wide range of conditions including back pain, neck pain, shoulder injuries, knee pain, sports injuries, post-surgical rehabilitation, stroke recovery, neurological conditions, workplace injuries, and chronic pain. Our physiotherapists in Oman are trained in orthopaedic, neurological, and sports physiotherapy specialisations."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://physiotherapyoman.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://physiotherapyoman.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <main className="animate-fade-in">
      <SchemaInjector schemas={schemas} />
      
      {/* Hero Section */}
      <section className="container hero-section glass-box">
        <h1 className="gradient-text">علاج طبيعي متقدم في سلطنة عُمان — مسقط ومختلف المحافظات</h1>
        <p>يعتبر "علاج طبيعي عُمان" المزود الرائد لخدمات التأهيل البدني في السلطنة. يقدم فريقنا من الأخصائيين المعتمدين برامج إعادة تأهيل عالمية المستوى، علاج الإصابات الرياضية، والزيارات المنزلية المباشرة في عياداتنا المتطورة من مسقط وحتى صلالة وصحار. انضم إلينا لتشعر بفارق حقيقي وتستعيد روتينك اليومي بدون ألم.</p>
        <a href="https://wa.link/physiotherapyoman" className="btn-primary" style={{ marginTop: '1.5rem' }}>احجز موعد علاج طبيعي الآن</a>
      </section>

      {/* Services Section */}
      <section className="container content-section">
        <h2>خدمات العلاج الطبيعي في عُمان — ما نقوم بعلاجه</h2>
        <p>يطبق فريقنا المتخصص أحدث التقنيات لعلاج مجموعة شاملة من اضطرابات الجهاز العضلي الهيكلي والعصبي. نحن لا نكتفي بعلاج الأعراض، بل نعالج السبب الجذري بفعالية.</p>
        <div className="grid-cards mt-md mb-lg">
          <a href="/muscat/sports-physiotherapy" className="card hover-float">
            <h3>العلاج الطبيعي الرياضي</h3>
            <p className="text-muted">تسريع التعافي من تمزق الأربطة، الالتواءات، والإصابات الرياضية المعقدة.</p>
          </a>
          <a href="/muscat/back-pain-physiotherapy" className="card hover-float">
            <h3>علاج آلام الظهر</h3>
            <p className="text-muted">تخفيف آلام عرق النسا، الانزلاق الغضروفي، والآلام المزمنة في أسفل الظهر.</p>
          </a>
          <a href="/muscat/knee-physiotherapy" className="card hover-float">
            <h3>تأهيل الركبة</h3>
            <p className="text-muted">حلول لمشاكل خشونة المفاصل واحتكاك الرضفة لاستعادة سهولة الحركة.</p>
          </a>
          <a href="/muscat/post-surgery-rehabilitation" className="card hover-float">
            <h3>إعادة التأهيل بعد الجراحة</h3>
            <p className="text-muted">برامج متخصصة بعد جراحات تغيير المفاصل والعمود الفقري.</p>
          </a>
          <a href="/muscat/neurological-physiotherapy" className="card hover-float">
            <h3>العلاج الطبيعي العصبي</h3>
            <p className="text-muted">تأهيل ما بعد الجلطات، مرض باركنسون، والاضطرابات العصبية المتعددة.</p>
          </a>
          <a href="/muscat/physiotherapy-at-home" className="card hover-float">
            <h3>العلاج الطبيعي المنزلي</h3>
            <p className="text-muted">أخصائي علاج طبيعي معتمد يصلك مباشرة إلى راحة منزلك.</p>
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container content-section">
        <h2>لماذا تختار عياداتنا للعلاج الطبيعي في عُمان؟</h2>
        <p>العثور على العيادة الأفضل يعني تقييم المنهجية السريرية. انطلاقاً من كوننا الوجهة الأفضل، نركز بالكامل على ممارسات مبنية على أحدث الأدلة والبراهين الطبية.</p>
        <ul style={{ paddingRight: '2rem', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li><strong>معالجون معتمدون دولياً:</strong> يخضع فريقنا لتدريب صارم لتطبيق المعايير العالمية بدقة في كل جلسة.</li>
          <li><strong>استشارات متعددة اللغات:</strong> نتحدث العربية والإنجليزية لضمان تواصل فعال ومريح مع جميع المرضى.</li>
          <li><strong>تغطية منزلية شاملة:</strong> نوفر خدمات العلاج الطبيعي المنزلي لخدمة كبار السن ومرضى ما بعد الجراحة في كافة مناطق مسقط.</li>
          <li><strong>دعم التأمين الصحي:</strong> نعمل بتنسيق مع كبرى شركات التأمين المحلية لتسهيل الإجراءات والتعويضات.</li>
        </ul>
      </section>

      {/* Location specifics */}
      <section className="container content-section glass-box" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <h2>العلاج الطبيعي في مسقط — المقر الرئيسي</h2>
        <p>تقع عيادتنا الرئيسية بشكل استراتيجي في منطقة الخوير، متيحة أفضل خدمات العلاج الطبيعي في قلب العاصمة مع صالات رياضية حديثة ومواقف سيارات واسعة. أخصائيونا جاهزون للإشراف على أصعب خطط التعافي.</p>
        <a href="/muscat" className="btn-primary" style={{ marginTop: '1rem' }}>تصفح علاج طبيعي في مسقط</a>
      </section>

      <section className="container content-section">
        <h2>تغطية العلاج الطبيعي لمختلف محافظات عُمان</h2>
        <p>بالتوازي مع مركزنا في العاصمة، تمتد شبكتنا العلاجية لضمان حصول الجميع على أفضل أنواع التشخيص وبرامج التأهيل.</p>
        <div className="grid-cards mt-md">
          <div className="card">
            <h3><a href="/salalah">علاج طبيعي في صلالة</a></h3>
            <p>أخصائيون في ظفار لتقديم خدمات تتراوح من التعافي الرياضي الموسمي إلى رعاية كبار السن وتطوير المرونة الحركية.</p>
          </div>
          <div className="card">
            <h3><a href="/sohar">علاج طبيعي في صحار</a></h3>
            <p>خدمة شمال الباطنة بأحدث تقنيات الإصطفاف الفقري وتأهيل إصابات مواقع العمل والتمدد العكسي.</p>
          </div>
        </div>
      </section>

      {/* Massive 3800 Word Algorithmic Injection */}
      {generateCityContent("عُمان").map((section: any, index: number) => (
        <section key={`national-content-${index}`} className="container content-section" style={{ borderTop: index === 0 ? "1px solid var(--glass-border)" : "none" }}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((para: string, pIndex: number) => (
            <p key={`para-${pIndex}`} dangerouslySetInnerHTML={{ __html: para }}></p>
          ))}
        </section>
      ))}

      <section className="container content-section" style={{ borderTop: "1px solid var(--glass-border)", paddingTop: '4rem' }}>
        <h2>أسئلة شائعة حول العلاج الطبيعي في عُمان</h2>
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
