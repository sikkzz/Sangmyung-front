import { TutionData } from "../../constants/data/MinuteData";

import { Tr, Td, TdTitle, TdLink } from "./MinuteElements";

const TutionMinute = () => {
  return (
    <>
      {TutionData.map((item, index) => (
        <Tr key={index}>
          <Td>{item.id}</Td>
          <Td>
            <TdTitle>
              <TdLink href={item.link}>{item.title}</TdLink>
            </TdTitle>
          </Td>
          <Td>{item.owner}</Td>
          <Td>{item.date}</Td>
        </Tr>
      ))}
    </>
  );
};

export default TutionMinute;
