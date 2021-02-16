import styled from "styled-components";
import { Link } from "react-router-dom";

import Emoji from "../../component/emoji";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  width: 100%;
  height: 100%;
  background-color: var(--dirty-white);
`;

export const PageNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 10.3125em;
  font-weight: 500;
  color: var(--dark-gray);
  margin-top: 0;
  margin-bottom: 0;
`;

export const Paragraph = styled.p`
  font-size: 2.1875em;
  font-weight: 500;
  color: var(--dark-gray);
  margin-top: 0.3em;
`;

export const HomeButton = styled(Link)`
  font-weight: 500;
  color: var(--white);
  background-color: var(--blue);
  width: 10.3em;
  height: 2.625em;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.45);
  text-align: center;
  line-height: 2.625em;
  margin-top: 2.325em;
`;

export const EyesIcon = styled(Emoji)`
  margin-left: 0.125em;
`;

export const PaletteIcon = styled(Emoji)`
  margin-right: 0.125em;
`;
