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
} from "./EducationNoticeElements";

import Icons from "../../constants/icon";

import { EducationData } from "../../constants/data/EducationData";

const EducationNotice = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <Title>선[先]견지명</Title>
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
          <BoardBox>
            <Board>
              <BoardCol>
                {EducationData.map((item, index) => (
                  <BoardItem key={index}>
                    <BoardLink href={item.link}>
                      <BoardImg src={item.img} alt={item.alt} />
                    </BoardLink>
                    <BoardTitle>{item.title}</BoardTitle>
                    <BoardInfo>
                      <BoardDate>{item.date}</BoardDate>
                      <BoardOwner>{item.owner}</BoardOwner>
                    </BoardInfo>
                  </BoardItem>
                ))}
              </BoardCol>
            </Board>
          </BoardBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default EducationNotice;
