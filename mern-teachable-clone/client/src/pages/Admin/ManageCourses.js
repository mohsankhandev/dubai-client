import React, { useState } from 'react';
import { useGetCoursesQuery, useAddCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } from '../../features/api/apiSlice';

const ManageCourses = () => {
  const { data: courses, isLoading, error } = useGetCoursesQuery();
  const [addCourse] = useAddCourseMutation();
  const [updateCourse] = useUpdateCourseMutation();
  const [deleteCourse] = useDeleteCourseMutation();
  const [courseData, setCourseData] = useState({ title: '', description: '' });

  const handleAddCourse = async () => {
    try {
      await addCourse(courseData).unwrap();
      setCourseData({ title: '', description: '' }); // Reset form after adding
    } catch (err) {
      console.error('Failed to add course:', err);
    }
  };

  const handleUpdateCourse = async (courseId) => {
    try {
      await updateCourse({ id: courseId, ...courseData }).unwrap();
      setCourseData({ title: '', description: '' }); // Reset form after updating
    } catch (err) {
      console.error('Failed to update course:', err);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await deleteCourse(courseId).unwrap();
    } catch (err) {
      console.error('Failed to delete course:', err);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading courses</p>;

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-6">Manage Courses</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Add New Course</h3>
        <input
          type="text"
          placeholder="Course Title"
          value={courseData.title}
          onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
          className="border border-gray-300 rounded p-2 mb-4 w-full"
        />
        <textarea
          placeholder="Course Description"
          value={courseData.description}
          onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
          className="border border-gray-300 rounded p-2 mb-4 w-full"
        />
        <button
          onClick={handleAddCourse}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Course
        </button>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4">Existing Courses</h3>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="py-2 px-4 border-b">{course.title}</td>
                <td className="py-2 px-4 border-b">{course.description}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleUpdateCourse(course.id)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourses;
