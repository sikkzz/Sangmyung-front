import styled, { keyframes } from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  ${media.mobile`display: none;`};
  ${media.tablet`display: none;`};
`;

const Col = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 250px 0 165px 0;
`;

const InnerBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const move = keyframes`
0% {
    opacity: 0;
    transform: translate3d(0px, 50px, 0px);
}

100% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
}
`;

const TitleBoxAni = styled.div`
  position: relative;
  visibility: visible;
  z-index: 1;
  opacity: 0;
  transform: translate3d(0px, 50px, 0px);
  animation: 1.5s ease-in-out 0s 1 normal forwards running ${move};
  max-width: 650px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
  color: #3182f6;
  margin-bottom: 30px;
`;

const Sub = styled.h2`
  font-size: 36px;
  font-family: "pre bold";
  font-weight: 700;
  line-height: 1.4;
  color: #191f28;
`;

const ImageBox = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  visibility: visible;
  z-index: 1;
  opacity: 0;
  transform: translate3d(0px, 50px, 0px);
  animation: 1.5s ease-in-out 0s 1 normal forwards running ${move};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  border-radius: 50%;
`;

const Text = styled.div`
  font-size: 100px;
  color: #fff;
`;

export { Layout, Col, Box, InnerBox, TitleBoxAni, Title, Sub, ImageBox, Text };
