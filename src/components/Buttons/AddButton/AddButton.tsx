import { AddButtonProps } from "./types";
import { IoIosAdd } from "react-icons/io";

export default function AddButton({
  className,
  title,
  type = "button",
  icon,
  varient,
  size,
  tooltipMessage,
  ...props
}: AddButtonProps) {
  const varients = {
    light: "border-gray-300 text-gray-700 hover:bg-gray-500 hover:text-gray-50",
    dark: "text-gray-800 border-gray-400 hover:bg-gray-300 hover:text-gray-800",
  };

  const sizes = {
    sm: "px-1 text-sm",
    md: "px-2 py-1 text-base",
    lg: "px-3 py-2 text-lg",
  };

  const currentVarient = varients[varient ? varient : "light"];
  const currentSize = sizes[size ? size : "md"];
  return (
    <>
      {tooltipMessage ? (
        <button
          className={`px-3 py-2  select-none group border font-semibold flex items-center justify-center gap-2 transition-color duration-500 min-w-24 ${className} ${currentVarient} ${currentSize}`}
          type={type}
          {...props}
        >
          {icon ? (
            <span className="group-hover:animate-shake text-xl">{icon}</span>
          ) : (
            <span className="group-hover:animate-shake text-xl">
              <IoIosAdd />
            </span>
          )}

          <span className="text-sm">{title}</span>
        </button>
      ) : (
        <button
          className={`px-3 py-2  select-none group border font-semibold flex items-center justify-center gap-2 transition-color duration-500 min-w-24 ${className} ${currentVarient} ${currentSize}`}
          type={type}
          {...props}
        >
          {icon && (
            <span className="group-hover:animate-shake text-xl">
              <IoIosAdd width={20} height={20} />
            </span>
          )}
          <span className="text-sm">{title}</span>
        </button>
      )}
    </>
  );
}
