import { generatedMinistry } from "../generated/generatedApiMinistry";

export const apiMinistry = generatedMinistry.enhanceEndpoints({
  addTagTypes: ["GetAllMinistries", "GetMinistryById"],
  endpoints: {
    getApiMinistryGetAllMinistries: {
      providesTags: ["GetAllMinistries"],
    },
    getApiMinistryGetMinistryById: {
      providesTags: ["GetMinistryById"],
    },
    postApiMinistryCreateNewMinistry: {
      invalidatesTags: ["GetAllMinistries"],
    },
    postApiMinistryUpdateMinistry: {
      invalidatesTags: ["GetAllMinistries", "GetMinistryById"],
    },
  },
});
