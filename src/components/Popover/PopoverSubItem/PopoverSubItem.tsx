import { useNavigate } from "react-router-dom";
import { PopoverSubItemProps } from "./types";

export default function PopoverSubItem({
  title,
  icon,
  className,
  path,
}: PopoverSubItemProps) {
  // States
  const navigate = useNavigate();
  // Handlers
  const handleSubItemClick = (path: string) => () => {
    navigate(path);
  };
  return (
    <div
      onClick={handleSubItemClick(path ?? "")}
      className={`flex items-center justify-start gap-2 p-2 
        border-b  border-gray-300  dark:border-gray-800
         hover:bg-gray-100 dark:hover:bg-gray-100 transition-color duration-500 ${className}`}
    >
      {icon}
      {title}
    </div>
  );
}
