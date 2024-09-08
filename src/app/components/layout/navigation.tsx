import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "./header";
import logo from "../../assets/images/logo.svg";

interface NavigationProps {
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  setMobileMenuOpen,
}) => {
  const pathname = usePathname();

  return (
    <motion.nav
      className="mx-auto flex h-16 max-w-7xl items-center justify-between p-4 uppercase transition-all duration-500 ease-in-out lg:px-8"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Main Navigation"
    >
      <div className="flex lg:flex-1">
        <Link href="/">
          <span className="sr-only">Your Company</span>
          <Image alt="Company logo" src={logo} width={32} height={32} />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          aria-label="Open main menu"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-6">
        {navigation.map((item) => (
          <Link
            key={item.name}
            className={`neon-button-nav ${pathname === item.href ? "active" : ""}`}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link
          href="#"
          className="neon-button-nav !p-2"
          title="Shopping Cart"
          aria-label="Shopping Cart"
        >
          <ShoppingCartIcon className="size-6" />
        </Link>
      </div>
    </motion.nav>
  );
};
