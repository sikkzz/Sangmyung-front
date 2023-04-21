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
  BoardList,
  BoardListItem,
  BoardListLink,
  BoardListImg,
} from "./EducationNoticeElements";

import Icons from "../../constants/icon";

import Img from "../../assets/education/notice/1.jpeg";
import Img2 from "../../assets/education/notice/2.jpeg";
import Img3 from "../../assets/education/notice/3.jpeg";

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
            <BoardList>
              <BoardListItem>
                <BoardListLink href="#!">
                  <BoardListImg src={Img} alt="Img1" />
                </BoardListLink>
                <BoardListLink href="#!">
                  <BoardListImg src={Img} alt="Img1" />
                </BoardListLink>
                <BoardListLink href="#!">
                  <BoardListImg src={Img} alt="Img1" />
                </BoardListLink>
              </BoardListItem>
            </BoardList>
          </BoardBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default EducationNotice;
