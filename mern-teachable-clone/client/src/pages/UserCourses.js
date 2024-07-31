// src/pages/UserCourses.js (update)
import React, { useEffect, useState } from 'react';
import CourseBox from '../components/CourseBox';
import { useGetUserCoursesQuery } from '../features/api/apiSlice';
import { useSelector } from 'react-redux';

const UserCourses = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: courses, error, isLoading } = useGetUserCoursesQuery(user._id);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">My Courses</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error fetching courses</p>}
      <div>
        {courses && courses.map((course) => (
          <CourseBox key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default UserCourses;
