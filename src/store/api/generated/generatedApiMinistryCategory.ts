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
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedMinistryCategory };
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
