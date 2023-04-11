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
} from "./MinuteElements";

import {
  TabBox,
  TabInnerBox,
  TabList,
  TabItem,
  TabItemActive,
} from "../Pledge/PledgeDetailElements";

import Icons from "../../constants/icon";

import { MinuteTabData } from "../../constants/data/MinuteData";

import { useNavigate } from "react-router-dom";

type Props = {
  state: string;
};

const Minute = ({ state }: Props) => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <Col>
        <Box>
          <TabBox>
            <TabInnerBox>
              <TabList>
                {MinuteTabData.map((item, index) => (
                  <>
                    {state === item.id ? (
                      <TabItemActive
                        onClick={() => {
                          navigate(item.link);
                        }}
                      >
                        {item.title}
                      </TabItemActive>
                    ) : (
                      <TabItem
                        onClick={() => {
                          navigate(item.link);
                        }}
                      >
                        {item.title}
                      </TabItem>
                    )}
                  </>
                ))}
              </TabList>
            </TabInnerBox>
          </TabBox>
          <Title>중앙운영위원회 회의록</Title>
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
                  <Th size="12%">작성일</Th>
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
                  <Td>2023-04-02</Td>
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

export default Minute;
