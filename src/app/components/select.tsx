"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import cn from "classnames";
import { FC, useState } from "react";

interface SelectProps {
  options: { id: number | string; name: string }[];
  value?: { id: number | string; name: string };
  onChange?: (value: { id: number | string; name: string }) => void;
}

export const Select: FC<SelectProps> = ({ options, value, onChange }) => {
  const [selected, setSelected] = useState(value ?? options[0]);

  return (
    <Listbox
      value={selected}
      onChange={(val) => {
        setSelected(val);
        onChange?.(val);
      }}
    >
      {({ open }) => (
        <div className="relative mt-2">
          <ListboxButton
            className="flex w-full items-center justify-between rounded-md border-2 border-neon-purple bg-neon-purple-dark px-3 py-1.5 focus:border-neon-pink focus:shadow-[0px_0px_15px_rgb(255,16,240)] focus:outline-none focus:ring-0"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-labelledby="listbox-label"
          >
            {selected?.name}
            <ChevronDownIcon
              className={cn(
                "size-6 fill-white/60 group-data-[hover]:fill-white",
                open ? "transition duration-100 ease-in rotate-180" : "",
              )}
            />
          </ListboxButton>

          <ListboxOptions
            transition
            className={cn(
              "absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md mt-1 border border-white/5 bg-neon-purple p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
            )}
            aria-labelledby="listbox-label"
          >
            {options.map((option) => (
              <ListboxOption
                key={option.id}
                value={option}
                className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
                aria-selected={selected === option}
              >
                <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                <div className="text-sm/6 text-white">{option.name}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      )}
    </Listbox>
  );
};
