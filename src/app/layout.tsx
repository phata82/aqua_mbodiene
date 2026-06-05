import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqua Mbodiène | Le Plus Grand Parc Aquatique d'Afrique",
  description: "Découvrez 24 hectares d'attractions innovantes, sensations fortes et détente premium à Mbodiène, Sénégal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
