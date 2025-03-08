import classNames from "classnames";
import { ForwardedRef, forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { MdRemoveRedEye } from "react-icons/md";
import { Spinner } from "../Spinner";
import { InputProps } from "./types";

function Input(
  {
    className,
    label,
    invalid,
    disabled: inputDisabled,
    loading,
    inputClassName,
    ...inputProps
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  // States
  const [inputType, setInputType] = useState<string>(inputProps.type ?? "text");
  // Memorize
  const isInvalid = Boolean(invalid);
  const disabled = loading || inputDisabled;

  // Handlers

  const handleShowHiddenPasswordEyeClick = () => {
    if (inputType == "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div className={twMerge("flex flex-col items-center", className)}>
      {label && (
        <label
          className={classNames(
            "self-start block my-2 text-sm font-medium w-full truncate",
            {
              "text-gray-900": isInvalid === false,
              "text-red-700 dark:text-red-500": isInvalid,
            }
          )}
        >
          {label}
        </label>
      )}
      {inputProps.type == "password" ? (
        <div
          className={twMerge(
            classNames(
              "h-10 w-full sm:text-sm rounded-lg p-2.5 outline-none flex items-center justify-center gap-3",
              {
                "bg-gray-50 border border-gray-400 text-gray-900 focus:ring-cyan-600 focus:border-cyan-600":
                  isInvalid === false,
                "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":
                  isInvalid,
              }
            ),
            inputClassName
          )}
        >
          <input
            ref={ref}
            {...inputProps}
            type={inputType}
            disabled={disabled}
            className={"outline-none w-[90%]"}
          />
          <MdRemoveRedEye
            onClick={handleShowHiddenPasswordEyeClick}
            className="text-xl text-gray-500 cursor-pointer"
          />
        </div>
      ) : (
        <input
          ref={ref}
          {...inputProps}
          type={inputType}
          disabled={disabled}
          className={twMerge(
            classNames(
              "h-10 sm:text-sm rounded-lg block w-full p-2.5 outline-none",
              {
                "bg-gray-50 border border-gray-400 text-gray-900 focus:ring-cyan-600 focus:border-cyan-600":
                  isInvalid === false,
                "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":
                  isInvalid,
              }
            ),
            inputClassName
          )}
        />
      )}
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

export default forwardRef(Input);
