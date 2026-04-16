"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { services, conditions } from '../lib/data';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (label: string) => setDropdownOpen(dropdownOpen === label ? "" : label);

  return (
    <nav className="main-nav premium-glass">
      <div className="container nav-container">
        
        {/* Brand Logo */}
        <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src="/icon.png" alt="Oman Physiotherapy Logo" style={{ height: "45px", width: "auto", objectFit: "contain", filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.1))" }} />
          <span style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text)", letterSpacing: "-0.5px" }}>Physio<span style={{ color: "var(--brand)" }}>Oman</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="desktop-links">
          <Link href="/muscat" className="nav-link">Muscat Clinics</Link>
          <Link href="/salalah" className="nav-link">Salalah</Link>
          
          <div className="dropdown" onMouseEnter={() => setDropdownOpen("services")} onMouseLeave={() => setDropdownOpen("")}>
            <span className="nav-link" style={{ cursor: 'pointer' }}>Services ▼</span>
            {dropdownOpen === "services" && (
              <div className="dropdown-menu glass-box fade-in">
                {services.slice(0, 6).map(s => (
                  <Link key={s} href={`/muscat/${s}`} className="dropdown-item">{s.replace(/-/g, ' ')}</Link>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown" onMouseEnter={() => setDropdownOpen("conditions")} onMouseLeave={() => setDropdownOpen("")}>
            <span className="nav-link" style={{ cursor: 'pointer' }}>Conditions ▼</span>
            {dropdownOpen === "conditions" && (
              <div className="dropdown-menu glass-box fade-in" style={{ left: "-50px" }}>
                {conditions.slice(0, 6).map(c => (
                  <Link key={c} href={`/conditions/${c}`} className="dropdown-item">{c.replace(/-/g, ' ')}</Link>
                ))}
              </div>
            )}
          </div>
          
          <a href="https://wa.link/physiotherapyoman" className="btn btn-primary" style={{ padding: "0.5rem 1.2rem", fontSize: "0.9rem", marginLeft: "1rem" }}>Book Now</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="mobile-toggle" onClick={toggleMenu} style={{ cursor: "pointer", display: "none", fontSize: "1.8rem" }}>
          {isOpen ? "✕" : "≡"}
        </div>

      </div>

      {/* Mobile Menu Expansion */}
      {isOpen && (
        <div className="mobile-menu slide-down">
          <Link href="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
          <Link href="/muscat" className="mobile-link" onClick={toggleMenu}>Muscat Setup</Link>
          <Link href="/salalah" className="mobile-link" onClick={toggleMenu}>Salalah Hub</Link>
          <div className="mobile-break">Services</div>
          {services.slice(0, 5).map(s => (
             <Link key={s} href={`/muscat/${s}`} className="mobile-link sub-link" onClick={toggleMenu}>{s.replace(/-/g, ' ')}</Link>
          ))}
          <a href="https://wa.link/physiotherapyoman" className="mobile-link highlight-whatsapp">WhatsApp Consultation Now</a>
        </div>
      )}
    </nav>
  );
}
