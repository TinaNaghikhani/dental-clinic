import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
const Iransans = localFont({
  src: "../../public/font/Iranian Sans.ttf",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "سیستم نوبت دهی",
  description: "سیستم نوبت دهی دندانپزشکی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
 <body
        className={`${Iransans.className} font-sans antialiased flex flex-col min-h-screen`} style={{ background: '#CAF0F8' }}
      >
        {children}
      </body>
    </html>
  );
}


