import styled from "styled-components";
import { primaryColor } from "./variables";

export const StyledListItem = styled("section")<{
  isNoAction: boolean;
  isSelected: boolean;
}>`
  justify-content: space-between;
  padding: 0 6rem 0 0.5rem;
  width: 100%;
  color: ${primaryColor};
  border-left: 9px solid
    ${(props) => (props.isNoAction ? "#E9CF30" : "transparent")};
  
  background-color: ${(props) =>
    props.isSelected ? "rgba(233, 207, 48,0.2)" : "white"};
  min-height: 4.375rem;
  box-shadow: 0px 3px 6px #00000014;
  
    display: grid;
    grid-template-columns: repeat(4, minmax(100px,200px));
    padding-right: 0;
    margin-bottom: 5px;
    cursor: pointer;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(100px,200px));

    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, minmax(100px,200px));
    }
}
`;

export const StyledListItemColumn = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.213rem;
`;

export const StyledListItemTitle = styled("div")`
  font-size: 0.813rem;
  font-weight: bold;
`;

export const StyledListItemDescription = styled("p")`
  font-size: 0.813rem;
  font-weight: normal;
`;

export const StyledListContainer = styled("div")`
  overflow-y: scroll;
  height: calc(100vh - 65px);
  width: 70vw;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    min-height: 250px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 15px;
  }
`;
