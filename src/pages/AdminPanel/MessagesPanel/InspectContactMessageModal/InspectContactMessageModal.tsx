import { IoFlagSharp } from "react-icons/io5";
import Button from "../../../../components/Buttons/Button/Button";
import CustomDialog from "../../../../components/Dialog/CustomDialog";
import { InspectContactMessageModalProps } from "./types";
import { FaEnvelope } from "react-icons/fa6";
import { apiManager } from "../../../../store/api/enhanced/enhancedApiManager";
import { ContactMessageViewModel } from "../../../../store/api/generated/generatedApiManager";
import { toast } from "react-toastify";
import useSetSafeTimeout from "use-set-safe-timeout";

export default function InspectContactMessageModal({
  isOpen,
  onClose,
  selectedContactMessage,
}: InspectContactMessageModalProps) {
  // States
  const setSafeTimeOut = useSetSafeTimeout();
  // Queries
  const [markAsImportantOrNotReaded] =
    apiManager.usePostApiManagerUpdateMessageStatusMutation();
  // Mutations
  // Handlers
  const handleMarkAsImportantButtonClick =
    (data: ContactMessageViewModel) => () => {
      markAsImportantOrNotReaded({
        updateContactMessageRequestModel: {
          messageId: data.id,
          isImportant: !data.isImportant,
          isRead: data.isReaded,
        },
      })
        .unwrap()
        .then((res) => {
          if (res.statusCode == 200) {
            toast.success("İletişim mesajı başarıyla işaretlendi");
            setSafeTimeOut(() => {
              onClose();
            }, 500);
          }
        })
        .catch(() => {
          toast.error("İletişim mesajı işaretlenirken bir hata oluştu");
        });
    };

  const handleMarkAsNotReadedButtonClick =
    (data: ContactMessageViewModel) => () => {
      markAsImportantOrNotReaded({
        updateContactMessageRequestModel: {
          messageId: data.id,
          isRead: false,
          isImportant: data.isImportant,
        },
      })
        .unwrap()
        .then((res) => {
          if (res.statusCode == 200) {
            toast.success(
              "İletişim mesajı başarıyla okunmadı olarak işaretlendi"
            );
            setSafeTimeOut(() => {
              onClose();
            }, 500);
          }
        })
        .catch(() => {
          toast.error(
            "İletişim mesajı okunmadı olarak işaretlenirken bir hata oluştu"
          );
        });
    };

  return (
    <CustomDialog
      title={"İletişim Mesajı Detay Bilgileri"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col gap-4 p-4">
        <p className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300 border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-4">
          <span className="font-bold">Mesaj Gönderim Tarihi:</span>{" "}
          {selectedContactMessage.created_At}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300 border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-4">
          <span className="font-bold">Mesaj Göndreren Kategorisi:</span>{" "}
          {selectedContactMessage.contactCategory?.title}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300 border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-4">
          <span className="font-bold">Mesaj Gönderen Telefon Numarası:</span>{" "}
          {selectedContactMessage.contactPhone}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300 border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-4">
          <span className="font-bold">Mesaj Gönderen Mail Adresi:</span>{" "}
          {selectedContactMessage.contactEmail}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300 border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-4">
          <span className="font-bold">Mesaj İçeriği:</span>{" "}
          {selectedContactMessage.content}
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={handleMarkAsImportantButtonClick(selectedContactMessage)}
            icon={
              <IoFlagSharp
                className={
                  "text-gray-500 dark:text-gray-200 transition-colors duration-300 text-xl"
                }
              />
            }
            title="Önemli Olarak İşaretle | Kaldır"
            size="sm"
          />
          <Button
            onClick={handleMarkAsNotReadedButtonClick(selectedContactMessage)}
            icon={
              <FaEnvelope
                className={
                  "text-gray-500 dark:text-gray-200 transition-colors duration-300 text-xl"
                }
              />
            }
            title="Okunmadı Olarak İşaretle"
            size="sm"
          />
        </div>
      </div>
    </CustomDialog>
  );
}
