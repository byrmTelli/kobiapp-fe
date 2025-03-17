import { kobiApi } from "../kobiApi";

export const extentedMinistryApi = kobiApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    uploadImageToMinistry: build.mutation({
      query: ({MinistryId,images}:{MinistryId:string,images:File[]}) => {

        const bodyFormData = new FormData();
        bodyFormData.append("MinistryId", String(MinistryId));
        images.forEach((image) => {
          bodyFormData.append("Images", image);
      });


        return {
          url: "/api/Ministry/UploadImagesToMinistry",
          method: "POST",
          body: bodyFormData,
          formData: true,
        };
      },
      invalidatesTags: [{ type: "GetMinistryById" as never }],
    }),
  }),
});

export const { useUploadImageToMinistryMutation } = extentedMinistryApi;
