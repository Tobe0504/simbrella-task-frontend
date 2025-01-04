import React, {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import ReactDom from "react-dom";

type ModalTypes = {
  onClick?: () => void;
  setState?: Dispatch<SetStateAction<boolean>>;
  style?: CSSProperties;
  body?: React.ReactNode;
};

const BackDrop = (props: ModalTypes) => {
  return (
    <div
      className="fixed top-0 left-o w-full h-svh z-30 bg-black-200"
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
    />
  );
};

const ModalOverlay = (props: ModalTypes) => {
  return (
    <div
      className="fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-40 overflow-auto bg-white m-auto flex items-start justify-center rounded-lg border-box w-auto h-auto min-h-[10vh] max-h-[90vh] min-w-[10vw] max-w-[90vh] no-scrollbar"
      style={props.style}
    >
      <div>{props.body}</div>
    </div>
  );
};

const Modal = (props: ModalTypes) => {
  const [backdropContainer, setBackdropContainer] =
    useState<HTMLElement | null>(null);
  const [modalOverlay, setModalOverlay] = useState<HTMLElement | null>(null);

  // Run this effect only in the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setBackdropContainer(document.getElementById("backdrop"));
      setModalOverlay(document.getElementById("modal-overlay"));
    }
  }, []);

  if (!backdropContainer || !modalOverlay) {
    return null; // Wait until the DOM elements are available
  }

  return (
    <div className="">
      {ReactDom.createPortal(
        <BackDrop onClick={props.onClick} />,
        backdropContainer
      )}
      {ReactDom.createPortal(
        <ModalOverlay body={props.body} onClick={props.onClick} />,
        modalOverlay
      )}
    </div>
  );
};

export default Modal;
