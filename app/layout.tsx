import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veenayak Sirohi | DevOps Engineer",
  description:
    "Veenayak Sirohi is a DevOps Engineer at SarvaGram working with AWS, CI/CD, cloud infrastructure, and DevSecOps.",
  keywords:
    "Veenayak Sirohi, DevOps Engineer, SarvaGram, AWS, Kubernetes, Terraform, CI/CD, DevSecOps",
  authors: [
    {
      name: "Veenayak Sirohi",
      url: "https://www.linkedin.com/in/veenayaksirohi/",
    },
  ],
  creator: "Veenayak Sirohi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://veenayaksirohi.github.io/veenayak_sirohi/",
    title: "Veenayak Sirohi | DevOps Engineer",
    description:
      "DevOps Engineer at SarvaGram, working with AWS, CI/CD, cloud infrastructure, and DevSecOps.",
    siteName: "Veenayak Sirohi Portfolio",
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
  generator: "Next.js, Tailwind CSS, shadcn/ui, Lucide",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/veenayak_sirohi/favicon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/veenayak_sirohi/icon.png",
    },
    // You can add more sizes if you have them
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
