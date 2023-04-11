import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: "/photos",
            params: {
              albumId: album.id,
            },
            method: "get",
          };
        },
      }),
      addPhoto: builder.mutation({
        query: (album) => {
          return {
            url: "/photos",
            body: {
              albumId: album.id,
              photo: faker.image.abstract(150, 150, true),
            },
            method: "post",
          };
        },
      }),
      removePhoto: builder.mutation({
        query: (photo) => {
          return {
            url: `/albums/${photo.id}`,
            method: "delete",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;

export { photosApi };
