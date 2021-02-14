import styled from "styled-components";

export const Container = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  justify-content: center;
  align-items: center;
`;

export const ToastSource = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dark-gray);
  width: 16.25em;
  height: 3.75em;
  justify-content: center;
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.4);
`;
