import { useState } from "react";
import {useNavigate} from 'react-router-dom'

import {
  Container,
  LogoContainer,
  Logo,
  MenuList,
  MenuContainer,
  Menu,
  MenuItem,
  DropDownContainer,
  DropDownMenu,
  DropDownSubContainer,
  DropDownSubMenu,
  DropDownMenuItem,
  BtnContainer,
  Btn,
} from "./HeaderElements";

import { headerTabData } from "../../constants/data/headerTabData";

export default function Header() {
  const [display, setDisplay] = useState<Number>();
  const [display2, setDisplay2] = useState<Number>();
  const navigate = useNavigate()

  return (
    <Container>
      <LogoContainer>
        <Logo>선거운동본부</Logo>
      </LogoContainer>
      <MenuList>
        <MenuContainer>
          {headerTabData.map((item, index) => (
            <Menu key={index}>
              <MenuItem
                onMouseOver={() => setDisplay(index)}
                onMouseOut={() => setDisplay(9999)}
                href={item.link}
              >
                {item.main_item}
              </MenuItem>
              {item.subItem ? (
                <DropDownContainer
                  style={{ display: display === index ? "block" : "none" }}
                  onMouseOver={() => setDisplay(index)}
                  onMouseOut={() => setDisplay(9999)}
                >
                  {item.subItem.map((item, index) => (
                    <DropDownMenu
                      key={index}
                      onMouseOver={() => setDisplay2(index)}
                      onMouseOut={() => setDisplay2(9999)}
                      onClick={() => {
                        return(
                          item.link ? navigate(item.link) : ""
                        )
                      }}
                    >
                      <DropDownMenuItem>{item.sub_item}</DropDownMenuItem>
                      {item.subItem2 ? (
                        <DropDownSubContainer
                          style={{
                            display: display2 === index ? "block" : "none",
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
                                return(
                                  item.link ? navigate(item.link) : ""
                                )
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
      <BtnContainer>
        <Btn>로그인</Btn>
        <Btn>회원가입</Btn>
      </BtnContainer>
    </Container>
  );
}
