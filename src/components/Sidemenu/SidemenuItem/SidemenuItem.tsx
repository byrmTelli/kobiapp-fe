import { SidemenuItemProps } from "./types";
import { useNavigate } from "react-router-dom";

export default function SidemenuItem({ path, label, icon }: SidemenuItemProps) {
  const navigate = useNavigate();

  // Handler
  const handleSideMenuItemClick = (path: string) => () => {
    navigate(path);
  };
  return (
    <div
      onClick={handleSideMenuItemClick(path)}
      className="text-gray-700 dark:text-gray-200 font-semibold text-sm pl-2 py-1 flex items-center gap-2 cursor-pointer"
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
