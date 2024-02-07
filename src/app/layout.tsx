import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Busquet Design",
  description: "landing page de Gabriel Busquet", 
  keywords: [
    'designer gráfico',
    'designer',
    'criação de web design',
    'figma especialista',
    'frontend developer',
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
