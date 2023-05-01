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
  BoardOverLay,
  BoardTitle,
  BoardInfo,
  BoardDate,
  BoardOwner,
} from "./PartnerShipElements";

import Icons from "../../constants/icon";

import { useState } from "react";

import { PartnerData } from "../../constants/data/PartnerData";

const PartnerShip = () => {
  const [isHover, setIsHover] = useState(0);

  console.log(isHover)

  return (
    <Layout>
      <Col>
        <Box>
          <Title>전체 제휴</Title>
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
                {PartnerData.map((item, index) => (
                  <BoardItem key={index}>
                    <BoardLink
                      href={item.link}
                      onMouseOver={() => setIsHover(1)}
                      onMouseOut={() => setIsHover(0)}
                    >
                      <BoardImg src={item.img} alt={item.alt} />
                      <BoardOverLay />
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
