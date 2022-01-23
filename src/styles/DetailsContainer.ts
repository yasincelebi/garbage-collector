import styled from "styled-components";
import { primaryColor } from "./variables";

export const StyledDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  & .title,
  & .value {
    font-size: 0.875rem;

    color: ${primaryColor};
  }
  & .title {
    font-weight: bold;
  }
  & .value {
    font-weight: normal;
  }
`;
