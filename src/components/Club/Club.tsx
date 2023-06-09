import {
  Layout,
  Col,
  Box,
  Title,
  Table,
  ColGroup,
  TableCol,
  THead,
  Tr,
  Th,
  TBody,
  Td,
  TdImageBox,
  TdImage,
  TdTitle,
  TdKind,
  TdActive,
  TdLink,
  TdIconBox,
  MTableCol,
  MTd,
  MTdInfoBox,
  MTdInfo,
} from "./ClubElements";

import HTMLReactParser from "html-react-parser";

import Icons from "../../constants/icon";

import { ClubData } from "../../constants/data/ClubData";

const Club = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <Title>중앙동아리</Title>
          <Table>
            <ColGroup>
              <TableCol size="12%"></TableCol>
              <TableCol size="10%"></TableCol>
              <TableCol size="auto"></TableCol>
              <TableCol size="12%"></TableCol>
              <TableCol size="8%"></TableCol>
              <MTableCol />
            </ColGroup>
            <THead>
              <Tr>
                <Th size="12%">프로필</Th>
                <Th size="15%">동아리명</Th>
                <Th size="12%">종류</Th>
                <Th size="20%">주요활동</Th>
                <Th size="8%">홈페이지</Th>
              </Tr>
            </THead>
            <TBody>
              {ClubData.map((item, index) => (
                <Tr key={index}>
                  <Td>
                    <TdImageBox>
                      <TdImage src={item.img} alt={item.alt} />
                    </TdImageBox>
                  </Td>
                  <Td>
                    <TdTitle>{item.title}</TdTitle>
                  </Td>
                  <Td>
                    <TdKind>{item.kind}</TdKind>
                  </Td>
                  <Td>
                    <TdActive>{HTMLReactParser(item.content)}</TdActive>
                  </Td>
                  <Td>
                    {item.link ? (
                      <TdLink href={item?.link}>
                        <TdIconBox>
                          <Icons.AiFillHome size={20} color="#000" />
                        </TdIconBox>
                      </TdLink>
                    ) : (
                      ""
                    )}
                  </Td>
                  <MTd>
                    <MTdInfoBox>
                      <MTdInfo>{item.title}</MTdInfo>

                      <MTdInfo>{item.kind}</MTdInfo>
                      {item.link ? (
                        <TdLink href={item?.link}>
                          <TdIconBox>
                            <Icons.AiFillHome size={20} color="#000" />
                          </TdIconBox>
                        </TdLink>
                      ) : (
                        ""
                      )}
                    </MTdInfoBox>
                  </MTd>
                </Tr>
              ))}
            </TBody>
          </Table>
        </Box>
      </Col>
    </Layout>
  );
};

export default Club;
