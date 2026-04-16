"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { services, conditions } from '../lib/data';

const topCities = [
  "muscat", 
  "salalah", 
  "sohar", 
  "nizwa", 
  "sur", 
  "ar-rustaq", 
  "ibri", 
  "al-buraymi"
];

export default function Navigation({ lang }: { lang: 'en' | 'ar' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  // State specifically for mobile accordion links
  const [mobileExpanded, setMobileExpanded] = useState("");
  
  const isAr = lang === 'ar';
  
  const pathname = usePathname() || "";
  const pathParts = pathname.split('/').filter(Boolean);
  let activeCity = "muscat";
  
  if (pathParts.length > 1) {
    const potentialCity = pathParts[1];
    if (potentialCity !== 'conditions' && potentialCity !== 'techniques' && potentialCity !== 'booking') {
      activeCity = potentialCity;
    }
  }

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMobileSub = (menu: string) => setMobileExpanded(mobileExpanded === menu ? "" : menu);

  return (
    <nav className="main-nav premium-glass">
      <div className="container nav-container">
        
        {/* Brand Logo */}
        <Link href={`/${lang}`} className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src="/logo.png" alt={isAr ? "شعار علاج طبيعي عمان" : "Physiotherapy Oman Logo"} style={{ height: "45px", width: "auto", objectFit: "contain", filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.1))" }} />
          <span style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text)", letterSpacing: "-0.5px" }}>
            {isAr ? "علاج طبيعي " : "Physio"}<span style={{ color: "var(--brand)" }}>{isAr ? "عُمان" : "Oman"}</span>
          </span>
        </Link>

        {/* Desktop Links (Mega Menus) */}
        <div className="desktop-links">
          
          {/* Locations Hub */}
          <div className="dropdown" onMouseEnter={() => setDropdownOpen("locations")} onMouseLeave={() => setDropdownOpen("")}>
            <span className="nav-link" style={{ cursor: 'pointer' }}>{isAr ? "المواقع والعيادات ▼" : "Locations ▼"}</span>
            {dropdownOpen === "locations" && (
              <div className="dropdown-menu glass-box fade-in" style={{ width: "450px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", padding: "1.5rem" }}>
                <div>
                  <h4 style={{ color: "var(--accent)", fontSize: "0.85rem", marginBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.3rem" }}>
                    {isAr ? "المدن الرئيسية" : "Top Cities"}
                  </h4>
                  {topCities.map(city => (
                    <Link key={city} href={`/${lang}/${city}`} className="dropdown-item" style={{ fontSize: "0.85rem", padding: "0.4rem 0.5rem" }}>
                      {isAr ? city.replace(/-/g, ' ') : city.replace(/-/g, ' ').toUpperCase()}
                    </Link>
                  ))}
                </div>
                <div>
                  <h4 style={{ color: "var(--accent)", fontSize: "0.85rem", marginBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.3rem" }}>
                    {isAr ? "المناطق الشهيرة" : "Popular Areas"}
                  </h4>
                  {["as-sib", "bawshar", "muttrah", "al-amarat", "qurayyat", "ruwi", "al-khuwair", "al-mabailah"].map(area => (
                    <Link key={area} href={`/${lang}/${area}`} className="dropdown-item" style={{ fontSize: "0.85rem", padding: "0.4rem 0.5rem" }}>
                      {isAr ? area.replace(/-/g, ' ') : area.replace(/-/g, ' ').toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Core Services Hub */}
          <div className="dropdown" onMouseEnter={() => setDropdownOpen("services")} onMouseLeave={() => setDropdownOpen("")}>
            <span className="nav-link" style={{ cursor: 'pointer' }}>{isAr ? "خدماتنا ▼" : "Services ▼"}</span>
            {dropdownOpen === "services" && (
              <div className="dropdown-menu glass-box fade-in" style={{ width: "260px" }}>
                {services.slice(0, 8).map(s => (
                  <Link key={s} href={`/${lang}/${activeCity}/${s}`} className="dropdown-item">{s.replace(/-/g, ' ')}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Conditions Hub */}
          <div className="dropdown" onMouseEnter={() => setDropdownOpen("conditions")} onMouseLeave={() => setDropdownOpen("")}>
            <span className="nav-link" style={{ cursor: 'pointer' }}>{isAr ? "حالات نعالجها ▼" : "Conditions ▼"}</span>
            {dropdownOpen === "conditions" && (
              <div className="dropdown-menu glass-box fade-in" style={{ left: isAr ? "auto" : "-50px", right: isAr ? "-50px" : "auto", width: "260px" }}>
                {conditions.slice(0, 8).map(c => (
                  <Link key={c} href={`/${lang}/conditions/${c}`} className="dropdown-item">{c.replace(/-/g, ' ')}</Link>
                ))}
              </div>
            )}
          </div>
          
          <a href="https://wa.me/96872517821" className="btn btn-primary" style={{ padding: "0.5rem 1.2rem", fontSize: "0.9rem", margin: isAr ? "0 1rem 0 0" : "0 0 0 1rem" }}>
            {isAr ? "احجز الآن" : "Book Now"}
          </a>

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

      {/* Mobile Menu Expansion with Accordion logic */}
      {isOpen && (
        <div className="mobile-menu slide-down">
          <Link href={`/${lang}`} className="mobile-link" onClick={toggleMenu}>{isAr ? "الرئيسية" : "Home"}</Link>
          
          {/* Mobile Locations */}
          <div className="mobile-link" onClick={() => toggleMobileSub("locations")} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }}>
            <span>{isAr ? "المواقع والعيادات" : "Locations"}</span>
            <span>{mobileExpanded === "locations" ? "▲" : "▼"}</span>
          </div>
          {mobileExpanded === "locations" && (
            <div style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="mobile-break">{isAr ? "المدن الرئيسية" : "Top Cities"}</div>
              {topCities.map(city => (
                <Link key={city} href={`/${lang}/${city}`} className="mobile-link sub-link" onClick={toggleMenu}>
                  {isAr ? city.replace(/-/g, ' ') : city.replace(/-/g, ' ').toUpperCase()}
                </Link>
              ))}
              <div className="mobile-break">{isAr ? "المناطق الشهيرة" : "Popular Areas"}</div>
              {["as-sib", "bawshar", "muttrah", "al-amarat", "qurayyat", "ruwi", "al-khuwair", "al-mabailah"].map(area => (
                <Link key={area} href={`/${lang}/${area}`} className="mobile-link sub-link" onClick={toggleMenu}>
                  {isAr ? area.replace(/-/g, ' ') : area.replace(/-/g, ' ').toUpperCase()}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Services */}
          <div className="mobile-link" onClick={() => toggleMobileSub("services")} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }}>
            <span>{isAr ? "الخدمات" : "Services"}</span>
            <span>{mobileExpanded === "services" ? "▲" : "▼"}</span>
          </div>
          {mobileExpanded === "services" && (
             <div style={{ background: "rgba(255,255,255,0.02)" }}>
                {services.slice(0, 5).map(s => (
                  <Link key={s} href={`/${lang}/${activeCity}/${s}`} className="mobile-link sub-link" onClick={toggleMenu}>{s.replace(/-/g, ' ')}</Link>
                ))}
             </div>
          )}

          {/* Mobile Conditions */}
          <div className="mobile-link" onClick={() => toggleMobileSub("conditions")} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }}>
            <span>{isAr ? "الحالات" : "Conditions"}</span>
            <span>{mobileExpanded === "conditions" ? "▲" : "▼"}</span>
          </div>
          {mobileExpanded === "conditions" && (
             <div style={{ background: "rgba(255,255,255,0.02)" }}>
                {conditions.slice(0, 5).map(c => (
                  <Link key={c} href={`/${lang}/conditions/${c}`} className="mobile-link sub-link" onClick={toggleMenu}>{c.replace(/-/g, ' ')}</Link>
                ))}
             </div>
          )}

          <a href="https://wa.me/96876338175" className="mobile-link highlight-whatsapp" style={{ marginTop: "1rem" }}>
            {isAr ? "استشارة سريعة عبر واتساب" : "WhatsApp Consultation Now"}
          </a>
          
          <Link href={isAr ? "/en" : "/ar"} className="mobile-link" style={{ textAlign: "center", color: "var(--brand)", fontWeight: "bold" }}>
             {isAr ? "Switch to English" : "التبديل للعربية"}
          </Link>
        </div>
      )}
    </nav>
  );
}
