import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import Videos from '../components/videos';
import { VideoDetailsContainer } from './styles/VideoDetails.styled';

const VideoDetails = props => {
  // const { title } = useParams();
  const location = useLocation();
  const { youtubeVideoData } = location.state;
  const { youtubeVideoId } = location.state;

  const mostPopularID = youtubeVideoId;
  const videoID = youtubeVideoId.videoId;

  const videoSrc = `https://www.youtube.com/embed/${
    videoID === undefined ? mostPopularID : videoID
  }`;

  return (
    <>
      <VideoDetailsContainer>
        <div>
          <iframe src={videoSrc} allowFullScreen title="Video Player" />
          <h3>{youtubeVideoData.title}</h3>
          <h4>{youtubeVideoData.channelTitle}</h4>
          <p>{youtubeVideoData.description}</p>
        </div>
      </VideoDetailsContainer>
    </>
  );
};

export default VideoDetails;
