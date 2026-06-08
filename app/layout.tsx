import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const title = "OVRIA — Trouvez un chantier ou un ouvrier du BTP, en direct";
const description =
  "OVRIA met en relation directe les ouvriers du BTP et les entreprises en France. Profil gratuit pour les ouvriers, sans commission. App iOS et Android.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ovria.fr"),
  title,
  description,
  applicationName: "OVRIA",
  keywords: [
    "emploi BTP",
    "recrutement bâtiment",
    "trouver un ouvrier",
    "maçon disponible",
    "intérim BTP alternative",
    "recruter sans commission",
    "ouvrier du bâtiment",
    "plateforme BTP",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "OVRIA",
    title,
    description,
    // TODO: replace with the real 1200×630 social share image (cream bg + wordmark + baseline)
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0f15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`dark ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
