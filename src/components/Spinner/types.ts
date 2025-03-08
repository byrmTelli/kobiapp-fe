import { HTMLAttributes } from "react";
import { StandartColorType } from "../../types.ts/color";

interface SpinnerComponentProps {
  color: StandartColorType;
}

export type SpinnerProps = SpinnerComponentProps &
  HTMLAttributes<HTMLDivElement>;
