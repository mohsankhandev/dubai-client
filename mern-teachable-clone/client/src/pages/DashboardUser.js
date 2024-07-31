import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetCoursesQuery } from '../features/api/apiSlice';

const Dashboard = () => {
  const { data: courses, error, isLoading } = useGetCoursesQuery();
  const user = useSelector((state) => state.auth.user);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {user.paidCourses.map((courseId) => {
          const course = courses.find((course) => course._id === courseId);
          return (
            <div key={course._id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
              <Link to={`/course/${course._id}`} className="text-blue-500 mt-2">
                View Course
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
