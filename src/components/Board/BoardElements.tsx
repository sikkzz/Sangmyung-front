import styled from "styled-components";

const Layout = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OpenBox = styled.div`
  /* width: 600px;
  height: 600px; */
  display: flex;
  justify-content: space-between;
  margin: 100px 0;
`;

const TextBox = styled.div``;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-top: 30px;
`;

const Sub = styled.h3`
margin-top: 30px;
  font-size: 24px;
  font-weight: 600;
`;

const ImageBox = styled.div`
  width: 500px;
  height: 290px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export { Layout, Col, Box, OpenBox, TextBox, Title, Sub, ImageBox, Img };
