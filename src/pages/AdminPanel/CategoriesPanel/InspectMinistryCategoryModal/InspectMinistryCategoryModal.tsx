import CustomDialog from "../../../../components/Dialog/CustomDialog";
import { InspectMinistryCategoryModalProps } from "./types";

export default function InspectMinistryCategoryModal({
  isOpen,
  onClose,
  selectedMinistryCategory,
}: InspectMinistryCategoryModalProps) {
  // States
  // Queries
  //Mutations
  // Handlers

  return (
    <CustomDialog
      title={"Hizmet Kategorisi Detay Bilgileri"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col gap-4 p-4">
        <p className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300 border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-4">
          <span className="font-bold">Hizmet Kategorisi Adı:</span>{" "}
          {selectedMinistryCategory.name}
        </p>
      </div>
    </CustomDialog>
  );
}
