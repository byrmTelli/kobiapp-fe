import classNames from "classnames";
import { ForwardedRef, forwardRef, useRef } from "react";
import { twMerge } from "tailwind-merge";

import { CheckboxProps } from "./types";

function Checkbox(
  { className, label, invalid, text, ...props }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  // Ref
  const internalRef = useRef<HTMLInputElement | null>(null);
  // Mermoize
  const isInvalid = !!invalid;
  // Handlers
  const handleTextClick = () => {
    const inputEl = internalRef.current;
    if (inputEl == null) return;

    if (inputEl.click) {
      inputEl.click();
    }
  };

  return (
    <div
      className={classNames({
        "cursor-pointer": props.onChange !== undefined,
      })}
    >
      {label && (
        <label
          className={classNames(
            "block mb-2 text-sm font-medium w-full truncate",
            {
              "text-gray-900 dark:text-gray-400": isInvalid === false,
              "text-red-700 dark:text-red-500": isInvalid,
            }
          )}
        >
          {label}
        </label>
      )}
      <div className="flex items-center gap-1">
        <input
          ref={(el) => {
            internalRef.current = el;

            if (ref && typeof ref === "function") ref(el);
          }}
          {...props}
          type="checkbox"
          className={twMerge(
            "bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded",
            className
          )}
        />
        <button
          onClick={handleTextClick}
          className={classNames("text-sm", {
            "text-gray-900 dark:text-gray-400": isInvalid === false,
            "text-red-700 dark:text-red-500": isInvalid,
          })}
        >
          {text}
        </button>
      </div>
    </div>
  );
}

export default forwardRef(Checkbox);
