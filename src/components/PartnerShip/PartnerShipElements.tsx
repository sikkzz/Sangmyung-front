import styled from "styled-components";

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
`;

const SearchBox = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
`;

const ListBox = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 2px 0 0;
  min-width: 160px;
  text-align: left;
  vertical-align: middle;
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
`;

const Input = styled.input`
  display: inline-block;
  padding: 13px 20px;
  min-width: 305px;
  font-size: 16px;
  color: #999;
  border: none;
  outline: none;

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
  }
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
`;

const BoardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  /* 
  &:hover{
    background-color: rgba(0,0,0,0.5);
  } */
`;

const BoardLink = styled.a`
  position: relative;
`;

const BoardImg = styled.img`
  width: 100%;
  /* &:hover{
    opacity: 0;
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

const BoardTitle = styled.div`
  font-size: 20px;
`;

const BoardInfo = styled.div`
  margin-top: 20px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`;

const BoardDate = styled.div``;

const BoardOwner = styled.div``;

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
  BoardTitle,
  BoardInfo,
  BoardDate,
  BoardOwner,
};
