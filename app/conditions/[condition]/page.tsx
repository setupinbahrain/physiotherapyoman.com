import React from 'react';
import type { Metadata } from 'next';
import { generateConditionContent } from '../../../lib/contentEngine';

type Props = {
  params: { condition: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { condition: rawCondition } = await params;
  const condition = rawCondition.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${condition} Physiotherapy Oman | Expert Treatment & Recovery`,
    description: `Struggling with ${condition.toLowerCase()}? Discover specialized physiotherapy protocols in Oman designed for rapid, permanent relief and recovery.`,
  };
}

export default async function ConditionPage({ params }: Props) {
  const { condition: rawCondition } = await params;
  const condition = rawCondition.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const contentBlocks = generateConditionContent(condition);

  return (
    <main className="container animate-fade-in">
      <header className="hero-section glass-box">
        <h1 className="gradient-text">{condition} Treatment & Rehabilitation</h1>
        <p>Break free from pain. Our evidence-based protocols for {condition.toLowerCase()} focus on structural healing rather than just symptom management.</p>
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
