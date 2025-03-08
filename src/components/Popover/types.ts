import { PopoverSubItemProps } from "./PopoverSubItem/types";

interface PopoverComponentProps {
  mainItem: React.ReactNode;
  subItems: PopoverSubItemProps[];
}

export type PopoverProps = PopoverComponentProps;
