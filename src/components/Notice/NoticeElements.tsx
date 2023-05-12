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
  ${media.tabletLarge`min-width: 120px;`};
  ${media.tablet`min-width: 120px;`};
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
  ${media.tabletLarge`width: 0;display: none;`}
  ${media.tablet`width: 0;display: none;`}
  ${media.mobile`width: 0;display: none;`}
`;

const MColStyle = styled.col`
  width: 0;
  display: none;
  ${media.tabletLarge`width: 100%;display: table-column;`};
  ${media.tablet`width: 100%;display: table-column;`};
  ${media.mobile`width: 100%;display: table-column;`};
`;

const THead = styled.thead`
  ${media.tabletLarge`display: none;`};
  ${media.tablet`display: none;`};
  ${media.mobile`display: none;`};
`;

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
  ${media.tabletLarge`display: none;`}
  ${media.tablet`display: none;`}
  ${media.mobile`display: none;`}
`;

const MTd = styled.td`
  display: none;
  padding: 13px 0;
  font-size: 15px;
  font-weight: 400;
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
  ${media.tabletLarge`display: table-cell;`}
  ${media.tablet`display: table-cell;`}
  ${media.mobile`display: table-cell;`}
`;

const TdTitle = styled.div`
  text-align: left !important;
  padding-left: 20px;

  ${media.mobile`padding-left: 5px;`}
`;

const TdLink = styled.a`
  display: inline-block;
  max-width: calc(100% - 45px);
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  line-height: 21px;
  vertical-align: middle;
  ${media.tabletLarge`max-width: 100%;width: auto;white-space: normal;`}
  ${media.tablet`max-width: 100%;width: auto;white-space: normal;`}
  ${media.mobile`max-width: 100%;width: auto;white-space: normal;`}
`;

const MTdInfoBox = styled.div`
  display: none;
  margin-top: 5px;
  ${media.tabletLarge`display: block;`}
  ${media.tablet`display: block;`}
  ${media.mobile`display: block;`}
`;

const MTdInfo = styled.span`
  display: none;
  position: relative;
  margin: 0 7px 0 0;
  padding: 0 8px 0 0;
  font-size: 14px;
  line-height: 20px;
  color: #777;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 5px;
    right: 0;
    width: 1px;
    height: 10px;
    background-color: #8c8c8c;
  }

  &:last-child::after {
    content: none;
  }

  ${media.tabletLarge`display: inline-block;`}
  ${media.tablet`display: inline-block;`}
  ${media.mobile`display: inline-block;`}
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
  MColStyle,
  THead,
  Tr,
  Th,
  TBody,
  Td,
  MTd,
  TdTitle,
  TdLink,
  MTdInfoBox,
  MTdInfo,
};
