import { Outlet } from "react-router-dom";

export default function BlankLayout() {
  return (
    <div className="min-h-screen flex flex-col flex-grow text-gray-800 dark:text-gray-200 dark:bg-gray-900 transition-colors duration-500">
      <div className="flex-1 w-full flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
