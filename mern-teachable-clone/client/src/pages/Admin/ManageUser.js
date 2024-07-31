import React from 'react';
import { useGetUsersQuery, useUpdateUserMutation } from '../../features/api/apiSlice';

// Function to generate random data
const generateRandomUsers = (count) => {
  const randomUsers = [];
  for (let i = 0; i < count; i++) {
    randomUsers.push({
      id: `random-${i}`,
      username: `RandomUser${i}`,
      email: `random${i}@example.com`,
      courses: ['Course 1', 'Course 2', 'Course 3'],
    });
  }
  return randomUsers;
};

const ManageUsers = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();
  const [updateUser] = useUpdateUserMutation();

  const handleVerifyPayment = async (userId, courseId) => {
    try {
      await updateUser({ userId, courseId }).unwrap();
      // Handle success (optional: you can display a success message or update the UI)
    } catch (err) {
      console.error('Error verifying payment:', err);
      // Handle error (optional: display error message)
    }
  };

  // Fallback to random users if no users are fetched or there's an error
  const displayUsers = users && users.length > 0 ? users : generateRandomUsers(5);

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-6">Manage Users</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{backgroundColor: "yellow"}}>Error loading users: {error.message || 'Unknown error'}</p>}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Courses</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.courses.join(', ')}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleVerifyPayment(user.id, 'courseId')} // Replace 'courseId' with the actual ID
                  className="bg-green-500 text-white py-1 px-3 rounded"
                >
                  Verify Payment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
