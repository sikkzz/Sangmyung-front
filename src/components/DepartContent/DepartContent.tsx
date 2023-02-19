import React from "react";
import DepartIntroduce from "./DepartIntroduce";
import DepartWork from "./DepartWork";
import DepartPromiss from "./DepartPromiss";
import DepartChart from "./DepartChart";

import { useParams } from "react-router-dom";

export type Props = {
  state: string | undefined;
};

const DepartContent: React.FC<Props> = ({ state }) => {
  // const param = useParams()
  // console.log(param.param)
  // console.log(state)
  return (
    <>
      <DepartIntroduce state={state} />
      <DepartWork state={state} />
      <DepartChart state={state} />
      <DepartPromiss state={state} />
    </>
  );
};

export default DepartContent;
