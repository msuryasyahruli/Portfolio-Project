import React, { useEffect, useState } from "react";
import { FiMinimize2 } from "react-icons/fi";

const Modal = ({ isOpen, onClose, title, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setShow(true), 50);
    } else {
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 300);
      setShow(false);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity`}
    >
      <div
        className={`backdrop-blur-lg rounded-lg shadow-lg max-h-screen p-4 w-full max-w-2xl transform transition-all flex flex-col ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">{title}</p>
          <button
            className="p-1 rounded-md hover:bg-[#081b29] text-xl"
            onClick={onClose}
          >
            <FiMinimize2 />
          </button>
        </div>
        <hr />
        <div className="mt-4 flex-1 overflow-y-auto hide-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
