import { kobiApi as api } from "../kobiApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedMinistry };
export type GetApiMinistryCategoryGetAllCategoriesApiResponse = unknown;
export type GetApiMinistryCategoryGetAllCategoriesApiArg = void;
export type PostApiMinistryCategoryCreateNewMinistryCategoryApiResponse =
  unknown;
export type PostApiMinistryCategoryCreateNewMinistryCategoryApiArg = {
  createMinistryCategoryRequestModel: CreateMinistryCategoryRequestModel;
};
export type PostApiMinistryCategoryUpdateMinistryCategoryApiResponse = unknown;
export type PostApiMinistryCategoryUpdateMinistryCategoryApiArg = {
  updateMinistryCategoryRequestModel: UpdateMinistryCategoryRequestModel;
};
export type GetApiMinistryCategoryGetMinistryCategoryByIdApiResponse = unknown;
export type GetApiMinistryCategoryGetMinistryCategoryByIdApiArg = {
  id?: number;
};
export type DeleteApiMinistryCategoryDeleteMinistryCategoryApiResponse =
  unknown;
export type DeleteApiMinistryCategoryDeleteMinistryCategoryApiArg = {
  deleteEntityRequestlModel: DeleteEntityRequestlModel;
};
export type GetApiMinistryGetAllMinistriesApiResponse = unknown;
export type GetApiMinistryGetAllMinistriesApiArg = void;
export type PostApiMinistryCreateNewMinistryApiResponse = unknown;
export type PostApiMinistryCreateNewMinistryApiArg = {
  createMinistryRequestModel: CreateMinistryRequestModel;
};
export type PostApiMinistryUpdateMinistryApiResponse = unknown;
export type PostApiMinistryUpdateMinistryApiArg = {
  updateMinistryRequestModel: UpdateMinistryRequestModel;
};
export type GetApiMinistryGetMinistryByIdApiResponse = unknown;
export type GetApiMinistryGetMinistryByIdApiArg = {
  id?: number;
};
export type DeleteApiMinistryDeleteMinistryApiResponse = unknown;
export type DeleteApiMinistryDeleteMinistryApiArg = {
  deleteEntityRequestlModel: DeleteEntityRequestlModel;
};
export type CreateMinistryCategoryRequestModel = {
  name?: string;
};
export type UpdateMinistryCategoryRequestModel = {
  id?: number;
  name?: string;
};
export type DeleteEntityRequestlModel = {
  id?: number;
  hardDelete?: boolean;
};
export type CreateMinistryRequestModel = {
  title?: string;
  description?: string;
  categoryId?: number;
};
export type UpdateMinistryRequestModel = {
  id?: number;
  title?: string;
  description?: string;
  categoryId?: number;
};
