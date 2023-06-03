import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;

const Box = styled.div``;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-top: 50px;
  ${media.tabletLarge`font-size: 28px;margin-top: 20px;`};
  ${media.tablet`font-size: 26px;margin-top: 20px;`};
  ${media.mobile`font-size: 24px;margin-top: 20px;`};
`;

const BoardBox = styled.div`
  margin-top: 30px;
`;

const Board = styled.div`
  border-top: 2px solid #2b2b2b;
`;

const BoardCol =  styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  margin-top: 30px;
`;

const BoardItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
  padding-left: 30px;
`;

const BoardLink = styled.a`
  padding-bottom: 25px;
`;

const BoardImg = styled.img`
  height: 300px;
`;

export {
  Layout,
  Col,
  Box,
  Title,
  BoardBox,
  Board,
  BoardCol,
  BoardItem,
  BoardLink,
  BoardImg,
};
