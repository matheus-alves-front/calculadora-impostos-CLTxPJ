import TaxTables from "@/components/TaxTables";
import Script from "next/script";

export default function TaxTablesPage() {
  return (
    <main className="bg-background">
      <TaxTables />

      <Script
        strategy="beforeInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2685638626889608"
        crossOrigin="anonymous"
      />
    </main>
  )
}