import styled from "styled-components";
import { primaryColor } from "./variables";

export const StyledImageWrapper = styled.div`
  position: relative;
  max-width: max-content;
  display: flex;
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: none;
`;

export const StyledFullScreenLogoWrapper = styled.div`
  position: absolute;
  bottom: 3%;
  right: 3%;
`;

export const StyledFullScreenLogo = styled.img`
  cursor: pointer;
`;
