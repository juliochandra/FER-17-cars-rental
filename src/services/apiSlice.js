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
      transformResponse: (response) => {
        // console.log(response);
        const transformedCars = response.cars.map((car) => ({
          id: car.id,
          category: car.category || "Medium",
          createdAt: car.createdAt,
          finish_rent_at: car.finish_rent_at,
          image:
            car.image ||
            "https://images.tokopedia.net/img/KRMmCm/2024/2/7/dd3c8623-bf0e-4283-a8c7-4a6cb9d188c2.jpg",
          name: car.name || "Mobil",
          price: car.price || 100000,
          start_rent_at: car.start_rent_at,
          status: car.status,
          updatedAt: car.updatedAt,
        }));
        return {
          ...response,
          cars: transformedCars,
        };
      },
      providesTags: ["Cars"],
    }),
    getCarById: builder.query({
      query: (id) => ({
        url: `customer/car/${id}`,
      }),
      transformResponse: (response) => {
        // console.log(response);
        const transformedCars = {
          ...response,
          category: response.category || "Medium",
          image:
            response.image ||
            "https://images.tokopedia.net/img/KRMmCm/2024/2/7/dd3c8623-bf0e-4283-a8c7-4a6cb9d188c2.jpg",
          start_rent_at: response.start_rent_at,
          finish_rent_at: response.finish_rent_at,
          status: response.status,
          updatedAt: response.updatedAt,
          createdAt: response.createdAt,
        };
        return transformedCars;
      },
      providesTags: ["Cars"],
    }),
  }),
});

export const { useGetCarsQuery, useGetCarByIdQuery } = apiSlice;
