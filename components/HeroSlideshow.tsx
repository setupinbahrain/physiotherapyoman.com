"use client";

import React, { useState, useEffect } from 'react';

const slides = [
  {
    en: { title: "Premier Physiotherapy in Oman", subtitle: "World-Class Recovery Architecture" },
    ar: { title: "علاج طبيعي متقدم في عُمان", subtitle: "برامج تعافي ذات مستوى عالمي" },
    img: "/assets/slide-1.png"
  },
  {
    en: { title: "Advanced Spinal Decompression", subtitle: "Targeting Root Dysfunctions" },
    ar: { title: "تخفيف ضغط العمود الفقري", subtitle: "علاج الألم من الجذور" },
    img: "/assets/slide-2.png"
  },
  {
    en: { title: "Elite Sports Rehabilitation", subtitle: "Accelerating Athletic Conditioning" },
    ar: { title: "تأهيل رياضي متكامل", subtitle: "تسريع التعافي الرياضي للعودة للملاعب" },
    img: "/assets/slide-3.png"
  }
];

export default function HeroSlideshow({ lang }: { lang: 'en' | 'ar' }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const isAr = lang === 'ar';

  return (
    <div className="slideshow-wrapper">
      {slides.map((slide, idx) => (
        <div 
          key={idx} 
          className={`slide-bg ${idx === current ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(2,6,23,0.9)), url(${slide.img})` }}
        >
          <div className="slide-content">
            <div className="glass-hero-panel">
              <h1 className="slide-title gradient-text-glow">
                {slide[lang].title}
              </h1>
              <p className="slide-subtitle">
                {slide[lang].subtitle}
              </p>
              
              <div className="slide-actions">
                <a href={`/${lang}/muscat`} className="btn btn-primary btn-massive">
                  {isAr ? "احجز موعداً الآن" : "Book Your Appointment"}
                </a>
                <a href={`/${lang}/conditions/back-pain`} className="btn btn-outline">
                  {isAr ? "استكشف العلاجات" : "Explore Treatments"}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="slide-indicators">
        {slides.map((_, idx) => (
          <button 
            key={idx} 
            className={`indicator ${idx === current ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
