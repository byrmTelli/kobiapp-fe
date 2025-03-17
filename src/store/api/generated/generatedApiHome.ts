import { kobiApi as api } from "../kobiApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getApiHomeGetCompanyInformations: build.query<
      GetApiHomeGetCompanyInformationsApiResponse,
      GetApiHomeGetCompanyInformationsApiArg
    >({
      query: () => ({ url: `/api/Home/GetCompanyInformations` }),
    }),
    getApiHomeGetMinistryCategoryListData: build.query<
      GetApiHomeGetMinistryCategoryListDataApiResponse,
      GetApiHomeGetMinistryCategoryListDataApiArg
    >({
      query: () => ({ url: `/api/Home/GetMinistryCategoryListData` }),
    }),
    getApiHomeGetMinistryListData: build.query<
      GetApiHomeGetMinistryListDataApiResponse,
      GetApiHomeGetMinistryListDataApiArg
    >({
      query: () => ({ url: `/api/Home/GetMinistryListData` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedHome };
export type GetApiHomeGetCompanyInformationsApiResponse =
  /** status 200 OK */ CompanyInformationViewModelForHomePageIApiDataResponse;
export type GetApiHomeGetCompanyInformationsApiArg = void;
export type GetApiHomeGetMinistryCategoryListDataApiResponse =
  /** status 200 OK */ MinistryCategoryViewModelListIApiDataResponse;
export type GetApiHomeGetMinistryCategoryListDataApiArg = void;
export type GetApiHomeGetMinistryListDataApiResponse =
  /** status 200 OK */ MinistryViewModelForHomePageListIApiDataResponse;
export type GetApiHomeGetMinistryListDataApiArg = void;
export type CompanyInformationViewModelForHomePage = {
  name?: string | null;
  adress?: string | null;
  adressGateNumber?: number;
  district?: string | null;
  provience?: string | null;
  country?: string | null;
  email?: string | null;
  phone?: string | null;
};
export type CompanyInformationViewModelForHomePageIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: CompanyInformationViewModelForHomePage;
};
export type MinistryCategoryViewModel = {
  id?: number;
  name?: string | null;
};
export type MinistryCategoryViewModelListIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: MinistryCategoryViewModel[] | null;
};
export type MinistryImageViewModel = {
  id?: number;
  path?: string | null;
};
export type MinistryViewModelForHomePage = {
  id?: number;
  created_At?: string;
  title?: string | null;
  description?: string | null;
  coverImage?: MinistryImageViewModel;
  category?: MinistryCategoryViewModel;
};
export type MinistryViewModelForHomePageListIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: MinistryViewModelForHomePage[] | null;
};
