import { forwardRef } from "react";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  rows: number;
}

export const TextArea: React.FC<TextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>((props, ref) => {
  return (
    <textarea
      ref={ref}
      className="w-full rounded-md border border-neon-pink bg-neon-purple-dark px-3.5 py-2 text-white shadow-[0px_0px_20px_rgb(255,16,240)] placeholder:text-lavender focus:border-neon-pink focus:shadow-[0px_0px_40px_rgb(255,16,240)] focus:outline-none focus:ring-0"
      aria-required={props.required ? "true" : undefined}
      aria-invalid={props["aria-invalid"]}
      aria-describedby={props["aria-describedby"]}
      {...props}
    />
  );
});

TextArea.displayName = "TextArea";
