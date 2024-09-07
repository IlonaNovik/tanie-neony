import cn from "classnames";
import { FieldError } from "react-hook-form";

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  label: string;
  required?: boolean;
  error?: FieldError;
}

export const FormField: React.FC<FormFieldProps> = (props) => {
  const { name, label, required, error, children } = props;
  const errorId = `${name}-error`;

  return (
    <div {...props}>
      <label htmlFor={name} className="group mb-2 w-full">
        <span className="text-white">
          {label}
          {required && <span className="ml-1 text-xs">*</span>}
        </span>
        <div className="my-1">{children}</div>
      </label>

      <p
        id={errorId}
        className={cn("h-4 text-sm text-error-red block", {
          "opacity-0": !error,
        })}
        aria-live="assertive"
      >
        {error?.message}
      </p>
    </div>
  );
};
