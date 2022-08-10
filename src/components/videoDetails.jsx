import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetails = props => {
  const { title } = useParams();
  console.log(props.channelTitle);
  return (
    <div>
      <h1>Video Details</h1>
      <p>{title}</p>
    </div>
  );
};

export default VideoDetails;
