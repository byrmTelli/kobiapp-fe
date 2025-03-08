import { Outlet } from "react-router-dom";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import MainFooter from "../../components/MainFooter/MainFooter";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800 dark:text-gray-200 dark:bg-gray-900 transition-colors duration-500">
      <MainNavbar />
      <div className="flex-1 w-full">
        <Outlet />
      </div>
      <MainFooter />
    </div>
  );
}
