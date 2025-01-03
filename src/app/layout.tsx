import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const glancyr = localFont({
  src: [
    {
      path: '../assets/fonts/Glancyr-thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Glancyr-extra-light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Glancyr-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Glancyr-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Glancyr-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Glancyr-semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Glancyr-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../../public/favicon.ico" />
      </head>
      <body className={glancyr.className}>
        {children}
      </body>
    </html>
  );
}
