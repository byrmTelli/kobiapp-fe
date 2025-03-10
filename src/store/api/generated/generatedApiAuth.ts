import { kobiApi as api } from "../kobiApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
export type PostApiAuthLoginApiResponse =
  /** status 200 OK */ IApiDataResponseOfUserLoginViewModel;
export type PostApiAuthLoginApiArg = {
  userLoginRequestModel: UserLoginRequestModel;
};
export type UserLoginViewModel = {
  id?: number;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  phoneNumber?: string;
  accessToken?: string;
} | null;
export type IApiDataResponseOfUserLoginViewModel = {
  data?: UserLoginViewModel;
  success?: boolean;
  statusCode?: number;
  message?: string | null;
};
export type UserLoginRequestModel = {
  email?: string;
  password?: string;
};
