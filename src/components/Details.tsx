import React from "react";
import { IGarbageCollector } from "../data/IData";
import { StyledDetailsContainer } from "../styles/DetailsContainer";

const Details = ({ item }: { item?: IGarbageCollector.IListItem }) => {
  return (
    <StyledDetailsContainer>
      {item &&
        item.details.map((detail, index) => (
          <div key={index}>
            <div className="title">{detail.title}</div>
            <div className="value">{detail.value}</div>
          </div>
        ))}
    </StyledDetailsContainer>
  );
};

export default Details;
