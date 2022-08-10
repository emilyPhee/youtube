import styled from 'styled-components';

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1rem;
  background-color: #202020;
  position: sticky;
  top: 0;
  color: #fff;
  border-bottom: 0.2px solid #383838;

  & input {
    background-color: black;
    border: 0;
    width: 30rem;
    padding: 0.7rem 1rem;
    border: 0.7px solid #505152;
    font-size: 1.2rem;
    color: #fff;
  }

  & input:focus {
    outline: none;
  }

  & button {
    width: 5rem;
    padding: 0.8rem 0;
    background-color: #333333;
    border: 0;
    color: #fff;
    font-size: 1.1rem;
  }

  & button img {
    width: 1.1rem;
  }

  & img {
    width: 1.7rem;
    height: auto;
  }
`;
