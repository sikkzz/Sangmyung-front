import { CenterData } from "../../constants/data/MinuteData";

import { Tr, Td, TdTitle, TdLink } from "./MinuteElements";

const CenterMinute = () => {
  return (
    <>
      {CenterData.map((item, index) => (
        <Tr key={index}>
          <Td>{item.id}</Td>
          <Td>
            <TdTitle>
              <TdLink href={item.link}>{item.title}</TdLink>
            </TdTitle>
          </Td>
          <Td>{item.date}</Td>
          <Td>{item.view}</Td>
        </Tr>
      ))}
    </>
  );
};

export default CenterMinute;
