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
} from "./EducationForesightElements";

import Icons from "../../constants/icon";

import { EducationNoticeData } from "../../constants/data/EducationData";

const EducationNotice = () => {
  return <Layout>
  <Col>
    <Box>
      <Title>학사 안내</Title>
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
            {EducationNoticeData.map((item, index) => (
              <BoardItem key={index}>
                <BoardLink href={item.link}>
                  <BoardImg src={item.img} alt={item.alt} />
                </BoardLink>
              </BoardItem>
            ))}
          </BoardCol>
        </Board>
      </BoardBox>
    </Box>
  </Col>
</Layout>
};

export default EducationNotice;
