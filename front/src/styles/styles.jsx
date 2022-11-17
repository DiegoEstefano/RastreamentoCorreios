import styled from "styled-components";

export const Body = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
`;

export const TopBar = styled.div``;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 5px 5px;
    width: 20rem;
    margin-bottom: 2rem;
    border-width: 0px 0px 1px;
    outline: none;
  }

  button {
    width: 20rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    background-color: #dfdfdf;
    border-width: 1px;
    border-radius: 3px;
    cursor: pointer;
  }
  img {
    width: 1.2rem;
  }
  p {
    font-size: 1rem;
    font-weight: 500;
    color: #51c7b7;
  }
`;
