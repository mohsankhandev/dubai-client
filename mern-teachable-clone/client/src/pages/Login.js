import React, { useState } from 'react';
import { useLoginUserMutation } from '../features/api/apiSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [customError, setCustomError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCustomError(null);
    try {
      const data = await loginUser({ email, password }).unwrap();
      if (data && data.token) {
        // Save user data and token to local storage
        localStorage.setItem('user', JSON.stringify(data.user)); // Assuming data.user contains user details
        localStorage.setItem('token', data.token);

        // Redirect to the dashboard or other protected route
        navigate('/dashboard');
      } else {
        setCustomError('Login failed. Please try again.');
      }
    } catch (err) {
      if (err.originalStatus === 404) {
        setCustomError('User not found. Please check your email and try again.');
      } else if (err.originalStatus === 401) {
        setCustomError('Incorrect password. Please try again.');
      } else if (err.originalStatus === 400) {
        setCustomError('Invalid request. Please check your input.');
      } else {
        setCustomError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
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
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {customError && <p className="text-red-500 mt-2">{customError}</p>}
      </form>
    </div>
  );
};

export default Login;
