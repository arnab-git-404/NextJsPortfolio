import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navigation/navbar";
import { ReactLenis, useLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arnab Mukherjee | Website Developer in Rampurhat, Birbhum | MERN Stack Developer",
  description:
    "Professional Website Developer in Rampurhat, Birbhum. Full Stack MERN Developer offering web development services in Rampurhat and surrounding areas. Specializing in React, Node.js, MongoDB, and modern web applications.",
  keywords: [
    "website developer in Rampurhat",
    "web developer Rampurhat",
    "website developer Birbhum",
    "web developer Birbhum",
    "Rampurhat web developer",
    "MERN Stack Developer Rampurhat",
    "freelance web developer Rampurhat",
    "website designer Rampurhat",
    "React developer Rampurhat",
    "Node.js developer Birbhum",
    "Full Stack Developer",
    "MERN Stack",
    "MongoDB",
    "Express",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Arnab Mukherjee" }],
  creator: "Arnab Mukherjee",
  publisher: "Arnab Mukherjee",
  openGraph: {
    title: "Arnab Mukherjee | Website Developer in Rampurhat, Birbhum",
    description: "Professional Website Developer in Rampurhat, Birbhum specializing in MERN Stack development",
    type: "website",
    locale: "en_IN",
    siteName: "Arnab Mukherjee Portfolio",
  },
  alternates: {
    canonical: "https://mukherjeearnab.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arnab Mukherjee",
              jobTitle: "Full Stack Web Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rampurhat",
                addressRegion: "Birbhum",
                addressCountry: "IN"
              },
              url: "https://mukherjeearnab.vercel.app",
              description: "Professional Website Developer in Rampurhat, Birbhum specializing in MERN Stack",
              sameAs: [
                "https://github.com/arnab-git-404",
                "https://linkedin.com/in/0xarnab"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        style={{
          overflowX: "hidden",
          willChange: "scroll-position",
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <ReactLenis root /> */}
          <Analytics/>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
