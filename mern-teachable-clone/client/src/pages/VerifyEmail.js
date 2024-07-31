import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useVerifyEmailQuery } from '../features/api/apiSlice';

const VerifyEmail = () => {
  const { token } = useParams();
  const { data, error, isLoading } = useVerifyEmailQuery(token);

  useEffect(() => {
    if (!isLoading && data) {
      // Handle success, e.g., show a success message
    }
  }, [data, isLoading]);

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Verify Email</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error verifying email</p>}
      {data && <p className="text-green-500">Email verified successfully!</p>}
    </div>
  );
};

export default VerifyEmail;
