import { useState } from "react";
import Breadcrum from "../../../components/Breadcrum/Breadcrum";
import Button from "../../../components/Buttons/Button/Button";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { apiMinistry } from "../../../store/api/enhanced/enhancedApiMinistry";
import AddNewMinistryModal from "./AddNewMinistryModal/AddNewMinistryModal";
import InspectMinistryModal from "./InspectMinistryModal/InspectMinistryModal";
import { MinistryViewModel } from "../../../store/api/generated/generatedApiMinistry";
import UpdateMinistryModal from "./UpdateMinistryModal/UpdateMinistryModal";

export default function MinistriesPanelPage() {
  // States
  const [isAddMinistryModalOpen, setIsAddMinistryModalOpen] =
    useState<boolean>(false);
  const [isInspectMinistryModalOpen, setIsInspectMinistryModalOpen] =
    useState<boolean>(false);
  const [isUpdateMinistryModalOpen, setIsUpdateMinistryModalOpen] =
    useState<boolean>(false);
  const [selectedMinistry, setSelectedMinistry] = useState<MinistryViewModel>();
  // Queries
  const ministriesQuery = apiMinistry.useGetApiMinistryGetAllMinistriesQuery();
  // Mutations
  const ministryList = ministriesQuery.data?.data ?? [];
  // Handlers
  const handleAddNewMinistryButtonClick = () => {
    setIsAddMinistryModalOpen(true);
  };
  return (
    <div className="w-full min-h-screen">
      <Breadcrum />
      {isAddMinistryModalOpen && (
        <AddNewMinistryModal
          isOpen={isAddMinistryModalOpen}
          onClose={() => setIsAddMinistryModalOpen(false)}
        />
      )}
      {isInspectMinistryModalOpen && selectedMinistry && (
        <InspectMinistryModal
          isOpen={isInspectMinistryModalOpen}
          onClose={() => setIsInspectMinistryModalOpen(false)}
          selectedMinistry={selectedMinistry}
        />
      )}
      {isUpdateMinistryModalOpen && selectedMinistry && (
        <UpdateMinistryModal
          isOpen={isUpdateMinistryModalOpen}
          onClose={() => setIsUpdateMinistryModalOpen(false)}
          selectedMinistry={selectedMinistry}
        />
      )}
      <div className="fade-in col-span-4 border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors duration-500 rounded-lg p-8 shadow-lg min-h-96">
        <SimpleTable
          title="Hizmetler"
          toolbarActions={
            <Button
              onClick={handleAddNewMinistryButtonClick}
              title="Yeni Hizmet Ekle"
              size="sm"
            />
          }
          columns={[
            {
              header: "No",
              cell: (cell) => cell.row.index + 1,
            },
            {
              header: "Adı",
              accessorFn: (cell) => cell.title,
            },
            {
              header: "Açıklama",
              accessorFn: (cell) => cell.description,
            },
            {
              header: "Kategori",
              accessorFn: (cell) => cell.category?.name,
            },
            {
              header: "Oluşturulma Tarihi",
              accessorFn: (cell) => cell.created_At,
            },
            {
              header: "Actions",
              cell: (cell) => (
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => {
                      setSelectedMinistry(cell.row.original);
                      setIsInspectMinistryModalOpen(true);
                    }}
                    title="İncele"
                    varient="amber"
                    size="sm"
                  />
                  <Button
                    onClick={() => {
                      setSelectedMinistry(cell.row.original);
                      setIsUpdateMinistryModalOpen(true);
                    }}
                    title="Düzenle"
                    varient="info"
                    size="sm"
                  />
                  <Button title="Sil" varient="danger" size="sm" />
                </div>
              ),
            },
          ]}
          data={ministryList}
        />
      </div>
    </div>
  );
}
