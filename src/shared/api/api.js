import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
    }),

    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (pageNumber) =>
                `/users?_start=${pageNumber * 24}&_end=${
                    (pageNumber + 1) * 24
                }`,
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems);
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),

        getUserById: builder.query({
            query: (id) => `/users/${id}`,
        }),

        updateUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body: data,
            }),

            async onQueryStarted({ id, data }, { dispatch, queryFulfilled }) {
                const patchResultAllUsers = dispatch(
                    usersApi.util.updateQueryData(
                        "getUsers",
                        undefined,
                        (draft) => {
                            const user = draft.find((el) => el.id === id);
                            Object.assign(user, data);
                        }
                    )
                );

                const patchResultUser = dispatch(
                    usersApi.util.updateQueryData(
                        "getUserById",
                        id,
                        (draft) => {
                            Object.assign(draft, data);
                        }
                    )
                );

                try {
                    await queryFulfilled;
                } catch {
                    patchResultAllUsers.undo();
                    patchResultUser.undo();
                }
            },
        }),
    }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useUpdateUserMutation } =
    usersApi;
