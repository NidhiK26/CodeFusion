import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://codefusion.s2sharpit.me"),
  title: {
    default: "CodeFusion - Explore. Create. Collab.",
    template: "%s - CodeFusion",
  },
  description:
    "A platform where you can share your open source projects within the college.",
  keywords: [
    "CodeFusion",
    "Open Source Projects",
    "Share Your Work",
    "Learn and Develop",
    "projects",
    "educational resources",
    "wide range of products",
    "high-quality projects",
    "React",
    "Nodejs",
    "JavaScript",
    "open source",
    "contribution",
    "learners",
    "developers",
    "students",
    "SOA",
    "Siksa 'O' Anusandhan",
    "Institute of Technical Education and Research",
    "ITER",
    "Bhubaneswar",
    "Odisha",
    "India",
    "college",
    "university",
    "bharat",
  ],
  authors: [
    { name: "Tushar Saini" },
    { name: "Kumari Nidhi" },
    { name: "Sagarika Kumari" },
  ],
  openGraph: {
    title: "CodeFusion - Explore. Create. Collab",
    description:
      "A platform where you can share your open source projects within the college.",
    url: "https://codefusion.s2sharpit.me",
    siteName: "CodeFusion",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "CodeFusion - Explore. Create. Collab.",
    card: "summary_large_image",
    description:
      "A platform where you can share your open source projects within the college.",
    images:
      "https://codefusion.s2sharpit.me/assets/images/codefusion-social-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-muted-foreground antialiased dark`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
