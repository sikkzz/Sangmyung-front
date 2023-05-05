import styled from "styled-components";

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
  flex-wrap: wrap;
  width: 100%;
  /* justify-content: space-between; */
  /* margin: 0 45px 0 0; */
  position: relative;
  /* padding: 30px 0; */
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
  BoardTitle,
  BoardInfo,
  BoardDate,
  BoardOwner,
};
