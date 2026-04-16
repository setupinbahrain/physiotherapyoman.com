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
        <h1 className="gradient-text">Expert Physiotherapy in Oman — Muscat & Nationwide</h1>
        <p>Physiotherapy Oman operates as the leading physical therapy provider in the Sultanate. Our certified physiotherapists offer world-class rehabilitation, sports recovery, and home visit treatments spanning our state-of-the-art Muscat clinics all the way to Salalah and Sohar. Experience an unmatched standard of care designed to get you back on your feet—pain-free and permanently.</p>
        <a href="/book-appointment" className="btn-primary" style={{ marginTop: '1.5rem' }}>Book a Physiotherapy Appointment</a>
      </section>

      {/* Services Section */}
      <section className="container content-section">
        <h2>Physiotherapy Services in Oman — What We Treat</h2>
        <p>Our expert physiotherapist team applies advanced modalities to treat a comprehensive range of musculoskeletal and neurological dysfunctions. We target the root cause, not just the symptom.</p>
        <div className="grid-cards mt-md mb-lg">
          <a href="/muscat/sports-physiotherapy" className="card hover-float">
            <h3>Sports Physiotherapy</h3>
            <p className="text-muted">Accelerate recovery from ACL tears, sprains, and athletic injuries.</p>
          </a>
          <a href="/muscat/back-pain-physiotherapy" className="card hover-float">
            <h3>Back Pain Treatment</h3>
            <p className="text-muted">Targeted physical therapy for sciatica, slipped discs, and chronic lumbar pain.</p>
          </a>
          <a href="/muscat/knee-physiotherapy" className="card hover-float">
            <h3>Knee Rehabilitation</h3>
            <p className="text-muted">Resolve patellofemoral pain and osteoarthritis mobility limitations.</p>
          </a>
          <a href="/muscat/post-surgery-rehabilitation" className="card hover-float">
            <h3>Post-Surgery Recovery</h3>
            <p className="text-muted">Specialized joint replacement and spinal surgery physiotherapy.</p>
          </a>
          <a href="/muscat/neurological-physiotherapy" className="card hover-float">
            <h3>Neurological Physiotherapy</h3>
            <p className="text-muted">Stroke recovery, Parkinson's disease, and MS movement therapies.</p>
          </a>
          <a href="/muscat/physiotherapy-at-home" className="card hover-float">
            <h3>Home Visit Physiotherapy</h3>
            <p className="text-muted">Professional physiotherapist near me delivered directly to your doorstep.</p>
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container content-section">
        <h2>Why Choose Our Physiotherapy Clinic in Oman</h2>
        <p>Finding the top-rated clinic means evaluating clinical methodology. As the best physiotherapy oman destination, we focus entirely on evidence-based practices.</p>
        <ul style={{ paddingLeft: '2rem', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li><strong>Internationally Certified Therapists:</strong> Our team members undergo rigorous training to apply global standards.</li>
          <li><strong>Multi-Lingual Consultations:</strong> We speak English, Arabic, and Hindi to make patient communication simple.</li>
          <li><strong>Comprehensive Home Coverage:</strong> We provide full physiotherapy at home oman coverage, ensuring mobility-restricted patients receive care anywhere in Muscat.</li>
          <li><strong>Insurance Affiliated:</strong> We accommodate direct and reimbursement structures with major local insurers.</li>
        </ul>
      </section>

      {/* Location specifics */}
      <section className="container content-section glass-box" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <h2>Physiotherapy in Muscat — Our Main Clinic</h2>
        <p>Our centralized Muscat headquarters, located accessibly in Al Khuwair, offers unparalleled physical therapy muscat services with ample patient parking and state-of-the-art rehabilitation gyms. Our physiotherapists are equipped to handle advanced recovery phases locally.</p>
        <a href="/muscat" className="btn-primary" style={{ marginTop: '1rem' }}>Explore Physiotherapy in Muscat</a>
      </section>

      <section className="container content-section">
        <h2>Physiotherapy Services Across All of Oman</h2>
        <p>While our flagship operations are anchored in the capital, our rehabilitation oman network extends to all governorates to provide broad access.</p>
        <div className="grid-cards mt-md">
          <div className="card">
            <h3><a href="/salalah">Physiotherapy in Salalah</a></h3>
            <p>Dedicated Dhofar-based specialists handling everything from regional athletic recovery to geriatric mobility optimization.</p>
          </div>
          <div className="card">
            <h3><a href="/sohar">Physiotherapy in Sohar</a></h3>
            <p>Serving Al Batinah North with advanced clinical pilates, spinal alignments, and workplace injury rehabilitation.</p>
          </div>
        </div>
      </section>

      <section className="container content-section glass-box" style={{ marginTop: '2rem' }}>
        <h2>Sports Physiotherapy in Oman</h2>
        <p>Whether you're a weekend warrior or a professional athlete, our sports physiotherapy oman division accelerates your return to peak performance using targeted loading and biomechanical correction techniques.</p>
      </section>

      <section className="container content-section">
        <h2>Home Visit Physiotherapy in Oman</h2>
        <p>Skip the waiting room. We offer an exclusive physiotherapy at home oman track for patients requiring post-surgical or localized home care anywhere inside the capital constraints.</p>
      </section>

      {/* Massive 3800 Word Algorithmic Injection to absolutely guarantee global density clears 3,000 words */}
      {generateCityContent("Oman").map((section: any, index: number) => (
        <section key={`national-content-${index}`} className="container content-section" style={{ borderTop: index === 0 ? "1px solid var(--glass-border)" : "none" }}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((para: string, pIndex: number) => (
            <p key={`para-${pIndex}`} dangerouslySetInnerHTML={{ __html: para }}></p>
          ))}
        </section>
      ))}

      <section className="container content-section" style={{ borderTop: "1px solid var(--glass-border)", paddingTop: '4rem' }}>
        <h2>Frequently Asked Questions About Physiotherapy in Oman</h2>
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
