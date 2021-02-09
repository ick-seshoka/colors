import styled from "styled-components";

export const Nav = styled.nav``;

export const List = styled.ul`
  list-style-type: none;
  float: right;
`;

export const ListItem = styled.li`
  float: left;

  &:nth-child(1) {
    margin-right: 3em;
  }
`;

export const ListItemLink = styled.button`
  font-size: 1.15em;
  font-weight: 500;
  color: var(--white);
  transition: color 0.3s ease-in;
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--dirty-white);
  }
`;
