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
  ${media.mobile`font-size: 24px;margin-top: 20px;`};
`;

const SearchBox = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  ${media.mobile`justify-content: flex-start;`}
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  ${media.mobile`width: calc(100% - 99px);`};
`;

const Input = styled.input`
  display: inline-block;
  padding: 13px 20px;
  min-width: 305px;
  font-size: 16px;
  color: #999;
  border: none;
  outline: none;
  ${media.mobile`width: calc(100% - 18px);min-width: auto;`}

  &::placeholder {
    color: #999;
  }
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 5px;
    left: 0;
    width: 1px;
    height: 28px;
    background: #ddd;
    ${media.mobile`top: 5px; height: 22px;`}
  }

  ${media.mobile`width: 30px;height: 30px;padding: 6px;`};
`;

const BoardBox = styled.div`
  margin-top: 30px;
`;

const Board = styled.div`
  border-top: 2px solid #2b2b2b;
`;

const BoardCol = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  margin-top: 30px;
  justify-content: center;
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
  SearchBox,
  Search,
  Input,
  IconBox,
  BoardBox,
  Board,
  BoardCol,
  BoardItem,
  BoardLink,
  BoardImg,
};
