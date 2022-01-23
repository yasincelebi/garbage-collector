import React, { useEffect } from "react";
import { StyledSelectableSection } from "../styles/SelectableSection";

const SelectableSection = ({
  isActive,
  title,
  content,
  onClick,
}: {
  isActive: boolean;
  title: string;
  content: string;
  onClick: () => void;
}) => {
  return (
    <StyledSelectableSection
      isActive={isActive}
      className={isActive ? "selected" : ""}
      onClick={onClick}
    >
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </StyledSelectableSection>
  );
};

export default SelectableSection;
