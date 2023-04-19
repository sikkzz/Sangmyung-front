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

const NoticeBox = styled.div`
  margin-top: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-top: 1px solid #000;
  border-spacing: 0;
`;

const ColGroup = styled.colgroup``;

const ColStyle = styled.col<{ size: string }>`
  width: ${(props) => props.size};
`;

const THead = styled.thead``;

const Tr = styled.tr``;

const Th = styled.th<{ size: string }>`
  width: ${(props) => props.size};
  padding: 22px 10px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f6f9ef;
  font-size: 18px;
  line-height: 26px;
`;

const TBody = styled.tbody``;

const Td = styled.td`
  position: relative;
  padding: 23px 10px;
  border-bottom: 1px solid #e5e5e5;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
`;

const TdTitle = styled.div`
  text-align: left !important;
  padding-left: 20px;
`;

const TdLink = styled.a`
  display: inline-block;
  max-width: calc(100%-45px);
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  line-height: 21px;
  vertical-align: middle;
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
  NoticeBox,
  Table,
  ColGroup,
  ColStyle,
  THead,
  Tr,
  Th,
  TBody,
  Td,
  TdTitle,
  TdLink,
};
