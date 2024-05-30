import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-car-rental.binaracademy.org",
  }),
  tagTypes: ["Cars"],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (params) => ({
        url: "customer/v2/car",
        params: { ...params },
      }),
      providesTags: ["Cars"],
    }),
    getCarById: builder.query({
      query: (id) => ({
        url: `customer/car/${id}`,
      }),
      providesTags: ["Cars"],
    }),
  }),
});

export const { useGetCarsQuery, useGetCarByIdQuery } = apiSlice;
