import {
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Text,
  MTabBox,
  MTabList,
  MTabItem,
} from "./BioElements";

import { Layout, Col } from "../Tab/TabElements";

import Tab from "../Tab/Tab";

import { useLocation, useNavigate } from "react-router-dom";
import { Props } from "../DepartContent/DepartContent";
import { BioData } from "../../constants/data/BioData";
import { MTabData } from "../../constants/data/TabData";

const Bio = ({ state }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {BioData.map(
        (item, index) =>
          state === item.id && (
            <ImageContainer key={index}>
              <Image src={item.img} alt="Bio" />
              <TextContainer>
                <Title>{item.title}</Title>
                <Text>{item.sub && item.sub}</Text>
                <Text>{item.content}</Text>
              </TextContainer>
            </ImageContainer>
          )
      )}
      <Layout>
        <Col>
          <Tab state={location.pathname.split("/")[2]} />
        </Col>
      </Layout>

      <MTabBox>
        <MTabList>
          {MTabData.map((item, index) => (
            <>
              {item.id === state
                ? item.sub_item.map((item, index) => (
                    <MTabItem
                      onClick={() => {
                        navigate(item.link);
                      }}
                      key={index}
                      style={{
                        color:
                          location.pathname.split("/")[2] === item.id ||
                          location.pathname.split("/")[3] === item.id
                            ? "rgb(32,71,137)"
                            : "rgb(132,134,134)",
                        borderBottom:
                          location.pathname.split("/")[2] === item.id ||
                          location.pathname.split("/")[3] === item.id
                            ? "1px solid rgb(32,71,137)"
                            : "none",
                      }}
                    >
                      {item.title}
                    </MTabItem>
                  ))
                : ""}
            </>
          ))}
        </MTabList>
      </MTabBox>
    </>
  );
};

export default Bio;
