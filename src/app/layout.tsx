import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const heading = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://cyberking-coder.github.io/Gurukul_Academy";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gurukul Academy | Best Coaching Classes in Karvenagar, Pune",
    template: "%s | Gurukul Academy Pune",
  },
  description:
    "Gurukul Academy — Pune's top-rated coaching institute for Class 9–12 Maths & Science. Small batches of 12–15 students, personal attention, 5.0 ★ Google rating, 118+ reviews. Located at Karvenagar, Pune 411052.",
  keywords: [
    "Gurukul Academy Pune",
    "coaching classes Karvenagar",
    "best coaching institute Pune",
    "12th science coaching Pune",
    "maths tuition Pune",
    "science tuition Pune",
    "Class 9 10 11 12 coaching Pune",
    "Warje coaching classes",
    "HSC coaching Pune",
    "SSC coaching Pune",
    "small batch coaching Pune",
    "personal attention coaching Pune",
    "गुरुकुल अकॅडेमी",
  ],
  authors: [{ name: "Gurukul Academy", url: BASE_URL }],
  creator: "Gurukul Academy",
  publisher: "Gurukul Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Gurukul Academy",
    title: "Gurukul Academy — Best Coaching Classes in Karvenagar, Pune",
    description:
      "5.0 ★ rated coaching institute. Small batches of 12–15 students. Personal mentoring for Class 9–12 Maths & Science. Karvenagar, Pune.",
    images: [{ url: `${BASE_URL}/gallery/gallery-6.png`, width: 1200, height: 630, alt: "Gurukul Academy classroom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurukul Academy — Best Coaching in Karvenagar, Pune",
    description: "5.0 ★ · 118+ reviews · Small batches · Personal mentoring · Class 9–12 Maths & Science.",
    images: [`${BASE_URL}/gallery/gallery-6.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Gurukul Academy",
  alternateName: "गुरुकुल अकॅडेमी",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  description:
    "Coaching institute for Class 9–12 Maths & Science with small batches of 12–15 students and personalised mentoring.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 227, Kakade Plaza, Warje Jakat Naka",
    addressLocality: "Karvenagar",
    addressRegion: "Pune",
    postalCode: "411052",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.4813,
    longitude: 73.8126,
  },
  telephone: "+919970815169",
  openingHours: "Mo-Sa 09:00-20:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "118",
    bestRating: "5",
  },
  sameAs: [
    "https://www.google.com/maps/place/Gurukul+Academy/@18.4813,73.8126",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#08090b] text-[#f3efe7] selection:bg-[#d8a44c] selection:text-black">
        {children}
      </body>
    </html>
  );
}
