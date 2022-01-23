import React, { ChangeEventHandler } from "react";
import { StyledMarkAsResolved } from "../styles/StyledTakeAction";

const MarkAsResolved = ({
  onChange,
  value,
}: {
  onChange?: ChangeEventHandler;
  value: string;
}) => {
  return (
    <StyledMarkAsResolved>
      <label className="title">Resolution Detail*</label>
      <textarea
        className=""
        name=""
        id=""
        cols={40}
        placeholder="Enter resolution detail…"
        onChange={onChange}
        value={value}
      ></textarea>
    </StyledMarkAsResolved>
  );
};

export default MarkAsResolved;
