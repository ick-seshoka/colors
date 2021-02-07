import styled from "styled-components";

import ColorsHeader from "../../assets/images/colors-header-bg.jpg";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${ColorsHeader}) no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  display: grid;
  min-height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
