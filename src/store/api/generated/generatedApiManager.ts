import { kobiApi as api } from "../kobiApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
        params: {
          userId: queryArg.userId,
          roleId: queryArg.roleId,
        },
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
  /** status 200 OK */ IApiDataResponseOfUserProfileViewModel;
export type GetApiManagerGetUserProfileApiArg = void;
export type GetApiManagerGetUsersApiResponse =
  /** status 200 OK */ IApiDataResponseOfListOfUserProfileForAdminPanelViewModel;
export type GetApiManagerGetUsersApiArg = void;
export type PostApiManagerAssignRoleToUserApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiManagerAssignRoleToUserApiArg = {
  userId?: number;
  roleId?: number;
};
export type GetApiManagerGetAllRolesApiResponse =
  /** status 200 OK */ IApiDataResponseOfListOfRoleViewModel;
export type GetApiManagerGetAllRolesApiArg = void;
export type IApiResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
};
export type CreateNewUserRequestModel = {
  username?: string;
  email?: string;
  firstname?: string;
  lastname?: string;
  phoneNumber?: string;
  password?: string;
  passwordConfirmation?: string;
};
export type PasswordChangeRequestModel = {
  oldPassword: string;
  password: string;
  passwordConfirmation: string;
};
export type UpdateUserProfileRequestModel = {
  id?: number;
  firstname?: string;
  lastname?: string;
  phoneNumber?: string;
};
export type UserProfileViewModel = {
  id?: number;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  phoneNumber?: string;
} | null;
export type IApiDataResponseOfUserProfileViewModel = {
  data?: UserProfileViewModel;
  success?: boolean;
  statusCode?: number;
  message?: string | null;
};
export type RoleViewModel = {
  id?: number;
  name?: string;
};
export type UserProfileForAdminPanelViewModel = {
  id?: number;
  username?: string;
  email?: string;
  fullname?: string;
  phoneNumber?: string;
  role?: RoleViewModel;
  created_At?: string;
};
export type IApiDataResponseOfListOfUserProfileForAdminPanelViewModel = {
  data?: UserProfileForAdminPanelViewModel[] | null;
  success?: boolean;
  statusCode?: number;
  message?: string | null;
};
export type IApiDataResponseOfListOfRoleViewModel = {
  data?: RoleViewModel[] | null;
  success?: boolean;
  statusCode?: number;
  message?: string | null;
};
