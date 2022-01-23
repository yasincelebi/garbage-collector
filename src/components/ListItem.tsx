import React, { MouseEventHandler, useEffect } from "react";
import {
  StyledListItem,
  StyledListItemColumn,
  StyledListItemDescription,
  StyledListItemTitle,
} from "../styles/ListItem";

import ILiseItem, { IGarbageCollector } from "../data/IData";
const ListItem = ({
  item,
  handleClick,
  selected = false,
}: {
  item: IGarbageCollector.IListItem;
  handleClick: (item: IGarbageCollector.IListItem) => void;
  selected: boolean | undefined;
}) => {
  const columnTitles = ["Tarih", "Tip", "Aksiyon"];
  const selectItem = (item: IGarbageCollector.IListItem) => {
    handleClick(item);
    console.log(item);
  };
  return (
    <>
      <StyledListItem
        isNoAction={true}
        isSelected={selected}
        onClick={() => selectItem(item)}
      >
        {columnTitles.map((title, index) => (
          <StyledListItemColumn key={index}>
            <StyledListItemTitle>{title}</StyledListItemTitle>
            <StyledListItemDescription>
              {item.details.find(
                (detail) =>
                  detail.title.toLowerCase() === title.toLowerCase() &&
                  detail.value
              )?.value || "-"}
            </StyledListItemDescription>
          </StyledListItemColumn>
        ))}
        <StyledListItemColumn>
          <StyledListItemTitle>Bin ID</StyledListItemTitle>
          <StyledListItemDescription>{item.id}</StyledListItemDescription>
        </StyledListItemColumn>
      </StyledListItem>
    </>
  );
};

export default ListItem;
