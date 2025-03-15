import { generatedManager } from "../generated/generatedApiManager";

export const apiManager = generatedManager.enhanceEndpoints({
  addTagTypes: [
    "RegisterUser",
    "GetAllUsers",
    "GetContactMessageCategoryList",
    "GetContactMessageList",
  ],
  endpoints: {
    getApiManagerGetUsers: {
      providesTags: ["GetAllUsers"],
    },
    getApiManagerGetListOfContactMessages: {
      providesTags: ["GetContactMessageList"],
    },
    postApiManagerRegister: {
      invalidatesTags: ["GetAllUsers"],
    },
    postApiManagerAssignRoleToUser: {
      invalidatesTags: ["GetAllUsers"],
    },
    getApiManagerGetContactCategoryList: {
      providesTags: ["GetContactMessageCategoryList"],
    },
    postApiManagerCreateNewContactCategory: {
      invalidatesTags: ["GetContactMessageCategoryList"],
    },
    postApiManagerUpdateContactCategory: {
      invalidatesTags: ["GetContactMessageCategoryList"],
    },
    deleteApiManagerDeleteContactCategory: {
      invalidatesTags: ["GetContactMessageCategoryList"],
    },
    deleteApiManagerDeleteMessage: {
      invalidatesTags: ["GetContactMessageList"],
    },
    postApiManagerUpdateMessageStatus: {
      invalidatesTags: ["GetContactMessageList"],
    },
  },
});
