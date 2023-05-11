import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  ${media.mobile`padding-bottom: 30px;`}
`;

const Col = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  display: flex;
  padding-bottom: 90px;
  border-bottom: 1px solid rgb(217, 217, 217);
  ${media.mobile`flex-direction: column;padding-bottom: 30px;`};
`;

const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  ${media.mobile`align-items: center;`};
`;

const BoxRight = styled.div`
  margin-left: 100px;
  display: flex;
  align-items: center;
  ${media.mobile`margin-left: 0;padding: 10px;`};
`;

const ImageBox = styled.div`
  width: 200px;
  height: 210px;
  margin: 0 auto 10px auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextBox = styled.div<{
  fontSize: string;
  lineHeight: string;
  textAlign: string;
}>`
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  line-height: 36px;
  ${media.mobile`font-size: 14px;line-height: 24px;`}
`;

export {
  Layout,
  Col,
  Box,
  BoxLeft,
  BoxRight,
  ImageBox,
  Image,
  TextBox,
  Content,
};
