import styled from "styled-components";
import {
  defaultButtonColor,
  primaryBackground,
  secondaryBackground,
} from "./variables";

export const StyledButton = styled("div")<{
  type: keyof typeof btns;
  disabled?: boolean;
}>`
  background-color: ${(props) =>
    btns[props.type] ? btns[props.type].backgroundColor : primaryBackground};
  text-align: center;
  border-radius: 0.25rem;
  min-width: 124px;
  padding-inline: 30px;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    btns[props.type] ? btns[props.type].color : defaultButtonColor};
  font-family: "Open Sans";
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  max-width: max-content;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

export const btns = {
  primary: {
    backgroundColor: primaryBackground,
    color: "#ffffff",
  },
  secondary: {
    backgroundColor: secondaryBackground,
    color: "#ffffff",
  },
};
