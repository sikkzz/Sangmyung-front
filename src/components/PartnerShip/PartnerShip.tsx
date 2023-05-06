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
} from "./PartnerShipElements";

import Icons from "../../constants/icon";

import { useEffect, useState } from "react";

import { PartnerData } from "../../constants/data/PartnerData";

const PartnerShip = () => {
  const [isHover, setIsHover] = useState(false);

  const [a, setA] = useState([
    {
      id: 1,
      active: false,
    },
    {
      id: 2,
      active: false,
    },
    {
      id: 3,
      active: false,
    },
  ]);

  const test = (num: Number) => {

  }

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
                      onMouseOver={() => {
                        a[index].active = true;
                        console.log(a[index].active)
                      }}
                      onMouseOut={() => {
                        a[index].active = false;
                        console.log(a[index].active)
                      }}
                    >
                      <BoardImg src={item.img} alt={item.alt} />
                      {a[index].active === true ? <BoardOverLay /> : ""}
                      {/* <BoardOverLay /> */}
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
