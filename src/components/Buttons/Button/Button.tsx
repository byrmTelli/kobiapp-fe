import { Spinner } from "../../Spinner";
import { sizes, varients } from "./constants";
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
  const currentVarient = varients[varient ? varient : "light"];
  const currentSize = sizes[size ? size : "md"];
  return (
    <button
      disabled={isLoading ? true : false}
      className={`px-3 py-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 select-none group font-semibold flex items-center justify-center transition-color duration-500 rounded-md ${className} ${currentVarient} ${currentSize}`}
      type={type}
      {...props}
    >
      {isLoading == true ? (
        <Spinner className="w-4" color={"success"} />
      ) : (
        <p className="flex gap-2 items-center py-1 text-center">
          <span className="group-hover:animate-shake">{icon}</span>
          {title}
        </p>
      )}
    </button>
  );
}
