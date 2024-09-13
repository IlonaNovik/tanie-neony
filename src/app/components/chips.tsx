"use client";

import cn from "classnames";
import { FC, useState } from "react";

interface ChipsProps {
  chips: { name: string; value: string }[];
  value?: { name: string; value: string };
  onChange?: (chip: { name: string; value: string }) => void;
}

export const Chips: FC<ChipsProps> = ({ chips, onChange, value }) => {
  const [selected, setSelected] = useState(value);

  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Chip selection"
    >
      {chips.map((chip) => (
        <button
          type="button"
          key={chip.value}
          onClick={() => {
            setSelected(chip);
            onChange?.(chip);
          }}
          className={cn(
            "uppercase px-3 py-2 text-sm font-semibold text-white bg-neon-purple rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-pink hover:bg-neon-purple/60 hover:shadow-[0px_0px_15px_rgb(255,16,240)]",
            selected === chip && "ring ring-neon-pink",
          )}
          aria-pressed={selected === chip}
          aria-label={`Select ${chip.name}`}
        >
          {chip.name}
        </button>
      ))}
    </div>
  );
};
