import React from "react";

export default function Modal({ setIsOpen, img }) {
  const closeModal = (e) => {
    if (e.target.classList.contains("modal-container")) {
      setIsOpen(false);
    }
  };

  return (
    <div
      onClick={closeModal}
      className="modal-container fixed inset-0 bg-[rgba(13,109,253,0.25)] z-[1031] flex justify-center items-center"
    >
      <img
        src={img}
        alt="Selected"
        className="max-w-[90%] h-auto rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
}
