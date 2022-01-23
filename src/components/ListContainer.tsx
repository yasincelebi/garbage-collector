import ListItem from "./ListItem";
import data from "../data/data";
import React, { useContext, useEffect, useMemo } from "react";
import { IGarbageCollector } from "../data/IData";
import { ItemContext } from "../context/SelectedItem";
import { StyledListContainer } from "../styles/ListItem";
const ListContainer = () => {
  const [list, setList] = React.useState<IGarbageCollector.IListItem[]>(
    data.data
  );
  const [selected, setSelected] = React.useState<
    IGarbageCollector.IListItem | any
  >(data.data[0]);
  const { item, setItem } = useContext(ItemContext);

  const handleClick = (event: any) => {
    selectItem(event);
  };

  const selectItem = (selectedItem: IGarbageCollector.IListItem) => {
    setItem(selectedItem);
    setList(
      list.map((listItem) => {
        if (listItem.id === selectedItem.id) {
          listItem.isSelected = true;
        } else {
          listItem.isSelected = false;
        }
        return listItem;
      })
    );
    setSelected(selectedItem);
  };

  useEffect(() => {
    selectItem(list[0]);
  }, []);

  return (
    <StyledListContainer>
      {list.map((item, index) => (
        <ListItem
          selected={item.isSelected}
          handleClick={handleClick}
          key={index}
          item={item}
        />
      ))}
    </StyledListContainer>
  );
};

export default ListContainer;
