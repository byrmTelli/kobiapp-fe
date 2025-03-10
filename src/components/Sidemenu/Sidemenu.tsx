import { IoMdArrowDropright } from "react-icons/io";
import SidemenuItem from "./SidemenuItem/SidemenuItem";

export default function Sidemenu() {
  return (
    <div className="fixed w-72 h-full bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700">
      <div className="h-full w-full flex flex-col gap-2">
        <div className="text-gray-700 dark:text-gray-200 font-semibold text-sm pl-2 py-1 flex items-center gap-2 cursor-pointer">
          <IoMdArrowDropright />
          Dashboard
        </div>
        <div className="text-gray-700 dark:text-gray-200 font-semibold text-sm pl-2 py-1 flex items-center gap-2 cursor-pointer">
          <IoMdArrowDropright />
          Kullanıcı Yönetimi
        </div>
        <SidemenuItem
          path="users"
          icon={<IoMdArrowDropright />}
          label="Kullanıcı Yönetimi"
        />
        <div className="text-gray-700 dark:text-gray-200 font-semibold text-sm pl-2 py-1 flex items-center gap-2 cursor-pointer">
          <IoMdArrowDropright />
          Hizmetler
        </div>
        <div className="text-gray-700 dark:text-gray-200 font-semibold text-sm pl-2 py-1 flex items-center gap-2 cursor-pointer">
          <IoMdArrowDropright />
          Categoriler
        </div>
        <div className="text-gray-700 dark:text-gray-200 font-semibold text-sm pl-2 py-1 flex items-center gap-2 cursor-pointer">
          <IoMdArrowDropright />
          Mesajlar
        </div>
      </div>
    </div>
  );
}
