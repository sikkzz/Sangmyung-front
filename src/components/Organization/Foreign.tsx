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

import { ForeignData } from "../../constants/data/OrganiData";

const Foreign = () => {
  return (
    <ProfileBox marginTop="50px">
      {ForeignData.map((item, index) => (
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
                  width={item?.size === "squ" ? "120px" : "108px"}
                  height={item?.size === "squ" ? "120px" : "144px"}
                  radius={item?.size === "squ" ? "50%" : "50px"}
                />
              </ProfileImageBox>
              <ProfileTextBox>
                <Group fontSize="24px">대외협력국</Group>
                <Position fontSize="30px">{item.position}</Position>
                <Name>{item.name}</Name>
                <Major fontSize="24px">{item.major}</Major>
              </ProfileTextBox>
            </ProfileOuter>
          ))}

          <ProfileBox marginTop="30px">
            {ForeignData.map((item, index) => (
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
                            radius={item?.size === "squ" ? "50%" : "50px"}
                          />
                        </ProfileImageBox>
                        <ProfileTextBox>
                          <Group fontSize="16px">대외협력국</Group>
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

export default Foreign;
