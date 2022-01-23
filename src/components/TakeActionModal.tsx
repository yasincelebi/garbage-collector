import React from "react";
import { useModal } from "../hooks/useModal";
import {
  StyledButtonContainer,
  StyledResponseRequest,
  StyledTakeAction,
} from "../styles/StyledTakeAction";
import Button from "./Button";

import Loading from "./Loading";
import MarkAsResolved from "./MarkAsResolved";
import PortalModal from "./Modal";
import ResponseModal from "./Response";
import SelectableSection from "./SelectableSection";

import Tab, { ITab } from "./Tab";

const TakeActionModal = ({ closeModal }: { closeModal: () => {} }) => {
  const [activeButton, setActiveButton] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [takenAction, setTakenAction] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [modalOpen, setModalOpen, toggle] = useModal(false);
  const [loading, setLoading] = React.useState(false);
  const a = true;
  const tabs = [
    { id: 1, name: "SELECT ACTION" },
    { id: 2, name: "TAKE ACTION" },
  ];
  const sectionArray = [
    {
      title: "Mark As Resolved",
      content: "Mark this issue as resolved and close it.",
      innerContent:
        "Mark this event as resolved and enter the details of the resolution.",
      isActive: false,
    },
    {
      title: "Change Asset",
      content: "Change the asset with another one.",
      isActive: false,
    },
  ];
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  const [activeSection, setActiveSection] = React.useState<
    typeof sectionArray[0] | null
  >(null);

  const changedTab = (tab: ITab) => {
    setActiveTab(tab);
  };

  const [sections, setSections] = React.useState(sectionArray);

  const handleClick = (section: any) => {
    setSections(
      sections.map((item: any) => {
        item.isActive = false;
        if (item.title === section.title) {
          item.isActive = true;
        }
        return item;
      })
    );
    if (
      sections.some((item: any) => {
        return item.isActive;
      })
    ) {
      setActiveButton(true);
      setActiveSection(section);
    }
  };

  const handleNext = (e: any) => {
    setActiveTab(tabs[1]);
    console.log(activeTab);
  };

  const handleChange = (e: any) => {
    setTextAreaValue(e.target.value);
  };

  const takeAction = () => {
    setTakenAction(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(!textAreaValue.length);
    }, 1000);
    console.log(error);
  };

  const generateLoadingErrorSuccess = () => {
    if (takenAction) {
      if (loading) {
        return <Loading />;
      } else if (error) {
        return <ResponseModal type="error" />;
      } else {
        return <ResponseModal type="success" />;
      }
    }
  };

  return (
    <div style={{ maxWidth: "70vw", minWidth: "40vw" }}>
      <img
        src={require("../assets/Icon - X.png")}
        alt="placeholder"
        style={{ float: "right", cursor: "pointer" }}
        onClick={closeModal}
      />

      {takenAction ? (
        <div style={{ width: "100%", height: 294, overflow: "hidden" }}>
          {generateLoadingErrorSuccess()}
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <Tab
            inModal={true}
            tabs={tabs}
            changeTab={changedTab}
            selected={activeTab}
          />
          {activeTab.id === 1 && (
            <>
              {sections.map((section, index) => (
                <SelectableSection
                  key={index}
                  isActive={section.isActive}
                  title={section.title}
                  content={section.content}
                  onClick={() => {
                    handleClick(section);
                  }}
                />
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 36,
                }}
              >
                <Button
                  text="NEXT"
                  type="secondary"
                  disabled={!activeButton}
                  onClick={handleNext}
                />
              </div>
            </>
          )}

          {activeTab.id === 2 && (
            <>
              <StyledTakeAction>
                <div className="title">{activeSection?.title}</div>
                <div className="content">{activeSection?.innerContent}</div>
              </StyledTakeAction>
              <MarkAsResolved onChange={handleChange} value={textAreaValue} />
              <StyledButtonContainer>
                <Button
                  text="BACK"
                  type="primary"
                  onClick={() => changedTab(tabs[0])}
                />
                <Button
                  text="TAKE ACTION"
                  type="secondary"
                  onClick={takeAction}
                />
              </StyledButtonContainer>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TakeActionModal;
