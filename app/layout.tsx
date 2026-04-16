import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Physiotherapy Oman | Expert Physiotherapists",
  description: "Top-rated physiotherapy clinic in Oman. Specialists in back pain, sports injuries, and post-surgery rehab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <FloatingWhatsApp />

        <footer className="footer-premium">
          <div className="container footer-grid">
            <div className="footer-col brand-col">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                <img src="/icon.png" alt="Oman Physiotherapy Logo" style={{ height: "45px", width: "auto" }} />
                <span style={{ fontSize: "1.4rem", fontWeight: "700", color: "#fff" }}>Physio<span style={{ color: "var(--brand)" }}>Oman</span></span>
              </div>
              <p>Oman&apos;s leading advanced physical rehabilitation network. Evidence-based, data-driven recovery across the entire Sultanate.</p>
            </div>
            
            <div className="footer-col">
              <h4>Core Clinics</h4>
              <a href="/muscat">Physiotherapy Muscat</a>
              <a href="/salalah">Physiotherapy Salalah</a>
              <a href="/sohar">Physiotherapy Sohar</a>
              <a href="/nizwa">Physiotherapy Nizwa</a>
            </div>

            <div className="footer-col">
              <h4>Specialized Care</h4>
              <a href="/muscat/sports-physiotherapy">Sports Recovery</a>
              <a href="/muscat/back-pain-physiotherapy">Spinal Decompression</a>
              <a href="/muscat/neurological-physiotherapy">Neuro Rehab</a>
              <a href="/muscat/physiotherapy-at-home">Home Visit Therapy</a>
            </div>

            <div className="footer-col">
              <h4>Direct Contact</h4>
              <p><strong>Hotline:</strong> +968 9000 0000</p>
              <p><strong>Email:</strong> care@physiotherapyoman.com</p>
              <a href="https://wa.link/physiotherapyoman" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>WhatsApp Us</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Physiotherapy Oman. All rights reserved. | <a href="/privacy">Privacy Policy</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
