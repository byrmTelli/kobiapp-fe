import { Spinner } from "../../Spinner";
import { ButtonProps } from "./types";

export default function Button({
  className,
  title,
  type = "button",
  icon,
  varient,
  size,
  isLoading,
  ...props
}: ButtonProps) {
  const varients = {
    light:
      " text-gray-500 hover:bg-gray-200 hover:text-gray-700 border-gray-300 dark:border-gray-700 dark:text-gray-200",
    dark: "bg-gray-700 text-gray-200  hover:bg-gray-50 hover:text-gray-700",
    success: "bg-sky-800 text-gray-200  hover:bg-gray-50 hover:text-sky-800",
    danger: "bg-rose-700 text-gray-200  hover:bg-gray-50 hover:text-rose-700",
    info: "bg-sky-800 text-gray-200  hover:bg-gray-50 hover:text-sky-700",
    amber: "bg-amber-300 text-gray-700 hover:bg-amber-400",
  };

  const sizes = {
    sm: "px-1 text-sm",
    md: "px-2 py-1 text-base",
    lg: "px-3 py-2 text-lg",
    xl: "px-4 py-3 text-xl",
  };

  const currentVarient = varients[varient ? varient : "light"];
  const currentSize = sizes[size ? size : "md"];
  return (
    <button
      disabled={isLoading ? true : false}
      className={`px-3 py-1 h-full  select-none group flex items-center justify-center transition-color duration-500 ${className} ${currentVarient} ${currentSize}`}
      type={type}
      {...props}
    >
      {isLoading == true ? (
        <Spinner className="w-4" color={"success"} />
      ) : (
        <p className="flex gap-2 items-center py-1">
          <span className="group-hover:animate-shake">{icon}</span>
          {title}
        </p>
      )}
    </button>
  );
}
