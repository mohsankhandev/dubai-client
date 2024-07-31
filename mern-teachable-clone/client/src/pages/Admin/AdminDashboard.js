import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCoursesQuery, useGetUsersQuery } from '../../features/api/apiSlice';

const AdminDashboard = () => {
  // const { data: courses, isLoading: coursesLoading, error: coursesError } = useGetCoursesQuery();
  // const { data: users, isLoading: usersLoading, error: usersError } = useGetUsersQuery();

  // if (coursesLoading || usersLoading) return <p>Loading...</p>;
  // if (coursesError || usersError) return <p>Error loading data</p>;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Courses</h3>
        <Link to="/admin/courses" className="bg-blue-500 text-white py-2 px-4 rounded">Manage Courses</Link>
        {/* Render list of courses if needed */}
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Users</h3>
        <Link to="/admin/users" className="bg-blue-500 text-white py-2 px-4 rounded">Manage Users</Link>
        {/* Render list of users if needed */}
      </div>
    </div>
  );
};

export default AdminDashboard;
