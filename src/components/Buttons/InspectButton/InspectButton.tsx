import { VscInspect } from "react-icons/vsc";
import { InspectButtonProps } from "./types";

export default function InspectButton({
  className,
  title,
  type = "button",
  icon,
  varient,
  size,
  ...props
}: InspectButtonProps) {
  const varients = {
    light:
      "border-stone-600 text-stone-600 hover:bg-stone-700 hover:text-gray-200",
    dark: "bg-stone-700 text-white border-stone-700 hover:bg-gray-50 hover:text-stone-700",
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
      className={`lg:px-3 lg:py-2  select-none group border font-semibold lg:w-[6rem] flex items-center justify-center gap-2 transition-color duration-500 rounded-md ${className} ${currentVarient} ${currentSize}`}
      type={type}
      {...props}
    >
      <span className="group-hover:animate-shake">
        <VscInspect />
      </span>
      {title}
    </button>
  );
}
