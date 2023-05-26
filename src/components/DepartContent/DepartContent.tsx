import React from "react";
import DepartIntroduce from "./DepartIntroduce";
import DepartWork from "./DepartWork";
import DepartPromiss from "./DepartPromiss";
import DepartChart from "./DepartChart";

import { useLocation } from "react-router-dom";

export type Props = {
  state: string | undefined;
};

const DepartContent = () => {
  const location = useLocation();

  return (
    <>
      <DepartIntroduce state={location.pathname.split("/")[3]} />
      <DepartWork state={location.pathname.split("/")[3]} />
      <DepartChart />
      <DepartPromiss state={location.pathname.split("/")[3]} />
    </>
  );
};

export default DepartContent;
