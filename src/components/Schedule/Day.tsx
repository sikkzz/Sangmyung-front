import React from "react";

import { Layout, Col } from "./DayElements";

const Day = () => {
  const days = [];
  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

  for (let i = 0; i < 7; i++) {
    days.push(<Col key={i}>{date[i]}</Col>);
  }

  return <Layout>{days}</Layout>;
};

export default Day;
