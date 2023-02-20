import {
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Text,
} from "./BioElements";
import { Box, InnerBox } from "../Tab/TabElements";

import Tab from "../Tab/Tab";

import { useParams, useLocation } from "react-router-dom";

import { Props } from "../DepartContent/DepartContent";
import { BioData } from "../../constants/data/BioData";

const Bio: React.FC<Props> = ({ state }) => {
  const param = useParams();
  // console.log(param.param)

  const location = useLocation();
  // console.log(location.pathname.split("/")[1]);

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
      <Box>
        <InnerBox>
          <Tab state={location.pathname.split("/")[1]} />
        </InnerBox>
      </Box>
    </>
  );
};

export default Bio;
