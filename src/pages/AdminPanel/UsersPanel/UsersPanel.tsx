import { useState } from "react";
import Button from "../../../components/Buttons/Button/Button";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { apiManager } from "../../../store/api/enhanced/enhancedApiManager";
import UsersPanelTopDashboard from "./UsersPanelTopDashboard/UsersPanelTopDashboard";
import InspectUserModal from "./InspectUserModal/InspectUserModal";
import { UserProfileForAdminPanelViewModel } from "../../../store/api/generated/generatedApiManager";
import AddNewUserModal from "./AddNewUserModal/AddNewUserModal";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import PasswordChangeModal from "./UserPasswordChangeModal/PasswordChangeModal";
import UpdateUserProfileModal from "./UpdateUserProfileModal/UpdateUserProfileModal";
import AssignRoleToUserModal from "./AssignRoleToUserModal/AssignRoleToUserModal";
import Breadcrum from "../../../components/Breadcrum/Breadcrum";
export default function UsersPanel() {
  // States
  const [isAddNewUserModalOpen, setIsAddNewUserModalOpen] = useState(false);
  const [isInspectUserModalOpen, setIsInspectUserModalOpen] = useState(false);
  const [isPasswordChangeModalOpen, setIsPasswordChangeModalOpen] =
    useState(false);
  const [isUpdateUserProfileModalOpen, setIsUpdateUserProfileModalOpen] =
    useState(false);
  const [isAssignRoleToUserModalOpen, setIsAssignRoleToUserModalOpen] =
    useState(false);
  const [selectedUser, setSelectedUser] =
    useState<UserProfileForAdminPanelViewModel | null>(null);
  const user = useSelector((state: RootState) => state.auth.user);
  // Queries
  const getUsersQuery = apiManager.useGetApiManagerGetUsersQuery();
  // Mutations
  const usersList = getUsersQuery.data?.data ?? [];
  // Handlers
  const handleInspectUserButtonClick =
    (user: UserProfileForAdminPanelViewModel) => () => {
      setSelectedUser(user);
      setIsInspectUserModalOpen(true);
    };

  const handleAssignRoleToUserButtonClick =
    (user: UserProfileForAdminPanelViewModel) => () => {
      setSelectedUser(user);
      setIsAssignRoleToUserModalOpen(true);
    };

  return (
    <div className="w-full min-h-screen">
      {isAddNewUserModalOpen && (
        <AddNewUserModal
          isOpen={isAddNewUserModalOpen}
          onClose={() => setIsAddNewUserModalOpen(false)}
        />
      )}
      {isInspectUserModalOpen && selectedUser?.id != null && (
        <InspectUserModal
          isOpen={isInspectUserModalOpen}
          onClose={() => setIsInspectUserModalOpen(false)}
          userProfile={
            selectedUser ?? ({} as UserProfileForAdminPanelViewModel)
          }
        />
      )}
      {isPasswordChangeModalOpen && user?.id != null && (
        <PasswordChangeModal
          isOpen={isPasswordChangeModalOpen}
          onClose={() => setIsPasswordChangeModalOpen(false)}
        />
      )}
      {isUpdateUserProfileModalOpen && user?.id != null && (
        <UpdateUserProfileModal
          isOpen={isUpdateUserProfileModalOpen}
          onClose={() => setIsUpdateUserProfileModalOpen(false)}
          userProfile={user}
        />
      )}
      {isAssignRoleToUserModalOpen && (
        <AssignRoleToUserModal
          userProfile={
            selectedUser ?? ({} as UserProfileForAdminPanelViewModel)
          }
          isOpen={isAssignRoleToUserModalOpen}
          onClose={() => setIsAssignRoleToUserModalOpen(false)}
        />
      )}
      <Breadcrum />
      <div className="grid grid-cols-4 gap-4 p-8">
        <UsersPanelTopDashboard
          users={usersList}
          addUserButtonHandler={() => setIsAddNewUserModalOpen(true)}
        />
        <div className="fade-in border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors duration-500 rounded-lg p-4 shadow-lg min-h-96">
          <div className="flex items-center justify-between px-4">
            <div className="">
              <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 transition-colors duration-300">
                Profil Bilgileri
              </h1>
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <Button
              onClick={() => setIsUpdateUserProfileModalOpen(true)}
              title="Profilini Düzenle"
              size="sm"
            />
            <Button
              onClick={() => setIsPasswordChangeModalOpen(true)}
              title="Şifreni Değiştir"
              size="sm"
            />
          </div>
          <div className="grid w-full h-full gap-2 px-4 pt-8">
            <div className="w-full h-full flex flex-col gap-1">
              <p>
                <span className="text-gray-500 text-sm font-semibold">
                  Kullanıcı Adı:
                </span>{" "}
                <span>{user?.username}</span>
              </p>
              <p>
                <span className="text-gray-500 text-sm font-semibold">
                  Email Adresi:
                </span>{" "}
                <span>{user?.email}</span>
              </p>
              <p>
                <span className="text-gray-500 text-sm font-semibold">
                  Adı Soyadı:
                </span>{" "}
                <span>{user?.firstname + " " + user?.lastname}</span>
              </p>
              <p>
                <span className="text-gray-500 text-sm font-semibold">
                  Telefon Numarası:
                </span>{" "}
                <span>{user?.phoneNumber}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="fade-in col-span-4 border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors duration-500 rounded-lg p-4 shadow-lg min-h-96">
          <SimpleTable
            title="Kullanıcılar"
            columns={[
              { header: "No", cell: (cell) => cell.row.index + 1 },
              { header: "Email", accessorFn: (cell) => cell.email },
              { header: "Kullanıcı Adı", accessorFn: (cell) => cell.username },
              { header: "Adı Soyadı", accessorFn: (cell) => cell.fullname },
              {
                header: "Kayıt Tarihi",
                accessorFn: (cell) => cell.created_At,
              },
              {
                header: "İşlemler",
                cell: (cell) => (
                  <div className="flex items-center gap-2">
                    <Button
                      title="İncele"
                      className="border border-gray-300 dark:border-gray-700 hover:bg-gray-200"
                      varient="amber"
                      size="sm"
                      onClick={handleInspectUserButtonClick(cell.row.original)}
                    />
                    <Button
                      title="Rol Değiştir"
                      className="border border-gray-300 dark:border-gray-700 hover:bg-gray-200"
                      size="sm"
                      varient="success"
                      onClick={handleAssignRoleToUserButtonClick(
                        cell.row.original
                      )}
                    />
                    <Button title="Delete" varient="danger" size="sm" />
                  </div>
                ),
              },
            ]}
            data={usersList.filter((x) => x.id != user?.id).map((x) => x)}
          />
        </div>
      </div>
    </div>
  );
}
