import classNames from "classnames";
import { ChangeEventHandler, ForwardedRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { Spinner } from "../Spinner";
import { SelectOption } from "./SelectOption";
import { SelectProps } from "./types";

function Select<T>(
  props: SelectProps<T>,
  ref?: ForwardedRef<HTMLSelectElement>
) {
  const {
    value,
    options,
    label,
    loading,
    emptyOption,
    invalid,
    disabled: selectDisabled,
    className,
    onChange,
    getValueField,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getLabelField,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    renderLabelField,
    ...selectionProps
  } = props;
  // Memorize
  const disabled = loading || selectDisabled;
  const isInvalid = typeof invalid !== "undefined";
  const selectValue = value == null ? "" : getValueField(value);
  // Handlers
  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newValue = options.find((o) => getValueField(o) === e.target.value);
    const newValueOrDefault = typeof newValue === "undefined" ? null : newValue;

    onChange(newValueOrDefault);
  };

  return (
    <div className={twMerge("flex flex-col items-center", className)}>
      {label && (
        <label
          className={classNames(
            "self-start block mb-2 text-sm font-medium w-full truncate dark:text-gray-200 pl-1",
            {
              "text-gray-900": isInvalid === false,
              "text-red-700 dark:text-red-500": isInvalid,
            }
          )}
        >
          {label}
        </label>
      )}
      <select
        ref={ref}
        disabled={disabled}
        value={selectValue}
        onChange={handleSelectChange}
        className={classNames(" sm:text-sm rounded-lg block w-full p-2.5", {
          "bg-gray-50 border border-gray-400 text-gray-900 focus:ring-cyan-600 focus:border-cyan-600 outline-none dark:text-gray-200 dark:bg-gray-700 dark:border-gray-900":
            isInvalid === false,
          "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-600 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":
            isInvalid,
          "bg-gray-100 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400":
            disabled,
        })}
        {...selectionProps}
      >
        <option value="">
          {typeof emptyOption === "string" ? emptyOption : ""}
        </option>
        {options.map((o) => (
          <SelectOption item={o} selectProps={props} key={getValueField(o)} />
        ))}
      </select>
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

export default forwardRef(Select) as <T>(
  props: SelectProps<T>,
  ref?: ForwardedRef<HTMLSelectElement>
) => ReturnType<typeof Select>;
