import styled from "styled-components";

export const Section = styled.div`
  box-sizing: border-box;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 4px;

  h2 {
    font-size: 20px;
    border-bottom: 1px solid #ccc;
    padding: 0.5rem;
    margin: 0;
  }

  p {
    padding: 0.5rem;
    margin: 0;
  }
`;

export const NumberSections = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

export const BookTitle = styled.h1`
  text-transform: uppercase;
  font-size: 28px;
  text-align: center;
`;
