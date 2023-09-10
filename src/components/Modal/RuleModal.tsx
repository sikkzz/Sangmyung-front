import HTMLReactParser from "html-react-parser";

import Modal from "./Modal";
import {
	RuleHeader,
	RuleTitle,
	IconBox,
	RuleContent,
	RuleContentText,
} from "./ModalElements";
import { ModalData } from "../../constants/data/ModalData";
import Icons from "../../constants/icon";

type Props = {
	onClose: () => void;
};

function RuleModal({ onClose }: Props) {
	return (
		<Modal onClose={onClose}>
			<RuleHeader>
				<RuleTitle>이용약관</RuleTitle>
				<IconBox onClick={onClose}>
					<Icons.AiOutlineClose size={36} color='#000' />
				</IconBox>
			</RuleHeader>
			{ModalData.map((item, index) => (
				<RuleContent key={index}>
					<RuleContentText>{HTMLReactParser(item.content)}</RuleContentText>
				</RuleContent>
			))}
		</Modal>
	);
}

export default RuleModal;
