import { PopoverSubItemProps } from "./types";

export default function PopoverSubItem({
  title,
  icon,
  className,
}: PopoverSubItemProps) {
  return (
    <div
      className={`flex items-center justify-start gap-2 p-2 
        border-b  border-gray-300  dark:border-gray-800
         hover:bg-gray-100 dark:hover:bg-gray-100 transition-color duration-500 ${className}`}
    >
      {icon}
      {title}
    </div>
  );
}
