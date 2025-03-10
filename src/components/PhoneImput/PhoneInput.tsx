import classNames from "classnames";
import { ForwardedRef, forwardRef } from "react";
import { Spinner } from "../Spinner";
import { PhoneInputProps } from "./types";
import { PatternFormat } from "react-number-format";
import { twMerge } from "tailwind-merge";

function PhoneInput(
  {
    className,
    label,
    invalid,
    disabled: inputDisabled,
    loading,
    inputClassName,
    value,
    onChange,
    ...inputProps
  }: PhoneInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  // Memorize
  const isInvalid = Boolean(invalid);
  const disabled = loading || inputDisabled;

  return (
    <div className={twMerge("flex flex-col items-center", className)}>
      {label && (
        <label
          className={classNames(
            "self-start block my-2 text-sm font-medium w-full truncate",
            {
              "text-gray-900 dark:text-white": isInvalid === false,
              "text-red-700 dark:text-red-500": isInvalid,
            }
          )}
        >
          {label}
        </label>
      )}
      <div
        className={twMerge(
          classNames("h-10 w-full sm:text-sm rounded-lg p-2.5 outline-none", {
            "bg-gray-50 border border-gray-400 text-gray-900 focus:ring-cyan-600 focus:border-cyan-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-cyan-600 dark:focus:border-cyan-600":
              isInvalid === false,
            "bg-red-50 border dark:bg-gray-700 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":
              isInvalid,
          }),
          inputClassName
        )}
      >
        <div className="flex items-center w-full">
          <span className="text-gray-500 dark:text-gray-400">+90</span>
          <PatternFormat
            format="(###) ### ## ##"
            mask="_"
            getInputRef={ref}
            disabled={disabled}
            className="outline-none w-full bg-transparent pl-1"
            value={value}
            onValueChange={(values) => {
              if (onChange) {
                onChange({
                  target: {
                    value: values.value,
                    name: inputProps.name,
                  },
                } as React.ChangeEvent<HTMLInputElement>);
              }
            }}
            {...inputProps}
            type="tel"
          />
        </div>
      </div>
      {typeof invalid === "string" && (
        <p className="self-start mt-2 text-sm text-red-600 dark:text-red-500">
          {invalid}
        </p>
      )}
      {loading && (
        <Spinner
          color="default"
          className="w-5 absolute cursor-not-allowed ml-[-0.6rem] mt-[-2rem]"
        />
      )}
    </div>
  );
}

export default forwardRef(PhoneInput);
