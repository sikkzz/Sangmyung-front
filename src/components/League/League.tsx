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
  ScoreBox,
  TdScore,
  TdSpan,
  TdScore2,
  TdEnd,
  Detail,
  DetailBox,
} from "./LeagueElements";

import { addMonths, subMonths, format } from "date-fns";

import { useEffect, useState } from "react";

import Icons from "../../constants/icon";

import { LeagueData } from "../../constants/data/LeagueData";

type Props = {
  id: number;
  date: string;
  time: string;
  img1: string;
  alt1: string;
  title1: string;
  score1: string;
  img2: string;
  alt2: string;
  title2: string;
  score2: string;
  state: string;
  score3: string;
  score4: string;
};

const League = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [posts, setPosts] = useState([] as any);

  useEffect(() => {
    setPosts(
      LeagueData.filter((item: any) => {
        return item.month === Number(format(currentMonth, "M"));
      })
    );
  }, [currentMonth]);

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
                {posts.map(
                  ({
                    id,
                    date,
                    time,
                    img1,
                    alt1,
                    title1,
                    score3,
                    score1,
                    score2,
                    score4,
                    title2,
                    img2,
                    alt2,
                    state,
                  }: Props) => (
                    <Tr key={id}>
                      <Td>{date}</Td>
                      <Td>{time}</Td>
                      <Td>
                        <TdMatch>
                          <TdTeam>
                            <TdImageBox>
                              <TdImage src={img1} alt={alt1} />
                            </TdImageBox>
                            <TdTitle>{title1}</TdTitle>
                          </TdTeam>
                          {score3 ? (
                            <ScoreBox>
                              <TdScore>
                                {score1}
                                <TdSpan>:</TdSpan>
                                {score2}
                              </TdScore>
                              {score3 ? (
                                <TdScore2>
                                  {score3}
                                  <TdSpan>:</TdSpan>
                                  {score4}
                                </TdScore2>
                              ) : (
                                ""
                              )}
                            </ScoreBox>
                          ) : (
                            <TdScore>
                              {score1}
                              <TdSpan>:</TdSpan>
                              {score2}
                            </TdScore>
                          )}
                          <TdTeam>
                            <TdTitle2>{title2}</TdTitle2>
                            <TdImageBox>
                              <TdImage src={img2} alt={alt2} />
                            </TdImageBox>
                          </TdTeam>
                        </TdMatch>
                        <TdEnd>{state}</TdEnd>
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
                  )
                )}
              </TBody>
            </Table>
          </ResultBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default League;