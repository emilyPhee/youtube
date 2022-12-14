import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Header from './components/header';

import Videos from './components/videos';
import VideoDetails from './components/videoDetails';
// Styled Component
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';

const theme = {
  colors: {
    background: 'black',
    mainColor: 'red',
  },
  mobile: '768px',
};

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState('');

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const querySearchResult = enteredQuery => {
    setQuery(enteredQuery);
  };

  const getYoutubeData = query => {
    const api =
      query !== ''
        ? 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' +
          query +
          '&key='
        : 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=';

    return fetch(api + apiKey, requestOptions).then(response => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: THe status is ${response.status}`
        );
      }
      return response.json();
    });
  };

  useEffect(() => {
    // document.title = 'YouTube';
    getYoutubeData(query)
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log('error', error);
        setError(error.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Container>
            <Header querySearchResult={querySearchResult} />
            <Routes>
              <Route
                index
                path="/youtube"
                element={
                  <Videos data={data} loading={loading} error={error}></Videos>
                }
              />
              <Route
                path="/youtube/:title"
                element={<VideoDetails></VideoDetails>}
              ></Route>
            </Routes>
          </Container>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};

export default App;
