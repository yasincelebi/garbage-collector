import React, { useEffect } from "react";
import {
  StyledList,
  StyledListItem,
  StyledListUnderline,
  StyledTabContainer,
} from "../styles/StyledTab";
import { primaryColor } from "../styles/variables";

const Tab = ({
  tabs,
  changeTab,
  inModal = false,
  selected,
}: {
  tabs: ITab[];
  changeTab: (tab: ITab) => void;
  inModal?: boolean;
  selected?: ITab;
}) => {
  const [stateTab, setStateTab] = React.useState(selected || tabs[0]);
  const handleClick = (tab: any) => {
    setStateTab(tab);
    changeTab(tab);
  };

  useEffect(() => {
    setStateTab(selected || tabs[0]);
  }, [selected]);

  // set tab underline position

  return (
    <StyledTabContainer>
      <StyledList>
        {tabs.map((tab: any) => (
          <>
            <StyledListItem
              inner={inModal}
              key={tab.id}
              onClick={() => handleClick(tab)}
              className={tab.id === stateTab.id ? "selected" : ""}
            >
              {inModal && (
                <div
                  style={{
                    height: 20,
                    width: 20,
                    backgroundColor: primaryColor,
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: 5,
                    color: "white",
                    lineHeight: "1.4rem",
                    fontSize: "0.85rem",
                  }}
                >
                  {tab.id}
                </div>
              )}
              {tab.name}
              <div className="line"></div>
            </StyledListItem>
          </>
        ))}

        <StyledListUnderline />
      </StyledList>
    </StyledTabContainer>
  );
};

export default Tab;

export interface ITab {
  id: number;
  name: string;
}
