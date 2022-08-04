import React from 'react';
import Video from './video';
import { VideosContainer } from './styles/Videos.styled';

const Videos = props => {
  const youTubeData = props.data;
  const loadingStatus = props.loading;
  const error = props.error;

  return (
    <>
      <div>
        {loadingStatus && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the YouTube data - ${error}`}</div>
        )}
        <VideosContainer>
          <>
            {youTubeData &&
              youTubeData.items.map(youTubeVideo => (
                <>
                  <Video
                    imgUrl={youTubeVideo.snippet.thumbnails.medium.url}
                    title={youTubeVideo.snippet.title}
                    channelTitle={youTubeVideo.snippet.channelTitle}
                  />
                </>
              ))}
          </>
        </VideosContainer>
      </div>
    </>
  );
};

export default Videos;
