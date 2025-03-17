import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoCloudUploadOutline } from "react-icons/io5";
import { BsFiletypePdf } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { extentedMinistryApi } from "../../../../store/api/extended/extendedMinistryApi";
import {
  UploadImageFormDefaults,
  UploadImageFormModel,
  UploadImageFormModelScheme,
  UploadImageModalProps,
} from "./types";
import { useParams } from "react-router-dom";
import { apiMinistry } from "../../../../store/api/enhanced/enhancedApiMinistry";
import CustomDialog from "../../../../components/Dialog/CustomDialog";
import useSetSafeTimeout from "use-set-safe-timeout";

export default function UploadImageModal({
  onClose,
  isOpen,
}: UploadImageModalProps) {
  // States
  const setSafeTimeout = useSetSafeTimeout();
  const params = useParams();
  const id = params.id ?? "0";
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  // Queries
  const getMinistryByIdQuery =
    apiMinistry.useGetApiMinistryGetMinistryByIdQuery({ id: Number(id) });
  const [uploadMinistryImage] =
    extentedMinistryApi.useUploadImageToMinistryMutation();

  // Mutations
  const ministry = getMinistryByIdQuery.data?.data ?? {};
  // Forms
  const form = useForm<UploadImageFormModel>({
    defaultValues: UploadImageFormDefaults,
    resolver: yupResolver(UploadImageFormModelScheme),
  });

  // Handlers
  const handleSubmitButtonClick = form.handleSubmit(() => {
    uploadMinistryImage({ MinistryId: id, images: selectedFiles })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          toast.success("Başarılı.");
          setSafeTimeout(() => {
            setSelectedFiles([]);
            onClose();
          }, 1000);
        }
      })
      .catch();
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  useEffect(() => {
    form.setValue("images", selectedFiles);
  }, [selectedFiles, form.setValue]);

  const removeFile = (index: number) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((_, i) => i !== index);
      return updatedFiles;
    });
  };
  return (
    <CustomDialog
      title={"Hizmet İçin Reism Ekle"}
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleSubmitButtonClick}
    >
      <div className="w-full md:col-span-3 md:col-start-2 gap-4 p-6 rounded-lg">
        <form
          onSubmit={handleSubmitButtonClick}
          className="flex flex-col gap-2"
        >
          <div className="p-3 w-full">
            {selectedFiles.length > 0 ? (
              <div className="flex flex-wrap gap-4 mt-4">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="text-gray-600 flex flex-col gap-1 items-center space-x-2"
                  >
                    {file.type.startsWith("image/") ? (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : file.type === "application/pdf" ? (
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded">
                        <BsFiletypePdf className="text-2xl text-red-500" />
                      </div>
                    ) : (
                      <span className="text-gray-600 text-xs">{file.name}</span>
                    )}
                    <span className="text-xs text-gray-600">
                      {file.name.slice(0, 15)}
                    </span>
                    <button
                      className="text-red-500 text-xs mt-2"
                      onClick={() => removeFile(index)}
                    >
                      Kaldır
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-2 mt-4 w-full flex justify-center items-center">
                <h1 className="text-sm italic text-gray-600 dark:text-gray-200">
                  Henüz dosya yüklenmedi.
                </h1>
              </div>
            )}
          </div>

          <div className="w-full">
            <Controller
              name="images"
              control={form.control}
              render={({ field }) => (
                <>
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col py-10 items-center gap-4 justify-center px-4 text-gray-700 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-700 dark:text-gray-200 font-semibold rounded-lg"
                  >
                    <IoCloudUploadOutline className="text-5xl text-gray-400" />
                    Dosya Seç
                  </label>
                  <Input
                    id="file-upload"
                    type="file"
                    multiple
                    onChange={(event) => {
                      handleFileChange(event);
                      field.onChange(event.target.files);
                    }}
                    onBlur={field.onBlur}
                    className="hidden"
                    accept=".jpg,.png,.jpeg"
                  />
                </>
              )}
            />
          </div>
        </form>
      </div>
    </CustomDialog>
  );
}
