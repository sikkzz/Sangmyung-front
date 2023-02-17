import styled from "styled-components";

const Layout = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
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
`;

const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxRight = styled.div`
  margin-left: 100px;
  display: flex;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 200px;
  height: 100px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextBox = styled.div<{ fontSize: string }>`
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.fontSize};
  line-height: 36px;
`;

export { Layout, Col, Box, BoxLeft, BoxRight, ImageBox, Image, TextBox };
