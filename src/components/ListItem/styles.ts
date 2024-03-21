import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  padding: 0.5rem;
  box-sizing: border-box;
  display: block;
  background: #fff;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-areas:
    "title title title"
    "edit delete play";
  grid-gap: 0.125rem;

  span {
    grid-area: title;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    padding: 0.5rem;
  }
  button {
    grid-area: delete;
  }
  button:first-of-type {
    grid-area: edit;
  }
  button:last-of-type {
    grid-area: play;
  }
`;
