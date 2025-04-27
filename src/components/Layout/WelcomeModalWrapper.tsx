"use client";

import { useState, useEffect } from "react";
import WelcomeModal from "../UI/WelcomeModal";

const WelcomeModalWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Tampilkan modal setiap kali web di-reload
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <WelcomeModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default WelcomeModalWrapper;
