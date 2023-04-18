import Icons from "../../constants/icon";
import { useState } from "react";
import LogoImg from "../../assets/logo1.png";

import { FooterSiteData, FooterSocialIconData } from "../../constants/data/FooterData";

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

export default function Footer() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
        <MenuContainer>
          <MenuList>
            <MenuListItem>이용약관</MenuListItem>
            <MenuListItem>개인정보처리방침</MenuListItem>
            <MenuListItem>만든사람</MenuListItem>
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
              Copyright © Sangmyung university general student council. All
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
  );
}
