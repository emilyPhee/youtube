import React, { useEffect } from 'react';

const Videos = props => {
  const mostPopularVideos = props.videos;

  return (
    <>
      <div>
        <h1>Videos</h1>
        {mostPopularVideos[0].snippet.title}
      </div>
    </>
  );
};

export default Videos;
