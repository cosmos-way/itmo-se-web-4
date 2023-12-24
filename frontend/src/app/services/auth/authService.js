import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://web04.cosmosway.ru:8181',
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.userToken
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
                return headers
            }
        },
    }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                url: '/users/profile',
                method: 'GET',
            }),
        }),
    }),
})
export const { useGetUserDetailsQuery } = authApi
