import {
  Layout,
  Col,
  Box,
  Title,
  SearchBox,
  Search,
  Input,
  IconBox,
  BoardBox,
  Board,
  BoardCol,
  BoardItem,
  BoardLink,
  BoardImg,
} from "./PartnerShipElements";

import Icons from "../../constants/icon";

import { PartnerData } from "../../constants/data/PartnerData";

const PartnerShip = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <Title>전체 제휴</Title>
          <SearchBox>
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
                {PartnerData.map((item, index) => (
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
  );
};

export default PartnerShip;
