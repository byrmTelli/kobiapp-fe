import { IoMdArrowDropright } from "react-icons/io";
import SidemenuItem from "./SidemenuItem/SidemenuItem";

export default function Sidemenu() {
  return (
    <div className="fixed w-72 h-full bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700">
      <div className="h-full w-full flex flex-col gap-2">
        <SidemenuItem
          path="management"
          icon={<IoMdArrowDropright />}
          label="Dashboard"
        />
        <SidemenuItem
          path="users"
          icon={<IoMdArrowDropright />}
          label="Kullanıcı Yönetimi"
        />
        <SidemenuItem
          path="ministries"
          icon={<IoMdArrowDropright />}
          label="Hizmetler"
        />

        <SidemenuItem
          path="categories"
          icon={<IoMdArrowDropright />}
          label="Kategoriler"
        />
        <SidemenuItem
          path="messages"
          icon={<IoMdArrowDropright />}
          label="Mesajlar"
        />
      </div>
    </div>
  );
}
