import Modal from "./Modal";

import {
  RuleHeader,
  RuleTitle,
  IconBox,
  RuleContent,
  RuleContentText,
} from "./ModalElements";

import Icons from "../../constants/icon";

import { ModalData } from "../../constants/data/ModalData";

import HTMLReactParser from "html-react-parser";

type Props = {
  onClose: () => void;
};

const RuleModal = ({ onClose }: Props) => {
  return (
    <Modal onClose={onClose}>
      <RuleHeader>
        <RuleTitle>이용약관</RuleTitle>
        <IconBox onClick={onClose}>
          <Icons.AiOutlineClose size={36} color="#000" />
        </IconBox>
      </RuleHeader>
      {ModalData.map((item, index) => (
        <RuleContent key={index}>
          <RuleContentText>{HTMLReactParser(item.content)}</RuleContentText>
        </RuleContent>
      ))}
    </Modal>
  );
};

export default RuleModal;
