import Modal from "./Modal";

import {
  RuleHeader,
  RuleTitle,
  IconBox,
  RuleContent,
  RuleContentText,
} from "./ModalElements";

import Icons from "../../constants/icon";

import { PersonalData } from "../../constants/data/ModalData";

import HTMLReactParser from "html-react-parser";

type Props = {
  onClose: () => void;
};

const PersonalModal = ({ onClose }: Props) => {
  return (
    <Modal onClose={onClose}>
      <RuleHeader>
        <RuleTitle>개인정보처리방침</RuleTitle>
        <IconBox onClick={onClose}>
          <Icons.AiOutlineClose size={36} color="#000" />
        </IconBox>
      </RuleHeader>
      {PersonalData.map((item, index) => (
        <RuleContent key={index}>
          <RuleContentText>{HTMLReactParser(item.content)}</RuleContentText>
        </RuleContent>
      ))}
    </Modal>
  );
};

export default PersonalModal;
