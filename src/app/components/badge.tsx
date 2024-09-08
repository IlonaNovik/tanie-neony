import { XMarkIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

interface BadgeProps {
  label: string;
}

export const Badge: FC<BadgeProps> = ({ label }) => {
  return (
    <>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-neon-pink px-2 py-1 text-sm font-medium uppercase">
        {label}
        <button
          type="button"
          className="group relative -mr-1 size-4 rounded-sm hover:bg-gray-500/20 focus:outline-none focus:ring-[0.5px] focus:ring-offset-1"
          aria-label={`Remove ${label}`}
        >
          <span className="sr-only">Remove</span>
          <XMarkIcon className="size-4 group-hover:stroke-white/75" />
          <span className="absolute -inset-1" />
        </button>
      </span>
    </>
  );
};
