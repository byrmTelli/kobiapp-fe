import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../slices/authSlice";
import { IApiDataResponseOfUserLoginViewModel } from "./generated/generatedApiAuth";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.user?.accessToken;
    const isAuthenticated = state.auth.isAuthenticated;

    headers.set("Content-Type", "application/json");
    headers.set("Access-Control-Allow-Credentials", "true");

    if (token !== "" && isAuthenticated) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
  credentials: "include",
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: "/api/auth/RefreshUsersProfile",
        method: "POST",
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const refreshData =
        refreshResult.data as IApiDataResponseOfUserLoginViewModel;

      api.dispatch(setUser(refreshData.data));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const kobiApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
