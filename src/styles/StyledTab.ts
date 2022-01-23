import styled from "styled-components";
import { primaryBackground, primaryColor } from "./variables";

export const StyledTabContainer = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 50px;
  position: relative;
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 10px;
    gap: 0;
    margin-bottom: 10px;
  }
`;

export const StyledListItem = styled("li")<{
  inner: boolean;
}>`
  cursor: pointer;
  margin-left: 30px;
  font-weight: bold;
  font-size: ${(props) => (props.inner ? "1.188rem" : "1rem")};
  min-width: 100px;
  color: ${primaryBackground};
  pointer-events: ${(props) => (props.inner ? "none" : "")};
  & .line {
    width: 0;
  }
  &:not(.selected) {
    opacity: 0.5;
  }
  &.selected .line {
    background-color: #3da836;
    height: 4px;
    width: 100%;
    bottom: -3px;
    position: relative;
    z-index: 1;
    transition: width 0.3s ease-in-out;
    width: ${(props) => (props.inner ? "" : "100px")};
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const StyledListUnderline = styled.div`
  background-color: #8997b2;
  height: 2px;
  width: 100%;
  bottom: -2px;
  position: absolute;
`;
