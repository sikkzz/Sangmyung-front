import Icons from "../../constants/icon";
import { useState } from "react";
import LogoImg from "../../assets/logo.jpeg";

import { FooterSiteData, FooterSocialIconData } from "../../constants/data/footerData";

import {
  Container,
  MenuContainer,
  MenuList,
  MenuListItem,
  ContentContainer,
  LeftContainer,
  CenterContainer,
  LogoContainer,
  Image,
  DetailContainer,
  Detail,
  LogoTitle,
  RightContainer,
  SelectContainer,
  SelectBox,
  ArrowImage,
  SelectList,
  SelectListItem,
  SocialContainer,
  SocialIcon,
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
            <Image src={LogoImg} alt="logo" width={120} height={120} />
          </LogoContainer>
          <LogoTitle>상명대학교 제20대 총학생회 Logo</LogoTitle>
        </LeftContainer>

        <CenterContainer>
          <DetailContainer>
            우 (03016) 서울시 종로구 홍지문 2길 20 상명대학교 학생회관 2층
            총학생회실
          </DetailContainer>
          <DetailContainer>
            <Detail>전화번호 : 010-3341-2053</Detail>
            <Detail>이메일 : sling0623@gmail.com</Detail>
          </DetailContainer>
          <DetailContainer>
            Copyright © Sangmyung university general student council. All rights
            reserved.
          </DetailContainer>
        </CenterContainer>

        <RightContainer>
          <SelectContainer>
            <SelectBox onClick={handleClick}>
              Family Site
              <ArrowImage>
                <Icons.AiFillCaretDown size={14} />
              </ArrowImage>
              <SelectList style={{ display: isActive ? "block" : "none" }}>
                {FooterSiteData.map((item, index) => (
                  <SelectListItem key={index}>{item.site_item}</SelectListItem>
                ))}
              </SelectList>
            </SelectBox>
          </SelectContainer>
          <SocialContainer>
            {FooterSocialIconData.map((item, index) => (
              <SocialIcon key={index}>{item.icon}</SocialIcon>
            ))}
          </SocialContainer>
        </RightContainer>
      </ContentContainer>
    </Container>
  );
}
