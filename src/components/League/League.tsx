import {
  Layout,
  Col,
  Box,
  DateBox,
  Month,
  IconBox,
  ResultBox,
  Table,
  ColGroup,
  TableCol,
  THead,
  Tr,
  Th,
  TBody,
  Td,
  TdMatch,
  TdTeam,
  TdImageBox,
  TdImage,
  TdTitle,
  TdTitle2,
  TdScore,
  TdSpan,
  TdEnd,
  Detail,
  DetailBox,
} from "./LeagueElements";

import { addMonths, subMonths, format } from "date-fns";

import { useState } from "react";

import Icons from "../../constants/icon";

import Image1 from "../../assets/league/logo/genome2.jpg";
import Image2 from "../../assets/league/logo/iemu11.jpg";

const League = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <Layout>
      <Col>
        <Box>
          <DateBox>
            <Month>
              {format(currentMonth, "yyyy")}년 {format(currentMonth, "MM")}월
            </Month>
            <IconBox onClick={prevMonth}>
              <Icons.BiLeftArrow size={16} color="#808080" />
            </IconBox>
            <IconBox onClick={nextMonth}>
              <Icons.BiRightArrow size={16} color="#808080" />
            </IconBox>
          </DateBox>
          <ResultBox>
            <Table>
              <ColGroup>
                <TableCol size="12%" />
                <TableCol size="12%" />
                <TableCol size="auto" />
                <TableCol size="12%" />
              </ColGroup>
              <THead>
                <Tr>
                  <Th size="12%">날짜</Th>
                  <Th size="12%">시간</Th>
                  <Th size="auto">매치업</Th>
                  <Th size="12%"></Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>2023.05.05</Td>
                  <Td>14:00</Td>
                  <Td>
                    <TdMatch>
                      <TdTeam>
                        <TdImageBox>
                          <TdImage src={Image1} alt="image1" />
                        </TdImageBox>
                        <TdTitle>게놈</TdTitle>
                      </TdTeam>
                      <TdScore>
                        0<TdSpan>:</TdSpan>3
                      </TdScore>
                      <TdTeam>
                        <TdTitle2>HIEMU11</TdTitle2>
                        <TdImageBox>
                          <TdImage src={Image2} alt="image1" />
                        </TdImageBox>
                      </TdTeam>
                    </TdMatch>
                    <TdEnd>경기종료</TdEnd>
                  </Td>
                  <Td>
                    <Detail>
                      세부정보
                      <DetailBox>
                        <Icons.GiSoccerBall size={16} color="#fff" />
                      </DetailBox>
                    </Detail>
                  </Td>
                </Tr>
              </TBody>
            </Table>
          </ResultBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default League;
