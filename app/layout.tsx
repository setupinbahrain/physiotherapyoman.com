import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "علاج طبيعي عُمان | خبراء العلاج الطبيعي",
  description: "أفضل عيادة علاج طبيعي في سلطنة عمان. متخصصون في آلام الظهر، الإصابات الرياضية، وإعادة التأهيل بعد الجراحة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navigation />
        {children}
        <FloatingWhatsApp />

        <footer className="footer-premium">
          <div className="container footer-grid">
            <div className="footer-col brand-col">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                <img src="/icon.png" alt="شعار علاج طبيعي عمان" style={{ height: "45px", width: "auto" }} />
                <span style={{ fontSize: "1.4rem", fontWeight: "700", color: "#fff" }}>علاج طبيعي <span style={{ color: "var(--brand)" }}>عُمان</span></span>
              </div>
              <p>شبكة إعادة التأهيل البدني الرائدة في سلطنة عمان. تعافي مبني على الأدلة والبيانات في جميع أنحاء السلطنة.</p>
            </div>
            
            <div className="footer-col">
              <h4>العيادات الأساسية</h4>
              <a href="/muscat">علاج طبيعي في مسقط</a>
              <a href="/salalah">علاج طبيعي في صلالة</a>
              <a href="/sohar">علاج طبيعي في صحار</a>
              <a href="/nizwa">علاج طبيعي في نزوى</a>
            </div>

            <div className="footer-col">
              <h4>رعاية متخصصة</h4>
              <a href="/muscat/sports-physiotherapy">التعافي الرياضي</a>
              <a href="/muscat/back-pain-physiotherapy">تخفيف ضغط العمود الفقري</a>
              <a href="/muscat/neurological-physiotherapy">التأهيل العصبي</a>
              <a href="/muscat/physiotherapy-at-home">العلاج الطبيعي المنزلي</a>
            </div>

            <div className="footer-col">
              <h4>تواصل مباشر</h4>
              <p><strong>الخط الساخن:</strong> +968 9000 0000</p>
              <p><strong>البريد:</strong> care@physiotherapyoman.com</p>
              <a href="https://wa.link/physiotherapyoman" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>راسلنا عبر واتساب</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} علاج طبيعي عُمان. جميع الحقوق محفوظة. | <a href="/privacy">سياسة الخصوصية</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
