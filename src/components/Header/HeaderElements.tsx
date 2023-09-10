import styled, { keyframes } from "styled-components";

import { media } from "../../styles/MediaQuery";

const Box = styled.div`
	/* margin-top: 30px; */
	z-index: 100;
	top: 30px;
	right: 0;
	left: 0;
	position: sticky;

	${media.labtop`display: none;`};
	${media.tabletLarge`display: none;`};
	${media.tablet`display: none;`};
	${media.mobile`display: none;`};
`;

const InnerBox = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 80px;
	background: transparent;
	padding: 0 100px;
	z-index: 100;
	color: #fff;
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 80px;
	height: 80px;
`;

const Logo = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	cursor: pointer;
`;

const MenuContainer = styled.div`
	display: flex;
`;

const MenuList = styled.ul``;

const Menu = styled.li`
	display: flex;
	flex-direction: column;
`;

const MenuItem = styled.a`
	display: flex;
	align-items: center;
	height: 80px;
	font-size: 20px;
	font-weight: 700;
	padding: 0 45px;
	cursor: pointer;
`;

const MenuIcon = styled.div`
	width: 18px;
	height: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const opa = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

const DropDownContainer = styled.ul`
	display: block;
	visibility: visible;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	background: #fff;
	color: #000;
	position: relative;
	display: flex;
	z-index: 90;
	filter: drop-shadow(rgba(179, 182, 183, 0.5) 0px 4px 4px);
	opacity: 0;
	animation: 0.3s ease-in-out ${opa};
`;

const DropDownMenu = styled.li`
	padding: 20px;
	cursor: pointer;
	position: relative;
`;

const DropDownMenuItem = styled.a`
	display: flex;
	justify-content: space-between;
`;

const DropDownSubContainer = styled.ul`
	flex-direction: column;
	background: #fff;
	color: #000;
	left: 100%;
	top: 0;
	position: absolute;
	display: none;
	width: 160px;
	filter: drop-shadow(rgba(179, 182, 183, 0.5) 0px 4px 4px 0px);
	animation: 0.3s ease-in-out ${opa};
`;

const DropDownSubMenu = styled.li`
	padding: 20px;
`;

const BtnContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 210px;
`;

const Btn = styled.div`
	font-size: 20px;
	padding-left: 20px;
`;

export {
	Box,
	InnerBox,
	Container,
	LogoContainer,
	Logo,
	MenuList,
	MenuContainer,
	Menu,
	MenuItem,
	MenuIcon,
	DropDownContainer,
	DropDownMenu,
	DropDownSubContainer,
	DropDownSubMenu,
	DropDownMenuItem,
	BtnContainer,
	Btn,
};
