import {
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
} from "./RuleElements";

import Icons from "../../constants/icon";

const Rule = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <Title>회칙</Title>
          <SearchBox>
            <ListBox>
              <ListTitle>전체</ListTitle>
            </ListBox>
            <Search>
              <Input type="text" placeholder="검색어를 입력해 주세요" />
              <IconBox>
                <Icons.ImSearch size={24} color="#000" />
              </IconBox>
            </Search>
          </SearchBox>
          <NoticeBox>
            <Table>
              <ColGroup>
                <ColStyle size="8%" />
                <ColStyle size="auto" />
                <ColStyle size="12%" />
                <ColStyle size="8%" />
              </ColGroup>
              <THead>
                <Tr>
                  <Th size="8%">번호</Th>
                  <Th size="auto">제목</Th>
                  <Th size="12%">작성자</Th>
                  <Th size="8%">조회</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>1</Td>
                  <Td>
                    <TdTitle>
                      <TdLink>상명대학교 총학생회 공지사항입니다.</TdLink>
                    </TdTitle>
                  </Td>
                  <Td>사무국</Td>
                  <Td>3</Td>
                </Tr>
              </TBody>
            </Table>
          </NoticeBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Rule;
