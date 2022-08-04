import React from 'react';
import { VideoStyle } from './styles/Videos.styled';

const Video = ({ imgUrl, title, channelTitle }) => (
  <VideoStyle>
    <img src={imgUrl} alt="" />
    <p>{title}</p>
    <p>{channelTitle}</p>
  </VideoStyle>
);

export default Video;
