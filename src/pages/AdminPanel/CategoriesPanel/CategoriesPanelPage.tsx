import { useState } from "react";
import Breadcrum from "../../../components/Breadcrum/Breadcrum";
import Button from "../../../components/Buttons/Button/Button";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import AddNewMinistryModal from "./AddNewMinistryCategoryModal/AddNewMinistryCategoryModal";
import InspectMinistryModal from "./InspectMinistryCategoryModal/InspectMinistryCategoryModal";
import { MinistryViewModel } from "../../../store/api/generated/generatedApiMinistry";
import UpdateMinistryModal from "./UpdateMinistryCategoryModal/UpdateMinistryCategoryModal";
import { apiMinistryCategory } from "../../../store/api/enhanced/enhancedApiMinistryCategory";

export default function CategoriesPanelPage() {
  // States
  const [isAddMinistryCategoryModalOpen, setIsAddMinistryCategoryModalOpen] =
    useState<boolean>(false);
  const [
    isInspectMinistryCategoryModalOpen,
    setIsInspectMinistryCategoryModalOpen,
  ] = useState<boolean>(false);
  const [
    isUpdateMinistryCateogyModalOpen,
    setIsUpdateMinistryCategoryModalOpen,
  ] = useState<boolean>(false);
  const [selectedMinistryCategory, setSelectedMinistryCategory] =
    useState<MinistryViewModel>();
  // Queries
  const categoriesQuery =
    apiMinistryCategory.useGetApiMinistryCategoryGetAllCategoriesQuery();
  // Mutations
  const allCategories = categoriesQuery.data?.data ?? [];
  // Handlers
  const handleAddNewMinistryCategoryButtonClick = () => {
    setIsAddMinistryCategoryModalOpen(true);
  };
  return (
    <div className="w-full min-h-screen">
      <Breadcrum />
      {isAddMinistryCategoryModalOpen && (
        <AddNewMinistryModal
          isOpen={isAddMinistryCategoryModalOpen}
          onClose={() => setIsAddMinistryCategoryModalOpen(false)}
        />
      )}
      {isInspectMinistryCategoryModalOpen && selectedMinistryCategory && (
        <InspectMinistryModal
          isOpen={isInspectMinistryCategoryModalOpen}
          onClose={() => setIsInspectMinistryCategoryModalOpen(false)}
          selectedMinistryCategory={selectedMinistryCategory}
        />
      )}
      {isUpdateMinistryCateogyModalOpen && selectedMinistryCategory && (
        <UpdateMinistryModal
          isOpen={isUpdateMinistryCateogyModalOpen}
          onClose={() => setIsUpdateMinistryCategoryModalOpen(false)}
          selectedMinistryCategory={selectedMinistryCategory}
        />
      )}
      <div className="fade-in col-span-4 border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors duration-500 rounded-lg p-8 shadow-lg min-h-96">
        <SimpleTable
          title="Kategoriler"
          toolbarActions={
            <Button
              onClick={handleAddNewMinistryCategoryButtonClick}
              title="Yeni Kategori Ekle"
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
              accessorFn: (cell) => cell.name,
            },

            {
              header: "Actions",
              cell: (cell) => (
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => {
                      setSelectedMinistryCategory(cell.row.original);
                      setIsInspectMinistryCategoryModalOpen(true);
                    }}
                    title="İncele"
                    varient="amber"
                    size="sm"
                  />
                  <Button
                    onClick={() => {
                      setSelectedMinistryCategory(cell.row.original);
                      setIsUpdateMinistryCategoryModalOpen(true);
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
          data={allCategories}
        />
      </div>
    </div>
  );
}
