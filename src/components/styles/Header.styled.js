import styled from 'styled-components';

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #202020;

  & input {
    background-color: black;
    border: 0;
    width: 25rem;
    padding: 0.8rem 1rem;
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
    font-size: 1.2rem;
  }
`;
