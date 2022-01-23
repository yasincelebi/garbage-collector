import React, { useContext, useEffect } from "react";
import { ItemContext } from "../context/SelectedItem";
import { useModal } from "../hooks/useModal";
import PortalModal from "./Modal";
import FullScreenLogo from "../assets/fullscreen.svg";
import {
  StyledFullScreenLogo,
  StyledFullScreenLogoWrapper,
  StyledImage,
  StyledImageWrapper,
} from "../styles/Media";
const Media = () => {
  const { item, setItem } = useContext(ItemContext);
  const [media, setMedia] = React.useState<any>();
  const [modalOpen, setModalOpen, toggle] = useModal(false);
  const [fullscreenImage, setFullscreenImage] = React.useState<any>();

  const getMediaType = () => {
    switch (item.media[0].type) {
      case "image":
        setFullscreenImageState();
        setMedia(
          <StyledImageWrapper>
            <StyledImage
              style={{ aspectRatio: "1.5" }}
              src={item.media[0].url}
              alt={item.media[0].caption}
            />
            <StyledFullScreenLogoWrapper>
              <StyledFullScreenLogo
                src={FullScreenLogo}
                onClick={() => setModalOpen(true)}
              ></StyledFullScreenLogo>
            </StyledFullScreenLogoWrapper>
          </StyledImageWrapper>
        );
        break;
      case "video":
        setMedia(<video src={item.media[0].url} controls />);
        break;
      case "audio":
        setMedia(<audio src={item.media[0].url} controls />);
        break;
      default:
        setMedia(<h3>Media Not Found</h3>);
    }
  };

  useEffect(() => {
    getMediaType();
  }, [item]);

  const setFullscreenImageState = () => {
    setFullscreenImage(
      <StyledImageWrapper>
        <StyledImage src={item.media[0].url} alt={item.media[0].caption} />
        <StyledFullScreenLogoWrapper>
          <StyledFullScreenLogo
            src={FullScreenLogo}
            onClick={() => setModalOpen(false)}
          ></StyledFullScreenLogo>
        </StyledFullScreenLogoWrapper>
      </StyledImageWrapper>
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {media}{" "}
      {modalOpen && (
        <PortalModal
          children={<div>{fullscreenImage}</div>}
          isOpen={modalOpen}
        />
      )}
    </div>
  );
};

export default Media;
