import React, { useState } from 'react';
import { useRegisterUserMutation } from '../features/api/apiSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const [customError, setCustomError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCustomError(null); // Reset custom error message
    try {
      const userData = await registerUser({ username, email, password }).unwrap();
      // Save user data to local storage
      localStorage.setItem('user', JSON.stringify(userData));
      // Redirect to email verification page
      navigate('/verify-email');
    } catch (err) {
      console.error('Registration failed:', err);
      if (err.status === 400) {
        setCustomError('Invalid request. Please check your input.');
      } else if (err.status === 401) {
        setCustomError('Unauthorized. Please check your credentials.');
      } else if (err.status === 404) {
        setCustomError('Not found. Please try again later.');
      } else if (err.status === 500) {
        setCustomError('Internal server error. Please try again later.');
      } else if (err.status === 'FETCH_ERROR') {
        setCustomError('Server not responding. Please check your connection or try again later.');
      } else {
        setCustomError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
        {customError && <p className="text-red-500 mt-2">{customError}</p>}
      </form>
    </div>
  );
};

export default Register;
