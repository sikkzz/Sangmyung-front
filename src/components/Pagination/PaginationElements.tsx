import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 60px 0 0 0;
  ${media.mobile`gap: 4px;`}
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 100%;
  background: transparent;
  color: #000;
  font-size: 1rem;
  width: 30px;
  height: 30px;
  ${media.mobile`font-size: 12px;width: 20px;height: 20px;`}

  &:hover {
    cursor: pointer;
    color: #fff;
    background: #000;
  }

  &[disabled] {
    cursor: pointer;
  }

  &[aria-current] {
    background: #000;
    color: #fff;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export { Nav, Button };
