import styled from "styled-components";

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
    border-width: 0px 0px 1px;
    outline: none;
  }

  button {
    width: 20rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
  }
  p {
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
  }
`;
export const DivCard = styled.div`
  width: 90vw;
  margin-top: 2rem;
  padding: 1.2rem 2rem;
  background-color: #f5f5f5;

  p {
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
  }
`;
export const TrackNumber = styled.h1`
  font-size: 1rem;
  padding-bottom: 1rem;
`;
