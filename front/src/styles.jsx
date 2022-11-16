import styled from "styled-components";
//
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 4rem;
`;

export const Body = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding: 5px 5px;
    width: 20rem;
    margin-bottom: 2rem;
  }
  button {
    width: 20rem;
    height: 1.6rem;
  }
`;
export const DivCard = styled.div`
  width: 90vw;
  margin-top: 4rem;
  div {
    padding-bottom: 1rem;
  }
  p {
    font-weight:400;
    padding-bottom: 0.5rem;
  }
`;
