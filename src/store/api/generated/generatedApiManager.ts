import { kobiApi as api } from "../kobiApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    deleteApiManagerDeleteMessage: build.mutation<
      DeleteApiManagerDeleteMessageApiResponse,
      DeleteApiManagerDeleteMessageApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Manager/DeleteMessage`,
        method: "DELETE",
        body: queryArg.deleteEntityRequestlModel,
      }),
    }),
    postApiManagerUpdateMessageStatus: build.mutation<
      PostApiManagerUpdateMessageStatusApiResponse,
      PostApiManagerUpdateMessageStatusApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Manager/UpdateMessageStatus`,
        method: "POST",
        body: queryArg.updateContactMessageRequestModel,
      }),
    }),
    postApiManagerCreateNewContactMessage: build.mutation<
      PostApiManagerCreateNewContactMessageApiResponse,
      PostApiManagerCreateNewContactMessageApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Manager/CreateNewContactMessage`,
        method: "POST",
        body: queryArg.createNewContactMessageRequestModel,
      }),
    }),
    getApiManagerGetListOfContactMessages: build.query<
      GetApiManagerGetListOfContactMessagesApiResponse,
      GetApiManagerGetListOfContactMessagesApiArg
    >({
      query: () => ({ url: `/api/Manager/GetListOfContactMessages` }),
    }),
    getApiManagerGetContactMessageById: build.query<
      GetApiManagerGetContactMessageByIdApiResponse,
      GetApiManagerGetContactMessageByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Manager/GetContactMessageById`,
        params: {
          id: queryArg.id,
        },
      }),
    }),
    getApiManagerGetContactCategoryList: build.query<
      GetApiManagerGetContactCategoryListApiResponse,
      GetApiManagerGetContactCategoryListApiArg
    >({
      query: () => ({ url: `/api/Manager/GetContactCategoryList` }),
    }),
    postApiManagerCreateNewContactCategory: build.mutation<
      PostApiManagerCreateNewContactCategoryApiResponse,
      PostApiManagerCreateNewContactCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Manager/CreateNewContactCategory`,
        method: "POST",
        body: queryArg.createNewContactCategoryRequestModel,
      }),
    }),
    postApiManagerUpdateContactCategory: build.mutation<
      PostApiManagerUpdateContactCategoryApiResponse,
      PostApiManagerUpdateContactCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Manager/UpdateContactCategory`,
        method: "POST",
        body: queryArg.updateContactCategoryRequestModel,
      }),
    }),
    deleteApiManagerDeleteContactCategory: build.mutation<
      DeleteApiManagerDeleteContactCategoryApiResponse,
      DeleteApiManagerDeleteContactCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Manager/DeleteContactCategory`,
        method: "DELETE",
        body: queryArg.deleteEntityRequestlModel,
      }),
    }),
    getApiManagerGetContactCategoryById: build.query<
      GetApiManagerGetContactCategoryByIdApiResponse,
      GetApiManagerGetContactCategoryByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Manager/GetContactCategoryById`,
        params: {
          id: queryArg.id,
        },
      }),
    }),
    postApiManagerRegister: build.mutation<
      PostApiManagerRegisterApiResponse,
      PostApiManagerRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Manager/Register`,
        method: "POST",
        body: queryArg.createNewUserRequestModel,
      }),
    }),
    postApiManagerResetPassword: build.mutation<
      PostApiManagerResetPasswordApiResponse,
      PostApiManagerResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Manager/ResetPassword`,
        method: "POST",
        body: queryArg.passwordChangeRequestModel,
      }),
    }),
    postApiManagerUpdateUserProfile: build.mutation<
      PostApiManagerUpdateUserProfileApiResponse,
      PostApiManagerUpdateUserProfileApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Manager/UpdateUserProfile`,
        method: "POST",
        body: queryArg.updateUserProfileRequestModel,
      }),
    }),
    getApiManagerGetUserProfile: build.query<
      GetApiManagerGetUserProfileApiResponse,
      GetApiManagerGetUserProfileApiArg
    >({
      query: () => ({ url: `/api/Manager/GetUserProfile` }),
    }),
    getApiManagerGetUsers: build.query<
      GetApiManagerGetUsersApiResponse,
      GetApiManagerGetUsersApiArg
    >({
      query: () => ({ url: `/api/Manager/GetUsers` }),
    }),
    postApiManagerAssignRoleToUser: build.mutation<
      PostApiManagerAssignRoleToUserApiResponse,
      PostApiManagerAssignRoleToUserApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Manager/AssignRoleToUser`,
        method: "POST",
        body: queryArg.assignRoleToUserRequestModel,
      }),
    }),
    getApiManagerGetAllRoles: build.query<
      GetApiManagerGetAllRolesApiResponse,
      GetApiManagerGetAllRolesApiArg
    >({
      query: () => ({ url: `/api/Manager/GetAllRoles` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedManager };
export type DeleteApiManagerDeleteMessageApiResponse =
  /** status 200 OK */ IApiResponse;
export type DeleteApiManagerDeleteMessageApiArg = {
  deleteEntityRequestlModel: DeleteEntityRequestlModel;
};
export type PostApiManagerUpdateMessageStatusApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiManagerUpdateMessageStatusApiArg = {
  updateContactMessageRequestModel: UpdateContactMessageRequestModel;
};
export type PostApiManagerCreateNewContactMessageApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiManagerCreateNewContactMessageApiArg = {
  createNewContactMessageRequestModel: CreateNewContactMessageRequestModel;
};
export type GetApiManagerGetListOfContactMessagesApiResponse =
  /** status 200 OK */ ContactMessageViewModelListIApiDataResponse;
export type GetApiManagerGetListOfContactMessagesApiArg = void;
export type GetApiManagerGetContactMessageByIdApiResponse =
  /** status 200 OK */ ContactMessageIApiDataResponse;
export type GetApiManagerGetContactMessageByIdApiArg = {
  id?: number;
};
export type GetApiManagerGetContactCategoryListApiResponse =
  /** status 200 OK */ ContactCategoryViewModelListIApiDataResponse;
export type GetApiManagerGetContactCategoryListApiArg = void;
export type PostApiManagerCreateNewContactCategoryApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiManagerCreateNewContactCategoryApiArg = {
  createNewContactCategoryRequestModel: CreateNewContactCategoryRequestModel;
};
export type PostApiManagerUpdateContactCategoryApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiManagerUpdateContactCategoryApiArg = {
  updateContactCategoryRequestModel: UpdateContactCategoryRequestModel;
};
export type DeleteApiManagerDeleteContactCategoryApiResponse =
  /** status 200 OK */ IApiResponse;
export type DeleteApiManagerDeleteContactCategoryApiArg = {
  deleteEntityRequestlModel: DeleteEntityRequestlModel;
};
export type GetApiManagerGetContactCategoryByIdApiResponse =
  /** status 200 OK */ ContactCategoryViewModelIApiDataResponse;
export type GetApiManagerGetContactCategoryByIdApiArg = {
  id?: number;
};
export type PostApiManagerRegisterApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiManagerRegisterApiArg = {
  createNewUserRequestModel: CreateNewUserRequestModel;
};
export type PostApiManagerResetPasswordApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiManagerResetPasswordApiArg = {
  passwordChangeRequestModel: PasswordChangeRequestModel;
};
export type PostApiManagerUpdateUserProfileApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiManagerUpdateUserProfileApiArg = {
  updateUserProfileRequestModel: UpdateUserProfileRequestModel;
};
export type GetApiManagerGetUserProfileApiResponse =
  /** status 200 OK */ UserProfileViewModelIApiDataResponse;
export type GetApiManagerGetUserProfileApiArg = void;
export type GetApiManagerGetUsersApiResponse =
  /** status 200 OK */ UserProfileForAdminPanelViewModelListIApiDataResponse;
export type GetApiManagerGetUsersApiArg = void;
export type PostApiManagerAssignRoleToUserApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiManagerAssignRoleToUserApiArg = {
  assignRoleToUserRequestModel: AssignRoleToUserRequestModel;
};
export type GetApiManagerGetAllRolesApiResponse =
  /** status 200 OK */ RoleViewModelListIApiDataResponse;
export type GetApiManagerGetAllRolesApiArg = void;
export type IApiResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
};
export type DeleteEntityRequestlModel = {
  id?: number;
  hardDelete?: boolean;
};
export type UpdateContactMessageRequestModel = {
  messageId?: number;
  isRead?: boolean;
  isImportant?: boolean;
};
export type CreateNewContactMessageRequestModel = {
  content?: string | null;
  contactPhone?: string | null;
  contactEmail?: string | null;
  categoryId?: number;
};
export type ContactCategoryViewModel = {
  id?: number;
  title?: string | null;
  description?: string | null;
};
export type ContactMessageViewModel = {
  id?: number;
  content?: string | null;
  contactPhone?: string | null;
  contactEmail?: string | null;
  contactCategory?: ContactCategoryViewModel;
  created_At?: string;
  isImportant?: boolean;
  isReaded?: boolean;
};
export type ContactMessageViewModelListIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: ContactMessageViewModel[] | null;
};
export type ContactCategory = {
  id?: number;
  created_At?: string;
  deleted_At?: string | null;
  isDeleted?: boolean;
  title?: string | null;
  description?: string | null;
  contactMessages?: ContactMessage[] | null;
};
export type ContactMessage = {
  id?: number;
  created_At?: string;
  deleted_At?: string | null;
  isDeleted?: boolean;
  content?: string | null;
  contactPhone?: string | null;
  contactEmail?: string | null;
  categoryId?: number;
  isReaded?: boolean;
  isImportant?: boolean;
  contactCategory?: ContactCategory;
};
export type ContactMessageIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: ContactMessage;
};
export type ContactCategoryViewModelListIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: ContactCategoryViewModel[] | null;
};
export type CreateNewContactCategoryRequestModel = {
  title?: string | null;
  description?: string | null;
};
export type UpdateContactCategoryRequestModel = {
  id?: number;
  title?: string | null;
  description?: string | null;
};
export type ContactCategoryViewModelIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: ContactCategoryViewModel;
};
export type CreateNewUserRequestModel = {
  username?: string | null;
  email?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  phoneNumber?: string | null;
  password?: string | null;
  passwordConfirmation?: string | null;
};
export type PasswordChangeRequestModel = {
  oldPassword: string;
  password: string;
  passwordConfirmation: string;
};
export type UpdateUserProfileRequestModel = {
  id?: number;
  firstname?: string | null;
  lastname?: string | null;
  phoneNumber?: string | null;
};
export type UserProfileViewModel = {
  id?: number;
  username?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
};
export type UserProfileViewModelIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: UserProfileViewModel;
};
export type RoleViewModel = {
  id?: number;
  name?: string | null;
};
export type UserProfileForAdminPanelViewModel = {
  id?: number;
  username?: string | null;
  email?: string | null;
  fullname?: string | null;
  phoneNumber?: string | null;
  role?: RoleViewModel;
  created_At?: string;
};
export type UserProfileForAdminPanelViewModelListIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: UserProfileForAdminPanelViewModel[] | null;
};
export type AssignRoleToUserRequestModel = {
  userId?: number;
  roleId?: number;
};
export type RoleViewModelListIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: RoleViewModel[] | null;
};
