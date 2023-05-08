import {
  ProfileBox,
  ProfileInnerBox,
  ProfileCol,
  ProfileOuter,
  ProfileInnerCol,
  ProfileImageBox,
  Image,
  ProfileTextBox,
  Group,
  Position,
  Name,
  Sub,
  SubName,
  Major,
} from "./OrganiElements";

import { FinancialData } from "../../constants/data/OrganiData";

const Financial = () => {
  return (
    <ProfileBox marginTop="50px">
      {FinancialData.map((item, index) => (
        <ProfileInnerBox key={index}>
          {item.headItem.map((item, index) => (
            <ProfileOuter key={index}>
              <ProfileImageBox
                width="160px"
                height="160px"
                style={{ margin: "0 250px" }}
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  width="110px"
                  height="140px"
                />
              </ProfileImageBox>
              <ProfileTextBox>
                <Group fontSize="24px">재정사무국</Group>
                <Position fontSize="30px">{item.position}</Position>
                <Name>{item.name}</Name>
                <Major fontSize="24px">{item.major}</Major>
              </ProfileTextBox>
            </ProfileOuter>
          ))}

          <ProfileBox marginTop="30px">
            {FinancialData.map((item, index) => (
              <ProfileCol key={index}>
                {item.subItem.map((item, index) => (
                  <ProfileInnerCol key={index}>
                    {item.lastItem.map((item, index) => (
                      <ProfileInnerBox key={index}>
                        <ProfileImageBox width="120px" height="120px">
                          <Image
                            src={item.img}
                            alt={item.alt}
                            width="80px"
                            height="100px"
                          />
                        </ProfileImageBox>
                        <ProfileTextBox>
                          <Group fontSize="16px">재정사무국</Group>
                          <SubName>
                            <Sub>국원 </Sub>
                            {item.name}
                          </SubName>
                          <Major fontSize="16px">{item.major}</Major>
                        </ProfileTextBox>
                      </ProfileInnerBox>
                    ))}
                  </ProfileInnerCol>
                ))}
              </ProfileCol>
            ))}
          </ProfileBox>
        </ProfileInnerBox>
      ))}
    </ProfileBox>
  );
};

export default Financial;
