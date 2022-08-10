import React from 'react';
import { Link } from 'react-router-dom';

import Video from './video';
import { VideosContainer } from './styles/Videos.styled';

const Videos = props => {
  const youTubeData = props.data;
  const loadingStatus = props.loading;
  const error = props.error;

  return (
    <>
      <div>
        {loadingStatus && (
          <div style={{ color: '#fff' }}>A moment please...</div>
        )}
        {error && (
          <div>{`There is a problem fetching the YouTube data - ${error}`}</div>
        )}
        <VideosContainer>
          <>
            {youTubeData &&
              youTubeData.items.map(youTubeVideo => (
                <Link
                  to={`/videos/${youTubeVideo.snippet.title}`}
                  channelTitle={youTubeVideo.snippet.channelTitle}
                >
                  <Video
                    imgUrl={youTubeVideo.snippet.thumbnails.medium.url}
                    title={youTubeVideo.snippet.title}
                    channelTitle={youTubeVideo.snippet.channelTitle}
                  />
                </Link>
              ))}
          </>
        </VideosContainer>
      </div>
    </>
  );
};

export default Videos;
