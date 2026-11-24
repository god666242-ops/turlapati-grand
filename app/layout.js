import "./globals.css";
import Script from "next/script";
import { Young_Serif, Hanken_Grotesk, Noto_Sans_Telugu } from "next/font/google";
import { hotel, site } from "../site";
import Seo from "../components/Seo";

const display = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--fd", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--fb", display: "swap" });
const telugu = Noto_Sans_Telugu({ weight: "600", variable: "--ft", display: "swap", preload: false });

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Turlapati Grand" },
  description: site.description,
  applicationName: hotel.full,
  category: "travel",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: hotel.full, title: site.title, description: site.description, locale: "en_IN", images: [{ url: site.ogImg, width: site.ogSize[0], height: site.ogSize[1], alt: hotel.full }] },
  robots: { index: true, follow: true },
  other: { "geo.region": "IN-AP", "geo.placename": hotel.city },
};
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#13352B" };

export default function Layout({ children }) {
  return (
    <html lang="en-IN" className="scroll-smooth scroll-pt-[70px]">
      <head>
        <link rel="preconnect" href="https://cdn.purebook.in" crossOrigin="" />
      </head>
      <body className={`${display.variable} ${body.variable} ${telugu.variable} bg-paper font-fb text-[17px] leading-[1.6] text-ink antialiased`}>
        {children}
        <Seo hotel={hotel} site={site} />
        <Script src="https://cdn.purebook.in/engine.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
