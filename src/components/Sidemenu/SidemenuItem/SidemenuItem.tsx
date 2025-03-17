import classNames from "classnames";
import { SidemenuItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

export default function SidemenuItem({
  path,
  label,
  icon,
  isSideMenuOpen,
}: SidemenuItemProps) {
  const navigate = useNavigate();

  // Handler
  const handleSideMenuItemClick = (path: string) => () => {
    navigate(path);
  };
  return (
    <div
      onClick={handleSideMenuItemClick(path)}
      className={classNames(
        { "justify-center": !isSideMenuOpen },
        "text-gray-700 dark:text-gray-200 font-semibold pl-2 py-1 flex items-center gap-2 cursor-pointer  select-none"
      )}
    >
      {isSideMenuOpen ? (
        <div className="flex items-center gap-2">
          {<IoMdArrowDropright />}
          <span
            className={classNames({
              "opacity-0 hidden": !isSideMenuOpen,
            })}
          >
            {label}
          </span>
        </div>
      ) : (
        <div className="p-2 border rounded-full border-gray-300  hover:bg-gray-600 hover:text-gray-200">
          {icon}
        </div>
      )}
    </div>
  );
}
