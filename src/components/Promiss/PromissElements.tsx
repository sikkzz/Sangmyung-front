import styled, { keyframes } from "styled-components";

const Layout = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
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
  /* height: 1272px; */
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

const TitleBox = styled.div`
  /* visibility: hidden; */
`;

const TitleBoxAni = styled.div`
  position: relative;
  visibility: visible;
  z-index: 1;
  opacity: 0;
  transform: translate3d(0px, 50px, 0px);
  animation: 1.5s ease-in-out 0s 1 normal forwards running ${move};
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
  color: #3182f6;
  margin-bottom: 30px;
`;

const Sub = styled.h2`
  font-size: 50px;
  font-weight: 700;
  line-height: 1.4;
  color: #191f28;
`;

const ImageBox = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  z-index: 1;
  visibility: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const ImageBoxAni = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  visibility: visible;
  z-index: 1;
  opacity: 0;
  transform: translate3d(0px, 50px, 0px);
  animation: 1.5s ease-in-out 0s 1 normal forwards running ${move};
`;

export {
  Layout,
  Col,
  Box,
  InnerBox,
  TitleBox,
  TitleBoxAni,
  Title,
  Sub,
  ImageBox,
  Image,
  ImageBoxAni,
};
