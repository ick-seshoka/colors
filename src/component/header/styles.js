import { Link as LinkSource } from "react-router-dom";
import styled from "styled-components";

import ColorsLogo from "../../assets/svg/colors-logo.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10% auto;
  align-items: center;
`;

export const Link = styled(LinkSource)``;

export const Logo = styled.img.attrs({ src: ColorsLogo })``;
