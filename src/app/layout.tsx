import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { assetPath } from "@/lib/asset-path";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://qhipa.ai";
const title = "Qhipa | Terminal inteligente para equipos de desarrollo";
const description =
  "Qhipa reúne terminales, archivos, Git, Jira, GitHub Actions y agentes de programación en un solo workspace para macOS.";

export const metadata: Metadata = {
  metadataBase: new URL("https://qhipa.ai"),
  title,
  description,
  applicationName: "Qhipa",
  authors: [{ name: "Cleverit" }],
  creator: "Cleverit",
  publisher: "Cleverit",
  keywords: [
    "Qhipa",
    "terminal macOS",
    "AI agents",
    "developer tools",
    "Git workflow",
    "Jira Cloud",
    "GitHub Actions",
    "agentic AI",
  ],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: assetPath("/brand/favicon.svg"),
    shortcut: assetPath("/brand/favicon.svg"),
    apple: assetPath("/brand/favicon.svg"),
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Qhipa",
    title,
    description,
    images: [
      {
        url: assetPath("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "Qhipa, terminal inteligente para equipos de desarrollo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [assetPath("/og-image.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
