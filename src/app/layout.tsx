import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { Header } from "@/app/components/layout";

import { Footer } from "./components/layout/footer";

const inter = Nunito({
  subsets: ["latin"],
  variable: "--font-roboto",
  preload: true,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Neony wysokiej jakości na zamówienie w świetnych cenach",
  description:
    "Oferujemy wysokiej jakości neony na zamówienie w świetnych cenach. Duży wybór kolorów i kształtów. Możliwość personalizacji. Zamów już dziś!",
  keywords:
    "neony, neony na zamówienie, tanie neony, neony personalizowane, neony LED, neony LED na zamówienie, personalizowane neony LED, wysokiej jakości neony, przystępne cenowo neony, dekoracyjne neony, neony do wnętrz, neony na prezent",
  openGraph: {
    type: "website",
    title: "Neony wysokiej jakości na zamówienie w świetnych cenach",
    description:
      "Dobrej jakości neony na zamówienie w przystępnej cenie. Duży wybór kolorów i kształtów. Moliwość personalizacji. Stwórz swój własny neon już dziś!",
    url: "./assets/images/mexican-food.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
