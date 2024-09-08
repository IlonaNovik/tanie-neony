"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import cn from "classnames";
import { FC, ReactNode } from "react";

interface DropdownProps {
  title: string | ReactNode;
  position?: "left" | "right";
  items: { name: ReactNode; value: string }[];
}

export const Dropdown: FC<DropdownProps> = ({
  title,
  position = "right",
  items,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <MenuButton
            className="w-full px-3 py-2 font-semibold shadow-sm"
            aria-haspopup="true"
            aria-expanded={open ? "true" : "false"}
          >
            <span
              className={cn(
                "inline-flex justify-center items-center gap-x-1.5",
                open ? "text-white-glow" : "text-white",
              )}
            >
              {title}
              {open ? (
                <ChevronUpIcon aria-hidden="true" className="size-5" />
              ) : (
                <ChevronDownIcon aria-hidden="true" className="size-5" />
              )}
            </span>
          </MenuButton>
          <MenuItems
            transition
            className={cn(
              "absolute z-10 mt-2 w-56 origin-top-right overflow-hidden rounded-md bg-neon-purple shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in",
              position === "left" ? "left-0" : "right-0",
            )}
            as="ul"
            aria-labelledby="menu-button"
          >
            {items.map((item) => (
              <MenuItem key={item.value} as="li">
                <div className="block cursor-pointer px-4 py-2 text-sm data-[focus]:bg-lavender data-[focus]:text-neon-purple-dark">
                  {item.name}
                </div>
              </MenuItem>
            ))}
          </MenuItems>
        </>
      )}
    </Menu>
  );
};
