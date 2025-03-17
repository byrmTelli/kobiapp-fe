import { kobiApi as api } from "../kobiApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getApiHomeGetMinistryCategoryListData: build.query<
      GetApiHomeGetMinistryCategoryListDataApiResponse,
      GetApiHomeGetMinistryCategoryListDataApiArg
    >({
      query: () => ({ url: `/api/Home/GetMinistryCategoryListData` }),
    }),
    getApiMinistryCategoryGetAllCategories: build.query<
      GetApiMinistryCategoryGetAllCategoriesApiResponse,
      GetApiMinistryCategoryGetAllCategoriesApiArg
    >({
      query: () => ({ url: `/api/MinistryCategory/GetAllCategories` }),
    }),
    postApiMinistryCategoryCreateNewMinistryCategory: build.mutation<
      PostApiMinistryCategoryCreateNewMinistryCategoryApiResponse,
      PostApiMinistryCategoryCreateNewMinistryCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/MinistryCategory/CreateNewMinistryCategory`,
        method: "POST",
        body: queryArg.createMinistryCategoryRequestModel,
      }),
    }),
    postApiMinistryCategoryUpdateMinistryCategory: build.mutation<
      PostApiMinistryCategoryUpdateMinistryCategoryApiResponse,
      PostApiMinistryCategoryUpdateMinistryCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/MinistryCategory/UpdateMinistryCategory`,
        method: "POST",
        body: queryArg.updateMinistryCategoryRequestModel,
      }),
    }),
    getApiMinistryCategoryGetMinistryCategoryById: build.query<
      GetApiMinistryCategoryGetMinistryCategoryByIdApiResponse,
      GetApiMinistryCategoryGetMinistryCategoryByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/MinistryCategory/GetMinistryCategoryById`,
        params: {
          id: queryArg.id,
        },
      }),
    }),
    deleteApiMinistryCategoryDeleteMinistryCategory: build.mutation<
      DeleteApiMinistryCategoryDeleteMinistryCategoryApiResponse,
      DeleteApiMinistryCategoryDeleteMinistryCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/MinistryCategory/DeleteMinistryCategory`,
        method: "DELETE",
        body: queryArg.deleteEntityRequestlModel,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedMinistryCategory };
export type GetApiHomeGetMinistryCategoryListDataApiResponse =
  /** status 200 OK */ MinistryCategoryViewModelListIApiDataResponse;
export type GetApiHomeGetMinistryCategoryListDataApiArg = void;
export type GetApiMinistryCategoryGetAllCategoriesApiResponse =
  /** status 200 OK */ MinistryCategoryViewModelListIApiDataResponse;
export type GetApiMinistryCategoryGetAllCategoriesApiArg = void;
export type PostApiMinistryCategoryCreateNewMinistryCategoryApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiMinistryCategoryCreateNewMinistryCategoryApiArg = {
  createMinistryCategoryRequestModel: CreateMinistryCategoryRequestModel;
};
export type PostApiMinistryCategoryUpdateMinistryCategoryApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiMinistryCategoryUpdateMinistryCategoryApiArg = {
  updateMinistryCategoryRequestModel: UpdateMinistryCategoryRequestModel;
};
export type GetApiMinistryCategoryGetMinistryCategoryByIdApiResponse =
  /** status 200 OK */ MinistryCategoryViewModelIApiDataResponse;
export type GetApiMinistryCategoryGetMinistryCategoryByIdApiArg = {
  id?: number;
};
export type DeleteApiMinistryCategoryDeleteMinistryCategoryApiResponse =
  /** status 200 OK */ IApiResponse;
export type DeleteApiMinistryCategoryDeleteMinistryCategoryApiArg = {
  deleteEntityRequestlModel: DeleteEntityRequestlModel;
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
export type IApiResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
};
export type CreateMinistryCategoryRequestModel = {
  name?: string | null;
};
export type UpdateMinistryCategoryRequestModel = {
  id?: number;
  name?: string | null;
};
export type MinistryCategoryViewModelIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: MinistryCategoryViewModel;
};
export type DeleteEntityRequestlModel = {
  id?: number;
  hardDelete?: boolean;
};
