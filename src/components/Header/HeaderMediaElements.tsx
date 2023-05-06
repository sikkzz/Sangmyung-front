import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const MContainer = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  background: var(--sub-blue);
  z-index: 100;
  align-items: center;

  ${media.tablet`display: flex;`};
  ${media.mobile`display: flex;`};
`;

const MOutBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
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
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  overflow-y: hidden;
`;

const MNavMenu = styled.ul`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const MNavMenuItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const MNavLink = styled.a`
  padding: 12px 20px;
  width: 100%;
  font-size: 15px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  text-align: left;
  color: #4e5968;
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
  MNavMenu,
  MNavMenuItem,
  MNavLink,
};
