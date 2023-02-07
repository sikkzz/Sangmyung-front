import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

import {
  Container,
  LogoContainer,
  Logo,
  MenuList,
  MenuContainer,
  Menu,
  MenuBox,
  MenuItem,
  DropDownContainer,
  DropDownMenu,
  DropDownSubContainer,
  DropDownSubMenu,
} from "./HeaderElements";

import { headerTabData } from "@/constants/data/headerTabData";

export default function Header() {
  const [display, setDisplay] = useState<Number>();
  const [display2, setDisplay2] = useState<Number>();
  const router = useRouter();

  //   console.log(display);

  return (
    <Container>
      <LogoContainer>
        <Logo>선거운동본부</Logo>
      </LogoContainer>
      <MenuList>
        <MenuContainer>
          {headerTabData.map((item, index) => (
            <Menu key={index}>
              {/* <MenuBox> */}
                <MenuItem
                  onMouseOver={() => setDisplay(index)}
                  onMouseOut={() => setDisplay(9999)}
                >
                  {item.main_item}
                </MenuItem>
              {/* </MenuBox> */}

              {item.subItem ? (
                <DropDownContainer
                  // style={{ display: display == index ? "block" : "none" }}
                  style={{
                    visibility: display == index ? "visible" : "hidden",
                  }}
                  onMouseOver={() => setDisplay(index)}
                  onMouseOut={() => setDisplay(9999)}
                >
                  {item.subItem.map((item, index) => (
                    <>
                      <DropDownMenu
                        key={index}
                        onMouseOver={() => setDisplay2(index)}
                        onMouseOut={() => setDisplay2(9999)}
                        onClick={() => {
                          item.link ? router.push(item.link) : "";
                        }}
                      >
                        {item.sub_item}
                      </DropDownMenu>
                      {item.subItem2 ? (
                        <DropDownSubContainer
                        // style={{
                        //   display: display2 == index ? "block" : "none",
                        // }}
                        // style={{ visibility: display == index ? "visible" : "hidden" }}
                        // onMouseOver={() => setDisplay2(index)}
                        // onMouseOut={() => setDisplay2(9999)}
                        >
                          {item.subItem2.map((item, index) => (
                            <>
                              <DropDownSubMenu
                                key={index}
                                onMouseOver={() => setDisplay2(index)}
                                onMouseOut={() => setDisplay2(0)}
                              >
                                {item.sub_item2}
                              </DropDownSubMenu>
                            </>
                          ))}
                        </DropDownSubContainer>
                      ) : null}
                    </>
                  ))}
                </DropDownContainer>
              ) : null}
            </Menu>
          ))}
        </MenuContainer>
      </MenuList>
    </Container>
  );
}
