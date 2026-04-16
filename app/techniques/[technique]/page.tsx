import React from 'react';
import type { Metadata } from 'next';
import { generateConditionContent } from '../../../lib/contentEngine';

type Props = {
  params: { technique: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { technique: rawTechnique } = await params;
  const technique = rawTechnique.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${technique} Therapy Oman | Specialized Treatment Modalities`,
    description: `Learn how ${technique.toLowerCase()} is utilized by our expert physiotherapists in Oman to accelerate healing and reduce muscular pain quickly.`,
  };
}

export default async function TechniquePage({ params }: Props) {
  const { technique: rawTechnique } = await params;
  const technique = rawTechnique.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const contentBlocks = generateConditionContent(technique);

  return (
    <main className="container animate-fade-in">
      <header className="hero-section glass-box">
        <h1 className="gradient-text">{technique}</h1>
        <p>Advanced treatment modalities focused on immediate pain relief and cellular-level recovery.</p>
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
