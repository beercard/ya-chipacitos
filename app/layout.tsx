import type { Metadata } from "next";
import { Luckiest_Guy, Gloria_Hallelujah, Quicksand } from "next/font/google";
import "./globals.css";

const marvin = Luckiest_Guy({
  variable: "--font-marvin",
  weight: "400",
  subsets: ["latin"],
});

const skippy = Gloria_Hallelujah({
  variable: "--font-skippy",
  weight: "400",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#D7320F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Ya! Chipacitos - El Mejor Chipá de Corrientes",
  description: "Disfrutá del auténtico sabor del chipá correntino. Chipacitos clásicos, rellenos, sándwiches y más. Envíos a domicilio y sucursales en todo Corrientes.",
  keywords: ["chipa", "chipacitos", "corrientes", "panaderia", "desayuno", "merienda", "comida tipica", "envios", "delivery"],
  openGraph: {
    title: "Ya! Chipacitos - El Mejor Chipá de Corrientes",
    description: "Disfrutá del auténtico sabor del chipá correntino. Chipacitos clásicos, rellenos, sándwiches y más.",
    url: "https://yachipacitos.com",
    siteName: "Ya! Chipacitos",
    images: [
      {
        url: "https://yachipacitos.com/images/hero/1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logos/logo-ya-chipacitos.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${marvin.variable} ${skippy.variable} ${quicksand.variable} antialiased font-body`}
      >
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({"@context":"https://schema.org","@type":"Bakery","name":"Ya! Chipacitos","image":"https://yachipacitos.com/images/hero/1.jpg","description":"El mejor chipá de Corrientes. Elaboración artesanal.","address":{"@type":"PostalAddress","streetAddress":"Hipólito Yrigoyen 956","addressLocality":"Corrientes","addressRegion":"Corrientes","postalCode":"W3400","addressCountry":"AR"},"telephone":"+5493794157715","priceRange":"$","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"07:00","closes":"21:00"}],"menu":"https://yachipacitos.com/#productos"}),
          }}
        />
        {children}
      </body>
    </html>
  );
}
