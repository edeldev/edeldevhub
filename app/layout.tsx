import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Diseño y desarrollo de páginas web profesional - EdelDevHub",
  description:
    "Ofrecemos servicios profesionales de diseño y desarrollo web en México, creando sitios atractivos, funcionales y optimizados para SEO. Mejora tu presencia en línea con expertos en desarrollo web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased`}>
        <Header />
        {children}
        <div className="fixed bottom-0 left-0 w-full h-3 pointer-events-none z-50 shadow-bottom-blur backdrop-blur-xs" />
      </body>
    </html>
  );
}
