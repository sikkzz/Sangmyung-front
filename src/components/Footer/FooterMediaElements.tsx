import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const MContainer = styled.div`
  display: none;
  width: 100%;
  background: var(--sub-blue);
  flex-direction: column;
  padding: 0 10px;

  ${media.mobile`display: flex;`};
  ${media.tablet`display: flex;`};
`;

const MMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
`;

const MMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-size: 12px;
`;

const MMenuListItem = styled.li`
  padding-right: 10px;
  margin-right: 10px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 8px;
    background-color: #fff;
  }

  :last-child::after {
    content: none;
  }
`;

const MContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding-top: 30px;
`;

const MBox = styled.div`
  display: flex;
  align-items: center;
`;

const MLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MCenterContainer = styled.div`
  display: flex;
`;

const MCenterTitle = styled.div`
  font-size: 12px;
  margin-left: 10px;
`;

const MLogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MLogoInnerContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
`;

const MLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MSocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MSocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const MSocialLink = styled.a`
  
`

const MSelectContainer = styled.div``;

const MSelectBox = styled.div`
  width: 100px;
  padding: 10px;
  text-align: left;
  border: 1px solid #fff;
  cursor: pointer;
  position: relative;
  font-size: 12px;
  color: #fff;
`;

const MArrow = styled.div`
  position: absolute;
  left: 80%;
  top: 28%;
`;

const MSelectList = styled.ul`
  display: none;
  position: absolute;
  top: -248px;
  left: -1px;
  width: 100px;
  background: var(--sub-blue);
  padding: 10px;
  border: 1px solid #fff;
`;

const MSelectListItem = styled.li`
  padding: 8px 0;
`;

const MDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

const MDetail = styled.div`
  font-size: 10px;
  color: #fff;
`;

const MDetailContent = styled.div`
  padding-right: 10px;
  margin-right: 10px;
  font-size: 10px;
  color: #fff;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 8px;
    background: #fff;
  }
  :last-child::after {
    content: none;
  }
`;

export {
  MContainer,
  MMenuContainer,
  MMenuList,
  MMenuListItem,
  MContentContainer,
  MBox,
  MLeftContainer,
  MLogoContainer,
  MLogoInnerContainer,
  MLogo,
  MCenterContainer,
  MCenterTitle,
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
};
