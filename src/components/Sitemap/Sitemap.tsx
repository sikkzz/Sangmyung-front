import {
  Layout,
  Col,
  Box,
  ContentBox,
  List,
  ListItem,
  ListItemLink,
  SubList,
  SubListItem,
  SubListItemLink,
  SubList2,
  SubListItem2,
  SubListItemLink2,
} from "./SitemapElements";

import { SitemapData } from "../../constants/data/SitemapData";

const Sitemap = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <ContentBox>
            <List>
              {SitemapData.map((item, index) => (
                <ListItem key={index}>
                  <ListItemLink href={item.link}>{item.item}</ListItemLink>
                  {item.subItem ? (
                    <SubList>
                      {item.subItem.map((item, index) => (
                        <SubListItem key={index}>
                          <SubListItemLink href={item.link}>
                            {item.item}
                          </SubListItemLink>
                          {item.subItem2 ? (
                            <SubList2>
                              {item.subItem2.map((item, index) => (
                                <SubListItem2 key={index}>
                                  <SubListItemLink2 href={item.link}>
                                    {item.item}
                                  </SubListItemLink2>
                                </SubListItem2>
                              ))}
                            </SubList2>
                          ) : (
                            ""
                          )}
                        </SubListItem>
                      ))}
                    </SubList>
                  ) : (
                    ""
                  )}
                </ListItem>
              ))}
            </List>
          </ContentBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Sitemap;
