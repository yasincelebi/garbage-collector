import React, { useContext, useEffect } from "react";
import { ItemContext } from "../context/SelectedItem";
import { IGarbageCollector } from "../data/IData";
import { useModal } from "../hooks/useModal";
import {
  StyledButtonsContainer,
  StyledDetailContainer,
} from "../styles/DetailContainer";
import Button from "./Button";
import Details from "./Details";
import Location from "./Location";
import Media from "./Media";
import PortalModal from "./Modal";
import Tab, { ITab } from "./Tab";
import TakeActionModal from "./TakeActionModal";

const DetailContainer = () => {
  const { item, setItem } = useContext(ItemContext);
  const [modalOpen, setModalOpen, toggle] = useModal(false);
  const [isButtonDisplay, setIsButtonDisplay] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState(1);
  const tabs = [
    {
      id: 1,
      name: "DETAILS",
    },
    {
      id: 2,
      name: "LOCATION",
    },
    {
      id: 3,
      name: "MEDIA",
    },
  ];

  const handleChangeTab = (tab: ITab) => {
    setActiveTab(tab.id);
  };

  const deneme = () => {
    console.log("deneme");
  };

  const handleNoAction = () => {
    const findAksiyonDetail = item.details.find(
      (detail: any) => detail.title === "Aksiyon"
    );
    findAksiyonDetail.value = "Aksiyon Gerekmiyor";
    setItem({ ...item, details: item.details });
  };

  useEffect(() => {
    if (item?.details.length > 0) {
      const findAksiyonDetail = item.details.find(
        (detail: any) => detail.title === "Aksiyon"
      );
      if (findAksiyonDetail.value === "Aksiyon Gerekmiyor") {
        setIsButtonDisplay(false);
      } else {
        setIsButtonDisplay(true);
      }
    }
  }, [item]);

  return (
    <StyledDetailContainer>
      <StyledButtonsContainer
        style={{
          display: isButtonDisplay ? "flex" : "none",
        }}
      >
        <Button
          type="primary"
          text="NO ACTION NEEDED"
          onClick={handleNoAction}
        />
        <Button
          type="secondary"
          text="TAKE ACTION"
          onClick={() => setModalOpen(true)}
        />
      </StyledButtonsContainer>
      <Tab tabs={tabs} changeTab={handleChangeTab} />

      {activeTab === 1 && <Details item={item} />}
      {activeTab === 2 && <Location coordinates={item.location} />}
      {activeTab === 3 && <Media />}
      <PortalModal
        children={<TakeActionModal closeModal={() => setModalOpen(false)} />}
        isOpen={modalOpen}
      />
    </StyledDetailContainer>
  );
};

export default DetailContainer;
