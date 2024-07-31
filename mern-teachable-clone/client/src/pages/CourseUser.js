import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCourseQuery } from '../features/api/apiSlice';

const Course = () => {
  const { id } = useParams();
  const { data: course, error, isLoading } = useGetCourseQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {course.videos.map((video) => (
          <div key={video.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{video.title}</h3>
            <video controls className="w-full mt-2">
              <source src={video.url} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
