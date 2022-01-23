import React, { MouseEventHandler } from "react";
import { btns, StyledButton } from "../styles/Button";

const Button = ({
  text,
  type,
  onClick,
  disabled,
}: {
  text: string;
  type: keyof typeof btns;
  onClick?: MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
