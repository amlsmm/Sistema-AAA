import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button";
  size?: "small" | "normal" | "large";
  spacing?: "small" | "normal" | "large";
  variant?: "white" | "danger" | "success" | "primary" | "outline" | "secondary";
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  size = "normal",
  spacing = "normal",
  variant,
  disabled,
  fullWidth,
  children,
  ...rest
}) => {
  const style =
    variant === "white"
      ? "bg-white text-primary"
      : variant === "outline"
      ? "bg-transparent border-primary text-primary"
      : variant === "secondary"
      ? "bg-transparent border-gray-500 text-gray-500"
      : variant === "danger"
      ? "bg-danger text-white"
      : variant === "success"
      ? "bg-success text-white"
      : "bg-primary text-white";
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={`
        ${fullWidth ? "w-full" : "max-w-max"} ${
          size == "small"
            ? "text-xs"
            : size == "large"
            ? "text-base"
            : "text-sm"
        } ${
          spacing == "small"
            ? "py-2 px-6"
            : spacing == "large"
            ? "py-3 px-10"
            : "py-2.5 px-5"
        } ${
          disabled ? "bg-gray-500" : "hover:opacity-90"
        } ${style} inline-flex items-center justify-center border font-bold rounded-full shadow-sm focus:outline-none transition duration-300`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
