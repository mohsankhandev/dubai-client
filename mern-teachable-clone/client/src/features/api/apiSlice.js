// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define API service
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        body: userData,
      }),
    }),
    verifyEmail: builder.query({
      query: (token) => ({
        url: `/auth/verify-email/${token}`,
        method: 'GET',
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: data,
      }),
    }),
    // Endpoint to get all courses
    getCourses: builder.query({
      query: () => '/courses',
    }),
    // Endpoint to get a single course by ID
    getCourse: builder.query({
      query: (id) => `/courses/${id}`,
    }),
    // Endpoint to purchase a course
    purchaseCourse: builder.mutation({
      query: (courseId) => ({
        url: '/purchase',
        method: 'POST',
        body: { courseId },
      }),
    }),
    // New endpoints for Admin
    getUsers: builder.query({
      query: () => '/admin/users',
    }),
    updateUser: builder.mutation({
      query: ({ userId, courseId }) => ({
        url: `/admin/users/${userId}`,
        method: 'PATCH',
        body: { courseId },
      }),
    }),
    addCourse: builder.mutation({
      query: (courseData) => ({
        url: '/admin/courses',
        method: 'POST',
        body: courseData,
      }),
    }),
    updateCourse: builder.mutation({
      query: ({ id, ...courseData }) => ({
        url: `/admin/courses/${id}`,
        method: 'PUT',
        body: courseData,
      }),
    }),
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `/admin/courses/${id}`,
        method: 'DELETE',
      }),
  }),
}),
});

export const { useRegisterUserMutation, useLoginUserMutation, useVerifyEmailQuery, useResetPasswordMutation,
  useGetCoursesQuery,
  useGetCourseQuery,
  usePurchaseCourseMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
  useAddCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,

 } = apiSlice;


export default apiSlice;
