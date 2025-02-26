import SalaryCalculator from "@/components/Calculator";
import Script from "next/script";

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
