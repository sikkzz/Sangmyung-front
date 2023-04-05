import React from "react";

import { format } from "date-fns";

import { Layout, Start, Text } from "./HeaderElements";

type Props = {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
};

const Header: React.FC<Props> = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <Layout>
      <Start>
        <Text>
          {format(currentMonth, "yyyy")}년 {format(currentMonth, "M")}월
        </Text>
      </Start>
    </Layout>
  );
};

export default Header;
