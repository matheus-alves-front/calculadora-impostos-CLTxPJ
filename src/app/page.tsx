import SalaryCalculator from "@/components/Calculator";
import Script from "next/script";

export const metadata = {
  title: 'CNPJ x CLT Calculadora',
  description: 'Esta é uma página destinada a quem quer saber a diferença de descontos do governo de cada modelo de contratação.',
  keywords: ['CNPJ', 'CLT', 'salário', 'calculadora imposto', 'imposto'],
  authors: [{ name: 'Matheus Alves' }],
  openGraph: {
    title: 'CNPJ x CLT Calculadora',
    description: 'Esta é uma página destinada a quem quer saber a diferença de descontos do governo de cada modelo de contratação.',
    url: 'https://calculadoraimpostoscltxpj.vercel.app/',
    siteName: 'CNPJ x CLT Calculadora',
    images: [
      {
        url: 'https://calculadoraimpostoscltxpj.vercel.app/haddad.webp',
        width: 300,
        height: 320,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CNPJ x CLT Calculadora',
    description: 'Esta é uma página destinada a quem quer saber a diferença de descontos do governo de cada modelo de contratação.',
    images: ['https://calculadoraimpostoscltxpj.vercel.app/haddad.webp'],
  },
};

export default function Home() {
  return (
    <main className="bg-background relative">
      <SalaryCalculator />

      <Script
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2685638626889608"
        crossOrigin="anonymous"
      />
    </main>
  );
}
