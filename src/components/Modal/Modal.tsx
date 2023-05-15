import { useEffect, useRef } from "react";
import useOutSideClick from "../../hook/useOutSideClick";

import {
  Background,
  Content,
  RuleBox,
  RuleHeader,
  RuleTitle,
  IconBox,
  RuleContent,
} from "./ModalElements";

import Icons from "../../constants/icon";

type Props = {
  onClose: () => void;
};

const Modal = ({ onClose }: Props) => {
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
          <RuleHeader>
            <RuleTitle>이용약관</RuleTitle>
            <IconBox>
              <Icons.AiOutlineClose size={36} color="#000" />
            </IconBox>
          </RuleHeader>
          <RuleContent>
            
          </RuleContent>
        </RuleBox>
      </Content>
    </Background>
  );
};

export default Modal;
