import { PatternFormatProps } from "react-number-format";
import { ChangeEvent } from "react";

export interface PhoneInputProps
  extends Omit<PatternFormatProps, "format" | "mask" | "value" | "onChange"> {
  label?: string;
  invalid?: boolean | string;
  loading?: boolean;
  inputClassName?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
