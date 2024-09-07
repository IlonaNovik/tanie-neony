import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { navigation } from "./header";
import logo from "../../assets/images/logo.svg";
interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ open, setOpen }) => {
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  return (
    <Dialog open={open} onClose={setOpen} className="lg:hidden">
      <div className="fixed inset-0 z-50" />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-y-0 left-0 z-50 w-full bg-gray-900/50"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neon-purple p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only" id="mobile-menu-title">
                Your Company
              </span>
              <Image alt="Company logo" src={logo} width={32} height={32} />
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6 text-white" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    className={`neon-button-nav !justify-start ${pathname === item.href ? "active" : ""}`}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </motion.div>
    </Dialog>
  );
};
