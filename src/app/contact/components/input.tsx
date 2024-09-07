import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  return (
    <input
      ref={ref}
      className="w-full rounded-md border border-neon-pink bg-neon-purple-dark px-3.5 py-2 text-white shadow-[0px_0px_20px_rgb(255,16,240)] placeholder:text-lavender focus:border-neon-pink focus:shadow-[0px_0px_40px_rgb(255,16,240)] focus:outline-none focus:ring-0"
      {...props}
    />
  );
});

Input.displayName = "Input";
