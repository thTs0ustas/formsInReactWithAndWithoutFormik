import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants";

export const getHistoryApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getHistory: build.query({
      query: (id) => `/reservations/history/${id}`,
    }),
    registerUser: build.mutation({
      query: (data) => ({
        url: `/users/create/check`,
        method: "POST",
        body: data,
      }),
    }),
    logout: build.mutation({
      query: ({ id, token }) => ({
        url: `/users/logout`,
        body: id,
        headers: { authorization: `Bearer ${token}` },
      }),
    }),
  }),
});

export const { useGetHistoryQuery } = getHistoryApi;
