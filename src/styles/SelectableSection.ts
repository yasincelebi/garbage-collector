import styled from "styled-components";
import { primaryBackground, primaryColor } from "./variables";

export const StyledSelectableSection = styled("section")<{
  isActive: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) =>
    props.isActive ? primaryBackground : "#F4F4F4"};
  box-shadow: 0px 3px 6px #00000029;
  min-height: 70px;
  padding: 1.063rem;
  gap: 2px;

  & .title {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => (props.isActive ? "#fff" : primaryColor)};
  }
  & .content {
    color: ${(props) => (props.isActive ? "#fff" : primaryColor)};
    font-size: 0.875rem;
  }
  &:nth-child(2) {
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;
  }
  cursor: pointer;
`;
