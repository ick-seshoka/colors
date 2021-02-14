import styled from "styled-components";

import ColorsHeader from "../../assets/images/colors-header-bg.jpg";
import SuccessCircleCheck from "../../assets/svg/success-circle-check.svg";

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
  grid-template-rows: 9.375em auto;
  min-height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ToastMessage = styled.p`
  font-weight: 400;
  color: var(--white);
  font-size: 1em;
  line-height: 1.3em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SuccessCheck = styled.img.attrs({ src: SuccessCircleCheck })`
  width: 1.25em;
  height: 1.25em;
  margin-right: 0.5em;
`;

export const Bold = styled.b``;
