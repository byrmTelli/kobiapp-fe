import { kobiApi as api } from "../kobiApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postApiAuthRefreshUsersProfile: build.mutation<
      PostApiAuthRefreshUsersProfileApiResponse,
      PostApiAuthRefreshUsersProfileApiArg
    >({
      query: () => ({ url: `/api/Auth/RefreshUsersProfile`, method: "POST" }),
    }),
    postApiAuthLogin: build.mutation<
      PostApiAuthLoginApiResponse,
      PostApiAuthLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Auth/Login`,
        method: "POST",
        body: queryArg.userLoginRequestModel,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedAuth };
export type PostApiAuthRefreshUsersProfileApiResponse =
  /** status 200 OK */ UserLoginViewModelIApiDataResponse;
export type PostApiAuthRefreshUsersProfileApiArg = void;
export type PostApiAuthLoginApiResponse =
  /** status 200 OK */ UserLoginViewModelIApiDataResponse;
export type PostApiAuthLoginApiArg = {
  userLoginRequestModel: UserLoginRequestModel;
};
export type UserLoginViewModel = {
  id?: number;
  username?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  accessToken?: string | null;
};
export type UserLoginViewModelIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: UserLoginViewModel;
};
export type UserLoginRequestModel = {
  email?: string | null;
  password?: string | null;
};
