import { Spinner } from "../../Spinner";
import { UpdateModalButtonProps } from "./types";

export default function UpdateModalButton({
  className,
  title,
  type = "button",
  icon,
  varient,
  size,
  tooltipLabel,
  ...props
}: UpdateModalButtonProps) {
  const varients = {
    light: "border-gray-300 text-gray-700 hover:bg-gray-700 hover:text-gray-50",
    dark: "bg-sky-800 text-teal-200 border-teal-700 hover:bg-teal-50 hover:text-sky-800",
    success:
      "bg-sky-800 text-teal-200 border-teal-700 hover:bg-teal-50 hover:text-sky-800",
  };

  const sizes = {
    sm: "px-1 text-xs",
    md: "px-2 py-1 text-base",
    lg: "px-3 py-2 text-lg",
  };

  const currentVarient = varients[varient ? varient : "light"];
  const currentSize = sizes[size ? size : "sm"];
  return (
    <button
      disabled={props.isLoading ? true : false}
      className={`px-3 py-2  select-none group border font-semibold min-w-28 flex items-center justify-center gap-2 transition-color duration-500 rounded-md ${className} ${currentVarient} ${currentSize}`}
      type={type}
      {...props}
    >
      {props.isLoading == true ? (
        <Spinner color={"success"} />
      ) : (
        <>
          <span className="group-hover:animate-shake">{icon}</span>
          {title}
        </>
      )}
    </button>
  );
}
