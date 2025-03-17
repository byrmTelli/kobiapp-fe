import { generatedHome } from "../generated/generatedApiHome";

export const apiHome = generatedHome.enhanceEndpoints({
  addTagTypes: ["GetMinistryListData", "GetMinistryCategoryListData"],
  endpoints: {
    getApiHomeGetMinistryListData: {
      providesTags: ["GetMinistryListData"],
    },
    getApiHomeGetMinistryCategoryListData: {
      providesTags: ["GetMinistryCategoryListData"],
    },
  },
});
