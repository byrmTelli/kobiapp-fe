import { createContext, useCallback, useContext, useRef } from "react";
import { ModalContentProps, ModalHeaderProps, ModalProps } from "./types";

// Context
const ModalContext = createContext<
  { isOpen: boolean; onClose: () => void } | undefined
>(undefined);

export default function Modal({ isOpen, children, onClose }: ModalProps) {
  // Ref
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        const tooltip = document.querySelector(".rc-tooltip");
        if (tooltip && tooltip.contains(event.target as Node)) {
          return;
        }
        onClose();
      }
    },
    [isOpen, children, onClose]
  );

  document.addEventListener("mousedown", handleClickOutside);

  if (!isOpen) {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 ease-in-out" />
        <div
          ref={modalRef}
          className="relative z-51 shadow-lg w-full max-w-3xl mx-auto select-none transform transition-transform duration-500 ease-in-out scale-100 bg-white"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

Modal.Header = function Header({ children }: ModalHeaderProps) {
  // Context
  const context = useContext(ModalContext);

  return (
    <div className="flex justify-between items-center px-6 py-6 bg-gray-200">
      <div className="w-2/3 font-bold text-xl text-gray-700">{children}</div>
      <button
        className=" text-gray-700 text-2xl hover:text-gray-400"
        onClick={context?.onClose}
      >
        &times;
      </button>
    </div>
  );
};

Modal.Content = function Content({ children }: ModalContentProps) {
  return (
    <div className="min-h-[400px] bg-white p-4 flex w-full">{children}</div>
  );
};
