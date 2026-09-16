import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { assetPath } from "@/lib/asset-path";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://qhipa.ai";
const title = "Qhipa | Orquestador inteligente para equipos de desarrollo";
const description =
  "Qhipa reúne shells, archivos, Git, Jira, GitHub Actions y agentes de programación en un solo workspace para macOS.";

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
    "orquestador macOS",
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
        alt: "Qhipa, orquestador inteligente para equipos de desarrollo",
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
      className={`${openSans.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
