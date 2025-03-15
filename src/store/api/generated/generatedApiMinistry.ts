import { kobiApi as api } from "../kobiApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getApiMinistryGetAllMinistries: build.query<
      GetApiMinistryGetAllMinistriesApiResponse,
      GetApiMinistryGetAllMinistriesApiArg
    >({
      query: () => ({ url: `/api/Ministry/GetAllMinistries` }),
    }),
    postApiMinistryCreateNewMinistry: build.mutation<
      PostApiMinistryCreateNewMinistryApiResponse,
      PostApiMinistryCreateNewMinistryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Ministry/CreateNewMinistry`,
        method: "POST",
        body: queryArg.createMinistryRequestModel,
      }),
    }),
    postApiMinistryUpdateMinistry: build.mutation<
      PostApiMinistryUpdateMinistryApiResponse,
      PostApiMinistryUpdateMinistryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Ministry/UpdateMinistry`,
        method: "POST",
        body: queryArg.updateMinistryRequestModel,
      }),
    }),
    getApiMinistryGetMinistryById: build.query<
      GetApiMinistryGetMinistryByIdApiResponse,
      GetApiMinistryGetMinistryByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Ministry/GetMinistryById`,
        params: {
          id: queryArg.id,
        },
      }),
    }),
    deleteApiMinistryDeleteMinistry: build.mutation<
      DeleteApiMinistryDeleteMinistryApiResponse,
      DeleteApiMinistryDeleteMinistryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Ministry/DeleteMinistry`,
        method: "DELETE",
        body: queryArg.deleteEntityRequestlModel,
      }),
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
export { injectedRtkApi as generatedMinistry };
export type GetApiMinistryGetAllMinistriesApiResponse =
  /** status 200 OK */ MinistryViewModelListIApiDataResponse;
export type GetApiMinistryGetAllMinistriesApiArg = void;
export type PostApiMinistryCreateNewMinistryApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiMinistryCreateNewMinistryApiArg = {
  createMinistryRequestModel: CreateMinistryRequestModel;
};
export type PostApiMinistryUpdateMinistryApiResponse =
  /** status 200 OK */ IApiResponse;
export type PostApiMinistryUpdateMinistryApiArg = {
  updateMinistryRequestModel: UpdateMinistryRequestModel;
};
export type GetApiMinistryGetMinistryByIdApiResponse =
  /** status 200 OK */ MinistryViewModelIApiDataResponse;
export type GetApiMinistryGetMinistryByIdApiArg = {
  id?: number;
};
export type DeleteApiMinistryDeleteMinistryApiResponse =
  /** status 200 OK */ IApiResponse;
export type DeleteApiMinistryDeleteMinistryApiArg = {
  deleteEntityRequestlModel: DeleteEntityRequestlModel;
};
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
export type MinistryViewModel = {
  id?: number;
  created_At?: string;
  title?: string | null;
  description?: string | null;
  category?: MinistryCategoryViewModel;
};
export type MinistryViewModelListIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: MinistryViewModel[] | null;
};
export type IApiResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
};
export type CreateMinistryRequestModel = {
  title?: string | null;
  description?: string | null;
  categoryId?: number;
};
export type UpdateMinistryRequestModel = {
  id?: number;
  title?: string | null;
  description?: string | null;
  categoryId?: number;
};
export type MinistryViewModelIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: MinistryViewModel;
};
export type DeleteEntityRequestlModel = {
  id?: number;
  hardDelete?: boolean;
};
export type MinistryCategoryViewModelListIApiDataResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string | null;
  data?: MinistryCategoryViewModel[] | null;
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
