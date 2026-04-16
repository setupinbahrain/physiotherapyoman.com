import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Physiotherapy Oman | علاج طبيعي عُمان",
    description:
          "Advanced Physical Rehabilitation Network in the Sultanate of Oman. أفضل عيادة علاج طبيعي في سلطنة عمان.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="en">
                <body>{children}</body>body>
          </html>html>
        );
}</html>
