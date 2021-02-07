import styled from "styled-components";

import { Link } from "react-router-dom";

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

export const ListItemLink = styled(Link)`
  font-size: 1.15em;
  font-weight: 500;
  color: var(--white);
`;
