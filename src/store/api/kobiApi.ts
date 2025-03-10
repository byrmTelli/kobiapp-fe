import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout } from "../slices/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.user?.accessToken;
    const isAuthenticated = state.auth.isAuthenticated;

    if (token !== "" && isAuthenticated) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  const hasUserAccessToken = false;
  const shouldUserLogout = result.error && result.error?.status === 401;
  if (shouldUserLogout || hasUserAccessToken) {
    api.dispatch(logout());
  }

  return result;
};

export const kobiApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
