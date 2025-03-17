import { useParams } from "react-router-dom";
import Breadcrum from "../../../../components/Breadcrum/Breadcrum";
import { apiMinistry } from "../../../../store/api/enhanced/enhancedApiMinistry";
import { useState } from "react";
import UploadImageModal from "../UploadImageModal/UploadImageModal";
import Button from "../../../../components/Buttons/Button/Button";
import placeholderImage from "../../../../assets/placeholder.jpg";
import MinistryImageGallery from "./MinistryDetailImageGallery/MinistryDetailImageGallery";
import { MinistryViewModel } from "../../../../store/api/generated/generatedApiMinistry";

export default function MinistryDetailPage() {
  // States
  const params = useParams();
  const id = params.id;

  const [isUploadImageModalOpen, setIsUploadImageModalOpen] =
    useState<boolean>(false);

  // Queries
  const getMinistryByIdQuery =
    apiMinistry.useGetApiMinistryGetMinistryByIdQuery({ id: Number(id) });

  // Mutations
  const ministry = getMinistryByIdQuery.data?.data;

  // States
  const handleUploadImageModalButtonClick = () => {
    setIsUploadImageModalOpen(true);
  };

  return (
    <div className="w-full min-h-screen">
      <Breadcrum />
      {isUploadImageModalOpen && (
        <UploadImageModal
          isOpen={isUploadImageModalOpen}
          onClose={() => setIsUploadImageModalOpen(false)}
          selectedMinistry={ministry ?? {}}
        />
      )}
      <div className="px-8 py-10 grid grid-cols-2 gap-4">
        <div>
          <div className="w-full flex justify-between items-start p-4">
            <p className="text-2xl font-semibold">Resimler</p>
            <Button
              title="Resim Ekle"
              onClick={handleUploadImageModalButtonClick}
            />
          </div>

          <MinistryImageGallery
            ministry={ministry ?? ({} as MinistryViewModel)}
            placeHolderImage={placeholderImage}
          />
        </div>

        <div className="min-h-96 w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300 py-4">
              {ministry?.title}
            </h1>
            <div className="">
              <Button title="Düzenle" varient="amber" />
            </div>
          </div>
          <div className="text-gray-500 dark:text-gray-200 transition-colors duration-300 font-semibold">
            {ministry?.category?.name}
          </div>
          <div className="text-gray-500 dark:text-gray-200 transition-colors duration-300 text-xs">
            {ministry?.created_At}
          </div>
          <div className="">{ministry?.description}</div>
        </div>
      </div>
    </div>
  );
}
