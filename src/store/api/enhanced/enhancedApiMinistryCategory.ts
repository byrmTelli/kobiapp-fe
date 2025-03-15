import { generatedMinistryCategory } from "../generated/generatedApiMinistryCategory";

export const apiMinistryCategory = generatedMinistryCategory.enhanceEndpoints({
  addTagTypes: ["GetAllMinistryCategories"],
  endpoints: {
    getApiMinistryCategoryGetAllCategories: {
      providesTags: ["GetAllMinistryCategories"],
    },
    postApiMinistryCategoryCreateNewMinistryCategory: {
      invalidatesTags: ["GetAllMinistryCategories"],
    },
    postApiMinistryCategoryUpdateMinistryCategory: {
      invalidatesTags: ["GetAllMinistryCategories"],
    },
  },
});
