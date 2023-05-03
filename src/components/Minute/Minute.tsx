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

import { MinuteData } from "../../constants/data/MinuteData";

import { useNavigate, useLocation } from "react-router-dom";

import CenterMinute from "./CenterMinute";
import RepresentativeMinute from "./RepresentativeMinute";
import TutionMinute from "./TutionMinute";
import AdministrativeMinute from "./AdministrativeMinute";

type Props = {
  state: string;
};

const Minute = ({ state }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout>
      <Col>
        <Box>
          <TabBox>
            <TabInnerBox>
              <TabList>
                {MinuteData.map((item, index) => (
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
          {MinuteData.map((item, index) => (
            <Title key={index}>
              {location.pathname.split("/")[2] === item.id ? item.title : ""}
            </Title>
          ))}
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
              </ColGroup>
              <THead>
                <Tr>
                  <Th size="8%">번호</Th>
                  <Th size="auto">제목</Th>
                  <Th size="12%">작성자</Th>
                  <Th size="12%">작성일</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>
                    <Icons.HiSpeakerphone size={20} color="#000" />
                  </Td>
                  <Td>
                    <TdTitle>
                      {MinuteData.map((item, index) => (
                        <TdLink>
                          {location.pathname.split("/")[2] === item.id
                            ? item.title
                            : ""}
                        </TdLink>
                      ))}{" "}
                      게시판입니다.
                    </TdTitle>
                  </Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
                {
                  {
                    center: <CenterMinute />,
                    representative: <RepresentativeMinute />,
                    tution: <TutionMinute />,
                    administrative: <AdministrativeMinute />,
                  }[location.pathname.split("/")[2]]
                }
              </TBody>
            </Table>
          </NoticeBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Minute;
