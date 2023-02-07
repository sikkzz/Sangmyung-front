import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: var(--main-blue);
  background: transparent;
  padding: 0 100px;
  position: fixed;
  z-index: 100;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 210px;
`;

const Logo = styled.div`
  color: #fff;
  color: #000;
  font-size: 24px;
`;

const MenuContainer = styled.div`
  display: flex;
`;

const MenuList = styled.ul`

`

const Menu = styled.li`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 20px;
  padding: 0 45px;
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
`;

const DropDownContainer = styled.ul`
  display: block;
  /* visibility: hidden; */
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: #000;
  color: #fff;
  position: relative;
`;

const DropDownMenu = styled.li`
  padding: 20px;
  cursor: pointer;
  position: relative;

`;

const DropDownSubContainer = styled.ul`
  display: block;
  flex-direction: column;
  background: #000;
  color: #fff;
  /* position: absolute;
  left: 159px;
  top: 0; */
  left: 100%;
  top: 0;
  position: relative;
  /* width: inherit; */
`;

const DropDownSubMenu = styled.li`
  padding: 20px;
`;

const HeaderBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 210px;
`;

const HeaderBtn = styled.div`
  color: #fff;
  color: #000;
  font-size: 20px;
  padding-left: 20px;
`;

export {
  Container,
  LogoContainer,
  Logo,
  MenuList,
  MenuContainer,
  Menu,
  MenuItem,
  MenuBox,
  DropDownContainer,
  DropDownMenu,
  DropDownSubContainer,
  DropDownSubMenu
};
