import { AdministrativeData } from "../../constants/data/MinuteData";

import { Tr, Td, TdTitle, TdLink } from "./MinuteElements";

const AdministrativeMinute = () => {
  return (
    <>
      {AdministrativeData.map((item, index) => (
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

export default AdministrativeMinute;
