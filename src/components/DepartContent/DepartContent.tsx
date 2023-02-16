import React from "react";
import DepartIntroduce from "./DepartIntroduce";
import DepartWork from "./DepartWork";
import DepartPromiss from "./DepartPromiss";
import DepartChart from "./DepartChart";

const DepartContent = () => {
  return (
    <>
      <DepartIntroduce />
      <DepartWork />
      <DepartChart />
      <DepartPromiss />
    </>
  );
};

export default DepartContent;
