import React from 'react';
import type { Metadata } from 'next';
import { generateCityContent } from '../../lib/contentEngine';

type Props = {
  params: { city: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: rawCity } = await params;
  const city = rawCity.charAt(0).toUpperCase() + rawCity.slice(1);
  return {
    title: `Physiotherapy ${city} | Expert Physiotherapists in ${city} Oman`,
    description: `Top-rated physiotherapy clinic in ${city}, Oman. Specialists in back pain, sports injuries, post-surgery rehab & home visits in ${city}. Book now.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { city: rawCity } = await params;
  const city = rawCity.charAt(0).toUpperCase() + rawCity.slice(1);
  const contentBlocks = generateCityContent(city);

  return (
    <main className="container animate-fade-in">
      <header className="hero-section glass-box">
        <h1 className="gradient-text">Physiotherapy in {city} — Specialist Clinics Across Oman</h1>
        <p>Expert care, personalized treatment, and measurable results right here in {city}.</p>
      </header>

      {/* Localized Links */}
      <section className="content-section" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '3rem' }}>
        <h2>Physiotherapy Services in {city} — Regional Directory</h2>
        <p>From advanced sports injury rehabilitation to in-home care, our {city} specialists deliver evidence-based treatment modalities.</p>
        <div className="grid-cards mt-md">
          <a href={`/${rawCity}/sports-physiotherapy`} className="card hover-float">Sports Physiotherapy {city}</a>
          <a href={`/${rawCity}/back-pain-physiotherapy`} className="card hover-float">Back Pain Treatment {city}</a>
          <a href={`/${rawCity}/physiotherapy-at-home`} className="card hover-float">Home Visit Physiotherapy {city}</a>
        </div>
      </section>

      {/* Deep 3800 Word Regional SEO Content Block */}
      {contentBlocks.map((section, index) => (
        <section key={index} className="content-section" style={{ borderBottom: index !== contentBlocks.length - 1 ? '1px solid var(--glass-border)' : 'none' }}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((para, pIndex) => (
            <p key={pIndex} dangerouslySetInnerHTML={{ __html: para }}></p>
          ))}
        </section>
      ))}
    </main>
  );
}
