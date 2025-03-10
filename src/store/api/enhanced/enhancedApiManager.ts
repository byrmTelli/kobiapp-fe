import { generatedManager } from "../generated/generatedApiManager";

export const apiManager = generatedManager.enhanceEndpoints({
  addTagTypes: ["RegisterUser", "GetAllUsers"],
  endpoints: {
    getApiManagerGetUsers: {
      providesTags: ["GetAllUsers"],
    },
    postApiManagerRegister: {
      invalidatesTags: ["GetAllUsers"],
    },
    postApiManagerAssignRoleToUser: {
      invalidatesTags: ["GetAllUsers"],
    },
  },
});
