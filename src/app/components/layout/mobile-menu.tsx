import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import { navigation } from "./header";

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onClose={setOpen} className="lg:hidden">
      <div className="fixed inset-0 z-50" />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-y-0 left-0 z-50 w-full bg-gray-900/50"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Bars2Icon className="size-6" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-800"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </motion.div>
    </Dialog>
  );
};
