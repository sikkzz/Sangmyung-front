import { ReactNode, useEffect, useRef } from "react";
import useOutSideClick from "../../hook/useOutSideClick";

import { Background, Content, RuleBox, Inner } from "./ModalElements";

export type Props = {
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ onClose, children }: Props) => {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, handleClose);

  useEffect(() => {
    document.body.setAttribute("style", "overflow: hidden");
    return () => document.body.setAttribute("style", "overflow: auto");
  }, []);

  return (
    <Background>
      <Content>
        <RuleBox ref={modalRef}>
          <Inner>{children}</Inner>
        </RuleBox>
      </Content>
    </Background>
  );
};

export default Modal;
