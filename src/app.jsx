import React, { useEffect, useState } from 'react';
import './app.css';
import Header from './components/header';
import SideMenu from './components/sideMenu';
import Videos from './components/videos';

// Styled Component
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import { RightSideContainer } from './components/styles/RightSideContainer.styled';

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
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: THe status is ${response.status}`
          );
        }
        return response.json();
      })
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
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <SideMenu />
          <RightSideContainer>
            <Videos data={data} loading={loading} error={error} />
          </RightSideContainer>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
