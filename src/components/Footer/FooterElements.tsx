import styled from "styled-components";
import { media } from "../../styles/MediaQuery";

const Container = styled.div`
  display: flex;
  width: 100%;
  background: var(--main-blue);
  flex-direction: column;

  ${media.labtop`display: none;`};
  ${media.tabletLarge`display: none;`};
  ${media.tablet`display: none;`};
  ${media.mobile`display: none;`};
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 60px;
  background: var(--sub-blue);
  display: flex;
  flex-direction: row;
  padding: 0 100px;
  align-items: center;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-size: 15px;
`;

const MenuListItem = styled.li`
  padding-right: 17px;
  margin-right: 16px;
  position: relative;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 13px;
    background: #fff;
  }

  :last-child::after {
    content: none;
  }
`;

const ContentContainer = styled.div`
  padding: 0 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
`;

const LogoInnerBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #fff;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

const Detail = styled.div`
  padding-right: 17px;
  margin-right: 16px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 13px;
    background: #fff;
  }
  :last-child::after {
    content: none;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  align-items: center;
`;

const SelectContainer = styled.div``;

const SelectBox = styled.div`
  width: 180px;
  padding: 10px 20px;
  text-align: left;
  border: 1px solid #fff;
  cursor: pointer;
  position: relative;
`;

const ArrowImage = styled.div`
  position: absolute;
  left: 84%;
  top: 28%;
`;

const SelectList = styled.ul`
  display: none;
  position: absolute;
  top: -230px;
  left: -1px;
  width: 180px;
  background: var(--main-blue);
  padding: 10px 20px;
  border: 1px solid #fff;
`;

const SelectListItem = styled.li`
  padding: 8px 0;
`;

const SelectListLink = styled.a``;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const SocialLink = styled.a`
  
`

export {
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
  SocialLink,
  SelectListLink,
};
