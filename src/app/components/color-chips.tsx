"use client";

import cn from "classnames";
import { FC, useState } from "react";

interface ColorChipsProps {
  colors: string[];
  value?: string;
  onChange?: (chip: string) => void;
}
const COLORS = {
  white: "#ffffff",
  yellow: "#ffea00",
  blue: "#10d2f8",
  green: "#0df64d",
  red: "#f70637",
};

const SHADOWS = {
  white: "255,255,255",
  yellow: "255,234,0",
  blue: "16,210,248",
  green: "13,246,77",
  red: "247,6,55",
};
export const ColorChips: FC<ColorChipsProps> = ({
  colors,
  onChange,
  value,
}) => {
  const [selected, setSelected] = useState(value);

  return (
    <div
      className="flex h-9 flex-wrap items-center gap-3"
      role="radiogroup"
      aria-label="Color selection"
    >
      {colors.map((value) => (
        <button
          type="button"
          key={value}
          onClick={() => {
            setSelected(value);
            onChange?.(value);
          }}
          className={cn(
            "size-8 rounded-full focus:ring-neon-pink hover:scale-110 transition-transform",
            selected === value ? "animate-pulse" : "",
          )}
          style={{
            background: COLORS[value as keyof typeof COLORS],
            boxShadow: `0 0 15px rgb(${SHADOWS[value as keyof typeof SHADOWS]},0.5)`,
          }}
          aria-label={`Select ${value}`}
          aria-checked={selected === value}
          role="radio"
          tabIndex={selected === value ? 0 : -1}
        />
      ))}
    </div>
  );
};
