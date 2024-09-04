"use client";

import { useState } from "react";

import { MobileMenu } from "./mobile-menu";
import { Navigation } from "./navigation";

export const navigation = [
  { name: "Strona główna", href: "/" },
  { name: "Sklep", href: "/store" },
  { name: "Kontakt", href: "/contact" },
] as const;

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-transparent backdrop-blur-lg">
      <Navigation setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </header>
  );
};
