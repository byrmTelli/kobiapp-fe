import { IoTrashOutline } from "react-icons/io5";
import { DeleteButtonProps } from "./types";

export default function DeleteButton({
  className,
  title,
  type = "button",
  icon,
  varient,
  size,
  tooltipLabel,
  ...props
}: DeleteButtonProps) {
  const varients = {
    light:
      "border-rose-600 text-rose-600 hover:bg-rose-700 hover:text-gray-200",
    dark: "bg-rose-700 text-white border-rose-700 hover:bg-gray-50 hover:text-rose-700",
  };

  const sizes = {
    sm: "px-1 text-sm",
    md: "px-2 py-1 text-base",
    lg: "px-3 py-2 text-lg",
  };

  const currentVarient = varients[varient ? varient : "light"];
  const currentSize = sizes[size ? size : "md"];
  return (
    <button
      className={`px-3 py-2  select-none group border font-semibold lg:min-w-[6rem] flex items-center justify-center gap-2 transition-color duration-500 rounded-md ${className} ${currentVarient} ${currentSize}`}
      type={type}
      {...props}
    >
      <span className="group-hover:animate-shake">
        <IoTrashOutline />
      </span>
      {title}
    </button>
  );
}
