// src/components/CoursePurchase.js
import React, { useState } from 'react';
import { usePurchaseCourseMutation } from '../features/api/apiSlice';
import { useSelector } from 'react-redux';

const CoursePurchase = ({ courseId }) => {
  const [purchaseCourse, { isLoading, error }] = usePurchaseCourseMutation();
  const { user } = useSelector((state) => state.auth);

  const handlePurchase = async () => {
    try {
      await purchaseCourse({ userId: user._id, courseId }).unwrap();
      // Handle success, e.g., show a success message or update UI
    } catch (err) {
      // Handle error
      console.error('Purchase failed:', err);
    }
  };

  return (
    <div>
      <button
        onClick={handlePurchase}
        className="bg-blue-500 text-white py-2 px-4 rounded"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Buy Now'}
      </button>
      {error && <p className="text-red-500 mt-2">{error.message || 'An error occurred'}</p>}
    </div>
  );
};

export default CoursePurchase;
