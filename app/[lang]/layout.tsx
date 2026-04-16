import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Physiotherapy Oman | علاج طبيعي عُمان",
  description: "Advanced Physical Rehabilitation Network in the Sultanate of Oman. أفضل عيادة علاج طبيعي في سلطنة عمان.",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }> | { lang: string };
}>) {
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang as 'en' | 'ar';
  const isAr = lang === 'ar';

  return (
    <div lang={lang} dir={isAr ? "rtl" : "ltr"}>
      <Navigation lang={lang} />
      {children}
      <FloatingWhatsApp lang={lang} />

      <footer className="footer-premium">
        <div className="container footer-grid">
          <div className="footer-col brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <img src="/icon.png" alt={isAr ? "شعار علاج طبيعي عمان" : "Physiotherapy Oman Logo"} style={{ height: "45px", width: "auto" }} />
              <span style={{ fontSize: "1.4rem", fontWeight: "700", color: "#fff" }}>
                {isAr ? "علاج طبيعي " : "Physio"}
                <span style={{ color: "var(--brand)" }}>
                  {isAr ? "عُمان" : "Oman"}
                </span>
              </span>
            </div>
            <p>{isAr ? "شبكة إعادة التأهيل البدني الرائدة في سلطنة عمان. تعافي مبني على الأدلة والبيانات في جميع أنحاء السلطنة." : "Oman's leading advanced physical rehabilitation network. Evidence-based, data-driven recovery across the entire Sultanate."}</p>
          </div>

          <div className="footer-col">
            <h4>{isAr ? "العيادات الأساسية" : "Core Clinics"}</h4>
            <a href={`/${lang}/muscat`}>{isAr ? "علاج طبيعي في مسقط" : "Physiotherapy Muscat"}</a>
            <a href={`/${lang}/salalah`}>{isAr ? "علاج طبيعي في صلالة" : "Physiotherapy Salalah"}</a>
            <a href={`/${lang}/sohar`}>{isAr ? "علاج طبيعي في صحار" : "Physiotherapy Sohar"}</a>
            <a href={`/${lang}/nizwa`}>{isAr ? "علاج طبيعي في نزوى" : "Physiotherapy Nizwa"}</a>
          </div>

          <div className="footer-col">
            <h4>{isAr ? "رعاية متخصصة" : "Specialized Care"}</h4>
            <a href={`/${lang}/muscat/sports-physiotherapy`}>{isAr ? "التعافي الرياضي" : "Sports Recovery"}</a>
            <a href={`/${lang}/muscat/back-pain-physiotherapy`}>{isAr ? "تخفيف ضغط العمود الفقري" : "Spinal Decompression"}</a>
            <a href={`/${lang}/muscat/neurological-physiotherapy`}>{isAr ? "التأهيل العصبي" : "Neuro Rehab"}</a>
            <a href={`/${lang}/muscat/physiotherapy-at-home`}>{isAr ? "العلاج الطبيعي المنزلي" : "Home Visit Therapy"}</a>
          </div>

          <div className="footer-col">
            <h4>{isAr ? "تواصل مباشر" : "Direct Contact"}</h4>
            <p style={{ marginBottom: "0.5rem" }}><strong>{isAr ? "الخط الساخن الأول:" : "Hotline 1:"}</strong> +968 7251 7821</p>
            <p><strong>{isAr ? "الخط الساخن الثاني:" : "Hotline 2:"}</strong> +968 7633 8175</p>
            <p style={{ marginTop: "1rem" }}><strong>{isAr ? "البريد:" : "Email:"}</strong> info@physiotherapyoman.com</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '1rem', flexWrap: 'wrap' }}>
              <a href="https://wa.me/96872517821" className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>{isAr ? "واتساب ١" : "WhatsApp 1"}</a>
              <a href="https://wa.me/96876338175" className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>{isAr ? "واتساب ٢" : "WhatsApp 2"}</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {isAr ? "علاج طبيعي عُمان. جميع الحقوق محفوظة." : "Physiotherapy Oman. All rights reserved."}</p>
        </div>
      </footer>
    </div>
  );
}
