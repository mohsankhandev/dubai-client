// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ video }) => {
  return (
    <div className="mb-2">
      <h3 className="text-lg font-bold">{video.title}</h3>
      <iframe
        width="560"
        height="315"
        src={video.url}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
