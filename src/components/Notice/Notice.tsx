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
} from "./NoticeElements";

import Icons from "../../constants/icon";

import { NoticeData } from "../../constants/data/NoticeData";

const Notice = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <Title>공지사항</Title>
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
                <ColStyle size="12%" />
                <ColStyle size="8%" />
              </ColGroup>
              <THead>
                <Tr>
                  <Th size="8%">번호</Th>
                  <Th size="auto">제목</Th>
                  <Th size="12%">작성자</Th>
                  <Th size="12%">작성일</Th>
                  <Th size="8%">조회</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>
                    <Icons.HiSpeakerphone size={20} color="#000" />
                  </Td>
                  <Td>
                    <TdTitle>
                      <TdLink>
                        상명대학교 총학생회 공지사항 게시판입니다.
                      </TdLink>
                    </TdTitle>
                  </Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
                {NoticeData.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.id}</Td>
                    <Td>
                      <TdTitle>
                        <TdLink href={item.link}>{item.title}</TdLink>
                      </TdTitle>
                    </Td>
                    <Td>{item.owner}</Td>
                    <Td>{item.date}</Td>
                    <Td>{item.view}</Td>
                  </Tr>
                ))}
              </TBody>
            </Table>
          </NoticeBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Notice;
