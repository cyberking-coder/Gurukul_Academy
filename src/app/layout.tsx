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

export const metadata: Metadata = {
  title: "Gurukul Academy | गुरुकुल अकादमी — Coaching Classes in Karvenagar, Pune",
  description:
    "Gurukul Academy is Pune's trusted coaching institute for Class 9–12, offering small batches of 10 students, personal attention, and outstanding results in Maths & Science. Rated 5.0 by 118+ students.",
  keywords: [
    "Gurukul Academy",
    "coaching classes Pune",
    "Karvenagar coaching",
    "12th science coaching",
    "maths tuition Pune",
    "best coaching institute Pune",
  ],
  openGraph: {
    title: "Gurukul Academy — Where Brilliance Begins",
    description:
      "Small batches. Personal attention. Outstanding results. Pune's 5.0-rated coaching institute.",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col bg-[#08090b] text-[#f3efe7] selection:bg-[#d8a44c] selection:text-black">
        {children}
      </body>
    </html>
  );
}
