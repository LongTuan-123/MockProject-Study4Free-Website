import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '..';
import IUser from '../../interfaces/User';
import BaseFilter from '../../interfaces/common/BaseFilter';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['Users', 'CountUsers', 'User', 'Collection', 'Vocab'],
  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.VITE_BASE_API_URL ||
      'https://study4free-api.onrender.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUsers: builder.query<
      Pick<IUser, 'id' | 'username' | 'avatar' | 'email' | 'gender'>[],
      BaseFilter
    >({
      query: (params) => {
        console.log('query all users');
        return {
          url: 'users',
          params,
        };
      },
      providesTags: () => ['Users'],
    }),
    countUsers: builder.query<{ count: number }, BaseFilter>({
      query: (params) => ({
        url: 'users/count',
        params,
      }),
      providesTags: () => ['CountUsers'],
    }),
    getUserById: builder.query<any, string>({
      query: (id) => `users/${id}`,
      providesTags: () => ['User'],
    }),
    removeUser: builder.mutation<IUser, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => ['Users', 'CountUsers'],
    }),
    updateInfor: builder.mutation({
      query: (data) => ({
        url: `users/${data.id}`,
        method: 'PATCH',
        body: data.newdata,
      }),
      invalidatesTags: () => ['User'],
    }),
    getAllCollecton: builder.query({
      query: () => 'collections?page=0&quantity=100',
      providesTags: () => ['Collection'],
    }),
    getCollectionById: builder.query({
      query: (id) => `collections/${id}`,
      providesTags: () => ['Collection', 'Vocab'],
    }),
    addNewCollection: builder.mutation({
      query: (data) => ({
        url: `collections`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: () => ['Collection'],
    }),
    addNewVocabulary: builder.mutation({
      query: (data) => ({
        url: 'vocabularies',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: () => ['Collection', 'Vocab', 'User'],
    }),
    addNewTodo: builder.mutation({
      query: (data) => ({
        url: 'todos',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: () => ['User'],
    }),
    deleteToDo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => ['User'],
    }),
    changeStatusToDo: builder.mutation({
      query: (data) => ({
        url: `todos/${data.id}`,
        method: 'PATCH',
        body: data.newData,
      }),
      invalidatesTags: () => ['User'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCountUsersQuery,
  useGetUserByIdQuery,
  useRemoveUserMutation,
  useUpdateInforMutation,
  useGetAllCollectonQuery,
  useGetCollectionByIdQuery,
  useAddNewCollectionMutation,
  useAddNewVocabularyMutation,
  useAddNewTodoMutation,
  useDeleteToDoMutation,
  useChangeStatusToDoMutation,
} = userApi;
