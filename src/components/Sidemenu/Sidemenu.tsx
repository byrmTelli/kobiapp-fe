import SidemenuItem from "./SidemenuItem/SidemenuItem";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { IoBagRemove } from "react-icons/io5";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import { FaEnvelopesBulk } from "react-icons/fa6";

export default function Sidemenu() {
  const sideMenuState = useSelector(
    (state: RootState) => state.app.sideMenuOpen
  );
  return (
    <div
      className={classNames(
        { "w-72": sideMenuState },
        { "w-24": !sideMenuState },
        "fixed h-full bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700 transition-all duration-300"
      )}
    >
      <div className="h-full w-full flex flex-col gap-2 mt-10">
        <SidemenuItem
          path="management"
          icon={<LuLayoutDashboard className="text-2xl" />}
          label="Dashboard"
          isSideMenuOpen={sideMenuState}
        />
        <SidemenuItem
          path="users"
          icon={<FaUsersBetweenLines className="text-2xl" />}
          label="Kullanıcı Yönetimi"
          isSideMenuOpen={sideMenuState}
        />
        <SidemenuItem
          path="ministries"
          icon={<IoBagRemove className="text-2xl" />}
          label="Hizmetler"
          isSideMenuOpen={sideMenuState}
        />

        <SidemenuItem
          path="categories"
          icon={<BiCategory className="text-2xl" />}
          label="Kategoriler"
          isSideMenuOpen={sideMenuState}
        />
        <SidemenuItem
          path="messages"
          icon={<FaEnvelopesBulk className="text-2xl" />}
          label="Mesajlar"
          isSideMenuOpen={sideMenuState}
        />
      </div>
    </div>
  );
}
