import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding: 0 20px;
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

const ListBox = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 2px 0 0;
  min-width: 160px;
  text-align: left;
  vertical-align: middle;
  ${media.mobile`min-width: 100px;`};
`;

const ListTitle = styled.div`
  padding: 13px 20px;
  border: 1px solid #dedede;
  font-size: 16px;
  color: #999;
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
  width: 100%;
  justify-content: space-between;
  position: relative;
  margin-top: 30px;
  ${media.mobile`justify-content: center;align-items: center;flex-direction: column;`}
`;

const BoardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  ${media.mobile`
    margin-top: 20px;

    &:first-of-type{
      margin-top: 0;
    }`
  }
`;

const BoardLink = styled.a`
  position: relative;
`;

const BoardImg = styled.img`
  width: 100%;
  /*   
  &:hover{
    opacity: 0.8;
    background-color: #000;
    transition: 0.5s;
  } */
`;

const BoardOverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export {
  Layout,
  Col,
  Box,
  Title,
  SearchBox,
  ListBox,
  ListTitle,
  Search,
  Input,
  IconBox,
  BoardBox,
  Board,
  BoardCol,
  BoardItem,
  BoardLink,
  BoardImg,
  BoardOverLay,
};
