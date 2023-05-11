import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Box = styled.div`
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  position: sticky;

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
  background: var(--main-blue);
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
  padding: 0 45px;
`;

const MenuIcon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DropDownContainer = styled.ul`
  display: block;
  visibility: visible;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: #000;
  color: #fff;
  position: relative;
  display: flex;
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
  background: #000;
  color: #fff;
  left: 100%;
  top: 0;
  position: absolute;
  display: none;
  width: 160px;
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
