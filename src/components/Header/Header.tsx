import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
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
  // BtnContainer,
  // Btn,
} from "./HeaderElements";

import {
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
  MNavDropDownSub,
  MNavDropDownMenuSub,
  MNavDropDownMenuLinkSub,
  MNavOverlay,
} from "./HeaderMediaElements";

import { HeaderTabData, MHeaderTabData } from "../../constants/data/HeaderData";

import Icons from "../../constants/icon";
import logo from "../../assets/logo1.png";

export default function Header() {
  const [display, setDisplay] = useState<Number>();
  const [display2, setDisplay2] = useState<Number>();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const [onArr, setOnArr] = useState([false]);
  const [onArr2, setOnArr2] = useState([false]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const navClick = (num: number) => {
    let newArr = [...onArr];
    newArr[num] = !isActive2;
    setOnArr(newArr);
    setIsActive2(!isActive2);
  };

  const navSubClick = (num: number) => {
    let newArr = [...onArr2];
    newArr[num] = !isActive3;
    setOnArr2(newArr);
    setIsActive3(!isActive3);
  };

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <>
      <MContainer>
        <MOutBox>
          <MInnerBox>
            <MLogoBox>
              <MLogo
                src={logo}
                alt="logo"
                onClick={() => {
                  navigate("/");
                }}
              />
              <MLogoTitle>상명대학교 총학생회 '선[先]'</MLogoTitle>
            </MLogoBox>
            <MButtonBox onClick={handleClick}>
              {isActive ? (
                <Icons.AiOutlineClose size={24} color="#fff" />
              ) : (
                <Icons.FaBars size={24} color="#fff" />
              )}
            </MButtonBox>
          </MInnerBox>
        </MOutBox>
        <MNavBox
          style={{
            right: isActive ? "0px" : "-100%",
            display: isActive ? "block" : "none",
          }}
        >
          <MNavUtilBox>
            <MNavList>
              <MNavListItem>
                <MNavListLink href="/">HOME</MNavListLink>
              </MNavListItem>
              <MNavListItem>
                <MNavListLink href='/info/sitemap'>사이트맵</MNavListLink>
              </MNavListItem>
            </MNavList>
          </MNavUtilBox>
          <MNavInnerBox>
            <MNavMenu>
              {MHeaderTabData.map((item, index) => (
                <MNavMenuItem key={index}>
                  <MNavLink
                    onClick={() => {
                      navClick(index);
                    }}
                    // style={{
                    //   backgroundColor: onArr[index] ? "#003d91" : "#fff",
                    //   color: onArr[index] ? "#fff" : "#000",
                    // }}
                    href={item.link}
                  >
                    {item.main_item}
                  </MNavLink>
                  <MNavDropDown
                    style={{ display: onArr[index] ? "block" : "none" }}
                  >
                    {item.subItem?.map((item, index) => (
                      <MNavDropDownMenu key={index}>
                        <MNavDropDownMenuLink
                          onClick={() => {
                            navSubClick(index);
                          }}
                          // style={{
                          //   color: onArr2[index] ? "#003d91" : "#000",
                          // }}
                          href={item.link}
                        >
                          {item.sub_item}
                        </MNavDropDownMenuLink>
                        <MNavDropDownSub
                          style={{ display: onArr2[index] ? "block" : "none" }}
                        >
                          {item.subItem2?.map((item, index) => (
                            <MNavDropDownMenuSub key={index}>
                              <MNavDropDownMenuLinkSub href={item.link}>
                                {item.sub_item2}
                              </MNavDropDownMenuLinkSub>
                            </MNavDropDownMenuSub>
                          ))}
                        </MNavDropDownSub>
                      </MNavDropDownMenu>
                    ))}
                  </MNavDropDown>
                </MNavMenuItem>
              ))}
            </MNavMenu>
          </MNavInnerBox>
          <MCloseBox
            style={{ display: isActive ? "block" : "none" }}
            onClick={handleClick}
          >
            <Icons.AiOutlineClose size={20} color="#fff" />
          </MCloseBox>
        </MNavBox>
        <MNavOverlay style={{ display: isActive ? "block" : "none" }} />
      </MContainer>

      <Box>
        <InnerBox>
          <Container
            style={{
              background: scrollPosition < 80 ? "transparent" : "#fff",
              boxShadow:
                scrollPosition < 80
                  ? "none"
                  : "0px 4px 4px rgb(179 182 183/25%)",
              color: scrollPosition < 80 ? "#fff" : "#000",
            }}
          >
            <LogoContainer>
              <Logo
                src={logo}
                alt="logo"
                onClick={() => {
                  navigate("/");
                }}
              />
            </LogoContainer>
            <MenuList>
              <MenuContainer>
                {HeaderTabData.map((item, index) => (
                  <Menu key={index}>
                    <MenuItem
                      onMouseOver={() => setDisplay(index)}
                      onMouseOut={() => setDisplay(9999)}
                      onClick={() => {
                        return item.link ? navigate(item.link) : "";
                      }}
                    >
                      {item.main_item}
                    </MenuItem>
                    {item.subItem ? (
                      <DropDownContainer
                        style={{
                          display: display === index ? "block" : "none",
                        }}
                        onMouseOver={() => setDisplay(index)}
                        onMouseOut={() => setDisplay(9999)}
                      >
                        {item.subItem.map((item, index) => (
                          <DropDownMenu
                            key={index}
                            onMouseOver={() => setDisplay2(index)}
                            onMouseOut={() => setDisplay2(9999)}
                          >
                            <DropDownMenuItem
                              onClick={() => {
                                return item.link ? navigate(item.link) : "";
                              }}
                            >
                              {item.sub_item}
                              {item.subItem2 ? (
                                <MenuIcon>
                                  <Icons.MdKeyboardArrowRight
                                    size={18}
                                    color="#fff"
                                  />
                                </MenuIcon>
                              ) : (
                                ""
                              )}
                            </DropDownMenuItem>
                            {item.subItem2 ? (
                              <DropDownSubContainer
                                style={{
                                  display:
                                    display2 === index ? "block" : "none",
                                  visibility:
                                    display2 === index ? "visible" : "hidden",
                                }}
                                onMouseOver={() => setDisplay2(index)}
                                onMouseOut={() => setDisplay2(9999)}
                              >
                                {item.subItem2.map((item, index) => (
                                  <DropDownSubMenu
                                    key={index}
                                    onMouseOver={() => setDisplay2(index)}
                                    onMouseOut={() => setDisplay2(0)}
                                    onClick={() => {
                                      return item.link
                                        ? navigate(item.link)
                                        : "";
                                    }}
                                  >
                                    {item.sub_item2}
                                  </DropDownSubMenu>
                                ))}
                              </DropDownSubContainer>
                            ) : null}
                          </DropDownMenu>
                        ))}
                      </DropDownContainer>
                    ) : null}
                  </Menu>
                ))}
              </MenuContainer>
            </MenuList>
            {/* <BtnContainer>
            <Btn>로그인</Btn>
            <Btn>회원가입</Btn>
          </BtnContainer> */}
          </Container>
        </InnerBox>
      </Box>
    </>
  );
}
