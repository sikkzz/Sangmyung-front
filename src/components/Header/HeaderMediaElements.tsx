import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const MContainer = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  background: var(--sub-blue);
  z-index: 100;

  ${media.tablet`display: block;`};
  ${media.mobile`display: block;`};
`;

const MOutBox = styled.div`
  width: 100%;
`;

const MInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

const MLogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const MLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  cursor: pointer;
`;

const MLogoTitle = styled.div`
  color: #fff;
`;

const MButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40px;
  height: 50px;
`;

const MNavBox = styled.div`
  display: none;
  z-index: 1000;
  position: fixed;
  top: 0px;
  right: -100%;
  width: 78.125%;
  height: 100%;
  padding: 0;
  overflow-y: scroll;
  background-color: #fff;
  border-top: 6px solid #015bcb;
  border-bottom: 2px solid #273b00;
`;

const MNavUtilBox = styled.div``;

const MNavList = styled.ul`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

const MNavListItem = styled.li`
  display: table-cell;
  border-right: 1px solid #ccc;
  text-align: center;

  &:last-of-type {
    border-right: none;
  }
`;

const MNavListLink = styled.a`
  display: block;
  padding: 12px 0;
  font-size: 14px;
`;

const MNavInnerBox = styled.div`
  float: right;
  width: 100%;
  border-bottom: 1px solid #cdcdcd;
  background-color: #fff;
`;

const MCloseBox = styled.a`
  display: none;
  position: fixed;
  top: 15px;
  right: 82%;
  z-index: 170;
  width: 20px;
  height: 20px;
`;

const MNavMenu = styled.ul`
  /* flex-direction: column;
  display: flex;
  align-items: center; */
`;

const MNavMenuItem = styled.li`
  /* width: 100%;
  height: 100%;
  display: flex;
  align-items: center; */
`;

const MNavLink = styled.a`
  display: block;
  padding: 15px;
  font-size: 15px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  text-align: left;
  color: #4e5968;
  border-top: 1px solid #cdcdcd;
`;

const MNavDropDown = styled.ul`
  display: none;
`;

const MNavDropDownMenu = styled.li``;

const MNavDropDownMenuLink = styled.a`
  display: block;
  position: relative;
  padding: 12px 15px 12px 37px;
  border: 1px solid #dbdbdb;
  border-right: none;
  border-bottom: none;
  background-color: rgb(241, 241, 244);
  font-weight: 300;
  font-size: 14px;
  color: #000;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 21px;
    left: 20px;
    width: 4px;
    height: 4px;
    background-color: #666;
    border-radius: 4px;
  }
`;

const MNavOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 160;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export {
  MContainer,
  MOutBox,
  MInnerBox,
  MLogoBox,
  MLogo,
  MLogoTitle,
  MButtonBox,
  MNavBox,
  MNavInnerBox,
  MNavUtilBox,
  MNavList,
  MNavListItem,
  MNavListLink,
  MCloseBox,
  MNavMenu,
  MNavMenuItem,
  MNavLink,
  MNavDropDown,
  MNavDropDownMenu,
  MNavDropDownMenuLink,
  MNavOverlay,
};
