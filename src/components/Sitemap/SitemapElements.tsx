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

const ContentBox = styled.div`
  margin-top: 60px;
  ${media.tablet`margin-top: 20px;`}
  ${media.mobile`margin-top: 0;`}
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${media.tablet`display: block;`}
  ${media.mobile`display: block;`}
`;

const ListItem = styled.li`
  display: inline-block;
  width: calc(100% / 3 - 24px);
  padding: 0 10px 60px 10px;
  vertical-align: top;
  ${media.tablet`width: calc(50% - 2px);`}
  ${media.mobile`width: 100%;`}
`;

const ListItemLink = styled.a`
  display: block;
  padding: 15px 0 15px 15px;
  background-color: #f4f4f4;
  border-top: 1px solid #fff;
  font-size: 18px;
  line-height: 23px;
  color: #222;
`;

const SubList = styled.ul``;

const SubListItem = styled.li``;

const SubListItemLink = styled.a`
  display: block;
  padding: 13px 0 13px 13px;
  border-bottom: 1px solid #ddd;
  color: #222;
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
`;

const SubList2 = styled.ul`
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
`;

const SubListItem2 = styled.li`
  padding: 0 0 12px 20px;

  &:last-of-type {
    padding-bottom: 0;
  }
`;

const SubListItemLink2 = styled.a`
  display: block;
  font-size: 15px;
  line-height: 21px;
  color: #777;
  font-weight: 400;

  &:hover{
    color: #000;
  }
`;

export {
  Layout,
  Col,
  Box,
  ContentBox,
  List,
  ListItem,
  ListItemLink,
  SubList,
  SubListItem,
  SubListItemLink,
  SubList2,
  SubListItem2,
  SubListItemLink2,
};
