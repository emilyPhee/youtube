import styled from 'styled-components';

export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* border-top: 0.1px solid #505152; */

  height: 100vh;
  width: 100vw;

  overflow-y: scroll;
  background-color: #181818;
`;

export const VideoStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  padding: 1rem;
  margin: 0 1.2rem;

  color: #fff;
`;
