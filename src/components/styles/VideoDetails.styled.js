import styled from 'styled-components';

export const VideoDetailsContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  overflow-y: scroll;
  background-color: #181818;
  color: #fff;

  * {
    margin-bottom: 1rem;
  }
  & iframe {
    width: 50%;
    height: 50%;
  }

  & div {
    margin: 2rem 4rem;
    height: 100vh;
    width: 100vw;
  }

  & p {
    width: 45rem;
  }
`;
