import {
  ProfileBox,
  ProfileInnerBox,
  ProfileCol,
  ProfileInnerCol,
  ProfileImageBox,
  Image,
  ProfileTextBox,
  Group,
  Position,
  Name,
  Major,
} from "./OrganiElements";

import { PlanningData } from "../../constants/data/OrganiData";

const Planning = () => {
  return (
    <ProfileBox marginTop="50px">
      {PlanningData.map((item, index) => (
        <ProfileInnerBox key={index}>
          <ProfileImageBox
            width="160px"
            height="160px"
            style={{ margin: "0 250px" }}
          >
            <Image src={item.img} alt={item.alt} width="110px" height="140px" />
          </ProfileImageBox>
          <ProfileTextBox>
            <Group fontSize="24px">{item.group}</Group>
            <Position fontSize="30px">{item.position}</Position>
            <Name>{item.name}</Name>
            <Major fontSize="24px">{item.major}</Major>
          </ProfileTextBox>

          <ProfileImageBox
            width="160px"
            height="160px"
            style={{ margin: "0 250px" }}
          >
            <Image
              src={item.subImg}
              alt={item.subAlt}
              width="110px"
              height="140px"
            />
          </ProfileImageBox>
          <ProfileTextBox>
            <Group fontSize="24px">{item.group}</Group>
            <Position fontSize="30px">{item.subPosition}</Position>
            <Name>{item.subName}</Name>
            <Major fontSize="24px">{item.subMajor}</Major>
          </ProfileTextBox>
          <ProfileBox marginTop="30px">
            {PlanningData.map((item, index) => (
              <ProfileCol key={index}>
                {item.subItem.map((item, index) => (
                  <ProfileInnerCol key={index}>
                    {item.lastItem.map((item, index) => (
                      <ProfileInnerBox key={index}>
                        <ProfileImageBox width="100px" height="100px">
                          <Image
                            src={item.img}
                            alt={item.alt}
                            width="70px"
                            height="70px"
                          />
                        </ProfileImageBox>
                        <ProfileTextBox>
                          <Group fontSize="16px">기획국</Group>
                          <Position fontSize="22px">{item.name}</Position>
                          <Major fontSize="16px">{item.major}</Major>
                        </ProfileTextBox>
                      </ProfileInnerBox>
                    ))}
                  </ProfileInnerCol>
                ))}
              </ProfileCol>
            ))}
          </ProfileBox>

          {/* <ProfileBox marginTop="30px">
            {PlanningData.map((item, index) => (
              <ProfileInnerBox key={index}>
                <ProfileImageBox width="100px" height="100px">
                  <Image src={item.img} alt="Img" width="70px" height="70px" />
                </ProfileImageBox>
                <ProfileTextBox>
                  <Group fontSize="16px">기획국</Group>
                  <Position fontSize="22px">국원 박주현</Position>
                  <Major fontSize="16px">컴퓨터과학전공 17</Major>
                </ProfileTextBox>
              </ProfileInnerBox>
            ))}
          </ProfileBox> */}

          {/* <ProfileBox marginTop="30px">
                    {count2.map((index) => (
                      <ProfileInnerBox key={index}>
                        <ProfileImageBox width="100px" height="100px">
                          <Image
                            src={Img2}
                            alt="Img"
                            width="70px"
                            height="70px"
                          />
                        </ProfileImageBox>
                        <ProfileTextBox>
                          <Group fontSize="16px">기획국</Group>
                          <Position fontSize="22px">국원 박주현</Position>
                          <Major fontSize="16px">컴퓨터과학전공 17</Major>
                        </ProfileTextBox>
                      </ProfileInnerBox>
                    ))}
                  </ProfileBox> */}
        </ProfileInnerBox>
      ))}
    </ProfileBox>
  );
};

export default Planning;
