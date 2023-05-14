import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Box = styled.div`
  top: 80px;
  z-index: 99;
  right: 0;
  left: 0;
  position: sticky;
  ${media.labtop`display: none;`};
  ${media.tabletLarge`display: none;`};
  ${media.tablet`display: none;`};
  ${media.mobile`display: none;`};
`;

const InnerBox = styled.div``;

const Container = styled.div`
  background-color: rgb(255 255 255);
  z-index: 10;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 64px;
  box-shadow: 0px 4px 4px rgb(179 182 183 / 25%);
`;

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 64px;
`;

const Item = styled.div`
  padding: 20px 0;
  color: rgb(132, 134, 134);
  font-size: 15px;
  line-height: 24px;
  cursor: pointer;

  :not(:first-of-type) {
    margin-left: 24px;
  }
`;

export { Box, InnerBox, Container, InnerContainer, Wrapper, Item };
