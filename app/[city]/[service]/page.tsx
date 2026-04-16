import React from 'react';
import type { Metadata } from 'next';
import { generateMatrixContent } from '../../../lib/contentEngine';

type Props = {
  params: { city: string; service: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: rawCity, service: rawService } = await params;
  const city = rawCity.charAt(0).toUpperCase() + rawCity.slice(1);
  const service = rawService.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${service} in ${city} | Specialized Physiotherapy Oman`,
    description: `Leading ${service.toLowerCase()} specialists in ${city}, Oman. Get targeted treatment and expert care for permanent recovery.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { city: rawCity, service: rawService } = await params;
  const city = rawCity.charAt(0).toUpperCase() + rawCity.slice(1);
  const service = rawService.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const contentBlocks = generateMatrixContent(city, service);

  return (
    <main className="container animate-fade-in">
      <header className="hero-section glass-box">
        <h1 className="gradient-text">{service} in {city}</h1>
        <p>Professional, specialized {service.toLowerCase()} programs delivered by leading experts in {city}.</p>
      </header>

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
