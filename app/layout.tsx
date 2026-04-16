import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Physiotherapy Oman | \u0639\u0644\u0627\u062c \u0637\u0628\u064a\u0639\u064a \u0639\u064f\u0645\u0627\u0646",
  description:
    "Advanced Physical Rehabilitation Network in the Sultanate of Oman. \u0623\u0641\u0636\u0644 \u0639\u064a\u0627\u062f\u0629 \u0639\u0644\u0627\u062c \u0637\u0628\u064a\u0639\u064a \u0641\u064a \u0633\u0644\u0637\u0646\u0629 \u0639\u0645\u0627\u0646.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
