// src/components/CourseBox.js
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

const CourseBox = ({ course }) => {
  const [showVideos, setShowVideos] = useState(false);

  return (
    <div className="border p-4 mb-2">
      <h2 className="text-xl font-bold">{course.title}</h2>
      <button
        onClick={() => setShowVideos(!showVideos)}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
      >
        {showVideos ? 'Hide Videos' : 'Show Videos'}
      </button>
      {showVideos && (
        <div>
          {course.videos.map((video) => (
            <VideoPlayer key={video._id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseBox;
