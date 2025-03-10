import { Outlet } from "react-router-dom";
import MainFooter from "../../components/MainFooter/MainFooter";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import Sidemenu from "../../components/Sidemenu/Sidemenu";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800 dark:text-gray-200 dark:bg-gray-900 transition-colors duration-500">
      <AdminNavbar />
      <div className="flex w-full">
        <Sidemenu />
        <div className="flex-1 w-full pl-72">
          <Outlet />
        </div>
      </div>
      <MainFooter />
    </div>
  );
}
