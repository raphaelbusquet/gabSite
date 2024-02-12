import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const glancyr = localFont({
   src: '../assets/fonts/Glancyr-regular.otf',
});

export const metadata: Metadata = {
  title: "Gabriel Busquet - Web Designer | Crie seu site com a melhor qualidade e eficiência.",
  description: "landing page de Gabriel Busquet", 
  keywords: [
    'designer gráfico',
    'designer',
    'criação de web design',
    'figma especialista',
    'frontend developer',
    'landing page criar',
    'fazer site',
    'pagina de venda',
    'infoproduto',
    'webdesign',
    'designer de sites',
    'criador de sites',
    'criador de sites profissional',
    'melhor criador de sites',
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={glancyr.className}>{children}</body>
    </html>
  );
}
