import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "T-blogs | Tech & AI Insights",
  description:
    "High-end technology and AI blog featuring the latest in software engineering, artificial intelligence, and tech trends.",
  metadataBase: new URL("https://t-blogs.com"),
  verification: {
    google: "gLnIaMyeeNHGjgzcTtUuYdd6qHITQh4n9ZYJhPhst7I",
  },
  openGraph: {
    title: "T-blogs | Tech & AI Insights",
    description:
      "Elevate your understanding of artificial intelligence, cutting-edge software engineering, and the tech landscape of tomorrow.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-YE8SG96V2P`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YE8SG96V2P', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ background: "var(--bg-cream)", color: "var(--ink-primary)" }}
      >
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
