import React from "react";
import {
  StyledResponseRequest,
  StyledResponseType,
} from "../styles/StyledTakeAction";

const ResponseModal = ({ type }: { type: StyledResponseType }) => {
  const typeContents = {
    error: {
      title: "A PROBLEM OCCURED!",
      content:
        "We cannot continue due to a problem. <br /> Please try again later.",
    },
    success: {
      title: "ACTION HAS BEEN TAKEN!",
      content: "Your request has been sent.",
    },
  };
  return (
    <StyledResponseRequest type={type}>
      <div className="icon"></div>
      <div className="text">
        <div className="title">{typeContents[type].title}</div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: typeContents[type].content }}
        ></div>
      </div>
    </StyledResponseRequest>
  );
};

export default ResponseModal;
