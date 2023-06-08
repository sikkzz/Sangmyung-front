import {
  Layout,
  Col,
  Box,
  LeftBox,
  ProfileBox,
  ImgBox,
  Img,
  Name,
  Sub,
  IconList,
  IconListItem,
  Icon,
  Text,
  RightBox,
} from "./ProducerElements";

import Image from "../../assets/profile/fihead.jpeg";
import Image2 from "../../assets/profile2.png";

import Icons from "../../constants/icon";

const Producer = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <LeftBox>
            <ProfileBox>
              <ImgBox>
                <Img src={Image2} alt="image" />
              </ImgBox>
              <Name>KimJunSik</Name>
              <Sub>FE Developer</Sub>
              <IconList>
                <IconListItem>
                  <Icon>
                    <Icons.FaSchool size={20} color="#666" />
                  </Icon>
                  <Text>SMU Computer Science</Text>
                </IconListItem>
                <IconListItem>
                  <Icon>
                    <Icons.HiOutlineOfficeBuilding size={20} color="#666" />
                  </Icon>
                  <Text>총학생회 선[先] 재정사무국장</Text>
                </IconListItem>
                <IconListItem>
                  <Icon>
                    <Icons.AiOutlineMail size={20} color="#666" />
                  </Icon>
                  <Text>sling0623@gmail.com</Text>
                </IconListItem>
                <IconListItem>
                  <Icon>
                    <Icons.AiFillGithub size={20} color="#666" />
                  </Icon>
                  <Text>sikkzz</Text>
                </IconListItem>
              </IconList>
            </ProfileBox>
          </LeftBox>
          <RightBox></RightBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Producer;
