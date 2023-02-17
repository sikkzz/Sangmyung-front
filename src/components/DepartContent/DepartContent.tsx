import React from "react";
import DepartIntroduce from "./DepartIntroduce";
import DepartWork from "./DepartWork";
import DepartPromiss from "./DepartPromiss";
import DepartChart from "./DepartChart";

import { useParams } from "react-router-dom";

type Props = {
  state: string | undefined
};

const DepartContent: React.FC<Props> = ({state}) => {
  const param = useParams()
  console.log(param.param)
  return (
    <>
      <DepartIntroduce state={param.param} />
      <DepartWork />
      <DepartChart />
      <DepartPromiss />
    </>
  );
};

export default DepartContent;
