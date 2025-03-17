import * as yup from "yup";
import { MinistryViewModel } from "../../../../store/api/generated/generatedApiMinistry";

interface UploadImageModalProps {
  selectedMinistry: MinistryViewModel;
  isOpen: boolean;
  onClose: () => void;
}

export interface UploadImageFormModel {
  ministryId: number;
  images: File[];
}

export const UploadImageFormDefaults: UploadImageFormModel = {
  ministryId: 0,
  images: [],
};

export const UploadImageFormModelScheme = yup.object().shape({
  ministryId: yup.number().required("Lütfen giriş yapınız."),
  images: yup
    .array()
    .of(
      yup
        .mixed<File>()
        .required()
        .test(
          "fileType",
          "Only .jpg .jpeg .png uzantılı dosyalar yüklenebilir.",
          (file) => {
            return file && ["image/jpeg", "image/png"].includes(file.type);
          }
        )
    )
    .required("En az bir resim yüklemelisiniz"),
});

export type { UploadImageModalProps };
