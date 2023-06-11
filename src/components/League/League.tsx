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

import { LeagueData } from "../../constants/data/LeagueData";

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
                {LeagueData.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.date}</Td>
                    <Td>{item.time}</Td>
                    <Td>
                      <TdMatch>
                        <TdTeam>
                          <TdImageBox>
                            <TdImage src={item.img1} alt={item.alt1} />
                          </TdImageBox>
                          <TdTitle>{item.title1}</TdTitle>
                        </TdTeam>
                        <TdScore>
                          {item.score1}
                          <TdSpan>:</TdSpan>
                          {item.score2}
                        </TdScore>
                        <TdTeam>
                          <TdTitle2>{item.title2}</TdTitle2>
                          <TdImageBox>
                            <TdImage src={item.img2} alt={item.alt2} />
                          </TdImageBox>
                        </TdTeam>
                      </TdMatch>
                      <TdEnd>{item.state}</TdEnd>
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
                ))}
              </TBody>
            </Table>
          </ResultBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default League;
