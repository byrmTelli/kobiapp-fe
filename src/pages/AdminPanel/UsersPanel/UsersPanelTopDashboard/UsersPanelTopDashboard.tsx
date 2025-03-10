import { UsersPanelTopDashboardProps } from "./types";

export default function UsersPanelTopDashboard({
  addUserButtonHandler,
  users,
}: UsersPanelTopDashboardProps) {
  // States
  // Handlers
  return (
    <>
      <div className="fade-in w-full border col-span-3 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-lg flex flex-col justify-between p-4 shadow-lg min-h-48 transition-colors duration-500">
        <h1 className="text-lg font-bold text-gray-500 dark:text-gray-200 mb-4">
          Dashboard
        </h1>
        <div className="grid grid-cols-2 gap-4 w-full flex-1">
          <div className="border border-gray-300 rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4">
            <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">
              Tümü
            </p>
            <h1 className="text-6xl font-bold">{users.length ?? 0}</h1>
            <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm">
              Toplam
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4">
            <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">
              Yönetici
            </p>
            <h1 className="text-6xl font-bold">
              {users.filter((x) => x.role?.name == "Admin").length ?? 0}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm">
              Toplam
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4">
            <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">
              Moderatör
            </p>
            <h1 className="text-6xl font-bold">
              {" "}
              {users.filter((x) => x.role?.name == "Moderator").length ?? 0}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm">
              Toplam
            </p>
          </div>
          <div
            onClick={addUserButtonHandler}
            className="select-none border grid items-center justify-center border-gray-300 hover:bg-gray-100 hover:dark:bg-gray-800 cursor-pointer rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900  p-4"
          >
            <h1 className="text-gray-500 dark:text-gray-200 font-semibold text-lg ">
              Yeni Kullanıcı Ekle
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
