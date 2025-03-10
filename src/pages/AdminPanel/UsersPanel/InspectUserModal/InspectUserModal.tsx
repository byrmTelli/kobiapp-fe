import CustomDialog from "../../../../components/Dialog/CustomDialog";
import { InspectUserModalProps } from "./types";

export default function InspectUserModal({
  userProfile,
  isOpen,
  onClose,
}: InspectUserModalProps) {
  return (
    <CustomDialog
      title={"Kullanıcı Bilgileri"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col gap-4 p-4">
        <p className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
          <span className="font-bold">Kullanıcı Adı:</span>{" "}
          {userProfile.fullname}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
          <span className="font-bold">Kullanıcı Email:</span>{" "}
          {userProfile.email}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
          <span className="font-bold">Kullanıcı Telefon Numarası:</span>{" "}
          {userProfile.phoneNumber}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
          <span className="font-bold">Kullanıcı Rolü:</span>{" "}
          {userProfile.role ? (
            userProfile.role?.name
          ) : (
            <span className="text-amber-400 italic">
              Kullanıcı henüz bir rol atmasına sahip değil.
            </span>
          )}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
          <span className="font-bold">Kullanıcı Oluşturulma Tarihi:</span>{" "}
          {userProfile.created_At}
        </p>
      </div>
    </CustomDialog>
  );
}
