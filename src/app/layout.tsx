import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { Header } from "@/app/components/layout";

const inter = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanie neony",
  description:
    "Dobrej jakości neony na zamówienie w przystępnej cenie. Duży wybór kolorów i kształtów. Moliwość personalizacji. Stwórz swój własny neon już dziś!",
  viewport: "width=device-width, initial-scale=1",
  keywords:
    "neony, neony na zamówienie, tanie neony, neony personalizowane, neony led, neony led na zamówienie, neony led personalizowane",
  openGraph: {
    title: "Tanie neony",
    description:
      "Dobrej jakości neony na zamówienie w przystępnej cenie. Duży wybór kolorów i kształtów. Moliwość personalizacji. Stwórz swój własny neon już dziś!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
