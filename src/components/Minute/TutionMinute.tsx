import { TutionData } from "../../constants/data/MinuteData"

import { Tr, Td, TdTitle, TdLink } from "./MinuteElements";

const TutionMinute = () => {
  return (
    <>
      {TutionData.map((item, index) => (
        <Tr key={index}>
          <Td>{item.id}</Td>
          <Td>
            <TdTitle>
              <TdLink>{item.title}</TdLink>
            </TdTitle>
          </Td>
          <Td>{item.date}</Td>
          <Td>{item.view}</Td>
        </Tr>
      ))}
    </>
  )
}

export default TutionMinute