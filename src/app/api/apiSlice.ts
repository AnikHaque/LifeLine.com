import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Update with your API base URL
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => "patients",
    }),
  }),
});

export const { useGetPatientsQuery } = apiSlice;
