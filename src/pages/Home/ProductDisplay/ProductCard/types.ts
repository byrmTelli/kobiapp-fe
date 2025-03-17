import { MinistryViewModelForHomePage } from "../../../../store/api/generated/generatedApiHome";

interface ProductCardComponentProps {
  ministry: MinistryViewModelForHomePage | null;
}

export type ProductCardProps = ProductCardComponentProps;

// Form Tipleri

interface FilterMinistryByCategoryFormModel {
  categoryId: number;
}

import * as yup from "yup";

export const FilterMinistryByCategoryFormSchema = yup.object().shape({
  categoryId: yup.number().required("Kategori seçilmedi"),
});

export type { FilterMinistryByCategoryFormModel };
