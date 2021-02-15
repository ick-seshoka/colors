import styled from "styled-components";

export const Nav = styled.nav``;

export const List = styled.ul`
  list-style-type: none;
  float: right;
  /* 
    * I don't understand why the nav is in column direction on mobile, 
    * hack to put it in the right direction, 
    * investigate it layter
  */
  @media screen and (max-width: 40em) {
    display: flex;
    flex-direction: row;
  }
`;

export const ListItem = styled.li`
  float: left;

  &:nth-child(1) {
    margin-right: 3em;
  }

  @media screen and (max-width: 40em) {
    &:nth-child(1) {
      margin-right: 1.5em;
    }
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

  @media screen and (max-width: 40em) {
    font-size: 0.9375em;
  }
`;
