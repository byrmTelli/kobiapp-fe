import Breadcrum from "../../../components/Breadcrum/Breadcrum";
import Button from "../../../components/Buttons/Button/Button";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { apiManager } from "../../../store/api/enhanced/enhancedApiManager";
import { IoFlagSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { useState } from "react";
import CreateContactMessageCategoryModal from "./CreateContactMessageCategoryModal/CreateContactMessageCategoryModal";
import UpdateContactMessageCategoryModal from "./UpdateContactMessageCategoryModal/UpdateContactMessageCategoryModal";
import {
  ContactCategoryViewModel,
  ContactMessage,
} from "../../../store/api/generated/generatedApiManager";
import InspectContactMessageCategoryModal from "./InspectContactMessageCategoryModal/InspectContactMessageCategoryModal";
import { toast } from "react-toastify";
import InspectContactMessageModal from "./InspectContactMessageModal/InspectContactMessageModal";

export default function MessagesPage() {
  // States
  const [
    isCreateContactMessageCategoryModalOpen,
    setIsCreateContactMessageCategoryModalOpen,
  ] = useState(false);
  const [
    isUpdateContactMessageCategoryModalOpen,
    setIsUpdateContactMessageCategoryModalOpen,
  ] = useState(false);

  const [
    isInspectContactMessageCategoryModalOpen,
    setIsInspectContactMessageCategoryModalOpen,
  ] = useState(false);

  const [
    isInspectContactMessageModalOpen,
    setIsInspectContactMessageModalOpen,
  ] = useState(false);

  const [selectedContactMessageCategory, setSelectedContactMessageCategory] =
    useState<ContactCategoryViewModel>();

  const [selectedContactMessage, setSelectedContactMessage] =
    useState<ContactMessage>();
  // Queries
  const messagesQuery =
    apiManager.useGetApiManagerGetListOfContactMessagesQuery();
  const messageCategoryQuery =
    apiManager.useGetApiManagerGetContactCategoryListQuery();
  const [deleteContactMessageCategory] =
    apiManager.useDeleteApiManagerDeleteContactCategoryMutation();
  const [deleteContactMessage] =
    apiManager.useDeleteApiManagerDeleteMessageMutation();

  const [setAsReadedMessage] =
    apiManager.usePostApiManagerUpdateMessageStatusMutation();
  // Mutations
  const messagesList = messagesQuery.data?.data ?? [];
  const messageCategories = messageCategoryQuery.data?.data ?? [];

  // Handlers
  const handleCreateContactMessageCategoryModalOpen = () => {
    setIsCreateContactMessageCategoryModalOpen(true);
  };
  const handleUpdateContactMessageCategoryModalOpen =
    (data: ContactCategoryViewModel) => () => {
      setIsUpdateContactMessageCategoryModalOpen(true);
      setSelectedContactMessageCategory(data);
    };

  const handleInspectContactMessageCategoryModalOpen =
    (data: ContactCategoryViewModel) => () => {
      setIsInspectContactMessageCategoryModalOpen(true);
      setSelectedContactMessageCategory(data);
    };
  const handleDeleteContactMessageCategory =
    (data: ContactCategoryViewModel) => () => {
      deleteContactMessageCategory({
        deleteEntityRequestlModel: {
          id: data.id,
          hardDelete: true,
        },
      })
        .unwrap()
        .then((res) => {
          if (res.statusCode == 200) {
            toast.success("İletişim kategorisi başarıyla silindi");
          }
        });
    };

  const handleDeleteContactMessage = (data: ContactMessage) => () => {
    deleteContactMessage({
      deleteEntityRequestlModel: {
        id: data.id,
        hardDelete: true,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          toast.success("İletişim mesajı başarıyla silindi");
        }
      })
      .catch(() => {
        toast.error("İletişim mesajı silinirken bir hata oluştu");
      });
  };

  const handleInspectContactMessage = (data: ContactMessage) => () => {
    setIsInspectContactMessageModalOpen(true);
    setSelectedContactMessage(data);
    setAsReadedMessage({
      updateContactMessageRequestModel: {
        messageId: data.id,
        isRead: true,
        isImportant: data.isImportant,
      },
    });
  };

  return (
    <div className="w-full min-h-screen">
      <Breadcrum />
      {isCreateContactMessageCategoryModalOpen && (
        <CreateContactMessageCategoryModal
          isOpen={isCreateContactMessageCategoryModalOpen}
          onClose={() => setIsCreateContactMessageCategoryModalOpen(false)}
        />
      )}

      {isUpdateContactMessageCategoryModalOpen && (
        <UpdateContactMessageCategoryModal
          isOpen={isUpdateContactMessageCategoryModalOpen}
          onClose={() => {
            setIsUpdateContactMessageCategoryModalOpen(false);
            setSelectedContactMessageCategory(undefined);
          }}
          selectedContactMessageCategory={selectedContactMessageCategory ?? {}}
        />
      )}
      {isInspectContactMessageCategoryModalOpen && (
        <InspectContactMessageCategoryModal
          isOpen={isInspectContactMessageCategoryModalOpen}
          onClose={() => setIsInspectContactMessageCategoryModalOpen(false)}
          selectedContactMessageCategory={selectedContactMessageCategory ?? {}}
        />
      )}

      {selectedContactMessage && isInspectContactMessageModalOpen && (
        <InspectContactMessageModal
          isOpen={isInspectContactMessageModalOpen}
          onClose={() => setIsInspectContactMessageModalOpen(false)}
          selectedContactMessage={selectedContactMessage}
        />
      )}
      <div className="flex flex-col gap-4 p-4">
        <SimpleTable
          title="İletişim Kategorileri"
          toolbarActions={
            <div className="flex h-full items-center gap-2">
              <Button
                onClick={handleCreateContactMessageCategoryModalOpen}
                title="Yeni Kategori Oluştur"
                size="sm"
              />
            </div>
          }
          columns={[
            {
              header: "No",
              cell: (cell) => cell.row.index + 1,
            },
            {
              header: "Kategori",
              accessorFn: (cell) => cell.title,
            },
            {
              header: "Açıklama",
              accessorFn: (cell) => cell.description,
            },
            {
              header: "Actions",
              cell: (cell) => (
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleInspectContactMessageCategoryModalOpen(
                      cell.row.original
                    )}
                    title="incele"
                    varient="amber"
                    size="sm"
                  />
                  <Button
                    onClick={handleUpdateContactMessageCategoryModalOpen(
                      cell.row.original
                    )}
                    title="Düzenle"
                    varient="info"
                    size="sm"
                  />

                  <Button
                    onClick={handleDeleteContactMessageCategory(
                      cell.row.original
                    )}
                    title="Sil"
                    varient="danger"
                    size="sm"
                  />
                </div>
              ),
            },
          ]}
          data={messageCategories}
        />
        <SimpleTable
          title="Mesajlar"
          columns={[
            {
              header: "No",
              cell: (cell) => cell.row.index + 1,
            },
            {
              header: "Durum",
              cell: (cell) => (
                <div className="flex items-center gap-4 justify- w-full pl-2">
                  {cell.row.original.isImportant == true ? (
                    <IoFlagSharp
                      className={
                        "text-red-500 dark:text-amber-300 transition-colors duration-300 text-xl"
                      }
                    />
                  ) : (
                    ""
                  )}
                  {cell.row.original.isReaded == true ? (
                    ""
                  ) : (
                    <FaEnvelope
                      className={
                        "text-blue-800 dark:text-gray-200 transition-colors duration-3000 text-xl"
                      }
                    />
                  )}
                </div>
              ),
            },
            {
              header: "Kategori",
              accessorFn: (cell) => cell.contactCategory?.title,
            },
            {
              header: "Gönderen Email",
              accessorFn: (cell) => cell.contactEmail,
            },
            {
              header: "Gönderen Telefon",
              accessorFn: (cell) => cell.contactPhone,
            },
            {
              header: "Tarih",
              accessorFn: (cell) => cell.created_At,
            },
            {
              header: "Actions",
              cell: (cell) => (
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleInspectContactMessage(cell.row.original)}
                    title="İncele"
                    varient="amber"
                    size="sm"
                  />

                  <Button
                    onClick={handleDeleteContactMessage(cell.row.original)}
                    title="Sil"
                    varient="danger"
                    size="sm"
                  />
                </div>
              ),
            },
          ]}
          data={messagesList}
        />
      </div>
    </div>
  );
}
