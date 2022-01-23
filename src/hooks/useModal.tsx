import { useState } from "react";

export const useModal = (initialMode: any) => {
  const [modalOpen, setModalOpen] = useState(initialMode);
  const toggle = () => {
    setModalOpen(!modalOpen);
  };
  return [modalOpen, setModalOpen, toggle];
};
