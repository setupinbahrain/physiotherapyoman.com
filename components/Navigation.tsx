"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { services, conditions } from '../lib/data';

export default function Navigation({ lang }: { lang: 'en' | 'ar' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const isAr = lang === 'ar';

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (label: string) => setDropdownOpen(dropdownOpen === label ? "" : label);

  return (
    <nav className="main-nav premium-glass">
      <div className="container nav-container">
        
        {/* Brand Logo */}
        <Link href={`/${lang}`} className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src="/icon.png" alt={isAr ? "شعار علاج طبيعي عمان" : "Physiotherapy Oman Logo"} style={{ height: "45px", width: "auto", objectFit: "contain", filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.1))" }} />
          <span style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text)", letterSpacing: "-0.5px" }}>
            {isAr ? "علاج طبيعي " : "Physio"}<span style={{ color: "var(--brand)" }}>{isAr ? "عُمان" : "Oman"}</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="desktop-links">
          <Link href={`/${lang}/muscat`} className="nav-link">{isAr ? "عيادات مسقط" : "Muscat Clinics"}</Link>
          <Link href={`/${lang}/salalah`} className="nav-link">{isAr ? "عيادات صلالة" : "Salalah"}</Link>
          
          <div className="dropdown" onMouseEnter={() => setDropdownOpen("services")} onMouseLeave={() => setDropdownOpen("")}>
            <span className="nav-link" style={{ cursor: 'pointer' }}>{isAr ? "خدماتنا ▼" : "Services ▼"}</span>
            {dropdownOpen === "services" && (
              <div className="dropdown-menu glass-box fade-in">
                {services.slice(0, 6).map(s => (
                  <Link key={s} href={`/${lang}/muscat/${s}`} className="dropdown-item">{s.replace(/-/g, ' ')}</Link>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown" onMouseEnter={() => setDropdownOpen("conditions")} onMouseLeave={() => setDropdownOpen("")}>
            <span className="nav-link" style={{ cursor: 'pointer' }}>{isAr ? "حالات نعالجها ▼" : "Conditions ▼"}</span>
            {dropdownOpen === "conditions" && (
              <div className="dropdown-menu glass-box fade-in" style={{ left: isAr ? "auto" : "-50px", right: isAr ? "-50px" : "auto" }}>
                {conditions.slice(0, 6).map(c => (
                  <Link key={c} href={`/${lang}/conditions/${c}`} className="dropdown-item">{c.replace(/-/g, ' ')}</Link>
                ))}
              </div>
            )}
          </div>
          
          <a href="https://wa.link/physiotherapyoman" className="btn btn-primary" style={{ padding: "0.5rem 1.2rem", fontSize: "0.9rem", margin: isAr ? "0 1rem 0 0" : "0 0 0 1rem" }}>{isAr ? "احجز الآن" : "Book Now"}</a>

          {/* Bilingual Switcher */}
          <Link href={isAr ? "/en" : "/ar"} style={{ marginLeft: isAr ? "0" : "1.5rem", marginRight: isAr ? "1.5rem" : "0", fontWeight: "bold", textDecoration: "none", color: "var(--brand)" }}>
            {isAr ? "EN" : "عربي"}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="mobile-toggle" onClick={toggleMenu} style={{ cursor: "pointer", display: "none", fontSize: "1.8rem" }}>
          {isOpen ? "✕" : "≡"}
        </div>

      </div>

      {/* Mobile Menu Expansion */}
      {isOpen && (
        <div className="mobile-menu slide-down">
          <Link href={`/${lang}`} className="mobile-link" onClick={toggleMenu}>{isAr ? "الرئيسية" : "Home"}</Link>
          <Link href={`/${lang}/muscat`} className="mobile-link" onClick={toggleMenu}>{isAr ? "عيادات مسقط" : "Muscat Setup"}</Link>
          <Link href={`/${lang}/salalah`} className="mobile-link" onClick={toggleMenu}>{isAr ? "عيادات صلالة" : "Salalah Hub"}</Link>
          <div className="mobile-break">{isAr ? "الخدمات" : "Services"}</div>
          {services.slice(0, 5).map(s => (
             <Link key={s} href={`/${lang}/muscat/${s}`} className="mobile-link sub-link" onClick={toggleMenu}>{s.replace(/-/g, ' ')}</Link>
          ))}
          <a href="https://wa.link/physiotherapyoman" className="mobile-link highlight-whatsapp">{isAr ? "استشارة سريعة عبر واتساب" : "WhatsApp Consultation Now"}</a>
          <Link href={isAr ? "/en" : "/ar"} className="mobile-link" style={{ textAlign: "center", color: "var(--brand)", fontWeight: "bold" }}>
             {isAr ? "Switch to English" : "التبديل للعربية"}
          </Link>
        </div>
      )}
    </nav>
  );
}
