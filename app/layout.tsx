import type { Metadata } from "next";
import "./globals.css";

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
        <nav className="main-nav">
          <div className="container nav-container">
            <a href="/" className="nav-logo">
              Physio<span style={{ color: "var(--accent)" }}>Oman</span>
            </a>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="/muscat">Locations</a>
              <a href="/muscat/sports-physiotherapy">Services</a>
              <a href="/conditions/lower-back-pain">Conditions</a>
            </div>
          </div>
        </nav>
        
        {children}

        <footer style={{ marginTop: "4rem", padding: "4rem 0", background: "var(--primary-light)", color: "var(--text-muted)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Physiotherapy Oman</h3>
            <p>Rehabilitation • Sports Recovery • Home Visits • Post-Surgery</p>
            <div style={{ marginTop: "2rem", display: "flex", gap: "15px", justifyContent: "center" }}>
              <a href="/muscat">Physiotherapy in Muscat</a>
              <a href="/salalah">Physiotherapy in Salalah</a>
              <a href="/sohar">Physiotherapy in Sohar</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
