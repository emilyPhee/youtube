import React, { useEffect, useState } from 'react';
import './app.css';
import Header from './components/header';
import SideMenu from './components/sideMenu';
import Videos from './components/videos';

const App = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=' +
        apiKey,

      requestOptions
    )
      .then(response => response.json())
      .then(data => {
        setVideos(data.items);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <Header />
      <SideMenu />
      <Videos videos={videos} />
    </>
  );
};

export default App;
