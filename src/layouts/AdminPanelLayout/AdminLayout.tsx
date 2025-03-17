import { Outlet } from "react-router-dom";
import MainFooter from "../../components/MainFooter/MainFooter";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import Sidemenu from "../../components/Sidemenu/Sidemenu";
import classNames from "classnames";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export default function AdminLayout() {
  const isSideMenuOpen = useSelector(
    (state: RootState) => state.app.sideMenuOpen
  );
  return (
    <div className="min-h-screen flex flex-col text-gray-800 dark:text-gray-200 dark:bg-gray-900 transition-colors duration-500">
      <AdminNavbar />
      <div className="flex w-full">
        <Sidemenu />
        <div
          className={classNames(
            { "pl-72": isSideMenuOpen },
            { "pl-24": !isSideMenuOpen },
            "flex-1 w-full transition-all duration-300"
          )}
        >
          <Outlet />
        </div>
      </div>
      <MainFooter />
    </div>
  );
}
