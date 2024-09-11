import { FC } from "react";

interface TagProps {
  label: string;
}

export const Tag: FC<TagProps> = ({ label }) => (
  <span className="inline-flex h-max items-center gap-x-0.5 rounded-sm bg-[#3bbeaa] px-2 py-0.5 text-xs font-medium uppercase text-neon-purple-dark">
    {label}
  </span>
);
