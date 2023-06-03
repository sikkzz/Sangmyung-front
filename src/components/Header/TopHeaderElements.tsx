import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  position: sticky;

  ${media.labtop`display: none;`};
  ${media.tabletLarge`display: none;`};
  ${media.tablet`display: none;`};
  ${media.mobile`display: none;`};
`;

const Col = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 0 113px;
  background-color: transparent;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const MenuList = styled.ul``;

const Menu = styled.li`
  display: inline-block;
  position: relative;
  margin-right: 16px;
  padding-right: 16px;

  &::after{
    content: '';
    position: absolute;
    top: 2px;
    right: 0;
    width: 1px;
    height: 11px;
    /* background-color: #666; */
  }

  &:last-of-type::after{
    content: none;
  }
`;

const MenuLink = styled.a``

export { Layout, Col, Box, MenuList, Menu, MenuLink };
