import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	Container,
	MenuContainer,
	MenuList,
	MenuListItem,
	ContentContainer,
	LeftContainer,
	CenterContainer,
	LogoContainer,
	LogoInnerBox,
	Logo,
	DetailContainer,
	Detail,
	RightContainer,
	SelectContainer,
	SelectBox,
	ArrowImage,
	SelectList,
	SelectListItem,
	SocialContainer,
	SocialIcon,
	SelectListLink,
	SocialLink,
} from "./FooterElements";
import {
	MCenterContainer,
	MCenterTitle,
	MContainer,
	MContentContainer,
	MBox,
	MLeftContainer,
	MLogo,
	MLogoContainer,
	MLogoInnerContainer,
	MMenuContainer,
	MMenuList,
	MMenuListItem,
	MSocialContainer,
	MSocialIcon,
	MSelectContainer,
	MSelectBox,
	MArrow,
	MSelectList,
	MSelectListItem,
	MDetailContainer,
	MDetail,
	MDetailContent,
	MSocialLink,
} from "./FooterMediaElements";
import LogoImg from "../../assets/logo1.png";
import {
	FooterSiteData,
	FooterSocialIconData,
} from "../../constants/data/FooterData";
import Icons from "../../constants/icon";
import ModalPortal from "../../Portal";
import PersonalModal from "../Modal/PersonalModal";
import RuleModal from "../Modal/RuleModal";

function Footer() {
	const navigate = useNavigate();

	const [isActive, setIsActive] = useState(false);

	const [modalOn1, setModalOn1] = useState(false);
	const [modalOn2, setModalOn2] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	const handleModal1 = () => {
		setModalOn1(!modalOn1);
	};

	const handleModal2 = () => {
		setModalOn2(!modalOn2);
	};

	const onProducerClick = () => {
		navigate("/producer");
	};

	return (
		<>
			<MContainer>
				<MContentContainer>
					<MBox>
						<MLeftContainer>
							<MLogoContainer>
								<MLogoInnerContainer>
									<MLogo src={LogoImg} alt="Logo" />
								</MLogoInnerContainer>
							</MLogoContainer>
						</MLeftContainer>
						<MCenterContainer>
							<MCenterTitle>상명대학교 총학생회 '선[先]'</MCenterTitle>
						</MCenterContainer>
					</MBox>
					<MSocialContainer>
						{FooterSocialIconData.map((item, index) => (
							<MSocialIcon key={index}>
								<MSocialLink href={item.link}>{item.icon}</MSocialLink>
							</MSocialIcon>
						))}
					</MSocialContainer>
				</MContentContainer>

				<MMenuContainer>
					<MMenuList>
						<MMenuListItem onClick={handleModal1}>이용약관</MMenuListItem>
						<MMenuListItem onClick={handleModal2}>
							개인정보처리방침
						</MMenuListItem>
						<MMenuListItem onClick={onProducerClick}>만든사람</MMenuListItem>
					</MMenuList>

					<MSelectContainer>
						<MSelectBox onClick={handleClick}>
							Family Site
							<MArrow>
								{isActive ? (
									<Icons.AiFillCaretDown size={14} color="#fff" />
								) : (
									<Icons.AiFillCaretUp size={14} color="#fff" />
								)}
							</MArrow>
							<MSelectList style={{ display: isActive ? "block" : "none" }}>
								{FooterSiteData.map((item, index) => (
									<MSelectListItem key={index}>
										<SelectListLink href={item.link}>
											{item.site_item}
										</SelectListLink>
									</MSelectListItem>
								))}
							</MSelectList>
						</MSelectBox>
					</MSelectContainer>
				</MMenuContainer>

				<MDetailContainer>
					<MDetail>
						우 (03016) 서울시 종로구 홍지문 2길 20 상명대학교 학생회관 2층
						H212호 총학생회실
					</MDetail>
				</MDetailContainer>
				<MDetailContainer>
					<MDetailContent>전화번호 : 02-781-7840, 02-781-7841</MDetailContent>
					<MDetailContent>이메일 : smu.first2023@gmail.com</MDetailContent>
				</MDetailContainer>
				<MDetailContainer>
					<MDetail>
						Copyright © Sangmyung university general student council. All
						rights reserved.
					</MDetail>
				</MDetailContainer>
			</MContainer>
			<Container>
				<MenuContainer>
					<MenuList>
						<MenuListItem onClick={handleModal1}>이용약관</MenuListItem>
						<MenuListItem onClick={handleModal2}>개인정보처리방침</MenuListItem>
						<MenuListItem onClick={onProducerClick}>만든사람</MenuListItem>
					</MenuList>
				</MenuContainer>

				<ContentContainer>
					<LeftContainer>
						<LogoContainer>
							<LogoInnerBox>
								<Logo src={LogoImg} alt="Logo" />
							</LogoInnerBox>
						</LogoContainer>
					</LeftContainer>

					<CenterContainer>
						<DetailContainer>
							우 (03016) 서울시 종로구 홍지문 2길 20 상명대학교 학생회관 2층
							H212호 총학생회실
						</DetailContainer>
						<DetailContainer>
							<Detail>전화번호 : 02-781-7840, 02-781-7841</Detail>
							<Detail>이메일 : smu.first2023@gmail.com</Detail>
						</DetailContainer>
						<DetailContainer>
							Copyright © Sangmyung university general student council. All
							rights reserved.
						</DetailContainer>
					</CenterContainer>

					<RightContainer>
						<SelectContainer>
							<SelectBox onClick={handleClick}>
								Family Site
								<ArrowImage>
									{isActive ? (
										<Icons.AiFillCaretDown size={14} />
									) : (
										<Icons.AiFillCaretUp size={14} />
									)}
								</ArrowImage>
								<SelectList style={{ display: isActive ? "block" : "none" }}>
									{FooterSiteData.map((item, index) => (
										<SelectListItem key={index}>
											<SelectListLink href={item.link}>
												{item.site_item}
											</SelectListLink>
										</SelectListItem>
									))}
								</SelectList>
							</SelectBox>
						</SelectContainer>
						<SocialContainer>
							{FooterSocialIconData.map((item, index) => (
								<SocialIcon key={index}>
									<SocialLink href={item.link}>{item.icon}</SocialLink>
								</SocialIcon>
							))}
						</SocialContainer>
					</RightContainer>
				</ContentContainer>
			</Container>
			<ModalPortal>
				{modalOn1 && <RuleModal onClose={handleModal1} />}
				{modalOn2 && <PersonalModal onClose={handleModal2} />}
			</ModalPortal>
		</>
	);
}

export default Footer;
