import styled from "styled-components";
import { primaryColor } from "./variables";

export const StyledDetailContainer = styled.div`
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  @media (min-width: 768px) {
    overflow-y: auto;
    max-height: calc(100vh - 65px);
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 10px;
`;
